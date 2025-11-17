# Healthcare Application Modernization - Design Guidelines

## Design Approach
**System-Based Approach**: Clean, professional healthcare interface prioritizing clarity, efficiency, and trust. Drawing from enterprise healthcare standards with focus on accessibility and usability.

---

## Brand Identity

### Color System
- **Primary (Blue)**: Trust and stability - primary actions, active states, links
- **Secondary (Green)**: Success, positive outcomes, health association - secondary actions, confirmations
- **Neutral (Grays)**: Text hierarchy, backgrounds, borders, subtle separations
- **Accent (Red)**: Critical alerts and error states only - immediate attention required

### Typography
- **Font Family**: Inter or Nunito Sans (highly legible sans-serif)
- **Hierarchy**: Regular for body text, Medium for emphasis, Bold for headings
- **Scale**: Establish clear heading levels (H1-H6) with consistent sizing

### Iconography
- **Style**: Feather Icons or Heroicons - clean, minimalist line icons
- **Implementation**: React SVG components in `/components/icons` directory
- **Consistency**: All icons from single library, uniform stroke width

---

## Layout System

### Spacing
Use Tailwind units: **2, 4, 6, 8, 12, 16** for consistent rhythm (p-2, m-4, gap-6, etc.)

### Responsive Structure
- **Header**: Fixed, contains logo + navigation + user profile. Collapses to hamburger on mobile
- **Navigation**: Streamlined primary navigation, intuitive core feature access
- **Footer**: Minimal - essential links only (Help, Privacy Policy)
- **Content**: Mobile-first, adapts seamlessly across all screen sizes

---

## Core Components

### Login Page
**Layout**: Two-column design
- **Left Column**: Professional healthcare image (caregiver with elderly patient) - empathetic, trustworthy
- **Right Column**: Clean login form with logo, input fields, submit button, support contact info
- **Mobile**: Stack vertically, image reduced or hidden on smallest screens

### Planboard Interface
**Tab-Based Organization** (eliminates scrolling on desktop):

**Action Bar** (above tabs): Consolidates all primary actions
- "Complete All Shifts" button
- Status filter controls
- Bulk action options

**Tab 1 - Search & Filters**: Dedicated panel with all search fields and filtering options organized logically

**Tab 2 - Planboard Results**: 
- Clean data table with responsive design
- Horizontal scroll on mobile with fixed first column for context
- Clear column headers, zebra striping for readability
- Row actions accessible via icons or dropdown menu

---

## Component Library Specifications

### Button
- Variants: Primary (blue), Secondary (green outline), Danger (red), Ghost
- States: Default, hover, active, disabled, loading
- Sizes: Small, medium, large

### Input
- Text fields with clear labels above
- Error states with red border + error message below
- Success states with green border
- Disabled state with reduced opacity

### Select
- Dropdown with search capability for long lists
- Clear selected state indication
- Keyboard navigation support

### Table
- Responsive with horizontal scroll
- Sortable columns (arrow indicators)
- Fixed header on scroll
- Alternating row colors for readability

### Modal
- Centered overlay with backdrop blur
- Clear close button (X in top right)
- Footer with action buttons
- Sizes: Small, medium, large, full

### Card
- Subtle border, minimal shadow
- Optional header, body, footer sections
- Clickable variants with hover state

---

## Key Design Principles

1. **Medical-Grade Clarity**: Every element serves a purpose, zero ambiguity
2. **Efficiency First**: Minimize clicks, eliminate unnecessary scrolling on desktop
3. **Trust Through Consistency**: Uniform spacing, typography, and component behavior
4. **Accessible by Default**: WCAG AA compliance, keyboard navigation, screen reader support
5. **Progressive Enhancement**: Core functionality works everywhere, enhanced experience on modern browsers

---

## Images

### Login Page
- **Hero Image**: Large, professional photo of healthcare provider with elderly patient
- **Placement**: Left half of two-column layout (desktop), top section (mobile)
- **Treatment**: Warm, empathetic tone - conveys care and trust
- **Overlay**: None - image stands alone to establish emotional connection

No other images required for core application interface - focus remains on data clarity and functional efficiency.