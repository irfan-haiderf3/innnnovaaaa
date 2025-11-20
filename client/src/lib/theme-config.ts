/**
 * HEALTHBRIDGE DESIGN SYSTEM
 * Comprehensive theme configuration with multiple color schemes
 * Industry-standard healthcare UI/UX design patterns
 */

// =============================================================================
// COLOR SCHEMES - 3 Professional Healthcare Themes
// =============================================================================

export const colorSchemes = {
  // THEME 1: Medical Teal (Primary) - Trust & Professionalism
  medicalTeal: {
    name: "Medical Teal",
    primary: {
      50: "#E0F7F4",
      100: "#B3ECE6",
      200: "#80E0D7",
      300: "#4DD4C8",
      400: "#26CABC",
      500: "#00C1B0", // Main primary
      600: "#00B5A5",
      700: "#00A896",
      800: "#009688",
      900: "#007E6F",
    },
    secondary: {
      50: "#E1F5FE",
      100: "#B3E5FC",
      200: "#81D4FA",
      300: "#4FC3F7",
      400: "#29B6F6",
      500: "#03A9F4",
      600: "#039BE5",
      700: "#0288D1",
      800: "#0277BD",
      900: "#01579B",
    },
    accent: {
      50: "#F3E5F5",
      100: "#E1BEE7",
      200: "#CE93D8",
      300: "#BA68C8",
      400: "#AB47BC",
      500: "#9C27B0",
      600: "#8E24AA",
      700: "#7B1FA2",
      800: "#6A1B9A",
      900: "#4A148C",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F1F5F9",
      200: "#E2E8F0",
      300: "#CBD5E1",
      400: "#94A3B8",
      500: "#64748B",
      600: "#475569",
      700: "#334155",
      800: "#1E293B",
      900: "#0F172A",
    },
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#3B82F6",
  },

  // THEME 2: Clinical Blue - Modern & Clean
  clinicalBlue: {
    name: "Clinical Blue",
    primary: {
      50: "#EFF6FF",
      100: "#DBEAFE",
      200: "#BFDBFE",
      300: "#93C5FD",
      400: "#60A5FA",
      500: "#3B82F6", // Main primary
      600: "#2563EB",
      700: "#1D4ED8",
      800: "#1E40AF",
      900: "#1E3A8A",
    },
    secondary: {
      50: "#F0FDFA",
      100: "#CCFBF1",
      200: "#99F6E4",
      300: "#5EEAD4",
      400: "#2DD4BF",
      500: "#14B8A6",
      600: "#0D9488",
      700: "#0F766E",
      800: "#115E59",
      900: "#134E4A",
    },
    accent: {
      50: "#FFF7ED",
      100: "#FFEDD5",
      200: "#FED7AA",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#F97316",
      600: "#EA580C",
      700: "#C2410C",
      800: "#9A3412",
      900: "#7C2D12",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
    },
    success: "#22C55E",
    warning: "#EAB308",
    error: "#DC2626",
    info: "#0EA5E9",
  },

  // THEME 3: Wellness Green - Calm & Healing
  wellnessGreen: {
    name: "Wellness Green",
    primary: {
      50: "#F0FDF4",
      100: "#DCFCE7",
      200: "#BBF7D0",
      300: "#86EFAC",
      400: "#4ADE80",
      500: "#22C55E", // Main primary
      600: "#16A34A",
      700: "#15803D",
      800: "#166534",
      900: "#14532D",
    },
    secondary: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#F59E0B",
      600: "#D97706",
      700: "#B45309",
      800: "#92400E",
      900: "#78350F",
    },
    accent: {
      50: "#FDF4FF",
      100: "#FAE8FF",
      200: "#F5D0FE",
      300: "#F0ABFC",
      400: "#E879F9",
      500: "#D946EF",
      600: "#C026D3",
      700: "#A21CAF",
      800: "#86198F",
      900: "#701A75",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F5F5F4",
      200: "#E7E5E4",
      300: "#D6D3D1",
      400: "#A8A29E",
      500: "#78716C",
      600: "#57534E",
      700: "#44403C",
      800: "#292524",
      900: "#1C1917",
    },
    success: "#10B981",
    warning: "#F59E0B",
    error: "#F43F5E",
    info: "#06B6D4",
  },

  // THEME 4: Healthcare Trust & Alertness - Professional Dark Blue with Maroon Accents
  healthcareTrust: {
    name: "Healthcare Trust & Alertness",
    description: "Dark blue foundation for trust and stability, maroon/red accents for urgency",
    // Primary Color: Dark Blue - Trust, Security, Stability, Professionalism
    primary: {
      50: "#E8EFF8",   // Very light blue for backgrounds
      100: "#D1DFEF",  // Light blue for hover states
      200: "#A3BFE0",  // Lighter blue
      300: "#749FD0",  // Medium light blue
      400: "#4680C1",  // Medium blue
      500: "#1A5490",  // Main dark blue - Primary brand color
      600: "#154477",  // Darker blue
      700: "#10335E",  // Very dark blue for text
      800: "#0B2344",  // Extra dark blue
      900: "#06122B",  // Almost black blue
    },
    // Secondary/Accent Color: Maroon/Deep Red - Urgency, Action, Critical Alerts
    secondary: {
      50: "#FDF2F2",   // Very light red/pink for backgrounds
      100: "#FBE5E5",  // Light red for subtle highlights
      200: "#F7CBCB",  // Lighter maroon
      300: "#F3B1B1",  // Light maroon
      400: "#EF9797",  // Medium maroon
      500: "#8B2635",  // Main maroon - CTA buttons, critical actions
      600: "#771F2D",  // Darker maroon
      700: "#621826",  // Deep maroon
      800: "#4E121E",  // Very dark maroon
      900: "#3A0D16",  // Almost black maroon
    },
    // Accent: Lighter Blue/Teal - Informational elements, success states
    accent: {
      50: "#F0F9FF",   // Very light cyan
      100: "#E0F2FE",  // Light cyan
      200: "#BAE6FD",  // Lighter cyan
      300: "#7DD3FC",  // Light teal
      400: "#38BDF8",  // Medium teal
      500: "#0EA5E9",  // Teal - Informational elements
      600: "#0284C7",  // Darker teal
      700: "#0369A1",  // Deep teal
      800: "#075985",  // Very dark teal
      900: "#0C4A6E",  // Almost black teal
    },
    // Neutral: Pure white and grays for readability and cleanliness
    neutral: {
      50: "#FFFFFF",   // Pure white - backgrounds (light mode)
      100: "#F8F9FA",  // Off white
      200: "#E9ECEF",  // Light gray - card backgrounds
      300: "#DEE2E6",  // Medium light gray - dividers
      400: "#CED4DA",  // Medium gray - borders
      500: "#ADB5BD",  // Gray - disabled text
      600: "#6C757D",  // Dark gray - secondary text
      700: "#495057",  // Darker gray - body text
      800: "#343A40",  // Very dark gray
      900: "#212529",  // Almost black - headings
    },
    // Status colors
    success: "#10B981",    // Green - completed, healthy readings
    warning: "#F59E0B",    // Amber - warnings, caution
    error: "#DC2626",      // Bright red - errors, critical alerts
    info: "#0EA5E9",       // Teal - informational messages
    // Healthcare-specific colors
    urgent: "#8B2635",     // Maroon - urgent actions
    critical: "#DC2626",   // Red - critical health alerts
    normal: "#10B981",     // Green - normal/healthy status
  },

  // THEME 5: Navy Professional - Navy Blue with Coral Accents
  navyProfessional: {
    name: "Navy Professional",
    description: "Deep navy for authority, coral for warmth and approachability",
    primary: {
      50: "#E6EBF2",
      100: "#C0CFE0",
      200: "#96AFCC",
      300: "#6C8FB8",
      400: "#4D77A8",
      500: "#2E5F99",  // Navy blue
      600: "#295791",
      700: "#234D86",
      800: "#1D437C",
      900: "#123269",
    },
    secondary: {
      50: "#FFF3F0",
      100: "#FFE0D9",
      200: "#FFCBBF",
      300: "#FFB5A5",
      400: "#FFA592",
      500: "#FF9580",  // Coral
      600: "#FF8D78",
      700: "#FF826D",
      800: "#FF7863",
      900: "#FF6750",
    },
    accent: {
      50: "#E8F5F7",
      100: "#C5E6EA",
      200: "#9FD6DD",
      300: "#79C6CF",
      400: "#5CBAC4",
      500: "#40AEB9",  // Turquoise
      600: "#3AA7B2",
      700: "#329DAA",
      800: "#2A94A2",
      900: "#1C8493",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F7F8FA",
      200: "#EBEDF0",
      300: "#DFE1E6",
      400: "#CDD0D6",
      500: "#A8ACB5",
      600: "#6E7380",
      700: "#4A4F5C",
      800: "#32363F",
      900: "#1C1F26",
    },
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#40AEB9",
  },

  // THEME 6: Emerald Care - Emerald Green with Deep Purple
  emeraldCare: {
    name: "Emerald Care",
    description: "Healing emerald green with regal purple accents",
    primary: {
      50: "#ECFDF5",
      100: "#D1FAE5",
      200: "#A7F3D0",
      300: "#6EE7B7",
      400: "#34D399",
      500: "#059669",  // Emerald
      600: "#047857",
      700: "#065F46",
      800: "#064E3B",
      900: "#022C22",
    },
    secondary: {
      50: "#FAF5FF",
      100: "#F3E8FF",
      200: "#E9D5FF",
      300: "#D8B4FE",
      400: "#C084FC",
      500: "#7C3AED",  // Deep purple
      600: "#6D28D9",
      700: "#5B21B6",
      800: "#4C1D95",
      900: "#3B0764",
    },
    accent: {
      50: "#FFF7ED",
      100: "#FFEDD5",
      200: "#FED7AA",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#F97316",  // Orange
      600: "#EA580C",
      700: "#C2410C",
      800: "#9A3412",
      900: "#7C2D12",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#06B6D4",
  },

  // THEME 7: Royal Health - Royal Purple with Gold
  royalHealth: {
    name: "Royal Health",
    description: "Regal purple for premium care, gold for excellence",
    primary: {
      50: "#F5F3FF",
      100: "#EDE9FE",
      200: "#DDD6FE",
      300: "#C4B5FD",
      400: "#A78BFA",
      500: "#6B46C1",  // Royal purple
      600: "#5B21B6",
      700: "#4C1D95",
      800: "#3B0764",
      900: "#2E0555",
    },
    secondary: {
      50: "#FFFBEB",
      100: "#FEF3C7",
      200: "#FDE68A",
      300: "#FCD34D",
      400: "#FBBF24",
      500: "#D97706",  // Gold
      600: "#B45309",
      700: "#92400E",
      800: "#78350F",
      900: "#5A2708",
    },
    accent: {
      50: "#FFF1F2",
      100: "#FFE4E6",
      200: "#FECDD3",
      300: "#FDA4AF",
      400: "#FB7185",
      500: "#E11D48",  // Rose
      600: "#BE123C",
      700: "#9F1239",
      800: "#881337",
      900: "#6F0D2F",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F4F4F5",
      200: "#E4E4E7",
      300: "#D4D4D8",
      400: "#A1A1AA",
      500: "#71717A",
      600: "#52525B",
      700: "#3F3F46",
      800: "#27272A",
      900: "#18181B",
    },
    success: "#10B981",
    warning: "#F59E0B",
    error: "#DC2626",
    info: "#8B5CF6",
  },

  // THEME 8: Ocean Therapy - Ocean Blue with Sunset Orange
  oceanTherapy: {
    name: "Ocean Therapy",
    description: "Calming ocean blues with energizing sunset orange",
    primary: {
      50: "#F0F9FF",
      100: "#E0F2FE",
      200: "#BAE6FD",
      300: "#7DD3FC",
      400: "#38BDF8",
      500: "#0284C7",  // Ocean blue
      600: "#0369A1",
      700: "#075985",
      800: "#0C4A6E",
      900: "#082F49",
    },
    secondary: {
      50: "#FFF7ED",
      100: "#FFEDD5",
      200: "#FED7AA",
      300: "#FDBA74",
      400: "#FB923C",
      500: "#EA580C",  // Sunset orange
      600: "#C2410C",
      700: "#9A3412",
      800: "#7C2D12",
      900: "#5A1F08",
    },
    accent: {
      50: "#ECFDF5",
      100: "#D1FAE5",
      200: "#A7F3D0",
      300: "#6EE7B7",
      400: "#34D399",
      500: "#10B981",  // Mint green
      600: "#059669",
      700: "#047857",
      800: "#065F46",
      900: "#064E3B",
    },
    neutral: {
      50: "#FFFFFF",
      100: "#F8FAFC",
      200: "#F1F5F9",
      300: "#E2E8F0",
      400: "#CBD5E1",
      500: "#94A3B8",
      600: "#64748B",
      700: "#475569",
      800: "#334155",
      900: "#1E293B",
    },
    success: "#10B981",
    warning: "#F59E0B",
    error: "#EF4444",
    info: "#0EA5E9",
  },
};

