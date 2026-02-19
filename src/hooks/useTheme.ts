import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem("cq-theme") as Theme | null;
    return stored || "dark";
  });

  useEffect(() => {
    localStorage.setItem("cq-theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle, setTheme };
}
