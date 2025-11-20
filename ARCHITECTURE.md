# HealthBridge Architecture Guide

## Overview

HealthBridge follows **Clean Architecture** principles with a modern **Atomic Design** component system. This architecture ensures:

- **Separation of Concerns**: Clear boundaries between UI, business logic, and data
- **Testability**: Each layer can be tested independently
- **Scalability**: Easy to add new features without affecting existing code
- **Maintainability**: Consistent patterns throughout the codebase

## Architecture Layers

```
┌─────────────────────────────────────────────────────────┐
│                    PRESENTATION LAYER                    │
│  (UI Components, Pages, Hooks, Contexts)                │
│  ┌─────────────────────────────────────────────┐        │
│  │   Atomic Components (Atoms → Organisms)     │        │
│  │   • Atoms: Button, Input, Badge             │        │
│  │   • Molecules: FormField, Card, MetricCard  │        │
│  │   • Organisms: Header, DataTable, Forms     │        │
│  │   • Templates: PageLayout, DashboardLayout  │        │
│  │   • Pages: Home, Planboard, Reports         │        │
│  └─────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
                          ↓ ↑
┌─────────────────────────────────────────────────────────┐
│                     DOMAIN LAYER                         │
│  (Business Logic, Entities, Use Cases)                  │
│  • Types & Interfaces                                    │
│  • Business Rules                                        │
│  • Domain Models                                         │
│  • Use Case Implementations                              │
└─────────────────────────────────────────────────────────┘
                          ↓ ↑
┌─────────────────────────────────────────────────────────┐
│                  INFRASTRUCTURE LAYER                    │
│  (API Client, Storage, External Services)               │
│  • HTTP Client                                           │
│  • Local Storage                                         │
│  • Authentication Service                                │
│  • External API Integrations                             │
└─────────────────────────────────────────────────────────┘
```

## Folder Structure

```
client/src/
├── design-system/          # Design tokens and theme
│   ├── tokens.ts           # All design tokens
│   ├── theme.ts            # Theme configuration
│   └── index.ts            # Main export
│
├── components/             # Presentation Layer
│   ├── atoms/              # Basic building blocks
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.styles.ts
│   │   │   ├── Button.test.tsx
│   │   │   └── index.ts
│   │   ├── Input/
│   │   ├── Badge/
│   │   └── Icon/
│   │
│   ├── molecules/          # Simple component combinations
│   │   ├── FormField/
│   │   ├── MetricCard/
│   │   ├── SearchBar/
│   │   └── MenuItem/
│   │
│   ├── organisms/          # Complex UI sections
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── DataTable/
│   │   └── FilterPanel/
│   │
│   ├── templates/          # Page layouts
│   │   ├── DashboardLayout/
│   │   ├── AuthLayout/
│   │   └── ErrorLayout/
│   │
│   └── ui/                 # Shadcn UI components (legacy)
│
├── pages/                  # Page components (Routes)
│   ├── Dashboard/
│   ├── Planboard/
│   ├── Reports/
│   └── Settings/
│
├── domain/                 # Domain Layer
│   ├── entities/           # Domain models
│   │   ├── Patient.ts
│   │   ├── Appointment.ts
│   │   └── Alert.ts
│   │
│   ├── repositories/       # Repository interfaces
│   │   ├── IPatientRepository.ts
│   │   └── IAlertRepository.ts
│   │
│   └── use-cases/          # Business logic
│       ├── patient/
│       ├── alert/
│       └── scheduling/
│
├── infrastructure/         # Infrastructure Layer
│   ├── api/                # API clients
│   │   ├── client.ts
│   │   ├── endpoints.ts
│   │   └── interceptors.ts
│   │
│   ├── storage/            # Storage services
│   │   ├── localStorage.ts
│   │   └── sessionStorage.ts
│   │
│   └── repositories/       # Repository implementations
│       ├── PatientRepository.ts
│       └── AlertRepository.ts
│
├── shared/                 # Shared utilities
│   ├── types/              # TypeScript types
│   ├── constants/          # App constants
│   ├── utils/              # Utility functions
│   └── hooks/              # Custom React hooks
│
├── contexts/               # React contexts
│   ├── ThemeContext.tsx
│   ├── AuthContext.tsx
│   └── NotificationContext.tsx
│
└── lib/                    # Third-party integrations
    ├── queryClient.ts
    └── utils.ts
```

