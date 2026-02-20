import { useState, useEffect, useCallback } from "react";
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
  { level: 1, title: "Iniciante", minXP: 0, maxXP: 50 },
  { level: 2, title: "Aprendiz", minXP: 50, maxXP: 100 },
  { level: 3, title: "Bartender Jr.", minXP: 100, maxXP: 200 },
  { level: 4, title: "Mixologista", minXP: 200, maxXP: 350 },
  { level: 5, title: "Bartender Pro", minXP: 350, maxXP: 500 },
  { level: 6, title: "Mestre dos Drinks", minXP: 500, maxXP: 750 },
  { level: 7, title: "Lenda do Bar", minXP: 750, maxXP: Infinity },
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

export function useXP() {
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

      return {
        ...prev,
        totalXP: newXP,
        viewedRecipes: newViewed,
        achievements: newAchievements,
      };
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
      if (readArticles.length >= 3 && !newAchievements.includes("scholar-3"))
        newAchievements.push("scholar-3");
      if (readArticles.length >= 5 && !newAchievements.includes("scholar-5"))
        newAchievements.push("scholar-5");
      if (readArticles.length >= 10 && !newAchievements.includes("scholar-10"))
        newAchievements.push("scholar-10");

      return {
        ...prev,
        totalXP: newXP,
        achievements: newAchievements,
      };
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

      return {
        ...prev,
        totalXP: newXP,
        achievements: newAchievements,
      };
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

  return {
    ...data,
    level,
    progress,
    addRecipeXP,
    addArticleXP,
    addTipXP,
    unlockTip,
    addAchievement,
  };
}
