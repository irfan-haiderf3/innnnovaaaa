import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Briefcase,
  HelpCircle,
  Wrench,
  BarChart3,
  Settings as SettingsIcon,
  Shield,
  LogOut,
  Menu,
  X,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  UserX,
  Package,
  ArrowUpDown,
  Mail,
  Phone,
  User,
  Users,
  Building2,
  Stethoscope,
  Heart,
  Activity,
  Pill,
  Syringe,
  ClipboardList,
  UserCheck,
  BellRing,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  RefreshCw,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Check,
  AlertTriangle,
  Info,
  MessageCircle,
  Bell,
  Star,
  Home,
  type LucideIcon,
} from "lucide-react";

// Icon Registry - organized by category
export const IconRegistry = {
  // Navigation
  navigation: {
    dashboard: LayoutDashboard,
    calendar: Calendar,
    documents: FileText,
    billing: DollarSign,
    jobs: Briefcase,
    help: HelpCircle,
    maintenance: Wrench,
    analytics: BarChart3,
    settings: SettingsIcon,
    home: Home,
  },

  // User & Auth
  user: {
    profile: User,
    users: Users,
    shield: Shield,
    logout: LogOut,
    lock: Lock,
    unlock: Unlock,
    userCheck: UserCheck,
  },

  // Actions
  actions: {
    menu: Menu,
    close: X,
    search: Search,
    filter: Filter,
    add: Plus,
    edit: Edit,
    delete: Trash2,
    save: Save,
    download: Download,
    upload: Upload,
    refresh: RefreshCw,
    sort: ArrowUpDown,
  },

  // Status
  status: {
    success: CheckCircle2,
    pending: Clock,
    warning: AlertCircle,
    error: XCircle,
    cancelled: XCircle,
    unassigned: UserX,
    assigned: Package,
    info: Info,
    alertTriangle: AlertTriangle,
  },

  // Healthcare
  healthcare: {
    stethoscope: Stethoscope,
    heart: Heart,
    activity: Activity,
    pill: Pill,
    syringe: Syringe,
    clipboard: ClipboardList,
  },

  // Communication
  communication: {
    mail: Mail,
    phone: Phone,
    message: MessageCircle,
    bell: Bell,
    notification: BellRing,
  },

  // UI Elements
  ui: {
    chevronRight: ChevronRight,
    chevronLeft: ChevronLeft,
    chevronDown: ChevronDown,
    chevronUp: ChevronUp,
    eye: Eye,
    eyeOff: EyeOff,
    check: Check,
    star: Star,
  },

  // Business
  business: {
    building: Building2,
    trendingUp: TrendingUp,
    trendingDown: TrendingDown,
  },
} as const;

// Icon Presets for common use cases
export const IconPresets = {
  statusBadge: {
    completed: {
      icon: IconRegistry.status.success,
      variant: "success" as const,
      size: "sm" as const,
      strokeWidth: 2.5,
      animated: false,
    },
    "in-progress": {
      icon: IconRegistry.status.pending,
      variant: "accent" as const,
      size: "sm" as const,
      strokeWidth: 2.5,
      animated: true,
    },
    assigned: {
      icon: IconRegistry.status.assigned,
      variant: "primary" as const,
      size: "sm" as const,
      strokeWidth: 2.5,
      animated: false,
    },
    delayed: {
      icon: IconRegistry.status.warning,
      variant: "warning" as const,
      size: "sm" as const,
      strokeWidth: 2.5,
      animated: true,
    },
    unassigned: {
      icon: IconRegistry.status.unassigned,
      variant: "secondary" as const,
      size: "sm" as const,
      strokeWidth: 2,
      animated: false,
    },
    cancelled: {
      icon: IconRegistry.status.cancelled,
      variant: "ghost" as const,
      size: "sm" as const,
      strokeWidth: 2,
      animated: false,
    },
  },

  navigation: {
    primary: {
      size: "md" as const,
      strokeWidth: 2,
      animated: true,
    },
    secondary: {
      size: "sm" as const,
      strokeWidth: 2,
      animated: false,
    },
  },

  button: {
    default: {
      size: "md" as const,
      strokeWidth: 2,
      animated: true,
    },
    small: {
      size: "sm" as const,
      strokeWidth: 2,
      animated: true,
    },
  },
} as const;

// Helper function to get icon by string path
export function getIcon(path: string): LucideIcon | null {
  const parts = path.split(".");
  let current: any = IconRegistry;

  for (const part of parts) {
    if (current && typeof current === "object" && part in current) {
      current = current[part];
    } else {
      return null;
    }
  }

  return current as LucideIcon;
}

// Status icon configuration
export const StatusIconConfig = {
  Completed: {
    icon: CheckCircle2,
    className: "text-green-600 dark:text-green-400",
    glowClass: "drop-shadow-[0_0_6px_rgb(34,197,94,0.5)]",
  },
  "In Progress": {
    icon: Clock,
    className: "text-blue-600 dark:text-blue-400",
    glowClass: "drop-shadow-[0_0_6px_rgb(59,130,246,0.5)]",
    animated: true,
  },
  Assigned: {
    icon: Package,
    className: "text-purple-600 dark:text-purple-400",
    glowClass: "drop-shadow-[0_0_6px_rgb(168,85,247,0.5)]",
  },
  Delayed: {
    icon: AlertCircle,
    className: "text-amber-600 dark:text-amber-400",
    glowClass: "drop-shadow-[0_0_6px_rgb(245,158,11,0.5)]",
    animated: true,
  },
  Unassigned: {
    icon: UserX,
    className: "text-gray-600 dark:text-gray-400",
    glowClass: "drop-shadow-[0_0_6px_rgb(107,114,128,0.5)]",
  },
  Cancelled: {
    icon: XCircle,
    className: "text-red-600 dark:text-red-400",
    glowClass: "drop-shadow-[0_0_6px_rgb(239,68,68,0.5)]",
  },
} as const;

// CSS classes for consistent icon styling
export const IconStyles = {
  // Base styles
  base: "transition-all duration-200 ease-in-out",
  
  // Interactive states
  interactive: "hover:scale-110 active:scale-95 cursor-pointer",
  
  // Visual effects
  shadow: "drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]",
  glow: "drop-shadow-[0_0_8px_currentColor]",
  
  // Sizes
  sizes: {
    xs: "h-3 w-3",
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
    "2xl": "h-10 w-10",
  },
  
  // Animations
  animations: {
    spin: "animate-spin",
    pulse: "animate-pulse",
    bounce: "animate-bounce",
    ping: "animate-ping",
  },
} as const;

// Helper to combine icon classes
export function combineIconClasses(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Export commonly used icons for convenience
export {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Briefcase,
  HelpCircle,
  Wrench,
  BarChart3,
  SettingsIcon,
  Shield,
  LogOut,
  Menu,
  X,
  CheckCircle2,
  Clock,
  AlertCircle,
  XCircle,
  UserX,
  Package,
  ArrowUpDown,
  Mail,
  Phone,
  User,
  Users,
  Building2,
  Stethoscope,
  Heart,
  Activity,
  Pill,
  Syringe,
  ClipboardList,
  UserCheck,
  BellRing,
  TrendingUp,
  TrendingDown,
};