## Component Architecture (Atomic Design)

### 1. Atoms
**Basic, indivisible UI elements**

- Single responsibility
- No business logic
- Highly reusable
- Style with design tokens only

```typescript
// Example: Button atom
import { TOKENS } from '@/design-system';

export function Button({ children, variant = 'primary', size = 'base' }) {
  return (
    <button
      style={{
        backgroundColor: TOKENS.color.primary[500],
        padding: TOKENS.component.button.padding[size],
        // ... using tokens only
      }}
    >
      {children}
    </button>
  );
}
```

### 2. Molecules
**Simple combinations of atoms**

- Combine 2-5 atoms
- Basic functionality
- Reusable across contexts
- Can have local state

```typescript
// Example: FormField molecule
export function FormField({ label, error, children }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
```

### 3. Organisms
**Complex UI sections**

- Combine molecules and atoms
- Feature-specific functionality
- Can connect to state management
- Can make API calls

```typescript
// Example: DataTable organism
export function DataTable({ data, columns, onRowClick }) {
  const [sortConfig, setSortConfig] = useState();
  const [filters, setFilters] = useState();
  
  // Complex logic here
  return (/* rendered table */);
}
```

### 4. Templates
**Page layouts without data**

- Define page structure
- Reusable layouts
- Slots for content
- Responsive design

```typescript
// Example: DashboardLayout template
export function DashboardLayout({ header, sidebar, main, footer }) {
  return (
    <div className="layout-grid">
      <header>{header}</header>
      <aside>{sidebar}</aside>
      <main>{main}</main>
      <footer>{footer}</footer>
    </div>
  );
}
```

### 5. Pages
**Complete pages with data**

- Use templates
- Fetch data
- Handle routing
- Business logic via hooks

```typescript
// Example: Dashboard page
export function DashboardPage() {
  const { data } = usePatients();
  
  return (
    <DashboardLayout
      header={<Header />}
      main={<PatientList data={data} />}
    />
  );
}
```

## Design Principles

### 1. Single Responsibility
Each component does ONE thing well.

### 2. Dependency Inversion
Depend on abstractions (interfaces), not concrete implementations.

### 3. Separation of Concerns
- **UI Logic**: In components
- **Business Logic**: In domain layer
- **Data Access**: In infrastructure layer

### 4. Don't Repeat Yourself (DRY)
- Reusable components
- Shared utilities
- Design tokens for all styles

### 5. KISS (Keep It Simple, Stupid)
- Simple components
- Clear naming
- Minimal props
- Self-documenting code

## Styling Guidelines

### Use Design Tokens ONLY
```typescript
// ✅ GOOD - Using tokens
style={{ color: TOKENS.color.primary[500] }}

// ❌ BAD - Hardcoded values
style={{ color: '#1A5490' }}
```

### Inline Styles for Dynamic Values
```typescript
// ✅ GOOD - Dynamic with tokens
style={{
  backgroundColor: active ? TOKENS.color.primary[500] : TOKENS.color.neutral[50]
}}
```

### Tailwind for Layout Only
```typescript
// ✅ GOOD - Use Tailwind for layout classes
<div className="flex items-center gap-2">
```

### No CSS Files
All styling via:
1. Design tokens (colors, spacing, etc.)
2. Inline styles for component-specific needs
3. Tailwind for layout utilities

## State Management

### Local State (useState)
For component-specific UI state:
- Form inputs
- Toggle states
- Dropdown open/close

