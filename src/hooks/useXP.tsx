import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import { achievements } from "@/data/achievements";

const STORAGE_KEY = "drinks-co-xp";

export interface XPData {
  totalXP: number;
  viewedRecipes: string[];
  unlockedTips: string[];
  achievements: string[];
  weeklyChallenge: {
    id: string;
    startedAt: string;
    progress: string[];
  } | null;
}

const DEFAULT_DATA: XPData = {
  totalXP: 0,
  viewedRecipes: [],
  unlockedTips: [],
  achievements: [],
  weeklyChallenge: null,
};

export const XP_PER_RECIPE = 10;
export const XP_PER_FAVORITE = 5;
export const XP_BONUS_CHALLENGE = 50;

export interface Level {
  level: number;
  title: string;
  minXP: number;
  maxXP: number;
}

export const LEVELS: Level[] = [
  { level: 1, title: "Principiante", minXP: 0, maxXP: 20 },
  { level: 2, title: "Curioso", minXP: 20, maxXP: 45 },
  { level: 3, title: "Aprendiz", minXP: 45, maxXP: 75 },
  { level: 4, title: "Cocinero", minXP: 75, maxXP: 110 },
  { level: 5, title: "Taquero", minXP: 110, maxXP: 150 },
  { level: 6, title: "Salsero", minXP: 150, maxXP: 200 },
  { level: 7, title: "Parrillero", minXP: 200, maxXP: 260 },
  { level: 8, title: "Chef Mexicano", minXP: 260, maxXP: 330 },
  { level: 9, title: "Mole Master", minXP: 330, maxXP: 410 },
  { level: 10, title: "Maestro Oaxaqueño", minXP: 410, maxXP: 500 },
  { level: 11, title: "Abuela Sabia", minXP: 500, maxXP: 600 },
  { level: 12, title: "Curandero del Sabor", minXP: 600, maxXP: 720 },
  { level: 13, title: "Guardián del Maíz", minXP: 720, maxXP: 860 },
  { level: 14, title: "Leyenda Culinaria", minXP: 860, maxXP: 1000 },
  { level: 15, title: "Dios del Mole", minXP: 1000, maxXP: Infinity },
];

export function getLevel(xp: number): Level {
  return [...LEVELS].reverse().find((l) => xp >= l.minXP) || LEVELS[0];
}

export function getLevelProgress(xp: number): number {
  const level = getLevel(xp);
  if (level.maxXP === Infinity) return 100;
  const range = level.maxXP - level.minXP;
  return Math.min(100, ((xp - level.minXP) / range) * 100);
}

function checkXPAchievements(newXP: number, currentAchievements: string[]): string[] {
  const updated = [...currentAchievements];
  const xpAchievements = achievements.filter((a) => a.requiredXP !== undefined);
  for (const ach of xpAchievements) {
    if (newXP >= ach.requiredXP! && !updated.includes(ach.id)) {
      updated.push(ach.id);
    }
  }
  return updated;
}

function checkExplorerAchievements(viewedCount: number, currentAchievements: string[]): string[] {
  const updated = [...currentAchievements];
  const thresholds = [1, 5, 10, 15, 25, 35, 50, 75, 100, 120, 140, 150, 170, 180];
  for (const t of thresholds) {
    const id = `explorer-${t}`;
    if (viewedCount >= t && !updated.includes(id)) updated.push(id);
  }
  return updated;
}

interface XPContextValue {
  totalXP: number;
  viewedRecipes: string[];
  unlockedTips: string[];
  achievements: string[];
  weeklyChallenge: XPData["weeklyChallenge"];
  level: Level;
  progress: number;
  addRecipeXP: (recipeId: string) => number;
  addArticleXP: (articleId: string, xpAmount: number) => number;
  addTipXP: (tipId: string, xpAmount?: number) => number;
  unlockTip: (tipId: string) => void;
  addAchievement: (achievementId: string) => void;
}

const XPContext = createContext<XPContextValue | null>(null);

export function XPProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<XPData>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? { ...DEFAULT_DATA, ...JSON.parse(stored) } : DEFAULT_DATA;
    } catch {
      return DEFAULT_DATA;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [data]);

  const addRecipeXP = useCallback((recipeId: string): number => {
    let xpGained = 0;
    setData((prev) => {
      if (prev.viewedRecipes.includes(recipeId)) return prev;
      xpGained = XP_PER_RECIPE;
      const newXP = prev.totalXP + XP_PER_RECIPE;
      const newViewed = [...prev.viewedRecipes, recipeId];
      let newAchievements = checkExplorerAchievements(newViewed.length, prev.achievements);
      newAchievements = checkXPAchievements(newXP, newAchievements);
      return { ...prev, totalXP: newXP, viewedRecipes: newViewed, achievements: newAchievements };
    });
    return xpGained;
  }, []);

  const addArticleXP = useCallback((articleId: string, xpAmount: number): number => {
    let xpGained = 0;
    setData((prev) => {
      const readArticles = JSON.parse(localStorage.getItem("drinks-co-read-articles") || "[]") as string[];
      if (readArticles.includes(articleId)) return prev;
      xpGained = xpAmount;
      readArticles.push(articleId);
      localStorage.setItem("drinks-co-read-articles", JSON.stringify(readArticles));
      const newXP = prev.totalXP + xpAmount;
      let newAchievements = checkXPAchievements(newXP, prev.achievements);
      if (readArticles.length >= 3 && !newAchievements.includes("scholar-3")) newAchievements.push("scholar-3");
      if (readArticles.length >= 5 && !newAchievements.includes("scholar-5")) newAchievements.push("scholar-5");
      if (readArticles.length >= 10 && !newAchievements.includes("scholar-10")) newAchievements.push("scholar-10");
      return { ...prev, totalXP: newXP, achievements: newAchievements };
    });
    return xpGained;
  }, []);

  const addTipXP = useCallback((tipId: string, xpAmount: number = 5): number => {
    let xpGained = 0;
    setData((prev) => {
      const readTips = JSON.parse(localStorage.getItem("drinks-co-read-tips") || "[]") as string[];
      if (readTips.includes(tipId)) return prev;
      xpGained = xpAmount;
      readTips.push(tipId);
      localStorage.setItem("drinks-co-read-tips", JSON.stringify(readTips));
      const newXP = prev.totalXP + xpAmount;
      const newAchievements = checkXPAchievements(newXP, prev.achievements);
      return { ...prev, totalXP: newXP, achievements: newAchievements };
    });
    return xpGained;
  }, []);

  const unlockTip = useCallback((tipId: string) => {
    setData((prev) => {
      if (prev.unlockedTips.includes(tipId)) return prev;
      return { ...prev, unlockedTips: [...prev.unlockedTips, tipId] };
    });
  }, []);

  const addAchievement = useCallback((achievementId: string) => {
    setData((prev) => {
      if (prev.achievements.includes(achievementId)) return prev;
      return { ...prev, achievements: [...prev.achievements, achievementId] };
    });
  }, []);

  const level = getLevel(data.totalXP);
  const progress = getLevelProgress(data.totalXP);

  return (
    <XPContext.Provider value={{
      ...data,
      level,
      progress,
      addRecipeXP,
      addArticleXP,
      addTipXP,
      unlockTip,
      addAchievement,
    }}>
      {children}
    </XPContext.Provider>
  );
}

export function useXP() {
  const ctx = useContext(XPContext);
  if (!ctx) throw new Error("useXP must be used within XPProvider");
  return ctx;
}
