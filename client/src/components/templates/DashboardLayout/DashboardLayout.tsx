/**
 * ============================================================================
 * DASHBOARD LAYOUT TEMPLATE
 * ============================================================================
 * 
 * Scroll-less dashboard layout following modern design principles.
 * Fixed viewport height with strategic internal scrolling zones.
 * 
 * Layout Structure:
 * - Fixed Header (top)
 * - Fixed Filter Bar (below header)
 * - Fixed Quick Actions/Metrics (below filters)
 * - Scrollable Content Area (main - grows to fill space)
 * - Fixed Footer (bottom)
 * 
 * @component DashboardLayout
 * @example
 * ```tsx
 * <DashboardLayout
 *   header={<Header />}
 *   filters={<FilterBar />}
 *   metrics={<MetricsPanel />}
 *   content={<DataTable />}
 *   footer={<Footer />}
 * />
 * ```
 */

import React from 'react';
import { TOKENS } from '@/design-system';

// ============================================================================
// TYPES
// ============================================================================

export interface DashboardLayoutProps {
  /** Header component (fixed) */
  header: React.ReactNode;
  
  /** Filter bar component (fixed) */
  filters?: React.ReactNode;
  
  /** Quick actions/metrics bar (fixed) */
  metrics?: React.ReactNode;
  
  /** Toolbar component (fixed above content) */
  toolbar?: React.ReactNode;
  
  /** Main content area (scrollable) */
  content: React.ReactNode;
  
  /** Footer component (fixed) */
  footer?: React.ReactNode;
  
  /** Whether to show a separator line above the footer container */
  footerSeparator?: boolean;
  
  /** Sidebar component (optional) */
  sidebar?: React.ReactNode;
  
  /** Sidebar collapsed state */
  sidebarCollapsed?: boolean;
  
  /** Background color */
  backgroundColor?: string;
  
  /** Additional CSS class */
  className?: string;
}

// ============================================================================
// COMPONENT
// ============================================================================

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  header,
  filters,
  metrics,
  toolbar,
  content,
  footer,
  footerSeparator = true,
  sidebar,
  sidebarCollapsed = false,
  backgroundColor = TOKENS.color.neutral[50],
  className = '',
}) => {
  // Container styles - fills viewport, no scroll
  const containerStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor,
    fontFamily: TOKENS.typography.fontFamily.primary,
  };

  // Main layout (with optional sidebar)
  const mainLayoutStyles: React.CSSProperties = {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  };

  // Sidebar styles
  const sidebarStyles: React.CSSProperties = {
    width: sidebarCollapsed ? TOKENS.layout.sidebar.widthCollapsed : TOKENS.layout.sidebar.width,
    flexShrink: 0,
    backgroundColor: TOKENS.color.neutral[0],
    borderRight: `1px solid ${TOKENS.color.neutral[200]}`,
    overflow: 'auto',
    transition: TOKENS.animation.transition.all,
  };

  // Content column styles
  const contentColumnStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
  };

  // Fixed section base styles
  const fixedSectionStyles: React.CSSProperties = {
    flexShrink: 0,
    backgroundColor: TOKENS.color.neutral[0],
  };

  // Scrollable content area
  const scrollableContentStyles: React.CSSProperties = {
    flex: 1,
    overflow: 'auto',
    backgroundColor,
  };

  // Footer styles
  const footerStyles: React.CSSProperties = {
    ...fixedSectionStyles,
    borderTop: footerSeparator ? `1px solid ${TOKENS.color.neutral[200]}` : undefined,
  };

  return (
    <div className={className} style={containerStyles}>
      {/* Fixed Header */}
      {header}

      {/* Main Layout Area */}
      <div style={mainLayoutStyles}>
        {/* Optional Sidebar */}
        {sidebar && <aside style={sidebarStyles}>{sidebar}</aside>}

        {/* Content Column */}
        <div style={contentColumnStyles}>
          {/* Fixed Filter Bar */}
          {filters && (
            <div style={{
              ...fixedSectionStyles,
              borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
            }}>
              {filters}
            </div>
          )}

          {/* Fixed Metrics/Quick Actions */}
          {metrics && (
            <div style={{
              ...fixedSectionStyles,
              borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
            }}>
              {metrics}
            </div>
          )}

          {/* Fixed Toolbar */}
          {toolbar && (
            <div style={{
              ...fixedSectionStyles,
              borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
            }}>
              {toolbar}
            </div>
          )}

          {/* Scrollable Content Area */}
          <main style={scrollableContentStyles}>
            {content}
          </main>

          {/* Fixed Footer */}
          {footer && <footer style={footerStyles}>{footer}</footer>}
        </div>
      </div>
    </div>
  );
};

