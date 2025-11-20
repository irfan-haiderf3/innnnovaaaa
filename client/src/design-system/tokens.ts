/**
 * ============================================================================
 * HEALTHBRIDGE DESIGN TOKENS
 * ============================================================================
 * 
 * Centralized design tokens following modern design system principles.
 * This is the SINGLE SOURCE OF TRUTH for all visual design decisions.
 * 
 * Architecture: Atomic Design + Design Tokens
 * Paradigm: Scroll-less, Compact, High-Density UI
 * 
 * @version 2.0.0
 * @author HealthBridge Design Team
 */

// ============================================================================
// COLOR SYSTEM - Professional Healthcare Palette
// ============================================================================

/**
 * Primary color palette for brand identity and trust
 * Deep Navy Blue - Professional, Trustworthy, Medical
 */
export const PRIMARY = {
  50: '#E8EFF8',
  100: '#D1DFEF',
  200: '#A3BFE0',
  300: '#749FD0',
  400: '#4680C1',
  500: '#1A5490',  // Main brand color
  600: '#154477',
  700: '#10335E',
  800: '#0B2344',
  900: '#06122B',
} as const;

/**
 * Secondary/Accent color for CTAs and urgent actions
 * Maroon/Coral - Urgency, Action, Critical Alerts
 */
export const SECONDARY = {
  50: '#FDF2F2',
  100: '#FBE5E5',
  200: '#F7CBCB',
  300: '#F3B1B1',
  400: '#EF9797',
  500: '#8B2635',  // Main CTA color
  600: '#771F2D',
  700: '#621826',
  800: '#4E121E',
  900: '#3A0D16',
} as const;

/**
 * Tertiary color for information and success states
 * Teal/Cyan - Information, Calm, Healing
 */
export const TERTIARY = {
  50: '#F0F9FF',
  100: '#E0F2FE',
  200: '#BAE6FD',
  300: '#7DD3FC',
  400: '#38BDF8',
  500: '#0EA5E9',  // Info color
  600: '#0284C7',
  700: '#0369A1',
  800: '#075985',
  900: '#0C4A6E',
} as const;

/**
 * Neutral grays for text, backgrounds, and borders
 */
export const NEUTRAL = {
  0: '#FFFFFF',    // Pure white
  50: '#F8F9FA',   // Off white - card backgrounds
  100: '#F1F3F5',  // Very light gray
  200: '#E9ECEF',  // Light gray - borders
  300: '#DEE2E6',  // Medium light gray - dividers
  400: '#CED4DA',  // Medium gray - disabled states
  500: '#ADB5BD',  // Gray - secondary text
  600: '#6C757D',  // Dark gray - body text
  700: '#495057',  // Darker gray - headings
  800: '#343A40',  // Very dark gray
  900: '#212529',  // Almost black
  950: '#0A0C0E',  // Pure black
} as const;

/**
 * Semantic colors for status and feedback
 */
export const SEMANTIC = {
  success: {
    light: '#D1FAE5',
    main: '#10B981',
    dark: '#059669',
  },
  warning: {
    light: '#FEF3C7',
    main: '#F59E0B',
    dark: '#D97706',
  },
  error: {
    light: '#FEE2E2',
    main: '#EF4444',
    dark: '#DC2626',
  },
  info: {
    light: '#DBEAFE',
    main: '#3B82F6',
    dark: '#2563EB',
  },
} as const;

/**
 * Healthcare-specific status colors
 */
export const HEALTH_STATUS = {
  healthy: '#10B981',      // Green
  warning: '#F59E0B',      // Amber
  critical: '#EF4444',     // Red
  urgent: '#8B2635',       // Maroon
  scheduled: '#3B82F6',    // Blue
  completed: '#10B981',    // Green
  pending: '#F59E0B',      // Amber
  cancelled: '#6C757D',    // Gray
} as const;

// ============================================================================
// TYPOGRAPHY SYSTEM
// ============================================================================

/**
 * Font families optimized for healthcare readability
 */
export const FONT_FAMILY = {
  primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  heading: "'Poppins', 'Inter', sans-serif",
  mono: "'Fira Code', 'Monaco', 'Courier New', monospace",
} as const;

