# HealthBridge - Modern Medical Management Platform

A beautiful, modern, component-based healthcare management application built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 🎨 Design System

### Branding & Theme

All colors, typography, and styling are centralized in `/client/src/config/branding.ts`.

**To change the app's color scheme:**
1. Open `client/src/config/branding.ts`
2. Edit the `brandColors` object
3. Save - the entire app updates automatically!

```typescript
export const brandColors = {
  primary: { 500: '#00BCD4' },  // Turquoise - main brand color
  secondary: { 500: '#9C27B0' }, // Purple - accent
  // ... customize any color!
};
```

### Color Palette

- **Primary:** Turquoise/Cyan (#00BCD4) - Trust, healthcare, cleanliness
- **Secondary:** Purple (#9C27B0) - Premium, professional
- **Accent:** Coral/Orange (#FF9800) - Warmth, energy
- **Success:** Green (#10B981) - Completed, healthy
- **Warning:** Amber (#F59E0B) - Attention needed
- **Error:** Red (#EF4444) - Critical, urgent

## 📁 Project Structure

```
HealthBridge/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── modern/          # New modern components
│   │   │   │   ├── ModernDataTable.tsx
│   │   │   │   ├── MetricCard.tsx
│   │   │   │   ├── ModernButton.tsx
│   │   │   │   └── index.ts
│   │   │   └── ui/              # shadcn/ui components
│   │   ├── config/
│   │   │   └── branding.ts      # 🎨 Centralized branding
│   │   ├── pages/
│   │   │   ├── home-new.tsx     # 🆕 Modern home page
│   │   │   ├── planboard.tsx
│   │   │   └── ...
│   │   ├── lib/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── package.json
└── vite.config.ts
```

## 🧩 Modern Components

### 1. ModernDataTable
Beautiful, sortable tables with hover effects and custom renderers.

### 2. MetricCard
Graphical cards for displaying metrics, filters, and statistics.

### 3. ModernButton
Eye-catching buttons with gradients, animations, and loading states.

See [MODERN_COMPONENTS_GUIDE.md](./MODERN_COMPONENTS_GUIDE.md) for detailed documentation.

## 🎯 Key Features

### ✨ Modern UI
- Beautiful turquoise/cyan medical theme
- Gradient buttons with hover effects
- Animated metric cards
- Professional data tables
- Responsive design

### 🏥 Healthcare-Specific
- Alert management system
- Patient data tables
- Care coordinator tracking
- Status indicators (WOF expiry, assessments, etc.)
- Quick action filters

### 🎨 Easy Customization
- **One file** to change all colors: `branding.ts`
- Component-based architecture
- Reusable, documented components
- TypeScript for type safety

### 🚀 Developer-Friendly
- Clean, organized code structure
- Comprehensive component documentation
- Type-safe props and data
- No server-side code (pure client app)
- Hot module replacement (HMR)

## 📖 Usage Guide

### Creating a New Page

```tsx
import { ModernDataTable, MetricCard, ModernButton } from '@/components/modern';
import { brandColors } from '@/config/branding';
import { Users } from 'lucide-react';

export default function MyPage() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      {/* Filters with MetricCards */}
      <MetricGrid>
        <MetricCard
          title="Active Users"
          value={150}
          icon={Users}
          color="primary"
        />
      </MetricGrid>
      
      {/* Data Table */}
      <ModernDataTable data={data} columns={columns} />
      
      <Footer />
    </div>
  );
}
```

### Changing Brand Colors

Edit `client/src/config/branding.ts`:

```typescript
export const brandColors = {
  primary: {
    500: '#YOUR_COLOR_HERE',  // Main brand color
  },
  // The app updates automatically!
};
```

## 🔧 Configuration

### Vite Config
- Root: `client/`
- Build output: `dist/public/`
- Path aliases: `@/` → `client/src/`

### TypeScript
- Strict mode enabled
- Type checking: `npm run check`

### Styling
- Tailwind CSS
- CSS custom properties
- Component-level styles

## 🎨 Design Philosophy

### Component-Based
Every UI element is a reusable component with clear props and documentation.

### Single Source of Truth
All branding in one file (`branding.ts`) - change once, update everywhere.

### Developer Experience
Clean code, clear naming, comprehensive documentation, TypeScript safety.

### Modern & Professional
Gradient buttons, hover effects, smooth animations, medical color palette.

## 📚 Documentation

- [Modern Components Guide](./MODERN_COMPONENTS_GUIDE.md) - Component usage and API
- [Design System](./DESIGN_SYSTEM.md) - UI/UX guidelines (if exists)
- [Theme Guide](./THEME_GUIDE.md) - Theming and customization (if exists)

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # TypeScript type checking
```

### Adding Dependencies

```bash
npm install <package-name>
```

### Code Quality

- TypeScript for type safety
- Component-based architecture
- Consistent naming conventions
- Documented props and functions

## 🎯 Best Practices

### DO ✅
- Use modern components from `@/components/modern`
- Import colors from `branding.ts`
- Follow existing component patterns
- Add TypeScript types for data
- Document complex logic

### DON'T ❌
- Hardcode colors in components
- Create inline tables or buttons
- Mix old and new patterns
- Skip TypeScript types
- Forget to test responsiveness

## 🐛 Troubleshooting

### Dev server won't start
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Build errors
```bash
# Check TypeScript errors
npm run check

# Clear Vite cache
rm -rf client/dist
npm run build
```

### Styles not applying
- Ensure `applyBrandTheme()` is called in `main.tsx`
- Check Tailwind classes are valid
- Verify `branding.ts` exports are correct

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

1. **Start Here:** `client/src/pages/home-new.tsx` - Example of all patterns
2. **Customize:** Edit `client/src/config/branding.ts`
3. **Components:** Review `client/src/components/modern/`
4. **Documentation:** Read `MODERN_COMPONENTS_GUIDE.md`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `dist/public/` directory.

### Deploy to Hosting

The built files can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 📄 License

MIT

## 🤝 Contributing

1. Follow existing code patterns
2. Use TypeScript
3. Document new components
4. Test responsive behavior
5. Keep branding centralized

## 💡 Tips

- **Fast color changes:** Edit one file (`branding.ts`)
- **New components:** Extend modern component patterns
- **Icons:** Use lucide-react library
- **Responsive:** All modern components are responsive by default
- **Type safety:** Always define TypeScript interfaces

---

**Built with ❤️ for modern healthcare management**