DashboardLayout.displayName = 'DashboardLayout';

// ============================================================================
// SECTION COMPONENTS
// ============================================================================

/**
 * Header section component
 */
export interface DashboardHeaderProps {
  children: React.ReactNode;
  height?: string;
  sticky?: boolean;
  className?: string;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  children,
  height = TOKENS.layout.header.height,
  sticky = true,
  className = '',
}) => {
  const styles: React.CSSProperties = {
    height,
    flexShrink: 0,
    backgroundColor: TOKENS.color.neutral[0],
    borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
    boxShadow: TOKENS.shadow.sm,
    position: sticky ? 'sticky' : 'relative',
    top: 0,
    zIndex: TOKENS.zIndex.sticky,
  };

  return <header className={className} style={styles}>{children}</header>;
};

/**
 * Filter bar section component
 */
export interface DashboardFiltersProps {
  children: React.ReactNode;
  collapsible?: boolean;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  className?: string;
}

export const DashboardFilters: React.FC<DashboardFiltersProps> = ({
  children,
  collapsible = false,
  collapsed = false,
  className = '',
}) => {
  const styles: React.CSSProperties = {
    padding: TOKENS.spacing[3],
    backgroundColor: TOKENS.color.neutral[0],
    borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
    maxHeight: collapsed ? '0' : 'auto',
    overflow: collapsed ? 'hidden' : 'visible',
    transition: TOKENS.animation.transition.all,
  };

  return <div className={className} style={styles}>{!collapsed && children}</div>;
};

/**
 * Metrics panel section component
 */
export interface DashboardMetricsProps {
  children: React.ReactNode;
  padding?: keyof typeof TOKENS.spacing;
  className?: string;
}

export const DashboardMetrics: React.FC<DashboardMetricsProps> = ({
  children,
  padding = 3,
  className = '',
}) => {
  const styles: React.CSSProperties = {
    padding: TOKENS.spacing[padding],
    backgroundColor: TOKENS.color.neutral[50],
    borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
    overflowX: 'auto',
    overflowY: 'hidden',
  };

  return <div className={className} style={styles}>{children}</div>;
};

/**
 * Toolbar section component
 */
export interface DashboardToolbarProps {
  children: React.ReactNode;
  padding?: keyof typeof TOKENS.spacing;
  className?: string;
}

export const DashboardToolbar: React.FC<DashboardToolbarProps> = ({
  children,
  padding = 3,
  className = '',
}) => {
  const styles: React.CSSProperties = {
    padding: TOKENS.spacing[padding],
    backgroundColor: TOKENS.color.neutral[0],
    borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
    display: 'flex',
    alignItems: 'center',
    gap: TOKENS.spacing[2],
  };

  return <div className={className} style={styles}>{children}</div>;
};

/**
 * Content section component
 */
export interface DashboardContentProps {
  children: React.ReactNode;
  padding?: keyof typeof TOKENS.spacing;
  className?: string;
}

export const DashboardContent: React.FC<DashboardContentProps> = ({
  children,
  padding = 4,
  className = '',
}) => {
  const styles: React.CSSProperties = {
    padding: TOKENS.spacing[padding],
    height: '100%',
  };

  return <div className={className} style={styles}>{children}</div>;
};

/**
 * Footer section component
 */
export interface DashboardFooterProps {
  children: React.ReactNode;
  height?: string;
  className?: string;
}

export const DashboardFooter: React.FC<DashboardFooterProps> = ({
  children,
  height = TOKENS.layout.footer.height,
  className = '',
}) => {
  const styles: React.CSSProperties = {
    height,
    flexShrink: 0,
    backgroundColor: TOKENS.color.neutral[0],
    borderTop: `1px solid ${TOKENS.color.neutral[200]}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <footer className={className} style={styles}>{children}</footer>;
};
