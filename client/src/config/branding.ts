/**
 * ============================================================================
 * HEALTHBRIDGE BRANDING CONFIGURATION
 * ============================================================================
 * Centralized branding configuration inspired by modern medical UI design
 * Change colors and styles here to update the entire application theme
 * 
 * Design Inspiration: MediNova Medical Platform
 * - Primary: Turquoise/Cyan (Trust, Cleanliness, Healthcare)
 * - Secondary: Purple (Premium, Professional)
 * - Accent: Coral/Orange (Warmth, Approachability)
 */

// ============================================================================
// COLOR PALETTE - MediNova Inspired
// ============================================================================

export const brandColors = {
  // Primary Color: Turquoise/Cyan - Main brand identity
  primary: {
    50: '#E0F7FA',   // Very light cyan - backgrounds
    100: '#B2EBF2',  // Light cyan - hover states
    200: '#80DEEA',  // Lighter cyan
    300: '#4DD0E1',  // Medium light cyan
    400: '#26C6DA',  // Medium cyan
    500: '#00BCD4',  // Main brand color - Turquoise
    600: '#00ACC1',  // Darker cyan
    700: '#0097A7',  // Deep cyan
    800: '#00838F',  // Very dark cyan
    900: '#006064',  // Darkest cyan
  },

  // Secondary Color: Purple - Premium & Professional
  secondary: {
    50: '#F3E5F5',   // Very light purple
    100: '#E1BEE7',  // Light purple
    200: '#CE93D8',  // Lighter purple
    300: '#BA68C8',  // Medium light purple
    400: '#AB47BC',  // Medium purple
    500: '#9C27B0',  // Main purple
    600: '#8E24AA',  // Darker purple
    700: '#7B1FA2',  // Deep purple
    800: '#6A1B9A',  // Very dark purple
    900: '#4A148C',  // Darkest purple
  },

  // Accent Color: Coral/Orange - Warmth & Energy
  accent: {
    50: '#FFF3E0',   // Very light orange
    100: '#FFE0B2',  // Light orange
    200: '#FFCC80',  // Lighter orange
    300: '#FFB74D',  // Medium light orange
    400: '#FFA726',  // Medium orange
    500: '#FF9800',  // Main orange
    600: '#FB8C00',  // Darker orange - Coral
    700: '#F57C00',  // Deep orange
    800: '#EF6C00',  // Very dark orange
    900: '#E65100',  // Darkest orange
  },

  // Neutral Colors: Clean & Professional
  neutral: {
    50: '#FFFFFF',   // Pure white
    100: '#F8FAFC',  // Off white
    200: '#F1F5F9',  // Very light gray
    300: '#E2E8F0',  // Light gray
    400: '#CBD5E1',  // Medium light gray
    500: '#94A3B8',  // Medium gray
    600: '#64748B',  // Dark gray
    700: '#475569',  // Darker gray
    800: '#334155',  // Very dark gray
    900: '#1E293B',  // Darkest gray
    950: '#0F172A',  // Almost black
  },

  // Semantic Colors
  success: '#10B981',  // Green - Completed, Healthy
  warning: '#F59E0B',  // Amber - Warnings, Attention
  error: '#EF4444',    // Red - Errors, Critical
  info: '#3B82F6',     // Blue - Information

  // Healthcare-specific Status Colors
  status: {
    healthy: '#10B981',      // Green - Healthy vitals
    warning: '#F59E0B',      // Amber - Requires attention
    critical: '#EF4444',     // Red - Critical condition
    scheduled: '#3B82F6',    // Blue - Scheduled appointments
    completed: '#10B981',    // Green - Completed tasks
    inProgress: '#00BCD4',   // Cyan - In progress
    pending: '#F59E0B',      // Amber - Pending actions
    cancelled: '#94A3B8',    // Gray - Cancelled items
  },
};

// ============================================================================
// TYPOGRAPHY CONFIGURATION
// ============================================================================

export const brandTypography = {
  // Font Families
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
    heading: "'Poppins', 'Inter', sans-serif",
    mono: "'Fira Code', 'Monaco', monospace",
  },

  // Font Sizes (Tailwind-compatible)
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },

  // Font Weights
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
};

// ============================================================================
// SPACING & LAYOUT
// ============================================================================

export const brandSpacing = {
  // Spacing Scale (Tailwind-compatible)
  scale: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
  },

  // Border Radius
  radius: {
    none: '0',
    sm: '0.25rem',    // 4px
    base: '0.5rem',   // 8px - Default
    md: '0.75rem',    // 12px
    lg: '1rem',       // 16px
    xl: '1.5rem',     // 24px
    '2xl': '2rem',    // 32px
    full: '9999px',   // Pills/Circles
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    glow: '0 0 20px rgba(0, 188, 212, 0.3)', // Cyan glow effect
  },
};

// ============================================================================
// COMPONENT STYLES
// ============================================================================

export const brandComponents = {
  // Button Styles
  button: {
    sizes: {
      sm: {
        height: '2rem',        // 32px
        padding: '0.5rem 1rem', // 8px 16px
        fontSize: brandTypography.sizes.sm,
      },
      base: {
        height: '2.5rem',      // 40px
        padding: '0.625rem 1.5rem', // 10px 24px
        fontSize: brandTypography.sizes.base,
      },
      lg: {
        height: '3rem',        // 48px
        padding: '0.75rem 2rem', // 12px 32px
        fontSize: brandTypography.sizes.lg,
      },
    },
    radius: brandSpacing.radius.base, // 8px default
    iconSize: {
      sm: 16,
      base: 20,
      lg: 24,
    },
  },

  // Card Styles
  card: {
    padding: brandSpacing.scale[6],  // 24px
    radius: brandSpacing.radius.lg,  // 16px
    shadow: brandSpacing.shadows.md,
    border: `1px solid ${brandColors.neutral[200]}`,
  },

  // Input Styles
  input: {
    height: {
      sm: '2rem',    // 32px
      base: '2.5rem', // 40px
      lg: '3rem',     // 48px
    },
    padding: '0.75rem', // 12px
    radius: brandSpacing.radius.base, // 8px
    border: `1px solid ${brandColors.neutral[300]}`,
    focusBorder: `2px solid ${brandColors.primary[500]}`,
  },

  // Table Styles
  table: {
    headerBg: brandColors.primary[50],
    headerText: brandColors.neutral[700],
    rowHoverBg: brandColors.primary[50] + '30', // 30% opacity
    borderColor: brandColors.neutral[200],
    cellPadding: '0.75rem', // 12px
  },
};

