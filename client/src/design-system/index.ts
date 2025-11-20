/**
 * ============================================================================
 * HEALTHBRIDGE DESIGN SYSTEM - MAIN EXPORT
 * ============================================================================
 * 
 * Centralized export for all design system utilities, tokens, and themes.
 * Import everything you need from this single file.
 * 
 * @example
 * ```typescript
 * import { TOKENS, theme, initializeTheme } from '@/design-system';
 * 
 * // Use tokens directly
 * const primaryColor = TOKENS.color.primary[500];
 * const spacing = TOKENS.spacing[4];
 * 
 * // Apply theme
 * initializeTheme();
 * ```
 */

// Export all tokens
export * from './tokens';

// Export theme utilities and types
export * from './theme';

// Re-export commonly used items for convenience
export { TOKENS } from './tokens';
export { theme, initializeTheme, setTheme, toggleTheme } from './theme';
export type { Theme, DesignTokens } from './theme';
