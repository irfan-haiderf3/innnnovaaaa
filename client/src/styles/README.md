# Innovacare UI System

## 1. How to use the theme system

The Innovacare design system provides a consistent 4-color UI approach that's easy to implement in all pages.

### Importing the theme

```tsx
import InnovacareTheme, { getContrastText } from "@/styles/innovacare-theme";

const { colors, palette, spacing, animations } = InnovacareTheme;
```

### The 4-Color System

1. **Primary Color**: `colors.primary` (#2C5282) - Deep blue
2. **Accent Color**: `colors.accent` (#805AD5) - Purple
3. **Background Color**: `colors.background` (#FFFFFF) - White
4. **Text Color**: `colors.text` (#2D3748) - Charcoal gray

### Applying the theme to components

```tsx
// Page container
<div style={{ backgroundColor: palette.neutral[50] }}>

// Card styling
<Card style={{ 
  backgroundColor: colors.background,
  borderColor: palette.neutral[200],
  boxShadow: spacing.boxShadow.sm,
}}>

// Text styling
<h1 style={{ color: colors.primary }}>Title</h1>
<p style={{ color: palette.neutral[600] }}>Text content</p>

// Button styling
<button style={{ 
  backgroundColor: colors.primary,
  color: getContrastText(colors.primary), // Automatically returns white for dark backgrounds
}}>
  Button Text
</button>
```

## 2. Reusable Components

The following components are available in the `@/components/innovacare` directory:

```tsx
import { 
  IHeader, 
  IButton, 
  IIconButton, 
  IMetricCard, 
  IDataTable,
  IPagination 
} from "@/components/innovacare";
```

### Common Page Structure

```tsx
<div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
  {/* Header */}
  <IHeader showNavigation={true} username="User" role="Role" />
  
  {/* Main Content */}
  <main className="flex-1 p-4 overflow-auto">
    {/* Page content here */}
  </main>
  
  {/* Footer */}
  <div className="py-2 px-4 text-center text-xs" style={{
    backgroundColor: colors.background,
    borderTop: `1px solid ${palette.neutral[200]}`,
    color: palette.neutral[500],
  }}>
    © 2025 Innovacare Healthcare Management. All rights reserved.
  </div>
</div>
```

For full documentation, see the UI_COMPONENT_GUIDE.md file.
