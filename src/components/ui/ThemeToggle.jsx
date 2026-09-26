"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { DEFAULT_THEME, THEME_KEY } from "@/lib/theme";

function readStoredTheme() {
  try {
    const t = window.localStorage.getItem(THEME_KEY);
    return t === "light" || t === "dark" ? t : DEFAULT_THEME;
  } catch {
    return DEFAULT_THEME;
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(readStoredTheme);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* noop */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="theme-toggle"
    >
      <Sun className="icon-sun" />
      <Moon className="icon-moon" />
    </button>
  );
}