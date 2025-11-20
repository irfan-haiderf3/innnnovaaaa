/**
 * Innovacare Components Export
 * Central export point for all Innovacare design system components
 */

// Header
export { default as IHeader } from './IHeader';

// Metric Cards
export { default as IMetricCard, IMetricGrid } from './IMetricCard';
export type { IMetricCardProps } from './IMetricCard';

// Buttons
export { default as IButton, IIconButton } from './IButton';
export type { IButtonProps } from './IButton';

// Data Table
export { default as IDataTable, cellRenderers } from './IDataTable';
export type { IDataTableProps, TableColumn } from './IDataTable';

// Theme
export { default as InnovacareTheme, applyInnovacareTheme, getContrastText } from '@/styles/innovacare-theme';
