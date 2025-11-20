# Theme Change Guide - HealthBridge App

## 🎨 How to Change Complete App Theme

### Main Theme Files (Change colors here):

#### 1. **Innovacare Theme (Primary UI Components)**
**File:** `client/src/styles/innovacare-theme.ts`

This is the MAIN file to change colors for:
- Home page
- Dashboard
- Planboard
- Client Profile
- All Innovacare components

```typescript
export const InnovacareColors = {
  primary: '#2C5282',  // Deep blue - main brand color
  accent: '#2C5282',   // Accent color - CTAs and highlights
  background: '#FFFFFF', // Main background
  text: '#2D3748',      // Primary text
};
```

**To change entire app theme:** Edit the colors in `InnovacareColors` object.

#### 2. **Design System Theme (Modern Components)**
**File:** `client/src/lib/theme-config.ts`

Contains multiple theme schemes. Default is `healthcareTrust`.

```typescript
export const statusColors = {
  completed: "#10B981",    // Green
  inProgress: "#F59E0B",   // Orange
  assigned: "#3B82F6",     // Blue
  delayed: "#EF4444",      // Red
  unassigned: "#2C5282",   // Deep blue
  cancelled: "#6B7280",    // Gray
};
```

**To change status colors:** Edit the `statusColors` object.

---

## 🔄 Recent Changes Made

### ✅ Changed Purple (#9779DC) to Deep Blue (#2C5282)

**Files Modified:**
1. `client/src/styles/innovacare-theme.ts`
   - Changed accent color from `#805AD5` to `#2C5282`
   - Updated accent shades (light and dark)

2. `client/src/lib/theme-config.ts`
   - Changed `unassigned` status from `#8B5CF6` to `#2C5282`
   - Changed `updateRequired` status from `#8B5CF6` to `#2C5282`

---

## 📝 Quick Reference

### Color Usage Across App:

| Component | Color Variable | File |
|-----------|---------------|------|
| Primary buttons, headers | `primary` | `innovacare-theme.ts` |
| Accent elements, CTAs | `accent` | `innovacare-theme.ts` |
| Success states | `success` | Both files |
| Warning states | `warning` | Both files |
| Error states | `error` | Both files |
| Unassigned status | `unassigned` | `theme-config.ts` |

### How Changes Apply:

1. **Innovacare Theme** (`innovacare-theme.ts`):
   - Applied via `applyInnovacareTheme()` function
   - Sets CSS variables on document root
   - Used by all Innovacare components (IButton, IDataTable, IHeader, etc.)

2. **Design System Theme** (`theme-config.ts`):
   - Applied via `initializeTheme()` function
   - Used by modern design system components
   - Contains multiple color schemes to choose from

### To Switch Theme Scheme:

In `theme-config.ts`, change the default theme:
```typescript
export const defaultTheme: ThemeScheme = "healthcareTrust"; // Change this
```

Available schemes:
- `medicalTeal`
- `clinicalBlue`
- `wellnessGreen`
- `healthcareTrust` (current default)
- `navyProfessional`
- `emeraldCare`
- `royalHealth`
- `oceanTherapy`

---

## 🛠️ Advanced Customization

### Adding a New Color:

1. Add to `InnovacareColors` in `innovacare-theme.ts`
2. Add corresponding shade in `InnovacarePalette`
3. Update `applyInnovacareTheme()` function to set CSS variable
4. Use in components via `InnovacareTheme.colors.yourColor`

### Creating Custom Theme Scheme:

1. Add new scheme to `colorSchemes` in `theme-config.ts`
2. Follow the existing theme structure (primary, secondary, accent, neutral, etc.)
3. Update `defaultTheme` to use your new scheme

---

## 📍 Files to Modify for Complete Theme Change:

1. **Main Innovacare Theme:**
   - `client/src/styles/innovacare-theme.ts` ← **MOST IMPORTANT**

2. **Status Colors:**
   - `client/src/lib/theme-config.ts`

3. **CSS Variables (Optional):**
   - `client/src/index.css`

4. **Component-Specific Overrides (If needed):**
   - Individual component files

---

## ✨ Pro Tips:

- Always test theme changes in both light and dark mode
- Check contrast ratios for accessibility (WCAG AA: 4.5:1 minimum)
- Update both `light` and `dark` shades when changing main color
- Keep status colors distinct for easy recognition
- Use CSS variables for easier theme switching

---

**Last Updated:** November 18, 2025
**Updated By:** AI Assistant
**Changes:** Purple to Deep Blue theme update
