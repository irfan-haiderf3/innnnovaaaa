# Innovacare Component Reusability Guide

## 🎯 Overview

This document explains how to use the same reusable components across all pages in the Innovacare application.

## 📦 Core Reusable Components

### 1. IHeader (Navigation Header)
**Location**: `@/components/innovacare/IHeader.tsx`

**Usage on ALL pages**:
```tsx
import { IHeader } from "@/components/innovacare";

<IHeader showNavigation={true} username="User Name" role="Role" />
```

**Used in**:
- Home page (`/`)
- Planboard V1 (`/planboard`)
- Planboard V2 (`/planboardv2`)
- Planboard V3 (`/planboardv3`)
- Login page (`/login`)

### 2. IButton (Action Buttons)
**Location**: `@/components/innovacare/IButton.tsx`

**Usage**:
```tsx
import { IButton } from "@/components/innovacare";

// Primary button
<IButton variant="primary" icon={Search} size="md">Search</IButton>

// Secondary button
<IButton variant="outline" icon={RefreshCcw} size="sm">Reset</IButton>

// Accent button
<IButton variant="accent" size="lg">Save</IButton>
```

**Variants**: `primary`, `accent`, `outline`, `ghost`  
**Sizes**: `sm`, `md`, `lg`

### 3. IIconButton (Icon-Only Buttons)
**Location**: `@/components/innovacare/IButton.tsx`

**Usage**:
```tsx
import { IIconButton } from "@/components/innovacare";

<IIconButton icon={Settings} variant="ghost" tooltip="Settings" />
<IIconButton icon={Download} variant="outline" size="sm" />
```

### 4. IDataTable (Data Tables with Pagination)
**Location**: `@/components/innovacare/IDataTable.tsx`

**Usage**:
```tsx
import { IDataTable } from "@/components/innovacare";

const columns = [
  { key: "id", label: "ID", sortable: true },
  { key: "name", label: "Name", sortable: true },
  { key: "status", label: "Status", sortable: false },
];

<IDataTable 
  data={dataArray} 
  columns={columns}
  pageSize={10}
  showPagination={true}
/>
```

**Features**:
- Automatic sorting
- Built-in pagination
- Scrollless design
- Responsive layout

### 5. IMetricCard (Filter/Metric Cards)
**Location**: `@/components/innovacare/IMetricCard.tsx`

**Usage**:
```tsx
import { IMetricCard, IMetricGrid } from "@/components/innovacare";

<IMetricGrid>
  <IMetricCard
    title="Active Users"
    value={150}
    icon={Users}
    color="primary"
    active={activeFilter === 'users'}
    onClick={() => setActiveFilter('users')}
  />
  <IMetricCard
    title="Pending Tasks"
    value={42}
    icon={Clipboard}
    color="accent"
  />
</IMetricGrid>
```

**Colors**: `primary`, `accent`, `success`, `warning`, `error`

### 6. InnovacareTheme (Theme System)
**Location**: `@/styles/innovacare-theme.ts`

**Usage**:
```tsx
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette, spacing, animations } = InnovacareTheme;

// Apply to page container
<div style={{ backgroundColor: palette.neutral[50] }}>

// Apply to cards
<Card style={{ 
  backgroundColor: colors.background,
  borderColor: palette.neutral[200],
}}>

// Apply to headings
<h1 style={{ color: colors.primary }}>Title</h1>

// Apply to text
<p style={{ color: palette.neutral[600] }}>Content</p>
```

## 🎨 Standard Footer Component

**Usage on ALL pages**:
```tsx
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette } = InnovacareTheme;

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
```

## 📋 Form Components (With Consistent Styling)

### Text Input
```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InnovacareTheme from "@/styles/innovacare-theme";

const { palette } = InnovacareTheme;

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
  }}
/>
```

### Select Dropdown
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<Select value={value} onValueChange={setValue}>
  <SelectTrigger 
    className="h-8 text-xs" 
    style={{ borderColor: palette.neutral[300] }}
  >
    <SelectValue placeholder="Select..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>
```

### Card Component
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette } = InnovacareTheme;

<Card style={{ 
  backgroundColor: colors.background,
  borderColor: palette.neutral[200],
  boxShadow: '0 1px 3px 0 rgba(0,0,0,0.1)',
}}>
  <CardHeader className="border-b" style={{ borderColor: palette.neutral[200] }}>
    <CardTitle style={{ color: colors.primary }}>Card Title</CardTitle>
  </CardHeader>
  <CardContent className="p-4">
    Content here
  </CardContent>
</Card>
```

## 🏗️ Complete Page Template

```tsx
import { IHeader } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";

export default function NewPage() {
  const { colors, palette } = InnovacareTheme;

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      {/* Header - SAME ON ALL PAGES */}
      <IHeader showNavigation={true} username="User" role="Role" />
      
      {/* Main Content */}
      <main className="flex-1 p-4 overflow-auto">
        <Card style={{ 
          backgroundColor: colors.background,
          borderColor: palette.neutral[200],
        }}>
          <CardHeader className="border-b" style={{ borderColor: palette.neutral[200] }}>
            <CardTitle style={{ color: colors.primary }}>Page Title</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            {/* Page content here */}
          </CardContent>
        </Card>
      </main>
      
      {/* Footer - SAME ON ALL PAGES */}
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

## ✅ Component Checklist for New Pages

When creating a new page, ensure you:

- [ ] Import and use `IHeader` for navigation
- [ ] Import `InnovacareTheme` for colors
- [ ] Apply `palette.neutral[50]` to page background
- [ ] Use `colors.primary` for headings
- [ ] Use `palette.neutral[200]` for borders
- [ ] Use `colors.background` for cards
- [ ] Include the standard footer at bottom
- [ ] Use `IButton` for all action buttons
- [ ] Use `IDataTable` for data tables
- [ ] Apply consistent padding and spacing

## 🔄 Benefits

1. **Consistency**: Same look and feel across all pages
2. **Maintainability**: Change once, affects all pages
3. **Reusability**: No duplicate code
4. **Speed**: Build new pages quickly
5. **Professional**: Clean, modern design
6. **Accessible**: High contrast, readable text

## 📚 Additional Resources

- Full component documentation: `UI_COMPONENT_GUIDE.md`
- Planboard updates: `PLANBOARD_UPDATES.md`
- Theme configuration: `client/src/styles/innovacare-theme.ts`
- Component examples: `client/src/pages/innovacare-home.tsx`
