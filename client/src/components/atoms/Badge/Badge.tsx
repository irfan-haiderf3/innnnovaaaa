/**
 * ============================================================================
 * BADGE ATOM
 * ============================================================================
 * 
 * Small status indicators and labels built with design tokens.
 * 
 * @component Badge
 * @example
 * ```tsx
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning" size="sm">Pending</Badge>
 * ```
 */

import React from 'react';
import { TOKENS } from '@/design-system';
import type { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

export interface BadgeProps {
  /** Badge content */
  children: React.ReactNode;
  
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
  
  /** Size variant */
  size?: 'sm' | 'base' | 'lg';
  
  /** Icon to display */
  icon?: LucideIcon;
  
  /** Dot indicator before text */
  dot?: boolean;
  
  /** Pill shape (fully rounded) */
  pill?: boolean;
  
  /** Additional CSS class */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
  
  /** Click handler (makes badge interactive) */
  onClick?: () => void;
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles = {
  primary: {
    background: TOKENS.color.primary[100],
    color: TOKENS.color.primary[700],
    border: `1px solid ${TOKENS.color.primary[200]}`,
  },
  secondary: {
    background: TOKENS.color.secondary[100],
    color: TOKENS.color.secondary[700],
    border: `1px solid ${TOKENS.color.secondary[200]}`,
  },
  success: {
    background: TOKENS.color.semantic.success.light,
    color: TOKENS.color.semantic.success.dark,
    border: `1px solid ${TOKENS.color.semantic.success.main}`,
  },
  warning: {
    background: TOKENS.color.semantic.warning.light,
    color: TOKENS.color.semantic.warning.dark,
    border: `1px solid ${TOKENS.color.semantic.warning.main}`,
  },
  error: {
    background: TOKENS.color.semantic.error.light,
    color: TOKENS.color.semantic.error.dark,
    border: `1px solid ${TOKENS.color.semantic.error.main}`,
  },
  info: {
    background: TOKENS.color.semantic.info.light,
    color: TOKENS.color.semantic.info.dark,
    border: `1px solid ${TOKENS.color.semantic.info.main}`,
  },
  neutral: {
    background: TOKENS.color.neutral[100],
    color: TOKENS.color.neutral[700],
    border: `1px solid ${TOKENS.color.neutral[200]}`,
  },
};

const sizeConfig = {
  sm: {
    height: '1.25rem', // 20px
    padding: `${TOKENS.spacing[0.5]} ${TOKENS.spacing[2]}`,
    fontSize: TOKENS.typography.fontSize.xs,
    iconSize: TOKENS.component.icon.xs,
    dotSize: '6px',
  },
  base: {
    height: '1.5rem', // 24px
    padding: `${TOKENS.spacing[1]} ${TOKENS.spacing[3]}`,
    fontSize: TOKENS.typography.fontSize.sm,
    iconSize: TOKENS.component.icon.sm,
    dotSize: '8px',
  },
  lg: {
    height: '1.75rem', // 28px
    padding: `${TOKENS.spacing[1.5]} ${TOKENS.spacing[4]}`,
    fontSize: TOKENS.typography.fontSize.base,
    iconSize: TOKENS.component.icon.base,
    dotSize: '10px',
  },
};

// ============================================================================
// COMPONENT
// ============================================================================

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'base',
  icon: Icon,
  dot = false,
  pill = false,
  className = '',
  style = {},
  onClick,
}) => {
  const variantStyle = variantStyles[variant];
  const config = sizeConfig[size];
  const isInteractive = !!onClick;

  const badgeStyles: React.CSSProperties = {
    // Layout
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: TOKENS.spacing[1],
    
    // Sizing
    height: config.height,
    padding: config.padding,
    
    // Typography
    fontFamily: TOKENS.typography.fontFamily.primary,
    fontSize: config.fontSize,
    fontWeight: TOKENS.typography.fontWeight.medium,
    lineHeight: TOKENS.typography.lineHeight.tight,
    whiteSpace: 'nowrap',
    
    // Colors
    backgroundColor: variantStyle.background,
    color: variantStyle.color,
    border: variantStyle.border,
    
    // Border & Shadows
    borderRadius: pill ? TOKENS.borderRadius.full : TOKENS.borderRadius.base,
    
    // Interaction
    cursor: isInteractive ? 'pointer' : 'default',
    userSelect: 'none',
    
    // Transition
    transition: TOKENS.animation.transition.all,
    
    // Override with custom styles
    ...style,
  };

  const dotStyles: React.CSSProperties = {
    width: config.dotSize,
    height: config.dotSize,
    borderRadius: TOKENS.borderRadius.full,
    backgroundColor: variantStyle.color,
  };

  return (
    <span
      className={className}
      style={badgeStyles}
      onClick={onClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {/* Dot Indicator */}
      {dot && <span style={dotStyles} />}

      {/* Icon */}
      {Icon && (
        <Icon
          size={config.iconSize}
          strokeWidth={TOKENS.component.iconStroke.normal}
        />
      )}

      {/* Content */}
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
