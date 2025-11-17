# HealthBridge Reusable Components Guide

## Overview
This guide explains how to use the ultra-compact, reusable UI components across the HealthBridge application. All components follow the design system standards for minimal spacing, professional appearance, and maximum information density.

---

## 🎯 Core Design Principles

### 1. **Ultra Compact**
- **Minimal padding**: 1-2px (0.25-0.5rem)
- **Tight spacing**: 4-8px gaps between elements
- **Small font sizes**: 10-13px for most UI elements
- **Compact heights**: 24-32px for inputs and buttons

### 2. **Less Scrollable**
- Horizontal layouts where possible
- Collapsible advanced sections
- Efficient use of screen real estate
- Fixed headers and minimal chrome

### 3. **Highly Clickable**
- One-click actions preferred
- Inline editing capabilities
- Quick filters at top level
- Keyboard shortcuts supported

### 4. **Professional Design**
- Lucide React icons (consistent, modern)
- Inter font family (highly legible)
- Consistent color scheme
- Subtle shadows and borders

---

## 📦 Reusable Components

### 1. UltraCompactFilters Component

**Location:** `/client/src/components/UltraCompactFilters.tsx`

**Purpose:** A highly compact, horizontally-oriented filter component with expandable advanced options.

**Features:**
- Primary filters in a single row (Date From, Date To, Office, Group, Client, Status)
- Status selection shown as compact text with count
- Expandable advanced section for all other filters
- Minimal height - approximately 80px collapsed, 200px expanded
- All filters from v2 included in advanced section

**Usage:**
```tsx
import UltraCompactFilters, { type FilterValues } from "@/components/UltraCompactFilters";

function MyPage() {
  const [filteredData, setFilteredData] = useState([]);
  
  const handleSearch = (filters: FilterValues) => {
    // Apply filters to your data
    const filtered = myData.filter(item => {
      // Filter logic here
      return true;
    });
    setFilteredData(filtered);
  };

  const handleReset = () => {
    setFilteredData([]);
  };

  return (
    <div>
      <UltraCompactFilters 
        onSearch={handleSearch} 
        onReset={handleReset} 
      />
      {/* Your content */}
    </div>
  );
}
```

**Included Filters:**
- **Primary (Always Visible):**
  - Date From / Date To
  - Office
  - Group
  - Client
  - Status (multi-select with count display)

- **Advanced (Expandable):**
  - Status (detailed checkbox list)
  - Service (clickable list)
  - Client City (clickable list)
  - Task ID
  - Carer
  - Facility
  - Client Coordinator
  - Carer Coordinator
  - DHB Region
  - Search By (Task ID / Dates)

---

### 2. HomePage Dashboard Component

**Location:** `/client/src/pages/home.tsx`

**Purpose:** A comprehensive dashboard with quick action buttons and data grid, based on the reference UI.

**Features:**
- Ultra-compact filter bar at top
- Grid of 35+ colorful quick action buttons with icons
- Full-width data table with all columns visible
- Minimal vertical spacing
- Professional icon usage from Lucide React

**Key Features:**
```tsx
// Quick Action Buttons - Organized by Category
const quickActions = [
  { id: "home-help", label: "Home Help Leave", icon: HomeIcon, color: "bg-blue-500" },
  { id: "client-review", label: "Client Review", icon: ClipboardList, color: "bg-purple-500" },
  // ... 35+ more actions
];

// Compact Filter Bar
<div className="px-2 py-1.5">
  {/* Date From, Date To, Office, Group */}
  {/* Load Disabled/Read Alerts checkboxes */}
  {/* Search/Reset buttons */}
</div>

// Color-Coded Action Buttons
<Button className="bg-blue-500 hover:bg-blue-600">
  <Icon className="h-4 w-4" />
  <span className="text-[9px]">Action Name</span>
</Button>
```

**Customization:**
- Add/remove quick action buttons easily
- Change colors per action category
- Modify table columns as needed
- Adjust filter fields

---

### 3. PlanboardV3 Ultra Compact

**Location:** `/client/src/pages/planboardv3.tsx`

**Purpose:** Demonstrates the ultra-compact filter integration with minimal spacing.

**Features:**
- Ultra compact filters at top
- Minimal action bar (24px height)
- Maximum space for data table
- Tiny badges for active filters
- 1px padding throughout

**Layout Structure:**
```
┌────────────────────────────────────────┐
│ Header (Fixed)                         │
├────────────────────────────────────────┤
│ UltraCompactFilters (80-200px)         │
├────────────────────────────────────────┤
│ Action Bar (24px)                      │
├────────────────────────────────────────┤
│ Data Table (Flex-1 - Fills remaining) │
├────────────────────────────────────────┤
│ Status Bar (32px)                      │
├────────────────────────────────────────┤
│ Footer (Fixed)                         │
└────────────────────────────────────────┘
```

---

## 🎨 Design System Standards

### Colors
- **Primary**: `#3B82F6` (Clinical Blue)
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Orange)
- **Error**: `#EF4444` (Red)
- **Info**: `#8B5CF6` (Purple)

### Typography
- **Font**: Inter (primary), Poppins (headings)
- **Sizes**:
  - `9px` - Tiny labels, button text
  - `10px` - Table cells, compact UI
  - `11px` - Form labels
  - `12px` - Body text
  - `13px` - Emphasized text
  - `14px` - Headings

### Icons
- **Library**: Lucide React
- **Sizes**: 12-20px (3-5 in Tailwind)
- **Stroke**: 2px default
- **Usage**: Always pair icon with text in buttons

