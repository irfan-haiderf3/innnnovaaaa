import React, { createContext, useContext, useState, useEffect } from "react";
import { getTheme, type ThemeScheme, type Theme, defaultTheme } from "@/lib/theme-config";

interface ThemeContextType {
  currentScheme: ThemeScheme;
  theme: Theme;
  setScheme: (scheme: ThemeScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScheme, setCurrentScheme] = useState<ThemeScheme>(() => {
    // Load from localStorage if available
    const saved = localStorage.getItem("healthbridge-theme");
    return (saved as ThemeScheme) || defaultTheme;
  });

  const [theme, setTheme] = useState<Theme>(() => getTheme(currentScheme));

  const setScheme = (scheme: ThemeScheme) => {
    setCurrentScheme(scheme);
    setTheme(getTheme(scheme));
    localStorage.setItem("healthbridge-theme", scheme);
  };

  // Apply theme CSS variables to root
  useEffect(() => {
    const root = document.documentElement;
    const colors = theme.colors;

    // Apply primary colors
    Object.entries(colors.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value);
    });

    // Apply secondary colors
    Object.entries(colors.secondary).forEach(([key, value]) => {
      root.style.setProperty(`--color-secondary-${key}`, value);
    });

    // Apply accent colors
    Object.entries(colors.accent).forEach(([key, value]) => {
      root.style.setProperty(`--color-accent-${key}`, value);
    });

    // Apply neutral colors
    Object.entries(colors.neutral).forEach(([key, value]) => {
      root.style.setProperty(`--color-neutral-${key}`, value);
    });

    // Apply status colors
    root.style.setProperty("--color-success", colors.success);
    root.style.setProperty("--color-warning", colors.warning);
    root.style.setProperty("--color-error", colors.error);
    root.style.setProperty("--color-info", colors.info);

    // Apply typography
    root.style.setProperty("--font-primary", theme.typography.fontFamily.primary);
    root.style.setProperty("--font-secondary", theme.typography.fontFamily.secondary);

  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentScheme, theme, setScheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
