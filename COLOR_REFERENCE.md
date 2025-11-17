# 🎨 Healthcare Theme - Quick Color Reference

## Primary Colors (Dark Blue - Trust & Professionalism)

| Shade | Hex Code  | HSL                | Usage |
|-------|-----------|--------------------|-----------------------------------------|
| 50    | `#E8EFF8` | `210 65% 94%`     | Very light backgrounds                  |
| 100   | `#D1DFEF` | `210 65% 88%`     | Light hover states                      |
| 200   | `#A3BFE0` | `210 65% 76%`     | Lighter elements                        |
| 300   | `#749FD0` | `210 65% 64%`     | Medium light                            |
| 400   | `#4680C1` | `210 65% 52%`     | Medium                                  |
| **500** | **`#1A5490`** | **`210 65% 34%`** | **Main primary color** ⭐             |
| 600   | `#154477` | `210 65% 27%`     | Darker shade                            |
| 700   | `#10335E` | `210 65% 22%`     | Dark (navigation bars)                  |
| 800   | `#0B2344` | `210 65% 15%`     | Extra dark                              |
| 900   | `#06122B` | `210 65% 10%`     | Almost black                            |

**Copy Primary Color:**
```css
--primary: 210 65% 34%;  /* #1A5490 */
```

---

## Secondary Colors (Maroon - Urgency & Critical Actions)

| Shade | Hex Code  | HSL                | Usage |
|-------|-----------|--------------------|-----------------------------------------|
| 50    | `#FDF2F2` | `352 55% 97%`     | Very light backgrounds                  |
| 100   | `#FBE5E5` | `352 55% 94%`     | Light backgrounds                       |
| 200   | `#F7CBCB` | `352 55% 88%`     | Lighter maroon                          |
| 300   | `#F3B1B1` | `352 55% 82%`     | Light maroon                            |
| 400   | `#EF9797` | `352 55% 76%`     | Medium maroon                           |
| **500** | **`#8B2635`** | **`352 55% 35%`** | **Main maroon color** ⭐              |
| 600   | `#771F2D` | `352 55% 30%`     | Darker maroon                           |
| 700   | `#621826` | `352 55% 24%`     | Deep maroon                             |
| 800   | `#4E121E` | `352 55% 19%`     | Very dark maroon                        |
| 900   | `#3A0D16` | `352 55% 14%`     | Almost black maroon                     |

**Copy Secondary Color:**
```css
--destructive: 352 55% 35%;  /* #8B2635 */
```

---

## Accent Colors (Teal - Informational)

| Shade | Hex Code  | HSL                | Usage |
|-------|-----------|--------------------|-----------------------------------------|
| 50    | `#F0F9FF` | `199 89% 97%`     | Very light backgrounds                  |
| 100   | `#E0F2FE` | `199 89% 94%`     | Light backgrounds                       |
| 200   | `#BAE6FD` | `199 89% 86%`     | Lighter teal                            |
| 300   | `#7DD3FC` | `199 89% 74%`     | Light teal                              |
| 400   | `#38BDF8` | `199 89% 60%`     | Medium teal                             |
| **500** | **`#0EA5E9`** | **`199 89% 48%`** | **Main teal color** ⭐                |
| 600   | `#0284C7` | `199 89% 39%`     | Darker teal                             |
| 700   | `#0369A1` | `199 89% 32%`     | Deep teal                               |
| 800   | `#075985` | `199 89% 28%`     | Very dark teal                          |
| 900   | `#0C4A6E` | `199 89% 23%`     | Almost black teal                       |

**Copy Accent Color:**
```css
--accent: 199 89% 48%;  /* #0EA5E9 */
```

---

## Neutral Colors (White & Grays)

| Shade | Hex Code  | HSL                | Usage |
|-------|-----------|--------------------|-----------------------------------------|
| 50    | `#FFFFFF` | `0 0% 100%`       | Pure white (main background)            |
| 100   | `#F8F9FA` | `210 17% 98%`     | Off-white (card backgrounds)            |
| 200   | `#E9ECEF` | `210 14% 93%`     | Light gray (dividers)                   |
| 300   | `#DEE2E6` | `210 14% 91%`     | Medium light gray (borders)             |
| 400   | `#CED4DA` | `210 14% 85%`     | Medium gray (input borders)             |
| 500   | `#ADB5BD` | `210 11% 71%`     | Gray (disabled text)                    |
| 600   | `#6C757D` | `210 11% 47%`     | Dark gray (secondary text)              |
| 700   | `#495057` | `210 14% 31%`     | Darker gray (body text)                 |
| 800   | `#343A40` | `210 14% 23%`     | Very dark gray                          |
| 900   | `#212529` | `210 14% 15%`     | Almost black (headings)                 |

**Copy Neutral Colors:**
```css
--background: 0 0% 100%;    /* #FFFFFF */
--foreground: 210 14% 15%;  /* #212529 */
```

---

## Status Colors