// ============================================================================
// ICON CONFIGURATION
// ============================================================================

export const brandIcons = {
  // Icon Sizes
  sizes: {
    xs: 12,
    sm: 16,
    base: 20,
    md: 24,
    lg: 28,
    xl: 32,
    '2xl': 40,
  },

  // Stroke Width
  strokeWidth: {
    thin: 1.5,
    normal: 2,
    bold: 2.5,
    heavy: 3,
  },

  // Icon Colors (based on context)
  colors: {
    default: brandColors.neutral[600],
    primary: brandColors.primary[500],
    secondary: brandColors.secondary[500],
    accent: brandColors.accent[600],
    success: brandColors.success,
    warning: brandColors.warning,
    error: brandColors.error,
    muted: brandColors.neutral[400],
  },
};

// ============================================================================
// ANIMATION & TRANSITIONS
// ============================================================================

export const brandAnimations = {
  // Transition Durations
  duration: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Transition Timing Functions
  timing: {
    ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  // Common Transition Strings
  transitions: {
    all: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    colors: 'background-color 200ms, color 200ms, border-color 200ms',
    transform: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 'opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Hover Effects
  hover: {
    scale: 'scale(1.05)',
    scaleSmall: 'scale(1.02)',
    lift: 'translateY(-2px)',
    glow: `0 0 20px ${brandColors.primary[300]}`,
  },
};

// ============================================================================
// QUICK ACCESS BUTTON COLORS (for Home page)
// ============================================================================

export const quickActionColors = [
  { bg: brandColors.primary[500], hover: brandColors.primary[600], text: 'white' },
  { bg: brandColors.secondary[500], hover: brandColors.secondary[600], text: 'white' },
  { bg: '#EC4899', hover: '#DB2777', text: 'white' }, // Pink
  { bg: brandColors.accent[600], hover: brandColors.accent[700], text: 'white' },
  { bg: brandColors.error, hover: '#DC2626', text: 'white' },
  { bg: '#F59E0B', hover: '#D97706', text: 'white' }, // Amber
  { bg: '#8B5CF6', hover: '#7C3AED', text: 'white' }, // Violet
  { bg: '#10B981', hover: '#059669', text: 'white' }, // Emerald
  { bg: '#14B8A6', hover: '#0D9488', text: 'white' }, // Teal
  { bg: '#06B6D4', hover: '#0891B2', text: 'white' }, // Cyan
  { bg: '#3B82F6', hover: '#2563EB', text: 'white' }, // Blue
  { bg: '#6366F1', hover: '#4F46E5', text: 'white' }, // Indigo
];

// ============================================================================
// GRADIENT BACKGROUNDS
// ============================================================================

export const brandGradients = {
  primary: `linear-gradient(135deg, ${brandColors.primary[500]} 0%, ${brandColors.primary[700]} 100%)`,
  secondary: `linear-gradient(135deg, ${brandColors.secondary[500]} 0%, ${brandColors.secondary[700]} 100%)`,
  accent: `linear-gradient(135deg, ${brandColors.accent[500]} 0%, ${brandColors.accent[700]} 100%)`,
  hero: `linear-gradient(135deg, ${brandColors.primary[500]} 0%, ${brandColors.secondary[500]} 100%)`,
  subtle: `linear-gradient(180deg, ${brandColors.neutral[50]} 0%, ${brandColors.primary[50]} 100%)`,
  card: `linear-gradient(145deg, ${brandColors.neutral[50]} 0%, ${brandColors.neutral[100]} 100%)`,
};

// ============================================================================
// THEME EXPORT
// ============================================================================

export const brandTheme = {
  colors: brandColors,
  typography: brandTypography,
  spacing: brandSpacing,
  components: brandComponents,
  icons: brandIcons,
  animations: brandAnimations,
  gradients: brandGradients,
  quickActionColors,
};

// Default export
export default brandTheme;

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get a color with opacity
 * @param color - Hex color code
 * @param opacity - Opacity value (0-1)
 */
export const withOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

/**
 * Apply theme to CSS custom properties
 */
export const applyBrandTheme = (): void => {
  const root = document.documentElement;
  
  // Apply primary colors
  root.style.setProperty('--brand-primary', brandColors.primary[500]);
  root.style.setProperty('--brand-primary-light', brandColors.primary[100]);
  root.style.setProperty('--brand-primary-dark', brandColors.primary[700]);
  
  // Apply secondary colors
  root.style.setProperty('--brand-secondary', brandColors.secondary[500]);
  root.style.setProperty('--brand-secondary-light', brandColors.secondary[100]);
  root.style.setProperty('--brand-secondary-dark', brandColors.secondary[700]);
  
  // Apply accent colors
  root.style.setProperty('--brand-accent', brandColors.accent[600]);
  root.style.setProperty('--brand-accent-light', brandColors.accent[100]);
  root.style.setProperty('--brand-accent-dark', brandColors.accent[700]);
};
