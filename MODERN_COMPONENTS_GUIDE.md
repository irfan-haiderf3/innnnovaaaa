# Modern Components Guide

This guide explains the new modern, component-based architecture of HealthBridge.

## 🎨 Branding Configuration

All branding (colors, typography, spacing) is centralized in `/client/src/config/branding.ts`.

### Quick Branding Changes

To change the app's color scheme, edit `brandColors` in `branding.ts`:

```typescript
export const brandColors = {
  primary: { 
    500: '#00BCD4',  // Main turquoise color - change this!
    // ... other shades
  },
  secondary: {
    500: '#9C27B0',  // Purple - change this!
    // ... other shades
  },
  // ... more colors
};
```

**That's it!** The entire app will update automatically.

## 🧩 Modern Components

### 1. ModernDataTable

Beautiful, sortable data table with hover effects.

```tsx
import { ModernDataTable } from '@/components/modern';

const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'status', label: 'Status', render: (val) => <Badge>{val}</Badge> }
];

<ModernDataTable data={myData} columns={columns} />
```

**Features:**
- Automatic sorting
- Sticky headers
- Hover effects
- Custom cell renderers
- Responsive scrolling

### 2. MetricCard

Graphical cards for displaying metrics and filters.

```tsx
import { MetricCard, MetricGrid } from '@/components/modern';
import { Users } from 'lucide-react';

<MetricGrid>
  <MetricCard
    title="Active Users"
    value={150}
    icon={Users}
    color="primary"
    trend={{ value: 12, isPositive: true }}
    onClick={() => handleFilter('users')}
  />
</MetricGrid>
```

**Features:**
- Beautiful gradient backgrounds
- Click interactions
- Trend indicators
- Active states
- 7 color variants

### 3. ModernButton

Eye-catching buttons with animations.

```tsx
import { ModernButton, ModernIconButton } from '@/components/modern';
import { Save } from 'lucide-react';

<ModernButton 
  icon={Save} 
  variant="primary" 
  size="md"
  onClick={handleSave}
>
  Save Changes
</ModernButton>

<ModernIconButton 
  icon={Settings} 
  variant="ghost" 
  tooltip="Settings"
/>
```

**Variants:**
- primary, secondary, accent
- success, warning, error
- outline, ghost

**Features:**
- Gradient backgrounds
- Hover lift effect
- Shimmer animation
- Loading states
- Icon positioning

## 🎯 Usage Guidelines

### Component-Based Structure

Each page should:
1. Import modern components
2. Define data types
3. Configure columns/props
4. Use semantic HTML

### Example Page Structure

```tsx
import { ModernDataTable, MetricCard, ModernButton } from '@/components/modern';
import { brandColors } from '@/config/branding';

export default function MyPage() {
  const [data, setData] = useState([]);
  
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      {/* Filters */}
      <div className="p-4">
        <ModernButton icon={Search} variant="primary">
          Search
        </ModernButton>
      </div>
      
      {/* Metrics */}
      <MetricGrid>
        {metrics.map(m => <MetricCard {...m} />)}
      </MetricGrid>
      
      {/* Data Table */}
      <div className="flex-1 p-4">
        <ModernDataTable data={data} columns={columns} />
      </div>
      
      <Footer />
    </div>
  );
}
```

## 🎨 Theming

### Color Usage

```tsx
import { brandColors } from '@/config/branding';

// In JSX
<div style={{ 
  backgroundColor: brandColors.primary[50],
  color: brandColors.neutral[700]
}} />

// With opacity
import { withOpacity } from '@/config/branding';
<div style={{ 
  backgroundColor: withOpacity(brandColors.primary[500], 0.1)
}} />
```

### Gradients

```tsx
import { brandGradients } from '@/config/branding';

<div style={{ background: brandGradients.primary }} />
```

## 📱 Responsive Design

All modern components are responsive by default:
- MetricGrid: 2-8 columns based on screen size
- ModernDataTable: Horizontal scroll on mobile
- ModernButton: Adapts text/icon spacing

## 🚀 Best Practices

### DO ✅
- Use ModernDataTable for all tabular data
- Use MetricCard for filters and statistics
- Use ModernButton for all actions
- Import from `@/components/modern`
- Use brandColors for consistent styling

### DON'T ❌
- Create inline tables with `<table>`
- Use old button styles
- Hardcode colors in components
- Mix old and new component patterns
- Forget to apply branding theme

## 🔧 Customization

### Adding New Colors

Edit `brandColors` in `branding.ts`:

```typescript
export const brandColors = {
  // ... existing colors
  custom: {
    50: '#...',
    // ... shades 100-900
  }
};
```

### Creating New Variants

Extend component variants:

```typescript
// In ModernButton.tsx
const variantStyles = {
  // ... existing
  custom: {
    background: brandGradients.custom,
    color: 'white',
    // ...
  }
};
```

## 📚 Component Reference

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| ModernDataTable | Display tabular data | data, columns |
| MetricCard | Show metrics/filters | title, value, icon, color |
| ModernButton | Primary actions | variant, size, icon |
| ModernIconButton | Icon-only actions | icon, variant, tooltip |
| MetricGrid | Grid container | children |

## 🎓 Learning Path

1. **Start here:** Study `home-new.tsx` - it demonstrates all patterns
2. **Customize:** Edit `branding.ts` to change colors
3. **Build:** Create new pages using modern components
4. **Extend:** Add custom cell renderers or button variants

## 🆘 Troubleshooting

**Colors not applying?**
- Ensure `applyBrandTheme()` is called in `main.tsx`

**Table not sorting?**
- Set `sortable: true` in column definition

**Icons not showing?**
- Import from `lucide-react`
- Pass as `icon` prop, not JSX

**Hover effects not working?**
- Check `disabled` prop is not set
- Verify CSS transitions aren't overridden

## 📞 Support

For questions or issues with modern components:
1. Check this guide
2. Review example in `home-new.tsx`
3. Inspect `branding.ts` for configuration options
