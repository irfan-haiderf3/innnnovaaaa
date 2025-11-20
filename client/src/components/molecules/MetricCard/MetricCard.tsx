/**
 * ============================================================================
 * METRIC CARD MOLECULE
 * ============================================================================
 * 
 * Compact metric display card combining Badge and typography atoms.
 * Used for dashboard KPIs and quick filters.
 * 
 * @component MetricCard
 * @example
 * ```tsx
 * <MetricCard 
 *   title="Active Patients"
 *   value={156}
 *   icon={Users}
 *   variant="primary"
 *   onClick={() => filterByActive()}
 * />
 * ```
 */

import React from 'react';
import { TOKENS } from '@/design-system';
import type { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

export interface MetricCardProps {
  /** Metric title/label */
  title: string;
  
  /** Metric value (number or string) */
  value: number | string;
  
  /** Icon component */
  icon: LucideIcon;
  
  /** Visual variant */
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  
  /** Change percentage (optional) */
  change?: number;
  
  /** Trend indicator */
  trend?: 'up' | 'down' | 'stable';
  
  /** Active state (for filters) */
  active?: boolean;
  
  /** Click handler */
  onClick?: () => void;
  
  /** Additional CSS class */
  className?: string;
  
  /** Additional inline styles */
  style?: React.CSSProperties;
}

// ============================================================================
// STYLE CONFIGURATIONS
// ============================================================================

const variantStyles = {
  primary: {
    background: TOKENS.color.primary[500],
    backgroundHover: TOKENS.color.primary[600],
    backgroundLight: TOKENS.color.primary[50],
    color: TOKENS.color.neutral[0],
  },
  secondary: {
    background: TOKENS.color.secondary[500],
    backgroundHover: TOKENS.color.secondary[600],
    backgroundLight: TOKENS.color.secondary[50],
    color: TOKENS.color.neutral[0],
  },
  success: {
    background: TOKENS.color.semantic.success.main,
    backgroundHover: TOKENS.color.semantic.success.dark,
    backgroundLight: TOKENS.color.semantic.success.light,
    color: TOKENS.color.neutral[0],
  },
  warning: {
    background: TOKENS.color.semantic.warning.main,
    backgroundHover: TOKENS.color.semantic.warning.dark,
    backgroundLight: TOKENS.color.semantic.warning.light,
    color: TOKENS.color.neutral[0],
  },
  error: {
    background: TOKENS.color.semantic.error.main,
    backgroundHover: TOKENS.color.semantic.error.dark,
    backgroundLight: TOKENS.color.semantic.error.light,
    color: TOKENS.color.neutral[0],
  },
  info: {
    background: TOKENS.color.tertiary[500],
    backgroundHover: TOKENS.color.tertiary[600],
    backgroundLight: TOKENS.color.tertiary[50],
    color: TOKENS.color.neutral[0],
  },
};

// ============================================================================
// COMPONENT
// ============================================================================

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon: Icon,
  variant = 'primary',
  change,
  trend,
  active = false,
  onClick,
  className = '',
  style = {},
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const variantStyle = variantStyles[variant];
  const isInteractive = !!onClick;

  const cardStyles: React.CSSProperties = {
    // Layout
    display: 'flex',
    alignItems: 'center',
    gap: TOKENS.spacing[2],
    
    // Sizing
    minHeight: '60px',
    padding: TOKENS.spacing[2],
    
    // Colors
    backgroundColor: active
      ? variantStyle.background
      : isHovered && isInteractive
      ? variantStyle.backgroundLight
      : TOKENS.color.neutral[0],
    
    // Border
    border: active
      ? `2px solid ${variantStyle.background}`
      : `1px solid ${TOKENS.color.neutral[200]}`,
    borderRadius: TOKENS.borderRadius.md,
    boxShadow: active || isHovered ? TOKENS.shadow.md : TOKENS.shadow.sm,
    
    // Interaction
    cursor: isInteractive ? 'pointer' : 'default',
    userSelect: 'none',
    
    // Transition
    transition: TOKENS.animation.transition.all,
    
    // Transform on hover
    transform: isHovered && isInteractive ? 'translateY(-2px)' : 'translateY(0)',
    
    // Override with custom styles
    ...style,
  };

  const iconContainerStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: TOKENS.borderRadius.md,
    backgroundColor: active
      ? 'rgba(255, 255, 255, 0.2)'
      : variantStyle.background,
    flexShrink: 0,
  };

  const contentStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: TOKENS.spacing[0.5],
    flex: 1,
    minWidth: 0,
  };

  const valueStyles: React.CSSProperties = {
    fontFamily: TOKENS.typography.fontFamily.primary,
    fontSize: TOKENS.typography.fontSize.xl,
    fontWeight: TOKENS.typography.fontWeight.bold,
    lineHeight: TOKENS.typography.lineHeight.tight,
    color: active ? variantStyle.color : TOKENS.color.neutral[900],
  };

  const titleStyles: React.CSSProperties = {
    fontFamily: TOKENS.typography.fontFamily.primary,
    fontSize: TOKENS.typography.fontSize.xs,
    fontWeight: TOKENS.typography.fontWeight.medium,
    lineHeight: TOKENS.typography.lineHeight.tight,
    color: active ? variantStyle.color : TOKENS.color.neutral[600],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const changeStyles: React.CSSProperties = {
    fontSize: TOKENS.typography.fontSize.xs,
    fontWeight: TOKENS.typography.fontWeight.semibold,
    color: trend === 'up'
      ? TOKENS.color.semantic.success.main
      : trend === 'down'
      ? TOKENS.color.semantic.error.main
      : TOKENS.color.neutral[500],
  };

  return (
    <div
      className={className}
      style={cardStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive ? 0 : undefined}
    >
      {/* Icon */}
      <div style={iconContainerStyles}>
        <Icon
          size={TOKENS.component.icon.base}
          strokeWidth={TOKENS.component.iconStroke.bold}
          color={active ? variantStyle.color : TOKENS.color.neutral[0]}
        />
      </div>

      {/* Content */}
      <div style={contentStyles}>
        <div style={valueStyles}>{value}</div>
        <div style={titleStyles}>{title}</div>
      </div>

      {/* Change Indicator */}
      {change !== undefined && trend && (
        <div style={changeStyles}>
          {trend === 'up' && '↑'}
          {trend === 'down' && '↓'}
          {Math.abs(change)}%
        </div>
      )}
    </div>
  );
};

MetricCard.displayName = 'MetricCard';

// ============================================================================
// METRIC GRID CONTAINER
// ============================================================================

export interface MetricGridProps {
  /** Grid items */
  children: React.ReactNode;
  
  /** Number of columns */
  columns?: 3 | 4 | 6 | 8 | 12;
  
  /** Gap between items */
  gap?: keyof typeof TOKENS.spacing;
  
  /** Additional CSS class */
  className?: string;
}

export const MetricGrid: React.FC<MetricGridProps> = ({
  children,
  columns = 6,
  gap = 2,
  className = '',
}) => {
  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${100 / columns}%, 1fr))`,
    gap: TOKENS.spacing[gap],
    width: '100%',
  };

  // Responsive grid
  const responsiveClass = `grid grid-cols-3 sm:grid-cols-4 md:grid-cols-${columns} lg:grid-cols-${columns * 1.5} xl:grid-cols-${columns * 2}`;

  return (
    <div className={`${responsiveClass} ${className}`} style={{ gap: TOKENS.spacing[gap] }}>
      {children}
    </div>
  );
};

MetricGrid.displayName = 'MetricGrid';
