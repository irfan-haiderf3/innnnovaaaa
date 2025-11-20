/**
 * Innovacare Metric Card Component
 * Ultra-compact, flat design metric cards
 * No gradients - clean Healthline-style design
 */

import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import InnovacareTheme, { getContrastText } from "@/styles/innovacare-theme";

const { colors, palette, spacing, animations } = InnovacareTheme;

export interface IMetricCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  color?: 'primary' | 'accent' | 'success' | 'warning' | 'error';
  onClick?: () => void;
  active?: boolean;
  className?: string;
}

// Color mapping for cards
const cardColors = {
  primary: {
    bg: colors.primary,
    hover: palette.primary.dark,
    text: palette.primary.contrast,
  },
  accent: {
    bg: colors.accent,
    hover: palette.accent.dark,
    text: palette.accent.contrast,
  },
  success: {
    bg: palette.success,
    hover: '#38A169',
    text: '#FFFFFF',
  },
  warning: {
    bg: palette.warning,
    hover: '#DD6B20',
    text: '#FFFFFF',
  },
  error: {
    bg: palette.error,
    hover: '#E53E3E',
    text: '#FFFFFF',
  },
};

export default function IMetricCard({
  title,
  value,
  icon: Icon,
  color = 'primary',
  onClick,
  active = false,
  className = "",
}: IMetricCardProps) {
  const colorScheme = cardColors[color];
  const isClickable = !!onClick;
  
  return (
    <div
      onClick={onClick}
      className={cn(
        "relative rounded-md border transition-all duration-200",
        isClickable && "cursor-pointer",
        className
      )}
      style={{
        backgroundColor: active ? colorScheme.bg : colors.background,
        borderColor: active ? colorScheme.bg : palette.neutral[200],
        padding: '0.5rem',
        minHeight: '60px',
        boxShadow: active ? spacing.boxShadow.md : spacing.boxShadow.sm,
        transition: animations.transition.base,
      }}
      onMouseEnter={(e) => {
        if (isClickable) {
          e.currentTarget.style.transform = animations.hoverLift.sm;
          e.currentTarget.style.boxShadow = spacing.boxShadow.md;
          if (!active) {
            e.currentTarget.style.backgroundColor = palette.neutral[50];
            e.currentTarget.style.borderColor = colorScheme.bg;
          }
        }
      }}
      onMouseLeave={(e) => {
        if (isClickable) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = active ? spacing.boxShadow.md : spacing.boxShadow.sm;
          if (!active) {
            e.currentTarget.style.backgroundColor = colors.background;
            e.currentTarget.style.borderColor = palette.neutral[200];
          }
        }
      }}
    >
      {/* Content */}
      <div className="flex items-center gap-2">
        {/* Icon */}
        <div 
          className="p-1.5 rounded"
          style={{
            backgroundColor: active ? 'rgba(255,255,255,0.2)' : colorScheme.bg,
          }}
        >
          <Icon 
            className="h-3.5 w-3.5" 
            style={{ 
              color: active ? colorScheme.text : getContrastText(colorScheme.bg),
            }}
          />
        </div>
        
        {/* Text */}
        <div className="flex-1 min-w-0">
          <div 
            className="text-lg font-bold leading-none"
            style={{ 
              color: active ? colorScheme.text : colors.text,
            }}
          >
            {value}
          </div>
          <div 
            className="text-[10px] font-medium mt-0.5 truncate"
            style={{ 
              color: active ? colorScheme.text : palette.neutral[600],
            }}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Metric Grid Container
 * Responsive grid for ultra-compact cards
 */
export function IMetricGrid({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <div 
      className={cn(
        "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}
