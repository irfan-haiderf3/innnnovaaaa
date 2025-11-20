/**
 * Innovacare Button Component
 * Clean, flat buttons with Healthline-style animations
 * 4-color system - no gradients
 */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import InnovacareTheme, { getContrastText } from "@/styles/innovacare-theme";

const { colors, palette, spacing, animations, components } = InnovacareTheme;

export interface IButtonProps {
  children?: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const sizeStyles = {
  sm: {
    height: '32px',
    padding: '0 12px',
    fontSize: '0.875rem',
    iconSize: 14,
  },
  md: {
    height: '36px',
    padding: '0 16px',
    fontSize: '0.875rem',
    iconSize: 16,
  },
  lg: {
    height: '40px',
    padding: '0 20px',
    fontSize: '1rem',
    iconSize: 18,
  },
};

export default function IButton({
  children,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  disabled = false,
  loading = false,
  className = "",
  type = 'button',
}: IButtonProps) {
  const sizeStyle = sizeStyles[size];
  const buttonStyle = components.button[variant];
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium",
        "transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        fullWidth && "w-full",
        className
      )}
      style={{
        height: sizeStyle.height,
        padding: sizeStyle.padding,
        fontSize: sizeStyle.fontSize,
        backgroundColor: buttonStyle.background,
        color: buttonStyle.color,
        border: buttonStyle.border || 'none',
        boxShadow: spacing.boxShadow.sm,
        transition: animations.transition.base,
      }}
      onMouseEnter={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.backgroundColor = buttonStyle.hover;
          e.currentTarget.style.transform = animations.hoverLift.sm;
          e.currentTarget.style.boxShadow = spacing.boxShadow.md;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !loading) {
          e.currentTarget.style.backgroundColor = buttonStyle.background;
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = spacing.boxShadow.sm;
        }
      }}
    >
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
        <Icon size={sizeStyle.iconSize} />
      ) : null}
      
      {children}
      
      {Icon && iconPosition === 'right' && !loading && (
        <Icon size={sizeStyle.iconSize} />
      )}
    </button>
  );
}

/**
 * Icon Button - Compact button with just an icon
 */
export function IIconButton({
  icon: Icon,
  variant = 'ghost',
  size = 'md',
  onClick,
  disabled = false,
  className = "",
  tooltip,
}: {
  icon: LucideIcon;
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  tooltip?: string;
}) {
  const buttonSizes = { sm: '32px', md: '36px', lg: '40px' };
  const iconSizes = { sm: 14, md: 16, lg: 18 };
  const buttonStyle = components.button[variant];
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
      className={cn(
        "inline-flex items-center justify-center rounded-md",
        "transition-all duration-200 focus:outline-none focus:ring-2",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      style={{
        width: buttonSizes[size],
        height: buttonSizes[size],
        backgroundColor: buttonStyle.background,
        color: buttonStyle.color,
        border: buttonStyle.border || 'none',
        transition: animations.transition.base,
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = buttonStyle.hover;
          e.currentTarget.style.transform = animations.hoverScale.sm;
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = buttonStyle.background;
          e.currentTarget.style.transform = 'scale(1)';
        }
      }}
    >
      <Icon size={iconSizes[size]} />
    </button>
  );
}
