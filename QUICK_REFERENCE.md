# HealthBridge Design System - Quick Reference Card

## 🎨 Design Tokens

### Colors
```typescript
import { TOKENS } from '@/design-system';

// Primary (Navy Blue)
TOKENS.color.primary[500]    // #1A5490 - Main
TOKENS.color.primary[600]    // Hover
TOKENS.color.primary[700]    // Active

// Secondary (Maroon)
TOKENS.color.secondary[500]  // #8B2635 - Main

// Tertiary (Teal)
TOKENS.color.tertiary[500]   // #0EA5E9 - Main

// Neutral
TOKENS.color.neutral[0]      // White
TOKENS.color.neutral[50]     // Off-white background
TOKENS.color.neutral[600]    // Body text
TOKENS.color.neutral[900]    // Headings

// Semantic
TOKENS.color.semantic.success.main  // #10B981
TOKENS.color.semantic.warning.main  // #F59E0B
TOKENS.color.semantic.error.main    // #EF4444
TOKENS.color.semantic.info.main     // #3B82F6
```

### Typography
```typescript
// Font Sizes (base: 14px)
TOKENS.typography.fontSize.xs      // 11px
TOKENS.typography.fontSize.sm      // 13px
TOKENS.typography.fontSize.base    // 14px (DEFAULT)
TOKENS.typography.fontSize.lg      // 16px
TOKENS.typography.fontSize.xl      // 18px

// Font Weights
TOKENS.typography.fontWeight.normal    // 400
TOKENS.typography.fontWeight.medium    // 500
TOKENS.typography.fontWeight.semibold  // 600
TOKENS.typography.fontWeight.bold      // 700
```

### Spacing (8pt grid)
```typescript
TOKENS.spacing[1]   // 4px
TOKENS.spacing[2]   // 8px
TOKENS.spacing[3]   // 12px
TOKENS.spacing[4]   // 16px (most common)
TOKENS.spacing[6]   // 24px
TOKENS.spacing[8]   // 32px
```

### Border Radius
```typescript
TOKENS.borderRadius.sm    // 4px
TOKENS.borderRadius.base  // 6px
TOKENS.borderRadius.md    // 8px (most common)
TOKENS.borderRadius.lg    // 12px
TOKENS.borderRadius.full  // Pill shape
```

### Shadows
```typescript
TOKENS.shadow.sm    // Subtle
TOKENS.shadow.base  // Default
TOKENS.shadow.md    // Hover states
TOKENS.shadow.lg    // Modals
```

---

## 🧱 Atomic Components

### Button
```typescript
import { Button, IconButton } from '@/components/atoms';
import { Save, Download } from 'lucide-react';

// Primary button
<Button variant="primary" size="base" onClick={handleSave}>
  Save Changes
</Button>

// With icon
<Button variant="primary" iconBefore={Save}>
  Save
</Button>

// Icon button
<IconButton 
  icon={Download} 
  variant="ghost" 
  ariaLabel="Download"
  tooltip="Download file"
/>

// Variants: primary, secondary, tertiary, ghost, outline, danger
// Sizes: xs, sm, base, md, lg
```

### Badge
```typescript
import { Badge } from '@/components/atoms';

<Badge variant="success">Active</Badge>
<Badge variant="warning" size="sm">Pending</Badge>
<Badge variant="error" dot>Critical</Badge>

// Variants: primary, secondary, success, warning, error, info, neutral
// Sizes: sm, base, lg
```

### Input
```typescript
import { Input } from '@/components/atoms';
import { Search, Mail } from 'lucide-react';

<Input 
  type="email"
  placeholder="Enter email"
  iconBefore={Mail}
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

<Input 
  type="text"
  placeholder="Search..."
  iconBefore={Search}
  size="sm"
/>

// Sizes: sm, base, md, lg
```

---

## 🔗 Molecules

### MetricCard
```typescript
import { MetricCard, MetricGrid } from '@/components/molecules';
import { Users, TrendingUp } from 'lucide-react';

<MetricCard
  title="Active Patients"
  value={156}
  icon={Users}
  variant="primary"
  change={12}
  trend="up"
  onClick={() => filterByActive()}
/>

// Variants: primary, secondary, success, warning, error, info
```

### MetricGrid
```typescript
<MetricGrid columns={8}>
  <MetricCard {...} />
  <MetricCard {...} />
  {/* More cards */}
</MetricGrid>

// Columns: 3, 4, 6, 8, 12
```

