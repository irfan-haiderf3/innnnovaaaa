# 🎨 HealthBridge Theme System Guide

## Healthcare Trust & Alertness Theme

This theme leverages the distinct psychological effects of **Dark Blue** and **Maroon/Red** to create a healthcare app experience that is professional, trustworthy, and urgent when necessary.

---

## 🎯 Color Psychology

### **Primary Color: Dark Blue**
- **Hex**: `#1A5490`
- **Purpose**: Trust, Security, Stability, Professionalism
- **Usage**: Main navigation, backgrounds, core branding, primary buttons

### **Secondary Color: Maroon/Deep Red**
- **Hex**: `#8B2635`
- **Purpose**: Urgency, Action, Critical Alerts
- **Usage**: CTA buttons, critical alerts, urgent notifications, high-priority data

### **Accent Color: Teal**
- **Hex**: `#0EA5E9`
- **Purpose**: Informational, Success, Tranquility
- **Usage**: Informational messages, secondary actions, success indicators

### **Neutral Colors**
- **White**: `#FFFFFF` - Clean backgrounds, sterile feel
- **Light Gray**: `#E9ECEF` - Card backgrounds, dividers
- **Dark Gray**: `#495057` - Body text, high contrast

---

## 📁 File Structure

```
client/src/lib/
├── theme-config.ts      # Main theme definitions with all color schemes
└── theme-switcher.ts    # Utility functions for theme management

client/src/
└── index.css            # CSS variables for the active theme
```

---

## 🚀 Quick Start

### 1. Initialize Theme in Your App

```typescript
// In your main App.tsx or index.tsx
import { initializeTheme } from '@/lib/theme-switcher';

// Call this when your app starts
initializeTheme();
```

### 2. Switch Themes Programmatically

```typescript
import { setTheme, getCurrentTheme, getAvailableThemes } from '@/lib/theme-switcher';

// Switch to healthcare theme
setTheme('healthcareTrust');

// Get current theme
const current = getCurrentTheme();
console.log(`Current theme: ${current}`);

// Get all available themes
const themes = getAvailableThemes();
console.log('Available themes:', themes);
// Output: ['medicalTeal', 'clinicalBlue', 'wellnessGreen', 'healthcareTrust']
```

### 3. Access Theme Colors

```typescript
import { healthcareColors } from '@/lib/theme-switcher';

// Get healthcare-specific colors
const primaryBlue = healthcareColors.trust();        // Dark blue
const urgentMaroon = healthcareColors.urgent();      // Maroon
const infoTeal = healthcareColors.info();            // Teal
const successGreen = healthcareColors.success();     // Green
```

---

## 🎨 Using Colors in Components

### Using Tailwind CSS Classes

```tsx
// Primary actions (Dark Blue)
<button className="bg-primary text-primary-foreground">
  Book Appointment
</button>

// Urgent/Critical actions (Maroon)
<button className="bg-destructive text-destructive-foreground">
  Emergency Call
</button>

// Informational (Teal)
<div className="bg-accent text-accent-foreground">
  Your appointment is confirmed
</div>

// Neutral
<div className="bg-card border border-border text-card-foreground">
  Patient Card
</div>
```

### Using CSS Variables Directly

```css
.custom-button {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
}

.urgent-banner {
  background-color: hsl(var(--destructive));
  color: hsl(var(--destructive-foreground));
}
```

### Using Inline Styles

```tsx
<div style={{ 
  backgroundColor: 'hsl(var(--primary))', 
  color: 'hsl(var(--primary-foreground))' 
}}>
  Styled inline
</div>
```

---

## 🛠️ Customizing the Theme

### Editing Colors in `theme-config.ts`

The main theme configuration is in `client/src/lib/theme-config.ts`. You can easily modify colors:

```typescript
healthcareTrust: {
  name: "Healthcare Trust & Alertness",
  primary: {
    50: "#E8EFF8",
    100: "#D1DFEF",
    // ... modify these hex colors
    500: "#1A5490",  // Main dark blue - CHANGE THIS
    // ...
  },
  secondary: {
    // ... modify maroon/red colors
    500: "#8B2635",  // Main maroon - CHANGE THIS
  },
  // ... more color definitions
}
```

### Color Shade System

Each color has 10 shades (50-900):
- **50-200**: Very light (backgrounds, hover states)
- **300-400**: Light (borders, disabled states)
- **500**: **Main color** (primary usage)
- **600-700**: Dark (hover states, emphasis)
- **800-900**: Very dark (text, high contrast)

---

## 🎭 Creating a Theme Switcher Component

