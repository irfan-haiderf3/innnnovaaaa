/**
 * ============================================================================
 * INNOVACARE - MODERN HEALTHCARE DESIGN SYSTEM
 * ============================================================================
 * 
 * 4-COLOR MINIMALIST PALETTE INSPIRED BY HEALTHLINE
 * 
 * Design Philosophy:
 * - Clean, minimal, professional
 * - High contrast for readability
 * - No gradients - flat modern design
 * - Automatic font color based on background
 */

// ============================================================================
// 4-COLOR SYSTEM
// ============================================================================

export const InnovacareColors = {
  // 1. PRIMARY - Deep Healthcare Blue (Professional, Trust)
  primary: '#2C5282',  // Deep blue - main brand color (NOT #00B2C8 as requested)
  
  // 2. ACCENT - Deep Blue (Professional, Healthcare)
  accent: '#2C5282',   // Deep blue - CTAs and highlights (changed from purple)
  
  // 3. BACKGROUND - Clean White
  background: '#FFFFFF', // Pure white - main background
  
  // 4. TEXT/NEUTRAL - Charcoal Gray
  text: '#2D3748',      // Dark gray - primary text
};

// ============================================================================
// EXTENDED PALETTE (Derived from 4 base colors)
// ============================================================================

export const InnovacarePalette = {
  // Primary shades (derived from primary)
  primary: {
    light: '#4A7AB7',    // 20% lighter
    main: InnovacareColors.primary,
    dark: '#1A365D',     // 20% darker
    contrast: '#FFFFFF', // Text on primary bg
  },
  
  // Accent shades (derived from accent)
  accent: {
    light: '#4A7AB7',    // 20% lighter blue
    main: InnovacareColors.accent,
    dark: '#1A365D',     // 20% darker blue
    contrast: '#FFFFFF', // Text on accent bg
  },
  
  // Neutrals (derived from text color)
  neutral: {
    50: '#F7FAFC',      // Lightest gray
    100: '#EDF2F7',     // Very light gray
    200: '#E2E8F0',     // Light gray
    300: '#CBD5E0',     // Medium light gray
    400: '#A0AEC0',     // Medium gray
    500: '#718096',     // Gray
    600: '#4A5568',     // Medium dark gray
    700: InnovacareColors.text, // Dark gray (main text)
    800: '#1A202C',     // Very dark gray
    900: '#171923',     // Darkest gray
  },
  
  // Semantic colors
  success: '#48BB78',   // Green
  warning: '#ED8936',   // Orange
  error: '#F56565',     // Red
  info: InnovacareColors.accent, // Use accent for info
};

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const InnovacareTypography = {
  // Font families - clean, modern, medical
  fontFamily: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: '"Roboto Mono", "Courier New", monospace',
  },
  
  // Font sizes - clear hierarchy
  fontSize: {
    xs: '0.75rem',     // 12px
    sm: '0.875rem',    // 14px
    base: '1rem',      // 16px
    lg: '1.125rem',    // 18px
    xl: '1.25rem',     // 20px
    '2xl': '1.5rem',   // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
  },
  
  // Font weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

// ============================================================================
// SPACING & LAYOUT
// ============================================================================

export const InnovacareSpacing = {
  // Spacing scale
  space: {
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
  
  // Border radius - modern, slightly rounded
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // 2px
    base: '0.25rem', // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    full: '9999px',
  },
  
  // Shadows - subtle depth
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
};

// ============================================================================
// ANIMATIONS (Healthline-style)
// ============================================================================