---

## 📐 Templates

### DashboardLayout
```typescript
import { 
  DashboardLayout,
  DashboardHeader,
  DashboardFilters,
  DashboardMetrics,
  DashboardToolbar,
  DashboardContent,
  DashboardFooter
} from '@/components/templates';

export default function MyPage() {
  return (
    <DashboardLayout
      header={<DashboardHeader>...</DashboardHeader>}
      filters={<DashboardFilters>...</DashboardFilters>}
      metrics={<DashboardMetrics>...</DashboardMetrics>}
      toolbar={<DashboardToolbar>...</DashboardToolbar>}
      content={<DashboardContent>...</DashboardContent>}
      footer={<DashboardFooter>...</DashboardFooter>}
    />
  );
}
```

---

## 🎯 Common Patterns

### Styling with Tokens
```typescript
// ✅ GOOD
const styles: React.CSSProperties = {
  backgroundColor: TOKENS.color.primary[500],
  padding: TOKENS.spacing[4],
  borderRadius: TOKENS.borderRadius.md,
  fontSize: TOKENS.typography.fontSize.base,
  color: TOKENS.color.neutral[0],
};

// ❌ BAD
const styles = {
  backgroundColor: '#1A5490',
  padding: '16px',
  borderRadius: '8px',
  fontSize: '14px',
  color: 'white',
};
```

### Responsive Grid
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Conditional Styling
```typescript
const buttonStyles: React.CSSProperties = {
  backgroundColor: isActive 
    ? TOKENS.color.primary[500] 
    : TOKENS.color.neutral[100],
  color: isActive 
    ? TOKENS.color.neutral[0] 
    : TOKENS.color.neutral[700],
};
```

---

## 🚀 Quick Tips

### 1. Always Use Design Tokens
Never hardcode colors, spacing, or typography. Always use `TOKENS`.

### 2. Follow Atomic Design
- **Atoms**: Single elements (Button, Input)
- **Molecules**: 2-5 atoms combined (MetricCard)
- **Organisms**: Complex sections (DataTable, Header)
- **Templates**: Page layouts (DashboardLayout)
- **Pages**: Complete pages with data

### 3. Scroll-less First
- Use `DashboardLayout` for all dashboard pages
- Keep filters/metrics fixed
- Only content area scrolls

### 4. TypeScript Everything
- Use exported types
- Leverage IntelliSense
- Catch errors early

### 5. Accessibility Matters
- Use `ariaLabel` on IconButtons
- Provide proper semantic HTML
- Test keyboard navigation

---

## 📂 File Locations

```
Design System
├─ Tokens:     client/src/design-system/tokens.ts
├─ Theme:      client/src/design-system/theme.ts
└─ Index:      client/src/design-system/index.ts

Components
├─ Atoms:      client/src/components/atoms/
├─ Molecules:  client/src/components/molecules/
└─ Templates:  client/src/components/templates/

Documentation
├─ Architecture:    ARCHITECTURE.md
├─ Guide:           MODERNIZATION_GUIDE.md
├─ Summary:         MODERNIZATION_SUMMARY.md
└─ Quick Ref:       QUICK_REFERENCE.md (this file)

Examples
└─ Modern Dashboard: client/src/pages/ModernDashboard.tsx
```

---

## 🔗 Routes

- `/` - Modern Dashboard (default)
- `/dashboard` - Modern Dashboard
- `/modern` - Modern Dashboard
- `/innovacare` - Legacy Innovacare UI
- `/planboard` - Legacy Planboard

---

## 🆘 Common Issues

### Issue: Colors not applying
**Solution**: Make sure you imported `TOKENS` from `@/design-system`

### Issue: Layout not scroll-less
**Solution**: Use `DashboardLayout` template, not raw divs

### Issue: TypeScript errors on Button
**Solution**: Make sure to pass required props like `ariaLabel` for `IconButton`

### Issue: Styles not updating
**Solution**: Check you're using tokens, not hardcoded values

---

## 📞 Need Help?

1. Check `MODERNIZATION_GUIDE.md` for detailed docs
2. Review `client/src/pages/ModernDashboard.tsx` for examples
3. See `ARCHITECTURE.md` for patterns
4. Examine existing atomic components for reference

---

**Last Updated**: January 17, 2025  
**Version**: 2.0.0
