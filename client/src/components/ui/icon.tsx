import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export type IconSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type IconVariant = "default" | "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "ghost";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  icon: LucideIcon;
  size?: IconSize;
  variant?: IconVariant;
  animated?: boolean;
  glowEffect?: boolean;
  strokeWidth?: number;
  className?: string;
}

const sizeClasses: Record<IconSize, string> = {
  xs: "h-3 w-3",
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
  xl: "h-8 w-8",
  "2xl": "h-10 w-10",
};

const variantClasses: Record<IconVariant, string> = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent-foreground",
  success: "text-green-600 dark:text-green-400",
  warning: "text-amber-600 dark:text-amber-400",
  error: "text-red-600 dark:text-red-400",
  ghost: "text-muted-foreground",
};

const Icon = forwardRef<HTMLSpanElement, IconProps>(
  (
    {
      icon: IconComponent,
      size = "md",
      variant = "default",
      animated = false,
      glowEffect = false,
      strokeWidth = 2,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          animated && "transition-all duration-300 ease-in-out hover:scale-110",
          glowEffect && "drop-shadow-[0_0_8px_currentColor]",
          className
        )}
        {...props}
      >
        <IconComponent
          className={cn(
            sizeClasses[size],
            variantClasses[variant],
            "transition-colors duration-200"
          )}
          strokeWidth={strokeWidth}
        />
      </span>
    );
  }
);

Icon.displayName = "Icon";

export { Icon };

// Specialized Icon Components
interface IconButtonProps extends IconProps {
  onClick?: () => void;
  disabled?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps & { asChild?: boolean }>(
  (
    {
      icon: IconComponent,
      size = "md",
      variant = "default",
      onClick,
      disabled = false,
      className,
      strokeWidth = 2,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg",
          "transition-all duration-200 ease-in-out",
          "hover:bg-accent hover:shadow-md hover:scale-105",
          "active:scale-95",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          size === "xs" && "p-1",
          size === "sm" && "p-1.5",
          size === "md" && "p-2",
          size === "lg" && "p-2.5",
          size === "xl" && "p-3",
          className
        )}
        {...props}
      >
        <IconComponent
          className={cn(sizeClasses[size], variantClasses[variant])}
          strokeWidth={strokeWidth}
        />
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

// Icon with Badge
interface IconWithBadgeProps extends IconProps {
  badgeContent?: string | number;
  badgeVariant?: "primary" | "secondary" | "success" | "warning" | "error";
}

export const IconWithBadge = forwardRef<HTMLSpanElement, IconWithBadgeProps>(
  (
    {
      icon: IconComponent,
      size = "md",
      variant = "default",
      badgeContent,
      badgeVariant = "primary",
      className,
      strokeWidth = 2,
      ...props
    },
    ref
  ) => {
    const badgeColors = {
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      success: "bg-green-500 text-white",
      warning: "bg-amber-500 text-white",
      error: "bg-red-500 text-white",
    };

    return (
      <span ref={ref} className={cn("relative inline-flex", className)} {...props}>
        <IconComponent
          className={cn(sizeClasses[size], variantClasses[variant])}
          strokeWidth={strokeWidth}
        />
        {badgeContent && (
          <span
            className={cn(
              "absolute -top-1 -right-1 flex items-center justify-center",
              "min-w-[1.25rem] h-5 px-1 rounded-full",
              "text-[10px] font-bold leading-none",
              "shadow-lg ring-2 ring-background",
              "animate-in zoom-in-50 duration-200",
              badgeColors[badgeVariant]
            )}
          >
            {badgeContent}
          </span>
        )}
      </span>
    );
  }
);

IconWithBadge.displayName = "IconWithBadge";

// Animated Status Icon
interface StatusIconProps extends IconProps {
  status: "success" | "warning" | "error" | "loading";
  pulse?: boolean;
}

export const StatusIcon = forwardRef<HTMLSpanElement, StatusIconProps>(
  ({ icon: IconComponent, size = "md", status, pulse = false, className, strokeWidth = 2, ...props }, ref) => {
    const statusClasses = {
      success: "text-green-600 dark:text-green-400",
      warning: "text-amber-600 dark:text-amber-400",
      error: "text-red-600 dark:text-red-400",
      loading: "text-blue-600 dark:text-blue-400 animate-spin",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          pulse && "animate-pulse",
          className
        )}
        {...props}
      >
        <IconComponent
          className={cn(sizeClasses[size], statusClasses[status], "transition-colors duration-200")}
          strokeWidth={strokeWidth}
        />
      </span>
    );
  }
);

StatusIcon.displayName = "StatusIcon";
