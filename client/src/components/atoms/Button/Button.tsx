/**
 * ============================================================================
 * BUTTON ATOM
 * ============================================================================
 * 
 * Core button component built with design tokens.
 * Follows atomic design principles - single responsibility, highly reusable.
 * 
 * @component Button
 * @example
 * ```tsx
 * <Button variant="primary" size="base" onClick={handleClick}>
 *   Click Me
 * </Button>
 * ```
 */

import React from 'react';
import { TOKENS } from '@/design-system';
import type { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

export interface ButtonProps {
  /** Button content */
  children?: React.ReactNode;
  
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'outline' | 'danger';
  
  /** Size variant */
  size?: 'xs' | 'sm' | 'base' | 'md' | 'lg';
  
  /** Icon to display before text */
  iconBefore?: LucideIcon;
  
  /** Icon to display after text */
  iconAfter?: LucideIcon;
  
  /** Full width button */
  fullWidth?: boolean;
  
  /** Disabled state */
  disabled?: boolean;
  
  /** Loading state */
  loading?: boolean;
  
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  
  /** Additional CSS class */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Title attribute (tooltip) */
  title?: string;
  
  /** Aria label for accessibility */
  'aria-label'?: string;
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles = {
  primary: {
    background: TOKENS.color.primary[500],
    backgroundHover: TOKENS.color.primary[600],
    backgroundActive: TOKENS.color.primary[700],
    color: TOKENS.color.neutral[0],
    border: 'none',
  },
  secondary: {
    background: TOKENS.color.secondary[500],
    backgroundHover: TOKENS.color.secondary[600],
    backgroundActive: TOKENS.color.secondary[700],
    color: TOKENS.color.neutral[0],
    border: 'none',
  },
  tertiary: {
    background: TOKENS.color.tertiary[500],
    backgroundHover: TOKENS.color.tertiary[600],
    backgroundActive: TOKENS.color.tertiary[700],
    color: TOKENS.color.neutral[0],
    border: 'none',
  },
  ghost: {
    background: 'transparent',
    backgroundHover: TOKENS.color.neutral[100],
    backgroundActive: TOKENS.color.neutral[200],
    color: TOKENS.color.neutral[700],
    border: 'none',
  },
  outline: {
    background: 'transparent',
    backgroundHover: TOKENS.color.neutral[50],
    backgroundActive: TOKENS.color.neutral[100],
    color: TOKENS.color.primary[500],
    border: `1px solid ${TOKENS.color.primary[500]}`,
  },
  danger: {
    background: TOKENS.color.semantic.error.main,
    backgroundHover: TOKENS.color.semantic.error.dark,
    backgroundActive: '#B91C1C',
    color: TOKENS.color.neutral[0],
    border: 'none',
  },
};

// ============================================================================
// COMPONENT
// ============================================================================

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'base',
      iconBefore: IconBefore,
      iconAfter: IconAfter,
      fullWidth = false,
      disabled = false,
      loading = false,
      onClick,
      type = 'button',
      className = '',
      style = {},
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = React.useState(false);
    const [isActive, setIsActive] = React.useState(false);

    const variantStyle = variantStyles[variant];
    const sizeConfig = TOKENS.component.button;

    // Determine background based on state
    const getBackground = () => {
      if (disabled) return TOKENS.color.neutral[300];
      if (isActive) return variantStyle.backgroundActive;
      if (isHovered) return variantStyle.backgroundHover;
      return variantStyle.background;
    };

    // Get icon size based on button size
    const getIconSize = () => {
      const sizeMap = {
        xs: TOKENS.component.icon.xs,
        sm: TOKENS.component.icon.sm,
        base: TOKENS.component.icon.base,
        md: TOKENS.component.icon.md,
        lg: TOKENS.component.icon.lg,
      };
      return sizeMap[size];
    };

    const buttonStyles: React.CSSProperties = {
      // Layout
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: TOKENS.spacing[2],
      width: fullWidth ? '100%' : 'auto',
      
      // Sizing
      height: sizeConfig.height[size],
      padding: sizeConfig.padding[size],
      
      // Typography
      fontFamily: TOKENS.typography.fontFamily.primary,
      fontSize: sizeConfig.fontSize[size],
      fontWeight: TOKENS.typography.fontWeight.medium,
      lineHeight: TOKENS.typography.lineHeight.tight,
      
      // Colors
      backgroundColor: getBackground(),
      color: disabled ? TOKENS.color.neutral[500] : variantStyle.color,
      border: variantStyle.border,
      
      // Border & Shadows
      borderRadius: TOKENS.borderRadius.md,
      boxShadow: 'none',
      outline: 'none',
      
      // Interaction
      cursor: disabled || loading ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.6 : 1,
      userSelect: 'none',
      
      // Transition
      transition: TOKENS.animation.transition.all,
      
      // Override with custom styles
      ...style,
    };

    return (
      <button
        ref={ref}
        type={type}
        className={className}
        style={buttonStyles}
        disabled={disabled || loading}
        onClick={onClick}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsActive(false);
        }}
        onMouseDown={() => !disabled && setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
      >
        {/* Icon Before */}
        {IconBefore && !loading && (
          <IconBefore
            size={getIconSize()}
            strokeWidth={TOKENS.component.iconStroke.normal}
          />
        )}

        {/* Loading Spinner */}
        {loading && (
          <svg
            width={getIconSize()}
            height={getIconSize()}
            viewBox="0 0 24 24"
            fill="none"
            style={{
              animation: 'spin 1s linear infinite',
            }}
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.25"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        )}

        {/* Children */}
        {children}

        {/* Icon After */}
        {IconAfter && !loading && (
          <IconAfter
            size={getIconSize()}
            strokeWidth={TOKENS.component.iconStroke.normal}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

// ============================================================================
// ICON BUTTON VARIANT
// ============================================================================

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'iconBefore' | 'iconAfter'> {
  /** Icon component to display */
  icon: LucideIcon;
  
  /** Accessible label for screen readers */
  ariaLabel: string;
  
  /** Tooltip text (optional) */
  tooltip?: string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon: Icon, ariaLabel, tooltip, size = 'base', ...props }, ref) => {
    const getIconSize = () => {
      const sizeMap = {
        xs: TOKENS.component.icon.xs,
        sm: TOKENS.component.icon.sm,
        base: TOKENS.component.icon.base,
        md: TOKENS.component.icon.md,
        lg: TOKENS.component.icon.lg,
      };
      return sizeMap[size];
    };

    return (
      <Button
        ref={ref}
        size={size}
        {...props}
        aria-label={ariaLabel}
        title={tooltip || ariaLabel}
        style={{
          padding: TOKENS.spacing[2],
          minWidth: TOKENS.component.button.height[size],
          ...props.style,
        }}
      >
        <Icon
          size={getIconSize()}
          strokeWidth={TOKENS.component.iconStroke.normal}
        />
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';

// Add keyframe animation for loading spinner
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
