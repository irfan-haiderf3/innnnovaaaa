/**
 * Modern Button Component
 * Eye-catching, animated buttons with gradient backgrounds and modern styling
 * Replaces old button patterns with fresh, professional design
 */

import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { brandColors, brandGradients, brandAnimations } from "@/config/branding";

export interface ModernButtonProps {
  children?: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  loading?: boolean;
}

const variantStyles = {
  primary: {
    background: brandGradients.primary,
    color: 'white',
    hoverShadow: `0 8px 16px ${brandColors.primary[300]}`,
    activeShadow: `0 2px 8px ${brandColors.primary[400]}`,
    border: 'none',
  },
  secondary: {
    background: brandGradients.secondary,
    color: 'white',
    hoverShadow: `0 8px 16px ${brandColors.secondary[300]}`,
    activeShadow: `0 2px 8px ${brandColors.secondary[400]}`,
    border: 'none',
  },
  accent: {
    background: brandGradients.accent,
    color: 'white',
    hoverShadow: `0 8px 16px ${brandColors.accent[300]}`,
    activeShadow: `0 2px 8px ${brandColors.accent[400]}`,
    border: 'none',
  },
  success: {
    background: `linear-gradient(135deg, ${brandColors.success} 0%, #059669 100%)`,
    color: 'white',
    hoverShadow: '0 8px 16px rgba(16, 185, 129, 0.3)',
    activeShadow: '0 2px 8px rgba(16, 185, 129, 0.4)',
    border: 'none',
  },
  warning: {
    background: `linear-gradient(135deg, ${brandColors.warning} 0%, #D97706 100%)`,
    color: 'white',
    hoverShadow: '0 8px 16px rgba(245, 158, 11, 0.3)',
    activeShadow: '0 2px 8px rgba(245, 158, 11, 0.4)',
    border: 'none',
  },
  error: {
    background: `linear-gradient(135deg, ${brandColors.error} 0%, #DC2626 100%)`,
    color: 'white',
    hoverShadow: '0 8px 16px rgba(239, 68, 68, 0.3)',
    activeShadow: '0 2px 8px rgba(239, 68, 68, 0.4)',
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: brandColors.primary[600],
    hoverShadow: 'none',
    activeShadow: 'none',
    border: `2px solid ${brandColors.primary[400]}`,
  },
  ghost: {
    background: 'transparent',
    color: brandColors.neutral[700],
    hoverShadow: 'none',
    activeShadow: 'none',
    border: 'none',
  },
};

const sizeStyles = {
  sm: {
    height: '2rem',      // 32px
    padding: '0 0.875rem',  // 14px
    fontSize: '0.875rem',   // 14px
    iconSize: 16,
  },
  md: {
    height: '2.5rem',    // 40px
    padding: '0 1.25rem',   // 20px
    fontSize: '1rem',       // 16px
    iconSize: 20,
  },
  lg: {
    height: '3rem',      // 48px
    padding: '0 1.75rem',   // 28px
    fontSize: '1.125rem',   // 18px
    iconSize: 24,
  },
};

export default function ModernButton({
  children,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  disabled = false,
  className = "",
  loading = false,
}: ModernButtonProps) {
  const variantStyle = variantStyles[variant];
  const sizeStyle = sizeStyles[size];

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "relative inline-flex items-center justify-center gap-2",
        "font-semibold rounded-lg",
        "transition-all duration-200",
        "focus:outline-none focus:ring-4",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        "overflow-hidden",
        fullWidth && "w-full",
        className
      )}
      style={{
        height: sizeStyle.height,
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        background: variantStyle.background,
        color: variantStyle.color,
        border: variantStyle.border || 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = variantStyle.hoverShadow || '0 4px 8px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseDown={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = variantStyle.activeShadow || '0 1px 2px rgba(0, 0, 0, 0.1)';
        }
      }}
      onMouseUp={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
    >
      {/* Shimmer Effect */}
      <div 
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          animation: 'shimmer 2s infinite',
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <svg 
            className="animate-spin" 
            width={sizeStyle.iconSize} 
            height={sizeStyle.iconSize} 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              fill="none"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : Icon && iconPosition === 'left' ? (
          <Icon size={sizeStyle.iconSize} strokeWidth={2.5} />
        ) : null}
        
        {children}
        
        {Icon && iconPosition === 'right' && !loading && (
          <Icon size={sizeStyle.iconSize} strokeWidth={2.5} />
        )}
      </span>

      {/* Add keyframes for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </button>
  );
}

/**
 * Modern Icon Button
 * Compact button with just an icon
 */
export function ModernIconButton({
  icon: Icon,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  className = "",
  tooltip,
}: {
  icon: LucideIcon;
  variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  tooltip?: string;
}) {
  const variantStyle = variantStyles[variant];
  const iconSizes = { sm: 16, md: 20, lg: 24 };
  const buttonSizes = { sm: '2rem', md: '2.5rem', lg: '3rem' };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
      className={cn(
        "relative inline-flex items-center justify-center",
        "rounded-lg transition-all duration-200",
        "focus:outline-none focus:ring-4",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      style={{
        width: buttonSizes[size],
        height: buttonSizes[size],
        background: variantStyle.background,
        color: variantStyle.color,
        border: variantStyle.border || 'none',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = variantStyle.hoverShadow || '0 4px 8px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      <Icon size={iconSizes[size]} strokeWidth={2.5} />
    </button>
  );
}