| Status    | Hex Code  | HSL                | Usage |
|-----------|-----------|--------------------|-----------------------------------------|
| Success   | `#10B981` | `153 48% 38%`     | Completed, healthy readings             |
| Warning   | `#F59E0B` | `38 92% 50%`      | Warnings, caution                       |
| Error     | `#DC2626` | `0 72% 51%`       | Errors, critical alerts                 |
| Info      | `#0EA5E9` | `199 89% 48%`     | Informational messages                  |

**Copy Status Colors:**
```css
--success: 153 48% 38%;   /* #10B981 - Green */
--warning: 38 92% 50%;    /* #F59E0B - Amber */
--error: 0 72% 51%;       /* #DC2626 - Red */
--info: 199 89% 48%;      /* #0EA5E9 - Teal */
```

---

## Healthcare-Specific Usage

### 🔵 Dark Blue (#1A5490) - Use For:
- Main navigation bars
- Primary action buttons ("Book Appointment", "View Records")
- App logo and branding
- Section headers
- Sidebar background
- Trust indicators

**Tailwind Class:** `bg-primary text-primary-foreground`

---

### 🔴 Maroon (#8B2635) - Use For:
- Emergency buttons ("Call Doctor Now", "Emergency Services")
- Critical health alerts (high blood pressure, abnormal readings)
- Urgent notifications
- Warning badges on health data
- Call-to-action for time-sensitive appointments
- "Submit" buttons for critical forms

**Tailwind Class:** `bg-destructive text-destructive-foreground`

---

### 🔷 Teal (#0EA5E9) - Use For:
- Informational messages
- Success confirmations
- Secondary action buttons
- Healthy status indicators
- Progress indicators
- Informational tooltips
- "Learn More" buttons

**Tailwind Class:** `bg-accent text-accent-foreground`

---

### ⚪ White & Gray - Use For:
- Page backgrounds (white)
- Card containers (light gray)
- Text content (dark gray)
- Input fields (white with gray borders)
- Dividing lines (light gray)
- Disabled states (medium gray)

**Tailwind Classes:** `bg-background`, `bg-card`, `text-foreground`, `border-border`

---

## Complete CSS Variable Set

Copy this into your CSS file:

```css
/* Healthcare Trust & Alertness Theme - Light Mode */
:root {
  /* Primary: Dark Blue */
  --primary: 210 65% 34%;
  --primary-foreground: 0 0% 100%;
  
  /* Secondary/Urgent: Maroon */
  --destructive: 352 55% 35%;
  --destructive-foreground: 0 0% 100%;
  
  /* Accent/Info: Teal */
  --accent: 199 89% 48%;
  --accent-foreground: 210 14% 15%;
  
  /* Neutral */
  --background: 0 0% 100%;
  --foreground: 210 14% 15%;
  --card: 210 17% 98%;
  --card-foreground: 210 14% 15%;
  --border: 210 14% 91%;
  --input: 210 14% 80%;
  --muted: 210 14% 93%;
  --muted-foreground: 210 11% 47%;
  
  /* Sidebar */
  --sidebar: 210 65% 24%;
  --sidebar-foreground: 0 0% 100%;
  --sidebar-primary: 210 65% 34%;
  --sidebar-primary-foreground: 0 0% 100%;
  
  /* Focus ring */
  --ring: 210 65% 34%;
}
```

---

## Component Examples

### Emergency Button
```tsx
<button className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg font-semibold">
  🚨 Emergency Call
</button>
```
**Renders with:** Maroon background (#8B2635), white text

### Primary Button
```tsx
<button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg">
  Schedule Appointment
</button>
```
**Renders with:** Dark blue background (#1A5490), white text

### Info Alert
```tsx
<div className="bg-accent/10 border-l-4 border-accent text-accent-foreground p-4">
  <p className="text-accent font-semibold">ℹ️ Appointment Confirmed</p>
  <p>Your appointment is scheduled for tomorrow at 10:00 AM</p>
</div>
```
**Renders with:** Light teal background, teal border and title

---

## Quick Copy-Paste Snippets

### TypeScript Usage
```typescript
import { healthcareColors } from '@/lib/theme-switcher';

const colors = {
  primary: healthcareColors.trust(),        // #1A5490
  urgent: healthcareColors.urgent(),        // #8B2635
  info: healthcareColors.info(),            // #0EA5E9
  success: healthcareColors.success(),      // #10B981
  warning: healthcareColors.warning(),      // #F59E0B
  error: healthcareColors.error(),          // #DC2626
};
```

### Direct Hex Values
```typescript
const HEALTHCARE_COLORS = {
  PRIMARY_BLUE: '#1A5490',
  URGENT_MAROON: '#8B2635',
  INFO_TEAL: '#0EA5E9',
  SUCCESS_GREEN: '#10B981',
  WARNING_AMBER: '#F59E0B',
  ERROR_RED: '#DC2626',
  WHITE: '#FFFFFF',
  LIGHT_GRAY: '#E9ECEF',
  DARK_GRAY: '#495057',
  BLACK: '#212529',
};
```

---

**🎨 This color reference provides all the exact codes you need to maintain consistency across your healthcare application!**