/**
 * Font sizes - Compact scale for high-density UI
 * Base size: 14px (0.875rem)
 */
export const FONT_SIZE = {
  xs: '0.6875rem',    // 11px - Tiny labels
  sm: '0.8125rem',    // 13px - Small text, table cells
  base: '0.875rem',   // 14px - Body text (DEFAULT)
  md: '0.9375rem',    // 15px - Slightly larger body
  lg: '1rem',         // 16px - Subheadings
  xl: '1.125rem',     // 18px - Section titles
  '2xl': '1.25rem',   // 20px - Page titles
  '3xl': '1.5rem',    // 24px - Major headings
  '4xl': '1.875rem',  // 30px - Hero text
  '5xl': '2.25rem',   // 36px - Display text
} as const;

/**
 * Font weights
 */
export const FONT_WEIGHT = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
} as const;

/**
 * Line heights - Compact for efficiency
 */
export const LINE_HEIGHT = {
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.625,
  loose: 1.75,
} as const;

/**
 * Letter spacing
 */
export const LETTER_SPACING = {
  tighter: '-0.02em',
  tight: '-0.01em',
  normal: '0',
  wide: '0.01em',
  wider: '0.02em',
} as const;

// ============================================================================
// SPACING SYSTEM - 8pt Grid
// ============================================================================

/**
 * Spacing scale based on 8pt grid system
 */
export const SPACING = {
  0: '0',
  0.5: '0.125rem',   // 2px
  1: '0.25rem',      // 4px
  1.5: '0.375rem',   // 6px
  2: '0.5rem',       // 8px - Base unit
  3: '0.75rem',      // 12px
  4: '1rem',         // 16px
  5: '1.25rem',      // 20px
  6: '1.5rem',       // 24px
  8: '2rem',         // 32px
  10: '2.5rem',      // 40px
  12: '3rem',        // 48px
  16: '4rem',        // 64px
  20: '5rem',        // 80px
  24: '6rem',        // 96px
} as const;

// ============================================================================
// BORDER RADIUS
// ============================================================================

/**
 * Border radius values for consistent rounded corners
 */
export const BORDER_RADIUS = {
  none: '0',
  xs: '0.125rem',    // 2px
  sm: '0.25rem',     // 4px
  base: '0.375rem',  // 6px
  md: '0.5rem',      // 8px
  lg: '0.75rem',     // 12px
  xl: '1rem',        // 16px
  '2xl': '1.5rem',   // 24px
  full: '9999px',    // Pill shape
} as const;

// ============================================================================
// SHADOWS - Subtle Elevation
// ============================================================================

/**
 * Box shadows for depth and elevation
 */
export const SHADOW = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
} as const;

// ============================================================================
// TRANSITIONS & ANIMATIONS
// ============================================================================

/**
 * Transition durations
 */
export const DURATION = {
  instant: '0ms',
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

/**
 * Easing functions
 */
export const EASING = {
  ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
} as const;

/**
 * Common transition presets
 */
export const TRANSITION = {
  all: `all ${DURATION.normal} ${EASING.ease}`,
  colors: `background-color ${DURATION.normal}, color ${DURATION.normal}, border-color ${DURATION.normal}`,
  transform: `transform ${DURATION.normal} ${EASING.ease}`,
  opacity: `opacity ${DURATION.normal} ${EASING.ease}`,
} as const;

// ============================================================================
// Z-INDEX LAYERS
// ============================================================================

/**
 * Z-index scale for layering elements
 */
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
} as const;

// ============================================================================
// BREAKPOINTS - Responsive Design
// ============================================================================

/**
 * Breakpoints for responsive design
 */
export const BREAKPOINT = {
  xs: '375px',   // Mobile small
  sm: '640px',   // Mobile
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
  '2xl': '1536px', // Extra large
} as const;

// ============================================================================
// COMPONENT-SPECIFIC TOKENS
// ============================================================================

/**
 * Button component tokens
 */
