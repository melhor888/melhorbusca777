import { dishes } from "@/data/dishes";

const NOTIFICATION_KEY = "nihon-notif-enabled";
const LAST_NOTIF_KEY = "nihon-last-notif";
const NOTIF_COUNT_KEY = "nihon-notif-count";
const NOTIF_DATE_KEY = "nihon-notif-date";
const MAX_DAILY = 5;
const INTERVAL_MS = 3 * 60 * 60 * 1000; // ~3 hours

function getRandomDish() {
  const idx = Math.floor(Math.random() * dishes.length);
  return dishes[idx];
}

function getTodayStr() {
  return new Date().toISOString().slice(0, 10);
}

function getDailyCount(): number {
  const date = localStorage.getItem(NOTIF_DATE_KEY);
  if (date !== getTodayStr()) return 0;
  return parseInt(localStorage.getItem(NOTIF_COUNT_KEY) || "0", 10);
}

function incrementDailyCount() {
  const today = getTodayStr();
  if (localStorage.getItem(NOTIF_DATE_KEY) !== today) {
    localStorage.setItem(NOTIF_DATE_KEY, today);
    localStorage.setItem(NOTIF_COUNT_KEY, "1");
  } else {
    const count = getDailyCount();
    localStorage.setItem(NOTIF_COUNT_KEY, (count + 1).toString());
  }
}

export function isNotificationsEnabled(): boolean {
  return localStorage.getItem(NOTIFICATION_KEY) === "true";
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (!("Notification" in window)) return false;
  if (Notification.permission === "granted") {
    localStorage.setItem(NOTIFICATION_KEY, "true");
    return true;
  }
  const result = await Notification.requestPermission();
  if (result === "granted") {
    localStorage.setItem(NOTIFICATION_KEY, "true");
    return true;
  }
  return false;
}

export function disableNotifications() {
  localStorage.setItem(NOTIFICATION_KEY, "false");
}

function shouldSendNotification(): boolean {
  if (getDailyCount() >= MAX_DAILY) return false;
  const last = localStorage.getItem(LAST_NOTIF_KEY);
  if (!last) return true;
  return Date.now() - parseInt(last, 10) > INTERVAL_MS;
}

export function sendWelcomeNotification() {
  if (Notification.permission !== "granted") return;

  try {
    new Notification("🎉 Bem-vindo ao Nihon Food!", {
      body: "Você receberá 5 sugestões diárias de receitas japonesas. Itadakimasu! 🍣",
      icon: "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      tag: "welcome",
    } as NotificationOptions);
  } catch {
    // Silent fail
  }

  setTimeout(() => {
    sendDishNotification();
  }, 3000);
}

export function sendDishNotification() {
  if (!isNotificationsEnabled()) return;
  if (Notification.permission !== "granted") return;
  if (!shouldSendNotification()) return;

  const dish = getRandomDish();
  localStorage.setItem(LAST_NOTIF_KEY, Date.now().toString());
  incrementDailyCount();

  const emojis = ["🍣", "🍜", "🍱", "🍙", "🍤", "🍡", "🍥", "🥟"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  try {
    new Notification(`${emoji} Receita: ${dish.name}`, {
      body: `${dish.category} · ${dish.difficulty} · ${dish.time}\n${dish.ingredients.slice(0, 3).join(", ")}`,
      icon: "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      tag: `recipe-${Date.now()}`,
    } as NotificationOptions);
  } catch {
    // Silent fail
  }
}

export function startNotificationScheduler() {
  if (!isNotificationsEnabled()) return;
  sendDishNotification();
  // Check every 30 min, respects daily limit of 5
  setInterval(() => {
    sendDishNotification();
  }, 30 * 60 * 1000);
}

// Aliases for backward compatibility
export const sendDrinkNotification = sendDishNotification;
