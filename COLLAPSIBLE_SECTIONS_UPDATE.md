# Collapsible Sections Update

## Overview
Implemented collapsible sections with accordion behavior for both Planboard and Client Profile pages.

## Changes Made

### 1. Planboard (innovacare-planboard.tsx)
- **Removed Tabs Component**: Replaced the Tabs/TabsContent structure with custom collapsible sections
- **Added Collapse State**: 
  - `filtersCollapsed` - tracks if filters section is collapsed
  - `resultsCollapsed` - tracks if results section is collapsed
- **Accordion Behavior**: When one section collapses, the other automatically expands to take full width
- **Collapse Controls**:
  - Added collapse buttons in section headers (ChevronRight icon)
  - Added vertical rotated labels (180°) when sections are collapsed
  - Added right-side control panel with buttons for both sections
- **Section Labels**:
  - "Search & Filters" (formerly "Filters")
  - "Planboard Results"
  - Both use 180-degree rotation for vertical text display

### 2. Client Profile (client-profile.tsx)
- **Fixed Collapse Arrow**: Ensured the left panel collapse/expand functionality works correctly
- **Updated Label Rotation**: Changed from `textOrientation: 'mixed'` to `transform: 'rotate(180deg)'` for consistency with planboard
- **Vertical Label**: "Client Profile" displays vertically when panel is collapsed

### 3. Client Profile Form (ClientProfileForm.tsx)
- **Tab Width**: Adjusted from w-32 to w-24 for more compact layout
- **Maintained Functionality**: All existing tabs and navigation work as before

## Key Features

### Accordion Behavior
- When filters collapse → results expand to full width
- When results collapse → filters expand to full width
- Only one section can be collapsed at a time
- Smooth transitions with CSS animations

### Multiple Collapse Methods
1. **Header Button**: Click the chevron in the section header
2. **Collapsed Label**: Click the expand button in the vertical label bar
3. **Right Panel**: Click the section button in the right control panel

### Visual Consistency
- All vertical labels use 180-degree rotation
- Consistent color scheme using InnovacareTheme
- Hover effects on all interactive elements
- Primary color highlighting for active sections

## Testing
✓ Build completed successfully with no errors
✓ All collapsible sections functional
✓ Accordion behavior working as expected
✓ Vertical labels displaying correctly

## Files Modified
1. `client/src/pages/innovacare-planboard.tsx`
2. `client/src/pages/client-profile.tsx`
3. `client/src/components/client/ClientProfileForm.tsx`
