# Innovacare UI System - Developer Guide

## 📖 Overview

The Innovacare UI design system provides a consistent, modern healthcare platform interface using a strict 4-color approach, flat design principles, and reusable components.

## 🎨 The 4-Color System

All UI elements use exactly these four colors:

1. **Primary Color**: Deep blue (#2C5282) - Headers, buttons, active states
2. **Accent Color**: Purple (#805AD5) - Highlights, secondary actions
3. **Background Color**: White (#FFFFFF) - Page backgrounds
4. **Text Color**: Charcoal gray (#2D3748) - Content text

## 🧩 Reusable Component Library

### How to Import Components

```tsx
import { 
  IHeader,          // App header with navigation
  IButton,          // Styled buttons (primary, outline, etc)
  IIconButton,      // Icon-only buttons
  IMetricCard,      // Compact filter/metric cards
  IMetricGrid,      // Grid layout for metric cards
  IDataTable,       // Data table with pagination
  InnovacareTheme,  // Theme object with colors & styles
  getContrastText   // Helper for text contrast
} from "@/components/innovacare";

const { colors, palette, spacing, animations } = InnovacareTheme;
```

## 🏗️ Page Structure Pattern

Every page should follow this consistent structure:

```tsx
<div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
  {/* Header - CONSISTENT ACROSS ALL PAGES */}
  <IHeader showNavigation={true} username="User" role="Role" />
  
  {/* Main Content Area */}
  <main className="flex-1 overflow-auto">
    {/* Page-specific content */}
  </main>
  
  {/* Footer - CONSISTENT ACROSS ALL PAGES */}
  <div className="py-2 px-4 text-center text-xs" style={{
    backgroundColor: colors.background,
    borderTop: `1px solid ${palette.neutral[200]}`,
    color: palette.neutral[500],
  }}>
    © 2025 Innovacare Healthcare Management. All rights reserved.
  </div>
</div>
```

## 🔄 Common UI Elements

### Cards

```tsx
<Card style={{ 
  backgroundColor: colors.background,
  borderColor: palette.neutral[200],
  boxShadow: spacing.boxShadow.sm,
}}>
  <CardHeader className="border-b" style={{ borderColor: palette.neutral[200] }}>
    <CardTitle style={{ color: colors.primary }}>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Buttons

```tsx
// Primary action button
<IButton variant="primary" icon={Search} size="md">Search</IButton>

// Secondary/outline button
<IButton variant="outline" icon={RefreshCcw} size="sm">Reset</IButton>

// Icon-only button
<IIconButton icon={Settings} variant="ghost" tooltip="Settings" />
```

### Data Tables

```tsx
const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name", sortable: true },
  // Add more columns as needed
];

<IDataTable 
  data={dataArray} 
  columns={columns}
  pageSize={10}
  showPagination={true}
/>
```

### Filter/Metric Cards

```tsx
<IMetricGrid>
  <IMetricCard
    title="Active Users"
    value={42}
    icon={Users}
    color="primary"
    active={activeFilter === 'users'}
    onClick={() => setActiveFilter('users')}
  />
  {/* Add more cards as needed */}
</IMetricGrid>
```

## 📱 Form Elements

### Text Input

```tsx
<Label 
  htmlFor="inputId" 
  className="text-xs font-semibold"
  style={{ color: palette.neutral[700] }}
>
  Label Text
</Label>
<Input 
  id="inputId"
  className="h-8 text-xs"
  style={{
    backgroundColor: palette.neutral[50],
    borderColor: palette.neutral[300],
  }}
/>
```

### Select Dropdown

```tsx
<Select value={value} onValueChange={setValue}>
  <SelectTrigger className="h-8 text-xs" style={{ borderColor: palette.neutral[300] }}>
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

## ⚡ Routes

The application uses consistent components across all routes:

- **Home**: `/` or `/innovacare` - Innovacare home page
- **Login**: `/login` or `/innovacare-login` - Login page
- **Planboard**: `/planboard` or `/innovacare-planboard` - Planboard page

## 🛠️ Theme Customization

To change the theme colors across the entire application, simply update `styles/innovacare-theme.ts`:

```tsx
export const InnovacareColors = {
  primary: '#2C5282',   // Change to new primary color
  accent: '#805AD5',    // Change to new accent color
  background: '#FFFFFF', // Change to new background color
  text: '#2D3748',      // Change to new text color
};
```

All UI components will automatically use the new colors without any other changes required.

## 📏 Best Practices

1. **Always use the IHeader component** on all pages
2. **Follow the 4-color system** - don't introduce new colors
3. **Use white text on dark backgrounds** (primary/accent)
4. **Use dark text on light backgrounds** (white/light gray)
5. **Keep UI compact** with efficient use of space
6. **Use consistent spacing** for padding and margins
7. **Add animations sparingly** and consistently

## 🔍 Example Pages

Examine these reference implementations:
- `pages/innovacare-home.tsx`
- `pages/innovacare-login.tsx`
- `pages/innovacare-planboard.tsx`
