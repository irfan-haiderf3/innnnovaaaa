# HealthBridge Icon System Guide

## Overview

HealthBridge uses an elegant, professional icon system built on **Lucide React** icons with custom enhancements for a polished, designer-quality experience. The system provides consistent sizing, elegant animations, and sophisticated visual effects throughout the application.

## Key Features

### ✨ Professional Visual Design
- **Refined Shadows & Glows**: Subtle drop shadows and glow effects for visual depth
- **Smooth Animations**: 200-300ms transitions with easing curves
- **Micro-interactions**: Hover states, scale transforms, and slide effects
- **Consistent Stroke Weights**: 2-2.5px stroke width for optimal clarity

### 🎨 Design Tokens
- **Size System**: xs, sm, md, lg, xl, 2xl (3px to 40px)
- **Variant System**: default, primary, secondary, accent, success, warning, error, ghost
- **Animation States**: static, animated, pulse, spin
- **Visual Effects**: shadows, glows, badges, and status indicators

## Usage

### Basic Icon Component

```tsx
import { Icon } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";

// Simple icon
<Icon icon={IconRegistry.navigation.dashboard} size="md" />

// Animated icon with glow
<Icon 
  icon={IconRegistry.status.success} 
  size="lg"
  variant="success"
  animated
  glowEffect
/>
```

### Icon Button

```tsx
import { IconButton } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";

<IconButton
  icon={IconRegistry.actions.menu}
  size="md"
  onClick={handleClick}
  className="hover:scale-110"
/>
```

### Icon with Badge

```tsx
import { IconWithBadge } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";

<IconWithBadge
  icon={IconRegistry.communication.bell}
  size="md"
  badgeContent={5}
  badgeVariant="error"
/>
```

### Status Icon

```tsx
import { StatusIcon } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";

<StatusIcon
  icon={IconRegistry.status.pending}
  status="loading"
  size="md"
  pulse
/>
```

## Icon Registry

### Available Categories

#### Navigation
- `dashboard` - LayoutDashboard
- `calendar` - Calendar
- `documents` - FileText
- `billing` - DollarSign
- `jobs` - Briefcase
- `help` - HelpCircle
- `maintenance` - Wrench
- `analytics` - BarChart3
- `settings` - Settings
- `home` - Home

#### User & Authentication
- `profile` - User
- `users` - Users
- `shield` - Shield (Admin indicator)
- `logout` - LogOut
- `lock` - Lock
- `unlock` - Unlock
- `userCheck` - UserCheck

#### Actions
- `menu` - Menu (Hamburger)
- `close` - X (Close/Cancel)
- `search` - Search
- `filter` - Filter
- `add` - Plus
- `edit` - Edit
- `delete` - Trash2
- `save` - Save
- `download` - Download
- `upload` - Upload
- `refresh` - RefreshCw
- `sort` - ArrowUpDown

#### Status Indicators
- `success` - CheckCircle2 (Completed tasks)
- `pending` - Clock (In progress)
- `warning` - AlertCircle (Delayed/Issues)
- `error` - XCircle (Failed/Cancelled)
- `unassigned` - UserX
- `assigned` - Package
- `info` - Info
- `alertTriangle` - AlertTriangle

#### Healthcare
- `stethoscope` - Medical equipment
- `heart` - Health monitoring
- `activity` - Vital signs
- `pill` - Medications
- `syringe` - Injections
- `clipboard` - Medical records

#### Communication
- `mail` - Email
- `phone` - Phone
- `message` - Messages
- `bell` - Notifications
- `notification` - Alert notifications

#### UI Elements
- `chevronRight`, `chevronLeft`, `chevronDown`, `chevronUp` - Directional arrows
- `eye`, `eyeOff` - Visibility toggle
- `check` - Confirmation
- `star` - Favorites/Rating

## Size Reference

| Size | Pixels | Use Case |
|------|--------|----------|
| xs   | 12px   | Tiny indicators, nested elements |
| sm   | 16px   | Table cells, compact UI, badges |
| md   | 20px   | Default size, navigation, forms |
| lg   | 24px   | Headers, prominent actions |
| xl   | 32px   | Hero sections, feature highlights |
| 2xl  | 40px   | Landing pages, marketing |

## Visual Effects

