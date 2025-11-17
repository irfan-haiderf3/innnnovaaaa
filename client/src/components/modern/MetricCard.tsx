/**
 * Metric Card Component
 * Beautiful graphical representation for filters and statistics
 * Shows counts, trends, and status in a visually appealing way
 */

import { LucideIcon } from "lucide-react";
import { brandColors, brandGradients, withOpacity } from "@/config/branding";
import { cn } from "@/lib/utils";

export interface MetricCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

const colorMap = {
  primary: {
    bg: brandColors.primary[500],
    light: brandColors.primary[50],
    medium: brandColors.primary[100],
    dark: brandColors.primary[700],
    gradient: brandGradients.primary,
  },
  secondary: {
    bg: brandColors.secondary[500],
    light: brandColors.secondary[50],
    medium: brandColors.secondary[100],
    dark: brandColors.secondary[700],
    gradient: brandGradients.secondary,
  },
  accent: {
    bg: brandColors.accent[600],
    light: brandColors.accent[50],
    medium: brandColors.accent[100],
    dark: brandColors.accent[700],
    gradient: brandGradients.accent,
  },
  success: {
    bg: brandColors.success,
    light: '#D1FAE5',
    medium: '#A7F3D0',
    dark: '#059669',
    gradient: `linear-gradient(135deg, ${brandColors.success} 0%, #059669 100%)`,
  },
  warning: {
    bg: brandColors.warning,
    light: '#FEF3C7',
    medium: '#FDE68A',
    dark: '#D97706',
    gradient: `linear-gradient(135deg, ${brandColors.warning} 0%, #D97706 100%)`,
  },
  error: {
    bg: brandColors.error,
    light: '#FEE2E2',
    medium: '#FECACA',
    dark: '#DC2626',
    gradient: `linear-gradient(135deg, ${brandColors.error} 0%, #DC2626 100%)`,
  },
  info: {
    bg: brandColors.info,
    light: '#DBEAFE',
    medium: '#BFDBFE',
    dark: '#2563EB',
    gradient: `linear-gradient(135deg, ${brandColors.info} 0%, #2563EB 100%)`,
  },
};

export default function MetricCard({
  title,
  value,
  icon: Icon,
  trend,
  color = 'primary',
  onClick,
  active = false,
  className = "",
}: MetricCardProps) {
  const colors = colorMap[color];
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-lg transition-all duration-300",
        "border shadow-sm",
        isClickable && "cursor-pointer hover:scale-102 hover:shadow-md",
        active ? "ring-2 ring-offset-1" : "",
        className
      )}
      style={{
        background: active 
          ? colors.gradient
          : `linear-gradient(135deg, ${colors.light} 0%, ${colors.medium} 100%)`,
        borderColor: active ? colors.bg : colors.medium,
        boxShadow: active 
          ? `0 0 0 4px ${withOpacity(colors.bg, 0.3)}, 0 10px 15px -3px rgba(0, 0, 0, 0.1)`
          : undefined,
      }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${colors.bg} 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, ${colors.bg} 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative p-3">
        <div className="flex items-center justify-between mb-2">
          {/* Icon */}
          <div 
            className="p-2 rounded-md shadow-sm"
            style={{
              background: active ? 'rgba(255, 255, 255, 0.9)' : colors.gradient,
            }}
          >
            <Icon 
              className="h-4 w-4" 
              style={{ 
                color: active ? colors.bg : 'white',
                strokeWidth: 2.5 
              }}
            />
          </div>

          {/* Trend Badge */}
          {trend && (
            <div 
              className="px-1.5 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-0.5"
              style={{
                backgroundColor: active 
                  ? 'rgba(255, 255, 255, 0.9)' 
                  : trend.isPositive ? brandColors.success : brandColors.error,
                color: active 
                  ? (trend.isPositive ? brandColors.success : brandColors.error)
                  : 'white',
              }}
            >
              <span>{trend.isPositive ? '↑' : '↓'}</span>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>

        {/* Value */}
        <div 
          className="text-xl font-bold mb-0.5 tracking-tight"
          style={{ 
            color: active ? 'white' : colors.dark,
            textShadow: active ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
          }}
        >
          {value}
        </div>

        {/* Title */}
        <div 
          className="text-xs font-medium leading-tight"
          style={{ 
            color: active ? 'rgba(255, 255, 255, 0.95)' : colors.dark,
          }}
        >
          {title}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div 
        className="h-0.5"
        style={{
          background: active ? 'rgba(255, 255, 255, 0.3)' : colors.gradient,
        }}
      />
    </div>
  );
}

/**
 * Metric Grid Container
 * Wrapper for displaying multiple metric cards in a responsive grid
 */
export function MetricGrid({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}
