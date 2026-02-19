import { drinks } from "@/data/drinks";

const NOTIFICATION_KEY = "cq-notif-enabled";
const LAST_NOTIF_KEY = "cq-last-notif";
const INTERVAL_MS = 3 * 60 * 60 * 1000; // ~3 hours (5x/day spread across waking hours)

function getRandomDrink() {
  const idx = Math.floor(Math.random() * drinks.length);
  return drinks[idx];
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
  const last = localStorage.getItem(LAST_NOTIF_KEY);
  if (!last) return true;
  return Date.now() - parseInt(last, 10) > INTERVAL_MS;
}

export function sendDrinkNotification() {
  if (!isNotificationsEnabled()) return;
  if (Notification.permission !== "granted") return;
  if (!shouldSendNotification()) return;

  const drink = getRandomDrink();
  localStorage.setItem(LAST_NOTIF_KEY, Date.now().toString());

  const emojis = ["🍸", "🥃", "🍹", "🥂", "☕"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const titles = [
    `${emoji} Drink do Momento: ${drink.name}`,
    `${emoji} Que tal um ${drink.name}?`,
    `${emoji} Hora de experimentar: ${drink.name}`,
    `${emoji} Receita do dia: ${drink.name}`,
    `${emoji} Descubra o ${drink.name}!`,
  ];

  const title = titles[Math.floor(Math.random() * titles.length)];
  const body = `${drink.category} · ${drink.difficulty} · ${drink.time}\n${drink.ingredients.slice(0, 3).join(", ")}`;

  try {
    new Notification(title, {
      body,
      icon: "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      tag: "drink-of-day",
    } as NotificationOptions);
  } catch {
    // Silent fail for unsupported contexts
  }
}

export function startNotificationScheduler() {
  if (!isNotificationsEnabled()) return;
  // Send one now if due
  sendDrinkNotification();
  // Check every 30 minutes
  setInterval(() => {
    sendDrinkNotification();
  }, 30 * 60 * 1000);
}
