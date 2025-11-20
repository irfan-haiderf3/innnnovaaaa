# Innovacare UI Component Guide

This guide explains how to consistently use the Innovacare UI components across the application to maintain a unified look and feel.

## 📝 Core Design Principles

### 4-Color System

The Innovacare design system uses exactly 4 colors:

1. **Primary Color**: Deep blue `#2C5282` - Used for main actions, headers, and active states
2. **Accent Color**: Purple `#805AD5` - Used for highlights, secondary actions, and decorative elements
3. **Background Color**: White `#FFFFFF` - Clean canvas for content
4. **Text Color**: Charcoal gray `#2D3748` - Primary text color

These colors are defined in `styles/innovacare-theme.ts` and can be easily changed across the entire application.

### Font Color Rules

- On dark backgrounds (primary, accent): Use white text
- On light backgrounds (white, light gray): Use text color
- The `getContrastText()` function automatically determines the appropriate text color

### Component Sizing

- All components are designed to be compact and space-efficient
- Buttons, inputs, and cards have consistent heights and padding
- Tables use pagination instead of scrolling

## 🧩 How to Use Innovacare Components

### 1. Header Component

Always use the `IHeader` component on all pages to maintain consistent navigation:

```tsx
import { IHeader } from "@/components/innovacare";

<IHeader showNavigation={true} username="User Name" role="Role" />
```

### 2. Buttons

Use the `IButton` or `IIconButton` components for all buttons:

```tsx
import { IButton, IIconButton } from "@/components/innovacare";
import { Search, Settings } from "lucide-react";

// Primary action button
<IButton variant="primary" icon={Search} size="md">Search</IButton>

// Secondary button
<IButton variant="outline" icon={RefreshCcw} size="sm">Reset</IButton>

// Icon-only button
<IIconButton icon={Settings} variant="ghost" tooltip="Settings" />
```

Available variants: `primary`, `accent`, `outline`, `ghost`  
Available sizes: `sm`, `md`, `lg`

### 3. Metric Cards / Filters

Use `IMetricCard` for compact filter cards or metric displays:

```tsx
import { IMetricCard, IMetricGrid } from "@/components/innovacare";
import { Calendar } from "lucide-react";

<IMetricGrid>
  <IMetricCard
    title="Appointments"
    value={42}
    icon={Calendar}
    color="primary"
    active={activeFilter === 'appointments'}
    onClick={() => setActiveFilter('appointments')}
  />
</IMetricGrid>
```

Available colors: `primary`, `accent`, `success`, `warning`, `error`

### 4. Data Tables

Use `IDataTable` for consistent data tables with built-in pagination:

```tsx
import { IDataTable } from "@/components/innovacare";

const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name", sortable: true },
  // ...more columns
];

<IDataTable 
  data={dataArray} 
  columns={columns}
  pageSize={10}
  showPagination={true}
/>
```

### 5. Theme Access

All components can access the Innovacare theme:

```tsx
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette, spacing, animations } = InnovacareTheme;

// Use in inline styles
<div style={{ 
  backgroundColor: colors.background,
  color: colors.text,
  borderColor: palette.neutral[200]
}}/>
```

## 📋 Form Components

All form components should use the consistent styling approach:

### Text Inputs

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette } = InnovacareTheme;

<div className="space-y-2">
  <Label 
    htmlFor="name" 
    className="text-xs font-semibold"
    style={{ color: palette.neutral[700] }}
  >
    Name
  </Label>
  <Input 
    id="name"
    className="h-8 text-xs"
    style={{
      backgroundColor: palette.neutral[50],
      borderColor: palette.neutral[300],
      color: colors.text,
    }}
  />
</div>
```

### Select Dropdowns

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import InnovacareTheme from "@/styles/innovacare-theme";

const { palette } = InnovacareTheme;

<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="h-8 text-xs" style={{ borderColor: palette.neutral[300] }}>
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Checkboxes

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette } = InnovacareTheme;

<div className="flex items-center space-x-2">
  <Checkbox 
    id="terms" 
    checked={checked}
    onCheckedChange={setChecked}
  />
  <label 
    htmlFor="terms" 
    className="text-xs"
    style={{ color: palette.neutral[700] }}
  >
    Accept terms
  </label>
</div>
```

## 🏗️ Page Structure Template

Follow this structure for all pages to maintain consistency:

```tsx
import { IHeader } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette } = InnovacareTheme;

export default function PageName() {
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      {/* Header */}
      <IHeader showNavigation={true} username="User" role="Role" />
      
      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto">
        {/* Page content here */}
      </main>
      
      {/* Footer */}
      <div 
        className="py-2 px-4 text-center text-xs"
        style={{
          backgroundColor: colors.background,
          borderTop: `1px solid ${palette.neutral[200]}`,
          color: palette.neutral[500],
        }}
      >
        © 2025 Innovacare Healthcare Management. All rights reserved.
      </div>
    </div>
  );
}
```

## 🎨 Color Reference

### Base Colors

- `colors.primary`: `#2C5282` (Deep blue)
- `colors.accent`: `#805AD5` (Purple)
- `colors.background`: `#FFFFFF` (White)
- `colors.text`: `#2D3748` (Charcoal gray)

### Extended Palette

The palette extends the base colors with various shades:

- `palette.primary.light`: Lighter blue (`#4A7AB7`)
- `palette.primary.main`: Same as primary
- `palette.primary.dark`: Darker blue (`#1A365D`)
- `palette.primary.contrast`: White (`#FFFFFF`)

Similar patterns exist for all colors. Access them via:
- `palette.neutral[50]` through `palette.neutral[900]`
- `palette.success`, `palette.warning`, `palette.error`

## 🔄 How to Update the Theme

To change the theme across the entire application, simply update the color definitions in `styles/innovacare-theme.ts`:

```ts
// Example: Change primary color to teal
export const InnovacareColors = {
  primary: '#0D9488',  // Changed from #2C5282
  accent: '#805AD5',
  background: '#FFFFFF',
  text: '#2D3748',
};
```

All components will automatically use the new colors without any additional changes required.

## 📱 Responsive Design

All Innovacare components are built to be responsive:

- On mobile: Stack layouts, reduce padding, adjust font sizes
- On tablets: Maintain core layout with some adjustments
- On desktop: Full layout with optimal spacing

## 🚀 Best Practices

1. **Always use the theme colors** instead of hardcoded color values
2. **Follow the 4-color system** and don't introduce new colors
3. **Maintain consistent spacing** using the theme's spacing scale
4. **Use white text on dark backgrounds** and dark text on light backgrounds
5. **Implement animations consistently** using the theme's animation settings
6. **Keep the UI compact** with small elements and efficient space usage

By following these guidelines, you'll maintain a consistent, professional look across the entire Innovacare application.
