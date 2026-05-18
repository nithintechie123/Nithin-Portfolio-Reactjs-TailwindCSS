import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import cn from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }

  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-5 right-18 sm:top-3 sm:right-4 z-50 p-2 rounded-full transition-all duration-300",
        "bg-card/90 backdrop-blur-md border border-primary/20",
        "shadow-md shadow-primary/5 hover:scale-110 active:scale-95 hover:shadow-lg focus:outline-none cursor-pointer"
      )}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 animate-pulse-subtle" />
      ) : (
        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-violet-600 dark:text-violet-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