### Context API
For app-wide state:
- Theme
- Authentication
- Notifications

### React Query
For server state:
- API data fetching
- Caching
- Background updates

## Testing Strategy

### Unit Tests
- Test atoms and molecules
- Test utility functions
- Test business logic

### Integration Tests
- Test organisms
- Test complete user flows

### E2E Tests
- Test critical user journeys
- Test across pages

## Performance Guidelines

### 1. Lazy Loading
```typescript
const DashboardPage = lazy(() => import('./pages/Dashboard'));
```

### 2. Memoization
```typescript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### 3. Virtual Scrolling
For tables with 100+ rows, use virtual scrolling.

### 4. Code Splitting
Split routes and heavy features into separate bundles.

## Scroll-less Design Paradigm

### Principles
1. **Information Density**: Show more data in less space
2. **Smart Collapsing**: Expandable sections for secondary info
3. **Dashboard Approach**: Widget-based layouts
4. **Efficient Navigation**: Tab-based views, not endless scrolling
5. **Fixed Heights**: Container-based layouts with internal scroll only

### Implementation
```typescript
// ✅ GOOD - Fixed container with internal scroll
<div className="h-screen flex flex-col">
  <Header />
  <div className="flex-1 overflow-auto">
    <ContentArea />
  </div>
  <Footer />
</div>

// ❌ BAD - Page-level scrolling
<div className="min-h-screen">
  <Header />
  <div className="py-20">
    <VeryLongContent />
  </div>
</div>
```

## API Integration Pattern

```typescript
// 1. Define interface in domain layer
export interface IPatientRepository {
  getPatients(): Promise<Patient[]>;
  getPatient(id: string): Promise<Patient>;
}

// 2. Implement in infrastructure layer
export class PatientRepository implements IPatientRepository {
  async getPatients() {
    const response = await apiClient.get('/patients');
    return response.data;
  }
}

// 3. Use in React Query hook
export function usePatients() {
  return useQuery({
    queryKey: ['patients'],
    queryFn: () => patientRepository.getPatients()
  });
}

// 4. Use in component
export function PatientList() {
  const { data, isLoading } = usePatients();
  // render
}
```

## Best Practices

### Component Files
```typescript
// ComponentName.tsx
export interface ComponentNameProps {
  // Props with JSDoc comments
}

export function ComponentName({ }: ComponentNameProps) {
  // Implementation
}
```

### Naming Conventions
- **Components**: PascalCase (`Button`, `DataTable`)
- **Files**: PascalCase (`Button.tsx`, `DataTable.tsx`)
- **Hooks**: camelCase with 'use' prefix (`usePatients`, `useAuth`)
- **Utils**: camelCase (`formatDate`, `validateEmail`)
- **Constants**: SCREAMING_SNAKE_CASE (`API_BASE_URL`)
- **Types**: PascalCase (`Patient`, `AlertType`)

### Import Order
```typescript
// 1. External dependencies
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

// 2. Design system
import { TOKENS } from '@/design-system';

// 3. Components
import { Button } from '@/components/atoms/Button';

// 4. Domain/Infrastructure
import { usePatients } from '@/domain/use-cases/patient';

// 5. Types
import type { Patient } from '@/domain/entities/Patient';

// 6. Utilities
import { formatDate } from '@/shared/utils';
```

## Migration Strategy

### Phase 1: Foundation (Week 1)
- ✅ Design token system
- ✅ Clean architecture setup
- Build core atoms

### Phase 2: Components (Week 2)
- Build molecules
- Build organisms
- Create templates

### Phase 3: Pages (Week 3)
- Migrate dashboard
- Migrate planboard
- Migrate reports

### Phase 4: Polish (Week 4)
- Performance optimization
- Testing
- Documentation

---

**Last Updated**: 2025-01-17  
**Version**: 2.0.0  
**Maintainer**: HealthBridge Development Team
