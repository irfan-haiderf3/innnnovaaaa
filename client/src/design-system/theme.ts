/**
 * ============================================================================
 * HEALTHBRIDGE THEME SYSTEM
 * ============================================================================
 * 
 * Theme configuration and utilities built on design tokens.
 * Provides functions to apply themes, switch modes, and access theme values.
 * 
 * @version 2.0.0
 */

import { TOKENS } from './tokens';

// ============================================================================
// THEME INTERFACE
// ============================================================================

export interface Theme {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    primaryHover: string;
    primaryActive: string;
    secondary: string;
    secondaryHover: string;
    tertiary: string;
    background: string;
    surface: string;
    surfaceHover: string;
    border: string;
    borderHover: string;
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
      disabled: string;
      inverse: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
      info: string;
    };
  };
}

// ============================================================================
// LIGHT THEME (DEFAULT)
// ============================================================================

export const lightTheme: Theme = {
  mode: 'light',
  colors: {
    // Primary colors
    primary: TOKENS.color.primary[500],
    primaryHover: TOKENS.color.primary[600],
    primaryActive: TOKENS.color.primary[700],
    
    // Secondary colors
    secondary: TOKENS.color.secondary[500],
    secondaryHover: TOKENS.color.secondary[600],
    
    // Tertiary colors
    tertiary: TOKENS.color.tertiary[500],
    
    // Background colors
    background: TOKENS.color.neutral[0],
    surface: TOKENS.color.neutral[50],
    surfaceHover: TOKENS.color.neutral[100],
    
    // Border colors
    border: TOKENS.color.neutral[200],
    borderHover: TOKENS.color.neutral[300],
    
    // Text colors
    text: {
      primary: TOKENS.color.neutral[900],
      secondary: TOKENS.color.neutral[600],
      tertiary: TOKENS.color.neutral[500],
      disabled: TOKENS.color.neutral[400],
      inverse: TOKENS.color.neutral[0],
    },
    
    // Status colors
    status: {
      success: TOKENS.color.semantic.success.main,
      warning: TOKENS.color.semantic.warning.main,
      error: TOKENS.color.semantic.error.main,
      info: TOKENS.color.semantic.info.main,
    },
  },
};

// ============================================================================
// DARK THEME
// ============================================================================

export const darkTheme: Theme = {
  mode: 'dark',
  colors: {
    // Primary colors (lighter in dark mode)
    primary: TOKENS.color.primary[400],
    primaryHover: TOKENS.color.primary[300],
    primaryActive: TOKENS.color.primary[200],
    
    // Secondary colors
    secondary: TOKENS.color.secondary[400],
    secondaryHover: TOKENS.color.secondary[300],
    
    // Tertiary colors
    tertiary: TOKENS.color.tertiary[400],
    
    // Background colors (inverted)
    background: TOKENS.color.neutral[900],
    surface: TOKENS.color.neutral[800],
    surfaceHover: TOKENS.color.neutral[700],
    
    // Border colors (inverted)
    border: TOKENS.color.neutral[700],
    borderHover: TOKENS.color.neutral[600],
    
    // Text colors (inverted)
    text: {
      primary: TOKENS.color.neutral[50],
      secondary: TOKENS.color.neutral[300],
      tertiary: TOKENS.color.neutral[400],
      disabled: TOKENS.color.neutral[600],
      inverse: TOKENS.color.neutral[900],
    },
    
    // Status colors
    status: {
      success: TOKENS.color.semantic.success.main,
      warning: TOKENS.color.semantic.warning.main,
      error: TOKENS.color.semantic.error.main,
      info: TOKENS.color.semantic.info.main,
    },
  },
};

// ============================================================================
// THEME UTILITIES
// ============================================================================

/**
 * Convert hex color to RGB values
 * @param hex - Hex color code
 * @returns RGB values as string "r g b"
 */
export function hexToRGB(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0 0 0';
  
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  
  return `${r} ${g} ${b}`;
}

/**
 * Convert hex color to HSL values for CSS variables
 * @param hex - Hex color code
 * @returns HSL values as string "h s% l%"
 */
export function hexToHSL(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '0 0% 0%';
  
  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  let l = (max + min) / 2;
  
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  
  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);
  
  return `${h} ${s}% ${l}%`;
}

/**
 * Add opacity to hex color
 * @param hex - Hex color code
 * @param opacity - Opacity value (0-1)
 * @returns RGBA color string
 */
export function withOpacity(hex: string, opacity: number): string {
  const rgb = hexToRGB(hex);
  return `rgba(${rgb.replace(/ /g, ', ')}, ${opacity})`;
}

/**
 * Get contrasting text color (black or white) based on background
 * @param bgColor - Background color in hex
 * @returns Black or white hex color
 */
export function getContrastText(bgColor: string): string {
  const rgb = hexToRGB(bgColor).split(' ').map(Number);
  
  // Calculate relative luminance
  const [r, g, b] = rgb.map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
  // Return white for dark backgrounds, black for light backgrounds
  return luminance > 0.5 ? TOKENS.color.neutral[900] : TOKENS.color.neutral[0];
}

/**
 * Apply theme to CSS custom properties
 * @param theme - Theme object to apply
 */
