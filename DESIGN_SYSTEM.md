# HealthBridge Design System Documentation

## 📋 Table of Contents
1. [Overview](#overview)
2. [Color Schemes](#color-schemes)
3. [Typography](#typography)
4. [Icon Standards](#icon-standards)
5. [Form Design Standards](#form-design-standards)
6. [Component Library](#component-library)
7. [Usage Examples](#usage-examples)

---

## 🎨 Overview

The HealthBridge Design System provides a comprehensive, professional, and efficient UI/UX framework specifically designed for healthcare applications. It emphasizes:

- **Compact Design** - Maximize information density
- **Minimal Scrolling** - Efficient use of screen space
- **One-Click Interactions** - Reduce user effort
- **Professional Aesthetics** - Healthcare-appropriate colors
- **Consistency** - Standardized components across the app

---

## 🌈 Color Schemes

### 3 Professional Healthcare Themes

#### 1. Medical Teal (Primary Theme) 
**Best for:** Professional healthcare environments, trust-building interfaces

**Primary Colors:**
- Primary 500: `#00C1B0` - Main brand color
- Primary 600: `#00B5A5` - Hover states
- Primary 700: `#00A896` - Active states

**Use Cases:**
- Primary buttons and CTAs
- Active navigation items
- Important badges and labels
- Progress indicators

**Psychological Impact:** Trust, professionalism, medical expertise

---

#### 2. Clinical Blue
**Best for:** Modern medical facilities, tech-forward healthcare

**Primary Colors:**
- Primary 500: `#3B82F6` - Main brand color
- Primary 600: `#2563EB` - Hover states
- Primary 700: `#1D4ED8` - Active states

**Use Cases:**
- Clean, modern interfaces
- Data visualization
- Analytics dashboards
- Tech-oriented medical software

**Psychological Impact:** Clarity, innovation, precision

---

#### 3. Wellness Green
**Best for:** Wellness centers, patient-focused applications

**Primary Colors:**
- Primary 500: `#22C55E` - Main brand color
- Primary 600: `#16A34A` - Hover states
- Primary 700: `#15803D` - Active states

**Use Cases:**
- Wellness tracking
- Health improvement apps
- Patient portals
- Recovery monitoring

**Psychological Impact:** Health, growth, healing

---

### Status Color System

Universal status colors consistent across all themes:

| Status | Color | Hex Code | Use Case |
|--------|-------|----------|----------|
| **Completed** | Green | `#10B981` | Finished tasks, successful operations |
| **In Progress** | Orange | `#F59E0B` | Active tasks, pending actions |
| **Assigned** | Blue | `#3B82F6` | Assigned but not started |
| **Delayed** | Red | `#EF4444` | Overdue, urgent attention needed |
| **Unassigned** | Purple | `#8B5CF6` | Not yet assigned |
| **Cancelled** | Gray | `#6B7280` | Cancelled or inactive |
| **Pending** | Orange | `#F59E0B` | Waiting for approval |
| **Provisional** | Pink | `#EC4899` | Tentative, may change |

---

## ✍️ Typography

### Font Selection

#### Primary Font: **Inter**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Why Inter?**
- Highly legible at small sizes (perfect for compact UIs)
- Professional and modern
- Excellent for data-dense interfaces
- Wide character set support
- Optimized for screens

**Use For:**
- Body text
- Form fields
- Table data
- Navigation
- General UI elements

---

#### Secondary Font: **Poppins**
```css
font-family: 'Poppins', sans-serif;
```

**Why Poppins?**
- Friendly yet professional
- Great for headings
- Excellent readability
- Modern geometric sans-serif

**Use For:**
- Page titles
- Section headings
- Call-to-action buttons
- Marketing content
- Emphasis text

---

#### Monospace Font: **Fira Code**
```css
font-family: 'Fira Code', 'Courier New', monospace;
```

**Use For:**
- Task IDs
- System codes
- Technical identifiers
- Data that needs fixed-width formatting

---

### Font Size Scale (Compact)

| Name | Size | Pixels | Use Case |
|------|------|--------|----------|
| xs | 0.6875rem | 11px | Tiny labels, captions |
| sm | 0.8125rem | 13px | Table cells, compact forms |
| base | 0.875rem | 14px | **Default body text** |
| md | 0.9375rem | 15px | Slightly larger body |
| lg | 1rem | 16px | Subheadings |
| xl | 1.125rem | 18px | Section titles |
| 2xl | 1.25rem | 20px | Page titles |
| 3xl | 1.5rem | 24px | Major headings |

**Note:** Base size is 14px (0.875rem) - smaller than typical 16px to maximize information density.

---

### Font Weights

| Name | Weight | Use Case |
|------|--------|----------|
| Light | 300 | Subtle text, captions |
| Normal | 400 | Body text |
| Medium | 500 | Emphasized text |
| Semibold | 600 | Subheadings, buttons |
| Bold | 700 | Headings, important labels |

---

## 🎯 Icon Standards

### Icon Library: **Lucide React**

**Why Lucide?**
- 1000+ modern, consistent icons
- Tree-shakeable (only import what you use)
- Excellent TypeScript support
- Actively maintained
- Consistent stroke width and style
- Healthcare-relevant icons available

### Icon Size Scale

| Name | Size (px) | Use Case |
|------|-----------|----------|
| xs | 12 | Tiny icons in badges |
| sm | 14 | Compact UI elements |
| base | 16 | **Default size** - buttons, inputs |
| md | 18 | Medium emphasis |
| lg | 20 | Headers, navigation |
| xl | 24 | Hero sections, major actions |
| 2xl | 32 | Large feature icons |

### Stroke Width

- **Thin (1.5)**: Subtle, background icons
- **Normal (2)**: Default for most use cases
- **Bold (2.5)**: Emphasis, active states

### Common Icons Used

```tsx
import {
  Search,      // Search functionality
  Filter,      // Filtering options
  Menu,        // Navigation menu
  User,        // User profile
  Shield,      // Admin/security
  Calendar,    // Date selection
  Hash,        // ID/numbers
  Users,       // People/groups
  Briefcase,   // Business/work
  MapPin,      // Location
  Plus,        // Add/create
  Download,    // Export data
  LayoutGrid,  // Grid view
  Table,       // Table view
  Settings,    // Configuration
  LogOut,      // Sign out
  ChevronUp,   // Collapse
  ChevronDown, // Expand
} from "lucide-react";
```

---

## 📝 Form Design Standards

### Core Principles

1. **Compact Design** - Minimize vertical space
2. **Minimal Scrolling** - Fit more on screen
3. **Efficient Data Handling** - Smart pagination
4. **One-Click Interactions** - Reduce steps
5. **No Extra Spacing** - Maximize content density
6. **Advanced Techniques** - Smart defaults, inline editing

### Input Height Standards

| Size | Height | Use Case |
|------|--------|----------|
| sm | 28px (1.75rem) | Very compact forms |
| **base** | **32px (2rem)** | **Default** |
| md | 36px (2.25rem) | Comfortable forms |
| lg | 40px (2.5rem) | Large touch targets |

**Default: 32px** - Balances compactness with usability

### Form Layout Grid

| Screen Size | Columns | Typical Width |
|-------------|---------|---------------|
| Mobile | 1 | < 640px |
| Tablet | 2 | 640px - 1024px |
| Desktop | 3 | 1024px - 1280px |
| Wide | 4 | > 1280px |

### Spacing

- **Field Gap**: 12px (0.75rem) - Compact but breathable
- **Group Spacing**: 20px (1.25rem) - Between fieldsets
- **Section Spacing**: 24px (1.5rem) - Between major sections

### Input Padding

- **Vertical**: 6px (0.375rem)
- **Horizontal**: 12px (0.75rem)

### Label Positioning

- **Default**: Top labels (vertical stacking)
- **Alternative**: Left labels for compact horizontal forms
- **Label Font Size**: 11px (xs) or 13px (sm)
- **Label Weight**: 500 (medium) or 600 (semibold)

---

## 🧩 Component Library

### Compact Form Components

#### 1. CompactFormGroup
Container for organizing multiple form fields in a responsive grid.

**Props:**
- `columns`: 1, 2, 3, or 4 (responsive)
- `className`: Additional CSS classes
- `children`: Form field components

**Example:**
```tsx
<CompactFormGroup columns={3}>
  <CompactInput label="Name" />
  <CompactInput label="Email" />
  <CompactSelect label="Status" options={[...]} />
</CompactFormGroup>
```

---

#### 2. CompactInput
Compact text input field with optional icon.

**Props:**
- `label`: Field label (required)
- `icon`: Lucide icon component
- `placeholder`: Placeholder text
- `value`: Controlled value
- `onChange`: Change handler
- `type`: Input type (text, date, number, email)
- `required`: Show asterisk indicator
- `disabled`: Disable input

**Example:**
```tsx
<CompactInput
  label="Client Name"
  icon={Users}
  placeholder="Search client..."
  value={clientName}
  onChange={setClientName}
  required
/>
```

---

#### 3. CompactSelect
Compact dropdown with optional icon.

**Props:**
- `label`: Field label (required)
- `icon`: Lucide icon component
- `placeholder`: Placeholder text
- `value`: Selected value
- `onChange`: Change handler
- `options`: Array of {value, label} objects
- `required`: Show asterisk indicator
- `disabled`: Disable select

**Example:**
```tsx
<CompactSelect
  label="Office"
  icon={MapPin}
  placeholder="Select office"
  value={office}
  onChange={setOffice}
  options={[
    { value: "auckland", label: "Auckland" },
    { value: "wellington", label: "Wellington" }
  ]}
/>
```

---

#### 4. CompactCheckboxGroup
Multi-select checkbox group with optional columns.

**Props:**
- `label`: Group label (required)
- `icon`: Lucide icon component
- `options`: Array of {value, label} objects
- `selectedValues`: Array of selected values
- `onChange`: Handler receiving updated array
- `columns`: 1 or 2 column layout

**Example:**
```tsx
<CompactCheckboxGroup
  label="Status"
  icon={Briefcase}
  options={[
    { value: "assigned", label: "Assigned" },
    { value: "completed", label: "Completed" }
  ]}
  selectedValues={status}
  onChange={setStatus}
  columns={2}
/>
```

---

#### 5. CompactFieldSet
Group related fields with a collapsible header.

**Props:**
- `title`: Fieldset title (required)
- `icon`: Lucide icon component
- `children`: Field components
- `collapsible`: Enable collapse/expand
- `defaultExpanded`: Initial state

**Example:**
```tsx
<CompactFieldSet
  title="Primary Filters"
  icon={Filter}
  collapsible={true}
  defaultExpanded={true}
>
  <CompactFormGroup columns={3}>
    {/* Fields here */}
  </CompactFormGroup>
</CompactFieldSet>
```

---

### ModernHeader Component

Two-tier header with logo, theme selector, and user info.

**Features:**
- Theme switcher with 3 color schemes
- Logo display
- User name and role badges
- Mobile-responsive menu
- Gradient background
- Secondary menu bar

**Props:**
- `username`: Display name
- `role`: User role
- `isSuperAdmin`: Show admin badge
- `onMenuClick`: Menu button handler

---

## 💻 Usage Examples

### Changing Theme

```tsx
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { currentScheme, setScheme, theme } = useTheme();

  return (
    <button onClick={() => setScheme('clinicalBlue')}>
      Switch to Clinical Blue
    </button>
  );
}
```

### Using Theme Colors

```tsx
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.colors.primary[500],
        color: 'white',
        padding: theme.spacing.md,
        borderRadius: theme.components.borderRadius.md,
      }}
    >
      Themed Component
    </div>
  );
}
```

### Complete Form Example

```tsx
import {
  CompactFormGroup,
  CompactInput,
  CompactSelect,
  CompactCheckboxGroup,
  CompactFieldSet,
} from "@/components/CompactForm";
import { Calendar, Users, Briefcase } from "lucide-react";

function SearchForm() {
  const [filters, setFilters] = useState({
    dateFrom: "",
    client: "",
    status: [],
  });

  return (
    <CompactFieldSet title="Search Filters" icon={Filter}>
      <CompactFormGroup columns={3}>
        <CompactInput
          label="Date From"
          icon={Calendar}
          type="date"
          value={filters.dateFrom}
          onChange={(val) => setFilters({...filters, dateFrom: val})}
        />
        
        <CompactInput
          label="Client"
          icon={Users}
          placeholder="Search..."
          value={filters.client}
          onChange={(val) => setFilters({...filters, client: val})}
        />
        
        <CompactCheckboxGroup
          label="Status"
          icon={Briefcase}
          options={[
            { value: "assigned", label: "Assigned" },
            { value: "completed", label: "Completed" },
          ]}
          selectedValues={filters.status}
          onChange={(val) => setFilters({...filters, status: val})}
        />
      </CompactFormGroup>
    </CompactFieldSet>
  );
}
```

---

## 🎯 Best Practices

### DO ✅
- Use consistent icon sizes throughout
- Apply theme colors via the theme object
- Keep forms compact with appropriate spacing
- Use semantic color names (primary, success, error)
- Provide visual feedback for interactive elements
- Use appropriate font sizes for context
- Maintain consistent padding and margins

### DON'T ❌
- Hardcode colors - use theme system
- Mix different icon libraries
- Use excessive spacing in compact forms
- Ignore mobile responsiveness
- Use too many font sizes in one view
- Override theme defaults without good reason
- Neglect accessibility (contrast, focus states)

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

---

## ♿ Accessibility Guidelines

1. **Color Contrast**: All text meets WCAG AA standards (4.5:1 ratio)
2. **Focus States**: Visible focus indicators on all interactive elements
3. **Keyboard Navigation**: Full keyboard support
4. **Labels**: All form fields have associated labels
5. **ARIA**: Appropriate ARIA labels for screen readers
6. **Touch Targets**: Minimum 32px for mobile interactions

---

## 🚀 Performance Considerations

1. **Tree-shaking**: Only import icons you use
2. **CSS Variables**: Dynamic theme switching without re-renders
3. **Lazy Loading**: Load components as needed
4. **Optimized Fonts**: Use font-display: swap
5. **Minimal Dependencies**: Lean component library

---

## 📞 Support & Questions

For design system questions or suggestions:
- Review this documentation
- Check component examples in `/pages/planboardv3.tsx`
- Examine theme configuration in `/lib/theme-config.ts`
- Test components in Storybook (if available)

---

**Last Updated:** 2025-11-11  
**Version:** 1.0.0  
**Maintained by:** HealthBridge Design Team
