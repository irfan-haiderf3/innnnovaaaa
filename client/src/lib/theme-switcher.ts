/**
 * HEALTHBRIDGE THEME SWITCHER
 * Easy-to-use utilities for managing and switching app themes
 * 
 * Usage:
 * 1. Import the functions: import { setTheme, getCurrentTheme } from '@/lib/theme-switcher'
 * 2. Switch themes: setTheme('healthcareTrust')
 * 3. Get current theme: const current = getCurrentTheme()
 */

import { 
  colorSchemes, 
  type ThemeScheme, 
  defaultTheme,
  hexToHSL 
} from './theme-config';

// Re-export ThemeScheme type for external use
export type { ThemeScheme } from './theme-config';

// =============================================================================
// THEME APPLICATION FUNCTIONS
// =============================================================================

/**
 * Apply a complete theme to the app
 * Updates all CSS variables and saves preference to localStorage
 * @param scheme - Theme name to apply
 */
export function setTheme(scheme: ThemeScheme): void {
  const theme = colorSchemes[scheme];
  const root = document.documentElement;
  
  // Save to localStorage
  localStorage.setItem('healthbridge-theme', scheme);
  
  // Apply all color variables
  // Primary colors (Dark Blue for healthcare)
  root.style.setProperty('--primary', hexToHSL(theme.primary[500]));
  root.style.setProperty('--primary-foreground', hexToHSL(theme.neutral[50]));
  
  // Secondary/Destructive colors (Maroon for urgent actions)
  root.style.setProperty('--destructive', hexToHSL(theme.secondary[500]));
  root.style.setProperty('--destructive-foreground', hexToHSL(theme.neutral[50]));
  
  // Accent colors (Teal for informational)
  root.style.setProperty('--accent', hexToHSL(theme.accent[500]));
  root.style.setProperty('--accent-foreground', hexToHSL(theme.neutral[900]));
  
  // Background and foreground
  root.style.setProperty('--background', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--foreground', hexToHSL(theme.neutral[900]));
  
  // Card colors
  root.style.setProperty('--card', hexToHSL(theme.neutral[100]));
  root.style.setProperty('--card-foreground', hexToHSL(theme.neutral[900]));
  root.style.setProperty('--card-border', hexToHSL(theme.neutral[300]));
  
  // Border and input
  root.style.setProperty('--border', hexToHSL(theme.neutral[300]));
  root.style.setProperty('--input', hexToHSL(theme.neutral[400]));
  
  // Muted colors
  root.style.setProperty('--muted', hexToHSL(theme.neutral[200]));
  root.style.setProperty('--muted-foreground', hexToHSL(theme.neutral[600]));
  
  // Popover
  root.style.setProperty('--popover', hexToHSL(theme.neutral[100]));
  root.style.setProperty('--popover-foreground', hexToHSL(theme.neutral[900]));
  root.style.setProperty('--popover-border', hexToHSL(theme.neutral[300]));
  
  // Sidebar (Dark blue theme)
  root.style.setProperty('--sidebar', hexToHSL(theme.primary[700]));
  root.style.setProperty('--sidebar-foreground', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--sidebar-border', hexToHSL(theme.primary[800]));
  root.style.setProperty('--sidebar-primary', hexToHSL(theme.primary[500]));
  root.style.setProperty('--sidebar-primary-foreground', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--sidebar-accent', hexToHSL(theme.primary[600]));
  root.style.setProperty('--sidebar-accent-foreground', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--sidebar-ring', hexToHSL(theme.primary[500]));
  
  // Focus ring
  root.style.setProperty('--ring', hexToHSL(theme.primary[500]));
  
  // Chart colors
  root.style.setProperty('--chart-1', hexToHSL(theme.primary[500]));
  root.style.setProperty('--chart-2', hexToHSL(theme.success));
  root.style.setProperty('--chart-3', hexToHSL(theme.accent[500]));
  root.style.setProperty('--chart-4', hexToHSL(theme.warning));
  root.style.setProperty('--chart-5', hexToHSL(theme.secondary[500]));
  
  console.log(`✅ Theme applied: ${theme.name || scheme}`);
}

/**
 * Get the current active theme
 * @returns Current theme scheme name
 */
export function getCurrentTheme(): ThemeScheme {
  const stored = localStorage.getItem('healthbridge-theme') as ThemeScheme;
  return stored || defaultTheme;
}

/**
 * Initialize theme on app startup
 * Call this in your main App component or entry point
 */
export function initializeTheme(): void {
  const theme = getCurrentTheme();
  setTheme(theme);
  console.log(`🎨 Initialized with theme: ${theme}`);
}

/**
 * Get all available themes
 * @returns Array of theme names
 */
export function getAvailableThemes(): ThemeScheme[] {
  return Object.keys(colorSchemes) as ThemeScheme[];
}

/**
 * Get theme details
 * @param scheme - Theme name
 * @returns Theme color palette and metadata
 */
export function getThemeDetails(scheme: ThemeScheme) {
  return colorSchemes[scheme];
}

// =============================================================================
// COLOR UTILITY FUNCTIONS
// =============================================================================

/**
 * Get a specific color from the current theme
 * @param colorPath - Path to color (e.g., 'primary.500', 'secondary.700')
 * @returns Hex color code
 */
export function getThemeColor(colorPath: string): string {
  const currentTheme = getCurrentTheme();
  const theme = colorSchemes[currentTheme];
  
  const [category, shade] = colorPath.split('.');
  
  if (shade) {
    return (theme as any)[category]?.[shade] || '#000000';
  }
  
  return (theme as any)[category] || '#000000';
}

/**
 * Quick access to healthcare-specific colors
 */
export const healthcareColors = {
  // Primary actions
  trust: () => getThemeColor('primary.500'),        // Dark blue
  trustLight: () => getThemeColor('primary.400'),
  trustDark: () => getThemeColor('primary.700'),
  
  // Urgent/Critical actions
  urgent: () => getThemeColor('secondary.500'),     // Maroon
  urgentLight: () => getThemeColor('secondary.400'),
  urgentDark: () => getThemeColor('secondary.700'),
  
  // Informational
  info: () => getThemeColor('accent.500'),          // Teal
  infoLight: () => getThemeColor('accent.400'),
  infoDark: () => getThemeColor('accent.700'),
  
  // Status colors
  success: () => getThemeColor('success'),          // Green
  warning: () => getThemeColor('warning'),          // Amber
  error: () => getThemeColor('error'),              // Red
  
  // Neutral
  background: () => getThemeColor('neutral.50'),    // White
  foreground: () => getThemeColor('neutral.900'),   // Black
  border: () => getThemeColor('neutral.300'),       // Light gray
};

// =============================================================================
// REACT HOOK (Optional - uncomment if using React)
// =============================================================================

/**
 * React hook for theme management
 * Usage: const { theme, setTheme, availableThemes } = useTheme();
 */
/*
import { useState, useEffect } from 'react';

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeScheme>(getCurrentTheme());
  
  useEffect(() => {
    initializeTheme();
  }, []);
  
  const changeTheme = (scheme: ThemeScheme) => {
    setTheme(scheme);
    setCurrentTheme(scheme);
  };
  
  return {
    theme: currentTheme,
    setTheme: changeTheme,
    availableThemes: getAvailableThemes(),
    themeDetails: getThemeDetails(currentTheme),
  };
}
*/

export default {
  setTheme,
  getCurrentTheme,
  initializeTheme,
  getAvailableThemes,
  getThemeDetails,
  getThemeColor,
  healthcareColors,
};
