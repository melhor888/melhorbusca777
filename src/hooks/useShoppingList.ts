import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "drinks-co-shopping-list";

export function useShoppingList() {
  const [drinkIds, setDrinkIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(drinkIds));
  }, [drinkIds]);

  const toggleDrink = useCallback((id: string) => {
    setDrinkIds((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }, []);

  const isInList = useCallback((id: string) => drinkIds.includes(id), [drinkIds]);

  const clearList = useCallback(() => setDrinkIds([]), []);

  return { drinkIds, toggleDrink, isInList, clearList };
}