// =============================================================================
// TYPOGRAPHY STANDARDS
// =============================================================================

export const typography = {
  // Primary Font: Inter - Modern, highly legible, professional
  fontFamily: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    secondary: "'Poppins', sans-serif", // For headings and emphasis
    mono: "'Fira Code', 'Courier New', monospace", // For codes/IDs
  },

  // Font Sizes - Compact & Efficient Scale
  fontSize: {
    xs: "0.6875rem",    // 11px - Tiny labels
    sm: "0.8125rem",    // 13px - Small text, table cells
    base: "0.875rem",   // 14px - Body text (DEFAULT)
    md: "0.9375rem",    // 15px - Slightly larger body
    lg: "1rem",         // 16px - Subheadings
    xl: "1.125rem",     // 18px - Section titles
    "2xl": "1.25rem",   // 20px - Page titles
    "3xl": "1.5rem",    // 24px - Major headings
    "4xl": "1.875rem",  // 30px - Hero text
  },

  // Font Weights
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Line Heights - Compact for efficiency
  lineHeight: {
    tight: 1.2,
    snug: 1.35,
    normal: 1.5,
    relaxed: 1.625,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: "-0.02em",
    tight: "-0.01em",
    normal: "0",
    wide: "0.01em",
  },
};

// =============================================================================
// SPACING SYSTEM - Compact & Efficient
// =============================================================================

