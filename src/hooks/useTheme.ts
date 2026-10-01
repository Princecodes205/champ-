import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const getTheme = (): Theme => {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

const subscribe = (callback: () => void) => {
  const observer = new MutationObserver(() => callback());
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme);

  const toggle = () => {
    try {
      const next = theme === "dark" ? "light" : "dark";
      if (next === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if ((next === "dark" && prefersDark) || (next === "light" && !prefersDark)) {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", next);
      }
    } catch (e) {
      console.error("Failed to toggle theme", e);
    }
  };

  return { theme, toggle };
}