```tsx
import { useState, useEffect } from 'react';
import { 
  getCurrentTheme, 
  setTheme, 
  getAvailableThemes, 
  type ThemeScheme 
} from '@/lib/theme-switcher';

export function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState<ThemeScheme>(getCurrentTheme());
  const themes = getAvailableThemes();
  
  const handleThemeChange = (theme: ThemeScheme) => {
    setTheme(theme);
    setCurrentTheme(theme);
  };
  
  return (
    <div className="flex gap-2">
      {themes.map(theme => (
        <button
          key={theme}
          onClick={() => handleThemeChange(theme)}
          className={`px-4 py-2 rounded ${
            currentTheme === theme 
              ? 'bg-primary text-primary-foreground' 
              : 'bg-secondary text-secondary-foreground'
          }`}
        >
          {theme}
        </button>
      ))}
    </div>
  );
}
```

---

## 📋 Color Usage Guidelines

### When to Use Each Color

| Use Case | Color | Tailwind Class |
|----------|-------|----------------|
| **Main Navigation** | Dark Blue | `bg-primary` |
| **Primary Buttons** | Dark Blue | `bg-primary` |
| **Emergency CTA** | Maroon | `bg-destructive` |
| **Critical Alerts** | Maroon | `bg-destructive` |
| **Info Messages** | Teal | `bg-accent` |
| **Success States** | Green | `text-green-600` |
| **Warnings** | Amber | `text-amber-600` |
| **Body Text** | Dark Gray | `text-foreground` |
| **Card Background** | Light Gray | `bg-card` |
| **Page Background** | White | `bg-background` |

### Component Examples

#### Critical Alert Banner
```tsx
<div className="bg-destructive text-destructive-foreground p-4 rounded-lg">
  <h3 className="font-semibold">⚠️ Critical Health Alert</h3>
  <p>Your blood pressure reading is abnormally high. Contact your doctor immediately.</p>
</div>
```

#### Primary Action Button
```tsx
<button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:opacity-90">
  Schedule Appointment
</button>
```

#### Informational Card
```tsx
<div className="bg-accent/10 border border-accent text-accent-foreground p-4 rounded-lg">
  <h4 className="font-medium text-accent">ℹ️ Did you know?</h4>
  <p>Regular checkups can help detect health issues early.</p>
</div>
```

---

## 🌓 Dark Mode Support

The theme automatically includes dark mode variants. To enable dark mode:

```tsx
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Add dark mode
document.documentElement.classList.add('dark');

// Remove dark mode
document.documentElement.classList.remove('dark');
```

All color variables automatically adjust for dark mode in `index.css`.

---

## 📚 Available Themes

### 1. **Healthcare Trust** (Default)
- Dark blue primary
- Maroon accents
- Professional healthcare focus

### 2. **Medical Teal**
- Teal primary
- Blue secondary
- Modern medical aesthetic

### 3. **Clinical Blue**
- Blue primary
- Teal secondary
- Clean clinical look

### 4. **Wellness Green**
- Green primary
- Amber secondary
- Calm, healing focus

---

## 🔧 Advanced Usage

### Accessing Color Values Programmatically

```typescript
import { getThemeColor, getThemeDetails } from '@/lib/theme-switcher';

// Get specific color
const darkBlue = getThemeColor('primary.500');  // Returns: "#1A5490"
const maroon = getThemeColor('secondary.500');  // Returns: "#8B2635"

// Get full theme details
const theme = getThemeDetails('healthcareTrust');
console.log(theme.primary);    // All primary color shades
console.log(theme.secondary);  // All secondary color shades
```

### Converting Hex to HSL

```typescript
import { hexToHSL } from '@/lib/theme-config';

const hslValue = hexToHSL('#1A5490');
console.log(hslValue);  // Output: "210 65% 34%"
```

---

## 🎯 Best Practices

1. **Use semantic color names**: Use `bg-primary` instead of `bg-blue-600`
2. **Maroon for urgency only**: Reserve maroon/red for truly urgent actions
3. **Maintain high contrast**: Ensure text is readable on all backgrounds
4. **Test both modes**: Always test in both light and dark mode
5. **Follow accessibility**: Maintain WCAG 2.1 AA contrast ratios
6. **Be consistent**: Use the same colors for the same types of actions

---

## 🆘 Troubleshooting

### Theme not applying?
- Ensure `initializeTheme()` is called on app startup
- Check browser console for errors
- Clear localStorage and refresh: `localStorage.clear()`

### Colors look wrong?
- Verify CSS variables in browser DevTools
- Check if dark mode is accidentally enabled
- Ensure Tailwind is properly configured

### Custom colors not working?
- Make sure to use HSL format: `hsl(var(--primary))`
- Check that the CSS variable exists in `index.css`
- Rebuild your app to apply Tailwind changes

---

## 📞 Need Help?

If you need to modify the theme or have questions:

1. **Edit colors**: Modify `client/src/lib/theme-config.ts`
2. **Update CSS variables**: Edit `client/src/index.css`
3. **Change default theme**: Update `defaultTheme` in `theme-config.ts`

---

**✨ Your healthcare app now has a professional, trustworthy theme with clear visual hierarchy for urgent actions!**