### Spacing
- **Gap**: `gap-1` (4px) or `gap-2` (8px)
- **Padding**: `p-1` (4px) or `p-2` (8px)
- **Height**: 
  - Inputs: `h-7` (28px)
  - Buttons: `h-6` (24px) or `h-7` (28px)
  - Action bars: 24-32px

---

## 🔧 How to Make Other Forms Compact

### Step 1: Replace Filter Component
```tsx
// OLD - Verbose component
import SearchFilters from "@/components/SearchFilters";
<div className="p-4">
  <SearchFilters ... />
</div>

// NEW - Ultra compact
import UltraCompactFilters from "@/components/UltraCompactFilters";
<UltraCompactFilters ... />
```

### Step 2: Reduce Padding
```tsx
// OLD - Spacious
className="p-4 gap-4"

// NEW - Compact
className="p-1 gap-1"
```

### Step 3: Smaller Font Sizes
```tsx
// OLD - Standard sizes
className="text-sm"    // 14px

// NEW - Compact sizes
className="text-[10px]"  // 10px
className="text-[11px]"  // 11px
```

### Step 4: Reduce Input Heights
```tsx
// OLD - Standard height
className="h-10"   // 40px

// NEW - Compact height
className="h-7"    // 28px
className="h-6"    // 24px
```

### Step 5: Use Horizontal Layouts
```tsx
// OLD - Vertical stacking
<div className="flex flex-col gap-4">

// NEW - Horizontal wrapping
<div className="flex flex-wrap gap-2">
```

---

## 📋 Quick Reference: Common Patterns

### Ultra Compact Input
```tsx
<div className="space-y-0.5">
  <Label className="text-[11px] font-semibold">Field Name</Label>
  <Input className="h-7 text-xs px-2" />
</div>
```

### Ultra Compact Select
```tsx
<div className="space-y-0.5">
  <Label className="text-[11px] font-semibold">Field Name</Label>
  <Select>
    <SelectTrigger className="h-7 text-xs px-2">
      <SelectValue />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="option">Option</SelectItem>
    </SelectContent>
  </Select>
</div>
```

### Ultra Compact Button
```tsx
<Button className="h-6 px-2 text-[10px]">
  <Icon className="h-3 w-3 mr-1" />
  Action
</Button>
```

### Compact Badge
```tsx
<Badge className="text-[9px] h-5 px-1.5">
  Label
</Badge>
```

### Compact Checkbox
```tsx
<div className="flex items-center space-x-1.5">
  <Checkbox className="h-3 w-3" />
  <label className="text-xs cursor-pointer">Label</label>
</div>
```

---

## ✅ Checklist for Converting Forms

- [ ] Replace filter components with UltraCompactFilters
- [ ] Change all padding from `p-4` to `p-1` or `p-2`
- [ ] Reduce gaps from `gap-4` to `gap-1` or `gap-2`
- [ ] Set input heights to `h-7` (28px) or `h-6` (24px)
- [ ] Use font sizes `text-[10px]` to `text-xs` (12px)
- [ ] Replace vertical layouts with horizontal where possible
- [ ] Use Lucide React icons at 12-16px size
- [ ] Add expandable sections for advanced options
- [ ] Remove unnecessary borders and shadows
- [ ] Test on different screen sizes

---

## 🚀 Best Practices

### DO ✅
- Use horizontal layouts for filters
- Group related fields together
- Provide visual feedback on interaction
- Use consistent icon sizes
- Keep labels short and clear
- Use tooltips for long text
- Make actions one-click when possible

### DON'T ❌
- Add extra padding unnecessarily
- Use large font sizes
- Stack everything vertically
- Mix different icon libraries
- Hide important actions in dropdowns
- Use excessive whitespace
- Ignore mobile responsiveness

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Stack filters vertically
- Full-width buttons
- Collapsible sections
- Touch-friendly sizes (min 24px)

### Tablet (768px - 1024px)
- 2-3 column layouts
- Horizontal filter rows
- Compact but readable

### Desktop (> 1024px)
- 4-8 column layouts
- Maximum information density
- All filters visible in one row
- Side-by-side sections

---

## 🎓 Examples

### Example 1: Client Search Page
```tsx
import UltraCompactFilters from "@/components/UltraCompactFilters";

export default function ClientSearch() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <UltraCompactFilters onSearch={handleSearch} onReset={handleReset} />
      <div className="flex-1 overflow-auto p-1">
        {/* Client table here */}
      </div>
      <Footer />
    </div>
  );
}
```

### Example 2: Dashboard with Actions
```tsx
import { Button } from "@/components/ui/button";
import { Icon1, Icon2, Icon3 } from "lucide-react";

export default function Dashboard() {
  const actions = [
    { id: "action1", label: "Action 1", icon: Icon1, color: "bg-blue-500" },
    { id: "action2", label: "Action 2", icon: Icon2, color: "bg-green-500" },
    { id: "action3", label: "Action 3", icon: Icon3, color: "bg-purple-500" },
  ];

  return (
    <div className="p-2">
      {/* Compact filter bar */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {actions.map(action => (
          <Button 
            key={action.id}
            className={`h-12 flex flex-col ${action.color} text-white`}
          >
            <action.icon className="h-4 w-4" />
            <span className="text-[9px]">{action.label}</span>
          </Button>
        ))}
      </div>
      {/* Content */}
    </div>
  );
}
```

---

## 📞 Support

For questions about reusable components:
- Review DESIGN_SYSTEM.md for full design standards
- Check component source code for implementation details
- Test components in isolation before integration
- Follow the checklist when converting existing forms

---

**Last Updated:** 2025-11-12  
**Version:** 1.0.0  
**Maintained by:** HealthBridge Development Team