### Animations
```tsx
// Hover animation
<Icon icon={IconRegistry.actions.edit} animated />

// Continuous pulse
<StatusIcon icon={IconRegistry.status.warning} status="warning" pulse />

// Spin animation
<StatusIcon icon={IconRegistry.actions.refresh} status="loading" />
```

### Shadows & Glows
```tsx
// Drop shadow for depth
<Icon icon={IconRegistry.user.shield} className="drop-shadow-sm" />

// Glow effect for emphasis
<Icon icon={IconRegistry.status.success} glowEffect />
```

### Custom Stroke Width
```tsx
// Bolder icon for active states
<Icon 
  icon={IconRegistry.navigation.dashboard} 
  strokeWidth={2.5}
  size="md"
/>
```

## Best Practices

### 1. **Consistency**
- Use the same size for similar elements
- Apply consistent stroke weights across UI sections
- Maintain color variants that match component states

### 2. **Performance**
- Avoid excessive animations on lists or tables
- Use static icons for non-interactive elements
- Apply glow effects sparingly for emphasis

### 3. **Accessibility**
- Always provide aria-labels for icon-only buttons
- Use appropriate color contrast for icon variants
- Include tooltips for complex icon meanings

### 4. **Visual Hierarchy**
```tsx
// Primary action - larger, animated
<Icon icon={IconRegistry.actions.save} size="lg" animated />

// Secondary action - standard size
<Icon icon={IconRegistry.actions.edit} size="md" />

// Tertiary info - smaller, subtle
<Icon icon={IconRegistry.ui.info} size="sm" variant="ghost" />
```

## Advanced Patterns

### Navigation Icons with Active States
```tsx
const isActive = location === item.path;

<Icon 
  icon={item.icon} 
  size="sm" 
  animated={isActive}
  strokeWidth={isActive ? 2.5 : 2}
  className={isActive ? "text-primary" : "text-muted-foreground"}
/>
```

### Status Badges with Icons
```tsx
<Badge 
  className="gap-1.5 transition-all hover:scale-105"
  style={{ boxShadow: `0 2px 6px ${color}40` }}
>
  <Icon 
    icon={statusIcon} 
    size="xs" 
    animated={isInProgress}
    strokeWidth={2.5}
  />
  {statusText}
</Badge>
```

### Elegant Hover Effects
```tsx
<div className="group">
  <Icon 
    icon={IconRegistry.actions.edit}
    size="md"
    className="transition-all duration-200 
               group-hover:scale-110 
               group-hover:text-primary
               group-hover:drop-shadow-lg"
  />
</div>
```

## Theme Integration

Icons automatically adapt to theme colors:

```tsx
// Uses theme-aware variants
<Icon icon={IconRegistry.navigation.dashboard} variant="primary" />
<Icon icon={IconRegistry.status.success} variant="success" />
<Icon icon={IconRegistry.status.error} variant="error" />
```

## Migration Guide

### From Direct Lucide Imports
```tsx
// Before
import { Menu, X } from "lucide-react";
<Menu className="h-5 w-5" />

// After
import { Icon } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";
<Icon icon={IconRegistry.actions.menu} size="md" animated />
```

## Examples in Production

### Header Navigation
```tsx
<Icon 
  icon={IconComponent} 
  size="sm" 
  animated={isActive} 
  strokeWidth={isActive ? 2.5 : 2}
  className="transition-all duration-200"
/>
```

### Status Indicators
```tsx
<Icon 
  icon={statusIcon} 
  size="xs" 
  animated={status === "In Progress"}
  strokeWidth={2.5}
  className="drop-shadow-sm"
/>
```

### Login Page Help Section
```tsx
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-100">
  <Icon 
    icon={IconRegistry.communication.mail} 
    size="sm" 
    variant="accent"
    animated
  />
</div>
```

## Icon Design Philosophy

Our icon system follows these principles:

1. **Elegance**: Refined strokes, balanced proportions, subtle effects
2. **Consistency**: Uniform sizing, spacing, and animation timing
3. **Performance**: Optimized animations, minimal re-renders
4. **Accessibility**: Clear meanings, proper contrast, ARIA support
5. **Scalability**: Easy to extend, well-organized registry

## Support

For questions or suggestions about the icon system:
- Review `client/src/components/ui/icon.tsx` for component APIs
- Check `client/src/lib/icon-utils.ts` for available icons
- See implementation examples in `Header.tsx`, `PlanboardTable.tsx`, and `login.tsx`

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**Maintained By**: HealthBridge Development Team
