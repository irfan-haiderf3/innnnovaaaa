/**
 * ============================================================================
 * INPUT ATOM
 * ============================================================================
 * 
 * Form input component built with design tokens.
 * Supports text, number, email, password, etc.
 * 
 * @component Input
 * @example
 * ```tsx
 * <Input 
 *   placeholder="Enter email" 
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 * />
 * ```
 */

import React from 'react';
import { TOKENS } from '@/design-system';
import type { LucideIcon } from 'lucide-react';

// ============================================================================
// TYPES
// ============================================================================

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size variant */
  size?: 'sm' | 'base' | 'md' | 'lg';
  
  /** Icon to display before input */
  iconBefore?: LucideIcon;
  
  /** Icon to display after input */
  iconAfter?: LucideIcon;
  
  /** Error state */
  error?: boolean;
  
  /** Error message */
  errorMessage?: string;
  
  /** Full width */
  fullWidth?: boolean;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'base',
      iconBefore: IconBefore,
      iconAfter: IconAfter,
      error = false,
      errorMessage,
      fullWidth = false,
      className = '',
      style = {},
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const config = TOKENS.component.input;

    const containerStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      gap: TOKENS.spacing[2],
      width: fullWidth ? '100%' : 'auto',
      position: 'relative',
    };

    const inputStyles: React.CSSProperties = {
      // Layout
      flex: 1,
      width: '100%',
      
      // Sizing
      height: config.height[size],
      padding: `${config.padding.vertical} ${config.padding.horizontal}`,
      paddingLeft: IconBefore ? TOKENS.spacing[10] : config.padding.horizontal,
      paddingRight: IconAfter ? TOKENS.spacing[10] : config.padding.horizontal,
      
      // Typography
      fontFamily: TOKENS.typography.fontFamily.primary,
      fontSize: config.fontSize,
      fontWeight: TOKENS.typography.fontWeight.normal,
      lineHeight: TOKENS.typography.lineHeight.normal,
      
      // Colors
      backgroundColor: disabled ? TOKENS.color.neutral[100] : TOKENS.color.neutral[0],
      color: disabled ? TOKENS.color.neutral[400] : TOKENS.color.neutral[900],
      
      // Border
      border: error
        ? `2px solid ${TOKENS.color.semantic.error.main}`
        : isFocused
        ? `2px solid ${TOKENS.color.primary[500]}`
        : `1px solid ${TOKENS.color.neutral[300]}`,
      borderRadius: TOKENS.borderRadius.md,
      outline: 'none',
      
      // Interaction
      cursor: disabled ? 'not-allowed' : 'text',
      
      // Transition
      transition: TOKENS.animation.transition.colors,
      
      // Override with custom styles
      ...style,
    };

    const iconContainerStyles: React.CSSProperties = {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      pointerEvents: 'none',
    };

    const getIconSize = () => {
      const sizeMap = {
        sm: TOKENS.component.icon.sm,
        base: TOKENS.component.icon.base,
        md: TOKENS.component.icon.md,
        lg: TOKENS.component.icon.lg,
      };
      return sizeMap[size];
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing[1], width: fullWidth ? '100%' : 'auto' }}>
        <div style={containerStyles}>
          {/* Icon Before */}
          {IconBefore && (
            <div style={{ ...iconContainerStyles, left: TOKENS.spacing[3] }}>
              <IconBefore
                size={getIconSize()}
                strokeWidth={TOKENS.component.iconStroke.normal}
                color={TOKENS.color.neutral[500]}
              />
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            className={className}
            style={inputStyles}
            disabled={disabled}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />

          {/* Icon After */}
          {IconAfter && (
            <div style={{ ...iconContainerStyles, right: TOKENS.spacing[3] }}>
              <IconAfter
                size={getIconSize()}
                strokeWidth={TOKENS.component.iconStroke.normal}
                color={TOKENS.color.neutral[500]}
              />
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && errorMessage && (
          <span
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              color: TOKENS.color.semantic.error.main,
              fontFamily: TOKENS.typography.fontFamily.primary,
            }}
          >
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
