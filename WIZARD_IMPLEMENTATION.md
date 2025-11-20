# Wizard Implementation Guide

## Overview
Professional multi-step wizard component for web applications, inspired by desktop wizard interfaces and following the InnovaCare design system. Features a **compact, non-scrolling design** that fits entirely within the viewport.

## Components Created

### 1. Wizard Component (`/client/src/components/Wizard.tsx`)
Reusable multi-step wizard component with:
- **Visual stepper** - Shows progress with numbered steps and connecting lines
- **Step validation** - Optional validation before moving to next step
- **Navigation controls** - Back, Next, and Cancel buttons
- **Responsive design** - Follows InnovaCare theme (deep blue #2C5282)
- **Completion tracking** - Visual indicators for completed steps

#### Features:
- ✓ **Compact design** - Reduced spacing and padding
- ✓ **Non-scrolling layout** - Fits in viewport without scroll
- ✓ Step numbers with completion checkmarks
- ✓ Active step highlighting
- ✓ Progress connector lines
- ✓ Compact step descriptions
- ✓ Validation support
- ✓ Professional footer with navigation
- ✓ Cancel functionality

### 2. Leave Wizard Page (`/client/src/pages/leave-wizard.tsx`)
Complete implementation of a Leave Assignment wizard with three steps:

#### Step 1: Leave Details
- Leave type selection (ACC Leave, Annual Leave, Sick Leave, etc.)
- Date range picker (From/To)
- Leave unit selection (Hour/Day/Week)
- Leave status (Approved/Pending/Rejected)
- Notes field
- Certificate status
- Data grid showing all leave entries
- Add/Edit/Remove buttons

#### Step 2: Duty Tasks
- View and select duty tasks affected by leave
- Shows tasks scheduled during leave period
- Reassignment interface

#### Step 3: Missing Hours
- Review missing hours report
- Final validation
- Completion summary

## Usage

### Route
Navigate to: `/wizards`

### Creating a Custom Wizard

```tsx
import { Wizard, WizardStep } from "@/components/Wizard";

const steps: WizardStep[] = [
  {
    id: "step1",
    title: "Step 1 Name",
    description: "Step description...",
    content: <YourStepContent />,
    isValid: () => {
      // Return true if step is valid
      return yourValidationLogic();
    }
  },
  // ... more steps
];

function YourWizard() {
  const handleComplete = () => {
    // Called when user clicks Finish on last step
  };

  const handleCancel = () => {
    // Called when user clicks Cancel
  };

  const handleSave = () => {
    // Called when user clicks Save (optional)
  };

  return (
    <Wizard
      title="Your Wizard Title"
      steps={steps}
      onComplete={handleComplete}
      onCancel={handleCancel}
      onSave={handleSave}
      showStepNumbers={true}
    />
  );
}
```

## Design Features

### Compact & Non-Scrolling
- **Reduced padding**: Header (px-4 py-2), Content (px-4 py-3)
- **Smaller form elements**: Height 8 (32px), text-xs (12px)
- **Compact grid**: 3-column layout for forms
- **Minimal spacing**: gap-2 between elements
- **Fits viewport**: No scrolling required for wizard chrome
- **Content area scrollable**: Only step content scrolls if needed

### Theme Consistency
- Uses InnovaCare primary color (#2C5282)
- Matches existing design system
- Compact spacing and typography
- Professional appearance

### User Experience
- Clear progress indication
- Validation before proceeding
- Easy navigation (Back/Next buttons)
- Cancel option at any time
- Step descriptions for guidance

### Visual Elements
- **Compact step circles**: 8x8 (32px) with smaller icons
- **Thin connector lines**: 0.5px height
- **Small text**: 10px step labels, 12px descriptions
- Step circles with numbers or checkmarks
- Connecting lines showing progress
- Active step highlighting
- Completed step indicators (green checkmarks)
- Disabled state for invalid steps

## Navigation Flow

1. **Start** - User lands on Step 1
2. **Next** - Validates current step, moves to next
3. **Back** - Returns to previous step (no validation)
4. **Save** - Saves current progress without completing
5. **Cancel** - Exits wizard at any time
6. **Finish** - Completes wizard (only on last step)

### Footer Button Layout

```
[Cancel] [Back]    Step X of Y    [Save] [Next/Finish]
   LEFT                CENTER           RIGHT
```

- **Left side**: Cancel and Back buttons (outline style)
- **Center**: Step indicator
- **Right side**: Save and Next buttons (Save=outline, Next=primary)
- All buttons are the same size (`sm`)

## Integration Points

### With Existing Pages
- Header component integration
- Navigation menu access
- Consistent styling
- Route-based navigation

### Data Flow
- Form state management per step
- Data table integration
- API integration ready
- Validation hooks

## Testing the Wizard

1. Start your development server
2. Navigate to `/wizards`
3. Fill out Step 1 form
4. Click "Add" to add leave entry
5. Click "Next >" to proceed
6. Navigate through all steps
7. Click "Finish" on final step

## Future Enhancements

Potential additions:
- Multiple wizard types (Visit Wizard, Assessment Wizard, etc.)
- Save/Resume functionality
- Step skipping for optional steps
- Conditional step logic
- Progress persistence
- Form autosave
- Confirmation dialogs

## Files Modified

1. `/client/src/components/Wizard.tsx` - New component
2. `/client/src/pages/leave-wizard.tsx` - New page
3. `/client/src/App.tsx` - Added route

## Theme Colors Used

- **Primary**: #2C5282 (Deep Healthcare Blue)
- **Success**: #48BB78 (Green for completed steps)
- **Background**: #FFFFFF (White)
- **Neutral**: Gray scale for borders and text
- **Error**: #F56565 (Red for validation)

## Accessibility

- Keyboard navigation ready
- Clear visual indicators
- Semantic HTML structure
- ARIA-ready for screen readers
- High contrast ratios

---

## Compact Design Specifications

### Header
- Padding: `px-4 py-2` (16px horizontal, 8px vertical)
- Title: `text-lg` (18px)

### Stepper
- Padding: `px-4 py-2`
- Step circles: `w-8 h-8` (32px)
- Step labels: `text-[10px]` (10px)
- Connector line: `h-0.5` (2px)

### Content Area
- Padding: `px-4 py-3` (16px horizontal, 12px vertical)
- Description: `text-xs` (12px), `p-2`
- Form elements: `h-8` (32px), `text-xs` (12px)
- Grid: `grid-cols-3 gap-2`
- Section spacing: `space-y-3` (12px)

### Footer
- Padding: `px-4 py-2`
- Text: `text-xs` (12px)

---

**Status**: ✅ Complete and ready for use
**Design**: Compact & Non-Scrolling
**Footer Layout**: Cancel/Back (left) | Step Indicator (center) | Save/Next (right)
**Route**: `/wizards`
**Version**: 2.1
**Last Updated**: November 19, 2025
