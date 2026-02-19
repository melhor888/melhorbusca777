// Daily VIP keys - hashed with simple approach for client-side validation
// Each day of the week (0=Sunday, 1=Monday, ..., 6=Saturday) has a unique key

// Simple hash function for client-side key comparison
async function hashKey(key: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(key.trim().toLowerCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// Pre-hashed daily keys (SHA-256 of the actual keys)
// To update keys: hash them using the hashKey function and replace below
const dailyKeyHashes: Record<number, string> = {
  0: "placeholder_sunday",    // Domingo
  1: "placeholder_monday",    // Segunda
  2: "placeholder_tuesday",   // Terça
  3: "placeholder_wednesday", // Quarta
  4: "placeholder_thursday",  // Quinta
  5: "placeholder_friday",    // Sexta
  6: "placeholder_saturday",  // Sábado
};

const DAY_NAMES = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function getTodayDayIndex(): number {
  return new Date().getDay();
}

export function getTodayDayName(): string {
  return DAY_NAMES[getTodayDayIndex()];
}

export async function validateVipKey(inputKey: string): Promise<boolean> {
  const dayIndex = getTodayDayIndex();
  const expectedHash = dailyKeyHashes[dayIndex];
  if (!expectedHash || expectedHash.startsWith("placeholder")) return false;
  const inputHash = await hashKey(inputKey);
  return inputHash === expectedHash;
}

const STORAGE_KEY = "vip_access";

interface VipAccess {
  date: string; // YYYY-MM-DD
  unlocked: boolean;
}

function getTodayDateStr(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function isVipUnlocked(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const data: VipAccess = JSON.parse(raw);
    return data.unlocked && data.date === getTodayDateStr();
  } catch {
    return false;
  }
}

export function setVipUnlocked(): void {
  const data: VipAccess = { date: getTodayDateStr(), unlocked: true };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// Utility: call this in browser console to generate hash for a key
// e.g. generateKeyHash("mykey123").then(console.log)
export async function generateKeyHash(key: string): Promise<string> {
  return hashKey(key);
}
