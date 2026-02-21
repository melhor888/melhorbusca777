import { drinks } from "@/data/drinks";

const NOTIFICATION_KEY = "cq-notif-enabled";
const LAST_NOTIF_KEY = "cq-last-notif";
const INTERVAL_MS = 3 * 60 * 60 * 1000; // ~3 hours (5x/day)

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

export function sendWelcomeNotification() {
  if (Notification.permission !== "granted") return;

  try {
    new Notification("🎉 Bem-vindo ao Nihon Food!", {
      body: "Você receberá sugestões de receitas japonesas incríveis ao longo do dia. Itadakimasu! 🍣",
      icon: "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      tag: "welcome",
    } as NotificationOptions);
  } catch {
    // Silent fail
  }

  // Send a random recipe right after welcome
  setTimeout(() => {
    const drink = getRandomDrink();
    try {
      new Notification(`🍣 Nova Receita: ${drink.name}`, {
        body: `${drink.category} · ${drink.difficulty} · ${drink.time}\n${drink.ingredients.slice(0, 3).join(", ")}`,
        icon: "/pwa-192x192.png",
        badge: "/pwa-192x192.png",
        tag: "welcome-recipe",
      } as NotificationOptions);
    } catch {
      // Silent fail
    }
  }, 3000);
}

export function sendDrinkNotification() {
  if (!isNotificationsEnabled()) return;
  if (Notification.permission !== "granted") return;
  if (!shouldSendNotification()) return;

  const drink = getRandomDrink();
  localStorage.setItem(LAST_NOTIF_KEY, Date.now().toString());

  const emojis = ["🍣", "🍜", "🍱", "🍙", "🍤"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  try {
    new Notification(`${emoji} Nova Receita: ${drink.name}`, {
      body: `${drink.category} · ${drink.difficulty} · ${drink.time}\n${drink.ingredients.slice(0, 3).join(", ")}`,
      icon: "/pwa-192x192.png",
      badge: "/pwa-192x192.png",
      tag: "recipe-of-day",
    } as NotificationOptions);
  } catch {
    // Silent fail
  }
}

export function startNotificationScheduler() {
  if (!isNotificationsEnabled()) return;
  sendDrinkNotification();
  setInterval(() => {
    sendDrinkNotification();
  }, 30 * 60 * 1000);
}
