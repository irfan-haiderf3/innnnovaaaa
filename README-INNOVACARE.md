# Innovacare - Modern Healthcare Management Platform

A clean, modern healthcare management platform with a 4-color design system inspired by Healthline.

## 🎨 Design System

### Core Philosophy

- **4-Color System**: Primary blue, accent purple, white background, dark gray text
- **No Gradients**: Clean, flat design throughout
- **Automatic Font Coloring**: White text on dark backgrounds, dark on light
- **Compact UI**: Space-efficient design with scrollless pagination
- **Healthline-style Animations**: Subtle hover effects and transitions

### Components

All components are built with the 4-color system and designed to be reusable and consistent:

#### 1. IHeader
Modern, flat header with navigation menu and user controls

#### 2. IMetricCard
Ultra-compact metric cards for filters and statistics

#### 3. IButton & IIconButton
Clean, flat buttons with hover animations

#### 4. IDataTable
Modern data table with pagination for scrollless design

#### 5. IPagination
Modern pagination component for navigating through data sets

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📂 Project Structure

```
innovacare/
├── public/
│   └── favicon-innovacare.svg       # App icon
├── client/
│   ├── src/
│   │   ├── styles/
│   │   │   └── innovacare-theme.ts  # 4-color design system
│   │   ├── components/
│   │   │   ├── innovacare/          # Reusable components
│   │   │   │   ├── IHeader.tsx
│   │   │   │   ├── IMetricCard.tsx
│   │   │   │   ├── IButton.tsx
│   │   │   │   ├── IDataTable.tsx
│   │   │   │   ├── IPagination.tsx
│   │   │   │   └── index.ts
│   │   ├── pages/
│   │   │   └── innovacare-home.tsx  # Main page using components
│   │   ├── App.tsx                  # Application routes
│   │   └── main.tsx                 # Entry point
│   └── index.html                   # HTML template
└── package.json                     # Dependencies
```

## 🎯 Key Features

### Modern Design System
- **4-Color Palette**: Primary blue (#2C5282), accent purple (#805AD5), white background (#FFFFFF), dark text (#2D3748)
- **Consistent Typography**: Inter font family for readability
- **Flat UI**: No gradients or shadows for clean, modern look
- **Automatic Contrast**: White text on dark backgrounds, dark on light

### Component Library
- **IHeader**: Clean navigation with active state indication
- **IMetricCard**: Ultra-compact filter cards with one-click filtering
- **IButton**: Modern buttons with hover animations
- **IDataTable**: Clean data presentation with pagination
- **IPagination**: Scrollless navigation through data

### User Experience
- **Healthline-inspired Animations**: Subtle hover and transition effects
- **Compact Layout**: Efficient use of screen space
- **High Contrast**: Excellent readability throughout
- **Consistent Interactions**: Predictable hover/active states

## 📱 Responsive Design

All components are built to be fully responsive, adapting to various screen sizes:
- IMetricGrid adjusts columns based on screen width
- IDataTable provides horizontal scrolling on small screens
- IHeader collapses to a mobile menu on smaller devices

## 🧩 How to Use Components

### IHeader
```tsx
<IHeader showNavigation={true} username="John Doe" role="Administrator" />
```

### IMetricCard
```tsx
<IMetricGrid>
  <IMetricCard 
    title="Active Users" 
    value={150} 
    icon={Users} 
    color="primary"
    onClick={() => filterByUsers()}
  />
</IMetricGrid>
```

### IButton
```tsx
<IButton variant="primary" icon={Save}>Save Changes</IButton>
<IButton variant="outline" icon={RefreshCcw}>Reset</IButton>
<IIconButton icon={Settings} variant="ghost" tooltip="Settings" />
```

### IDataTable
```tsx
<IDataTable
  data={patients}
  columns={columns}
  pageSize={10}
  showPagination={true}
/>
```

## 🎬 Credits

Designed and built with simplicity and maintainability in mind.
