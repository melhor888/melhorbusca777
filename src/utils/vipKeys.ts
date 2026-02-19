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
  0: "a283d2e0b06b2b710413eb3e244cc74c8deb4dc1978b1cba9fdaa39deaa6bf40", // Domingo
  1: "8e919b009593da69d90c2d386bf9891657a3316db62b77a689131dc5d7410543", // Segunda
  2: "0c784bd606679012a9ff69e71576c6234866c9650045a79448da4cb7f51e034b", // Terça
  3: "5378aa596a080c9d4fce3217d60e9cc149fb76f0187692b0c5172b88a7c8ce78", // Quarta
  4: "fc337acb7746342c455b76eb4aa95b3f2e2ffae4ecbbfe434d87341341e9e207", // Quinta
  5: "ce99c9ec7b57ae92446ceb7c9d1ea4286133b932c736466da580f12b2bc967ba", // Sexta
  6: "62ba7c412b589289e7c975ef687ee9107c29d84ac943058b2e6a4cad2ff15a92", // Sábado
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