export const spacing = {
  none: "0",
  xs: "0.25rem",      // 4px
  sm: "0.5rem",       // 8px
  md: "0.75rem",      // 12px
  base: "1rem",       // 16px
  lg: "1.25rem",      // 20px
  xl: "1.5rem",       // 24px
  "2xl": "2rem",      // 32px
  "3xl": "2.5rem",    // 40px
  "4xl": "3rem",      // 48px
};

// =============================================================================
// ICON STANDARDS
// =============================================================================

export const iconStandards = {
  // Icon Library: Lucide React (Modern, consistent, tree-shakeable)
  library: "lucide-react",
  
  // Icon Sizes - Compact & Consistent
  sizes: {
    xs: 12,      // Tiny icons in badges
    sm: 14,      // Small icons in compact UI
    base: 16,    // Default icon size
    md: 18,      // Medium icons
    lg: 20,      // Larger icons in headers
    xl: 24,      // Hero icons
    "2xl": 32,   // Extra large
  },

  // Stroke Width
  strokeWidth: {
    thin: 1.5,
    normal: 2,
    bold: 2.5,
  },
};

// =============================================================================
// COMPONENT STANDARDS
// =============================================================================

export const componentStandards = {
  // Border Radius
  borderRadius: {
    none: "0",
    sm: "0.25rem",     // 4px
    base: "0.375rem",  // 6px
    md: "0.5rem",      // 8px
    lg: "0.75rem",     // 12px
    xl: "1rem",        // 16px
    full: "9999px",
  },

  // Shadows - Subtle & Professional
  shadow: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  // Transitions
  transition: {
    fast: "150ms cubic-bezier(0.4, 0, 0.2, 1)",
    base: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  // Heights - Compact Input/Button Heights
  height: {
    input: {
      sm: "1.75rem",    // 28px - Very compact
      base: "2rem",     // 32px - Default
      md: "2.25rem",    // 36px - Comfortable
      lg: "2.5rem",     // 40px - Large
    },
    button: {
      sm: "1.75rem",    // 28px
      base: "2rem",     // 32px
      md: "2.25rem",    // 36px
      lg: "2.5rem",     // 40px
    },
  },
};

// =============================================================================
// FORM DESIGN STANDARDS
// =============================================================================

export const formStandards = {
  principles: [
    "Compact design - minimize vertical space",
    "Minimal scrolling - fit more on screen",
    "Efficient data handling - pagination, virtual scrolling",
    "One-click interactions - reduce steps",
    "No extra spacing - maximize content density",
    "Advanced techniques - smart defaults, inline editing",
  ],

  layout: {
    // Grid columns for different screen sizes
    columns: {
      mobile: 1,
      tablet: 2,
      desktop: 3,
      wide: 4,
    },
    // Gap between form fields
    gap: spacing.md, // 12px - compact but breathable
    // Label positioning
    labelPosition: "top", // or "left" for inline
    // Field grouping
    groupSpacing: spacing.lg, // 20px between groups
  },

  inputs: {
    // Compact padding
    padding: {
      vertical: "0.375rem",   // 6px
      horizontal: "0.75rem",  // 12px
    },
    // Border style
    border: {
      width: "1px",
      style: "solid",
      focusWidth: "2px",
    },
    // Font size
    fontSize: typography.fontSize.sm, // 13px for compact forms
  },

  buttons: {
    // Compact sizing
    padding: {
      sm: "0.375rem 0.75rem",   // 6px 12px
      base: "0.5rem 1rem",       // 8px 16px
      lg: "0.625rem 1.25rem",    // 10px 20px
    },
    // Minimum width for consistency
    minWidth: "5rem", // 80px
  },
};

// =============================================================================
// STATUS COLORS
// =============================================================================

export const statusColors = {
  // Universal status color system
  completed: "#10B981",    // Green
  inProgress: "#F59E0B",   // Orange
  assigned: "#3B82F6",     // Blue
  delayed: "#EF4444",      // Red
  unassigned: "#2C5282",   // Deep blue (changed from purple)
  cancelled: "#6B7280",    // Gray
  pending: "#F59E0B",      // Orange
  provisional: "#EC4899",  // Pink
  updateRequired: "#2C5282", // Deep blue (changed from purple)
};

// =============================================================================
// EXPORT DEFAULT THEME
// =============================================================================

export type ThemeScheme = keyof typeof colorSchemes;

// Set Healthcare Trust & Alertness as the default theme
export const defaultTheme: ThemeScheme = "healthcareTrust";

export const getTheme = (scheme: ThemeScheme = defaultTheme) => ({
  colors: colorSchemes[scheme],
  typography,
  spacing,
  icons: iconStandards,
  components: componentStandards,
  forms: formStandards,
  status: statusColors,
});

export type Theme = ReturnType<typeof getTheme>;

// =============================================================================
// HELPER FUNCTIONS FOR EASY THEME MANAGEMENT
// =============================================================================

/**
 * Convert hex color to HSL format for CSS variables
 * @param hex - Hex color code (e.g., "#1A5490")
 * @returns HSL string (e.g., "210 65% 34%")
 */
export function hexToHSL(hex: string): string {
  // Remove # if present
  hex = hex.replace(/^#/, '');
  
  // Parse hex values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;
  
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
 * Apply theme colors to CSS variables
 * This function updates the CSS custom properties on the document root
 * @param scheme - Theme scheme to apply
 */
export function applyThemeToCSS(scheme: ThemeScheme = defaultTheme): void {
  const theme = colorSchemes[scheme];
  const root = document.documentElement;
  
  // Apply primary colors
  root.style.setProperty('--primary', hexToHSL(theme.primary[500]));
  root.style.setProperty('--primary-foreground', hexToHSL(theme.neutral[50]));
  
  // Apply secondary colors (maroon/red accent)
  root.style.setProperty('--destructive', hexToHSL(theme.secondary[500]));
  root.style.setProperty('--destructive-foreground', hexToHSL(theme.neutral[50]));
  
  // Apply accent colors (teal/info)
  root.style.setProperty('--accent', hexToHSL(theme.accent[500]));
  root.style.setProperty('--accent-foreground', hexToHSL(theme.neutral[900]));
  
  // Apply neutral colors
  root.style.setProperty('--background', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--foreground', hexToHSL(theme.neutral[900]));
  root.style.setProperty('--card', hexToHSL(theme.neutral[100]));
  root.style.setProperty('--card-foreground', hexToHSL(theme.neutral[900]));
  root.style.setProperty('--border', hexToHSL(theme.neutral[300]));
  root.style.setProperty('--input', hexToHSL(theme.neutral[400]));
  
  // Apply muted colors
  root.style.setProperty('--muted', hexToHSL(theme.neutral[200]));
  root.style.setProperty('--muted-foreground', hexToHSL(theme.neutral[600]));
  
  // Apply sidebar colors
  root.style.setProperty('--sidebar', hexToHSL(theme.primary[700]));
  root.style.setProperty('--sidebar-foreground', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--sidebar-primary', hexToHSL(theme.primary[500]));
  root.style.setProperty('--sidebar-primary-foreground', hexToHSL(theme.neutral[50]));
  root.style.setProperty('--sidebar-accent', hexToHSL(theme.primary[600]));
  root.style.setProperty('--sidebar-accent-foreground', hexToHSL(theme.neutral[50]));
  
  // Apply ring color (focus indicator)
  root.style.setProperty('--ring', hexToHSL(theme.primary[500]));
}

/**
 * Get current theme scheme from localStorage or default
 */
export function getCurrentTheme(): ThemeScheme {
  const stored = localStorage.getItem('healthbridge-theme');
  return (stored as ThemeScheme) || defaultTheme;
}

/**
 * Set and persist theme scheme
 * @param scheme - Theme scheme to set
 */
export function setTheme(scheme: ThemeScheme): void {
  localStorage.setItem('healthbridge-theme', scheme);
  applyThemeToCSS(scheme);
}

/**
 * Initialize theme on app startup
 */
export function initializeTheme(): void {
  const currentTheme = getCurrentTheme();
  applyThemeToCSS(currentTheme);
}