export function applyTheme(theme: Theme = lightTheme): void {
  const root = document.documentElement;
  
  // Primary colors
  root.style.setProperty('--primary', hexToHSL(theme.colors.primary));
  root.style.setProperty('--primary-foreground', hexToHSL(theme.colors.text.inverse));
  
  // Secondary colors (destructive in shadcn terms)
  root.style.setProperty('--destructive', hexToHSL(theme.colors.secondary));
  root.style.setProperty('--destructive-foreground', hexToHSL(theme.colors.text.inverse));
  
  // Accent colors
  root.style.setProperty('--accent', hexToHSL(theme.colors.tertiary));
  root.style.setProperty('--accent-foreground', hexToHSL(theme.colors.text.primary));
  
  // Background colors
  root.style.setProperty('--background', hexToHSL(theme.colors.background));
  root.style.setProperty('--foreground', hexToHSL(theme.colors.text.primary));
  
  // Surface/Card colors
  root.style.setProperty('--card', hexToHSL(theme.colors.surface));
  root.style.setProperty('--card-foreground', hexToHSL(theme.colors.text.primary));
  
  // Border colors
  root.style.setProperty('--border', hexToHSL(theme.colors.border));
  root.style.setProperty('--input', hexToHSL(theme.colors.border));
  
  // Muted colors
  root.style.setProperty('--muted', hexToHSL(theme.colors.surfaceHover));
  root.style.setProperty('--muted-foreground', hexToHSL(theme.colors.text.secondary));
  
  // Popover colors
  root.style.setProperty('--popover', hexToHSL(theme.colors.surface));
  root.style.setProperty('--popover-foreground', hexToHSL(theme.colors.text.primary));
  
  // Secondary variant (for buttons)
  root.style.setProperty('--secondary', hexToHSL(theme.colors.surfaceHover));
  root.style.setProperty('--secondary-foreground', hexToHSL(theme.colors.text.primary));
  
  // Ring color (focus indicator)
  root.style.setProperty('--ring', hexToHSL(theme.colors.primary));
  
  // Status colors (chart colors in shadcn)
  root.style.setProperty('--chart-1', hexToHSL(theme.colors.primary));
  root.style.setProperty('--chart-2', hexToHSL(theme.colors.status.success));
  root.style.setProperty('--chart-3', hexToHSL(theme.colors.status.warning));
  root.style.setProperty('--chart-4', hexToHSL(theme.colors.status.error));
  root.style.setProperty('--chart-5', hexToHSL(theme.colors.status.info));
  
  // Sidebar colors (using primary palette)
  root.style.setProperty('--sidebar', hexToHSL(TOKENS.color.primary[700]));
  root.style.setProperty('--sidebar-foreground', hexToHSL(theme.colors.text.inverse));
  root.style.setProperty('--sidebar-primary', hexToHSL(theme.colors.primary));
  root.style.setProperty('--sidebar-primary-foreground', hexToHSL(theme.colors.text.inverse));
  root.style.setProperty('--sidebar-accent', hexToHSL(TOKENS.color.primary[600]));
  root.style.setProperty('--sidebar-accent-foreground', hexToHSL(theme.colors.text.inverse));
  root.style.setProperty('--sidebar-border', hexToHSL(TOKENS.color.primary[800]));
  root.style.setProperty('--sidebar-ring', hexToHSL(theme.colors.primary));
  
  // Font families
  root.style.setProperty('--font-sans', TOKENS.typography.fontFamily.primary);
  root.style.setProperty('--font-serif', TOKENS.typography.fontFamily.heading);
  root.style.setProperty('--font-mono', TOKENS.typography.fontFamily.mono);
}

/**
 * Get current theme from localStorage or default to light
 */
export function getCurrentTheme(): Theme {
  const stored = localStorage.getItem('healthbridge-theme-mode');
  return stored === 'dark' ? darkTheme : lightTheme;
}

/**
 * Set and persist theme
 * @param mode - Theme mode ('light' or 'dark')
 */
export function setTheme(mode: 'light' | 'dark'): void {
  const theme = mode === 'dark' ? darkTheme : lightTheme;
  localStorage.setItem('healthbridge-theme-mode', mode);
  applyTheme(theme);
  
  // Update body class for CSS-based theme switching
  document.body.classList.remove('light-mode', 'dark-mode');
  document.body.classList.add(`${mode}-mode`);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
  const current = getCurrentTheme();
  const newMode = current.mode === 'light' ? 'dark' : 'light';
  setTheme(newMode);
}

/**
 * Initialize theme on app startup
 */
export function initializeTheme(): void {
  const theme = getCurrentTheme();
  applyTheme(theme);
  document.body.classList.add(`${theme.mode}-mode`);
}

// ============================================================================
// EXPORTS
// ============================================================================

export { TOKENS };
export type { DesignTokens } from './tokens';

export const theme = {
  light: lightTheme,
  dark: darkTheme,
  tokens: TOKENS,
  utils: {
    hexToRGB,
    hexToHSL,
    withOpacity,
    getContrastText,
    applyTheme,
    getCurrentTheme,
    setTheme,
    toggleTheme,
    initializeTheme,
  },
};

export default theme;