export const BUTTON = {
  height: {
    xs: '1.5rem',      // 24px
    sm: '1.75rem',     // 28px
    base: '2rem',      // 32px
    md: '2.25rem',     // 36px
    lg: '2.5rem',      // 40px
  },
  padding: {
    xs: `${SPACING[1]} ${SPACING[2]}`,
    sm: `${SPACING[1.5]} ${SPACING[3]}`,
    base: `${SPACING[2]} ${SPACING[4]}`,
    md: `${SPACING[2]} ${SPACING[5]}`,
    lg: `${SPACING[3]} ${SPACING[6]}`,
  },
  fontSize: {
    xs: FONT_SIZE.xs,
    sm: FONT_SIZE.sm,
    base: FONT_SIZE.base,
    md: FONT_SIZE.md,
    lg: FONT_SIZE.lg,
  },
} as const;

/**
 * Input component tokens
 */
export const INPUT = {
  height: {
    sm: '1.75rem',     // 28px
    base: '2rem',      // 32px
    md: '2.25rem',     // 36px
    lg: '2.5rem',      // 40px
  },
  padding: {
    horizontal: SPACING[3],  // 12px
    vertical: SPACING[2],    // 8px
  },
  fontSize: FONT_SIZE.sm,
  borderWidth: '1px',
  focusBorderWidth: '2px',
} as const;

/**
 * Card component tokens
 */
export const CARD = {
  padding: {
    sm: SPACING[3],    // 12px
    base: SPACING[4],  // 16px
    md: SPACING[5],    // 20px
    lg: SPACING[6],    // 24px
  },
  borderRadius: BORDER_RADIUS.lg,
  borderWidth: '1px',
  shadow: SHADOW.sm,
} as const;

/**
 * Table component tokens
 */
export const TABLE = {
  cell: {
    padding: {
      horizontal: SPACING[3],  // 12px
      vertical: SPACING[2],    // 8px
    },
    fontSize: FONT_SIZE.sm,
  },
  header: {
    height: '2rem',          // 32px
    fontSize: FONT_SIZE.xs,
    fontWeight: FONT_WEIGHT.semibold,
  },
  row: {
    height: '2.25rem',       // 36px - Compact
  },
} as const;

/**
 * Icon sizes
 */
export const ICON = {
  xs: 12,
  sm: 14,
  base: 16,
  md: 18,
  lg: 20,
  xl: 24,
  '2xl': 32,
  '3xl': 40,
} as const;

/**
 * Icon stroke width
 */
export const ICON_STROKE = {
  thin: 1.5,
  normal: 2,
  bold: 2.5,
} as const;

// ============================================================================
// LAYOUT TOKENS - Scroll-less Design
// ============================================================================

/**
 * Layout constraints for scroll-less design
 */
export const LAYOUT = {
  maxWidth: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
  },
  container: {
    padding: SPACING[4],
  },
  header: {
    height: '4rem',        // 64px
    heightCompact: '3rem', // 48px
  },
  footer: {
    height: '2.5rem',      // 40px
  },
  sidebar: {
    width: '16rem',        // 256px
    widthCollapsed: '4rem', // 64px
  },
} as const;

// ============================================================================
// EXPORT ALL TOKENS
// ============================================================================

export const TOKENS = {
  color: {
    primary: PRIMARY,
    secondary: SECONDARY,
    tertiary: TERTIARY,
    neutral: NEUTRAL,
    semantic: SEMANTIC,
    health: HEALTH_STATUS,
  },
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZE,
    fontWeight: FONT_WEIGHT,
    lineHeight: LINE_HEIGHT,
    letterSpacing: LETTER_SPACING,
  },
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadow: SHADOW,
  animation: {
    duration: DURATION,
    easing: EASING,
    transition: TRANSITION,
  },
  zIndex: Z_INDEX,
  breakpoint: BREAKPOINT,
  component: {
    button: BUTTON,
    input: INPUT,
    card: CARD,
    table: TABLE,
    icon: ICON,
    iconStroke: ICON_STROKE,
  },
  layout: LAYOUT,
} as const;

// Type exports for TypeScript
export type DesignTokens = typeof TOKENS;
export type ColorToken = keyof typeof TOKENS.color;
export type SpacingToken = keyof typeof SPACING;
export type FontSizeToken = keyof typeof FONT_SIZE;