export const InnovacareAnimations = {
  // Transitions
  transition: {
    fast: '150ms ease',
    base: '200ms ease',
    slow: '300ms ease',
    slower: '500ms ease',
  },
  
  // Hover scale
  hoverScale: {
    sm: 'scale(1.02)',
    base: 'scale(1.05)',
    lg: 'scale(1.1)',
  },
  
  // Hover lift
  hoverLift: {
    sm: 'translateY(-2px)',
    base: 'translateY(-4px)',
    lg: 'translateY(-6px)',
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get contrast text color based on background
 * Returns white for dark backgrounds, dark for light backgrounds
 */
export function getContrastText(bgColor: string): string {
  // Simple contrast check - use white on primary/accent, dark on light backgrounds
  if (bgColor === InnovacareColors.primary || 
      bgColor === InnovacareColors.accent ||
      bgColor === InnovacarePalette.primary.dark ||
      bgColor === InnovacarePalette.accent.dark) {
    return '#FFFFFF';
  }
  return InnovacareColors.text;
}

/**
 * Apply Innovacare theme to CSS variables and global scrollbar styles
 */
export function applyInnovacareTheme(): void {
  const root = document.documentElement;
  
  // Set color variables
  root.style.setProperty('--color-primary', InnovacareColors.primary);
  root.style.setProperty('--color-accent', InnovacareColors.accent);
  root.style.setProperty('--color-background', InnovacareColors.background);
  root.style.setProperty('--color-text', InnovacareColors.text);
  
  // Set extended palette
  Object.entries(InnovacarePalette.neutral).forEach(([key, value]) => {
    root.style.setProperty(`--color-neutral-${key}`, value);
  });
  
  // Set typography
  root.style.setProperty('--font-sans', InnovacareTypography.fontFamily.sans);
  root.style.setProperty('--font-mono', InnovacareTypography.fontFamily.mono);
  
  // Set shadows
  Object.entries(InnovacareSpacing.boxShadow).forEach(([key, value]) => {
    root.style.setProperty(`--shadow-${key}`, value);
  });

  // Apply global dark blue scrollbar styles for better visibility
  applyGlobalScrollbarStyles();
}

/**
 * Apply global dark blue scrollbar styles for all scrollable areas
 * This makes scrollbars highly visible with InnovaCare primary color
 */
export function applyGlobalScrollbarStyles(): void {
  // Check if style element already exists
  let styleElement = document.getElementById('innovacare-scrollbar-styles');
  
  if (!styleElement) {
    styleElement = document.createElement('style');
    styleElement.id = 'innovacare-scrollbar-styles';
    document.head.appendChild(styleElement);
  }

  // Global scrollbar styles with dark blue color for visibility
  styleElement.textContent = `
    /* Global scrollbar styles - Dark Blue for high visibility */
    * {
      scrollbar-width: thin;
      scrollbar-color: ${InnovacareColors.primary} ${InnovacarePalette.neutral[100]};
    }

    /* Webkit browsers (Chrome, Safari, Edge) */
    *::-webkit-scrollbar {
      width: 12px;
      height: 12px;
    }

    *::-webkit-scrollbar-track {
      background: ${InnovacarePalette.neutral[100]};
      border-radius: 4px;
    }

    *::-webkit-scrollbar-thumb {
      background: ${InnovacareColors.primary};
      border-radius: 4px;
      border: 2px solid ${InnovacarePalette.neutral[100]};
    }

    *::-webkit-scrollbar-thumb:hover {
      background: ${InnovacarePalette.primary.dark};
    }

    /* Specific styling for tables and horizontal scroll */
    .overflow-x-auto::-webkit-scrollbar,
    .overflow-y-auto::-webkit-scrollbar,
    [role="table"]::-webkit-scrollbar,
    .custom-scrollbar::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    /* Horizontal scrollbar for tables */
    .overflow-x-auto::-webkit-scrollbar-thumb,
    [role="table"]::-webkit-scrollbar-thumb {
      background: ${InnovacareColors.primary};
      border-radius: 6px;
    }

    /* Ensure scrollbars are always visible for better UX */
    .overflow-x-auto,
    .overflow-y-auto,
    .overflow-auto {
      scrollbar-color: ${InnovacareColors.primary} ${InnovacarePalette.neutral[100]};
    }
  `;
}

// ============================================================================
// COMPONENT STYLES
// ============================================================================

export const InnovacareComponents = {
  // Button styles - flat, modern
  button: {
    primary: {
      background: InnovacareColors.primary,
      color: '#FFFFFF',
      hover: InnovacarePalette.primary.dark,
      border: 'none',
    },
    accent: {
      background: InnovacareColors.accent,
      color: '#FFFFFF',
      hover: InnovacarePalette.accent.dark,
      border: 'none',
    },
    outline: {
      background: 'transparent',
      color: InnovacareColors.primary,
      hover: InnovacarePalette.neutral[50],
      border: `2px solid ${InnovacareColors.primary}`,
    },
    ghost: {
      background: 'transparent',
      color: InnovacareColors.text,
      hover: InnovacarePalette.neutral[100],
      border: 'none',
    },
  },
  
  // Card styles - clean, minimal
  card: {
    background: InnovacareColors.background,
    border: `1px solid ${InnovacarePalette.neutral[200]}`,
    borderRadius: InnovacareSpacing.borderRadius.lg,
    boxShadow: InnovacareSpacing.boxShadow.sm,
    hover: {
      boxShadow: InnovacareSpacing.boxShadow.md,
      transform: InnovacareAnimations.hoverLift.sm,
    },
  },
  
  // Table styles - clean data presentation
  table: {
    headerBg: InnovacarePalette.neutral[100],
    headerText: InnovacareColors.text,
    rowBg: InnovacareColors.background,
    rowAltBg: InnovacarePalette.neutral[50],
    rowHover: InnovacarePalette.accent.light + '20',
    borderColor: InnovacarePalette.neutral[200],
  },
  
  // Navigation styles - flat, modern
  navigation: {
    background: InnovacareColors.background,
    text: InnovacareColors.text,
    active: {
      background: InnovacareColors.primary,
      text: '#FFFFFF',
    },
    hover: {
      background: InnovacarePalette.neutral[100],
      text: InnovacareColors.primary,
    },
  },
};

// ============================================================================
// EXPORT DEFAULT THEME
// ============================================================================

const InnovacareTheme = {
  colors: InnovacareColors,
  palette: InnovacarePalette,
  typography: InnovacareTypography,
  spacing: InnovacareSpacing,
  animations: InnovacareAnimations,
  components: InnovacareComponents,
  utils: {
    getContrastText,
    applyTheme: applyInnovacareTheme,
    applyScrollbarStyles: applyGlobalScrollbarStyles,
  },
};

export default InnovacareTheme;
