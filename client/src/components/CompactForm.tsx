import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "@/contexts/ThemeContext";
import { LucideIcon } from "lucide-react";

// =============================================================================
// COMPACT FORM GROUP - Container for form fields
// =============================================================================

interface CompactFormGroupProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function CompactFormGroup({ children, columns = 3, className = "" }: CompactFormGroupProps) {
  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-3 ${className}`}>
      {children}
    </div>
  );
}

// =============================================================================
// COMPACT INPUT FIELD - Compact text input with icon support
// =============================================================================

interface CompactInputProps {
  label: string;
  icon?: LucideIcon;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "date" | "datetime-local" | "number" | "email";
  required?: boolean;
  disabled?: boolean;
}

export function CompactInput({
  label,
  icon: Icon,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
}: CompactInputProps) {
  const { theme } = useTheme();

  return (
    <div className="space-y-1">
      <Label
        className="text-xs font-medium flex items-center gap-1"
        style={{ color: theme.colors.neutral[700] }}
      >
        {Icon && <Icon className="h-3 w-3" />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="h-8 text-sm"
        style={{
          borderColor: theme.colors.neutral[300],
          fontSize: theme.typography.fontSize.sm,
        }}
      />
    </div>
  );
}

// =============================================================================
// COMPACT SELECT - Compact dropdown with icon support
// =============================================================================

interface CompactSelectProps {
  label: string;
  icon?: LucideIcon;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
  disabled?: boolean;
}

export function CompactSelect({
  label,
  icon: Icon,
  placeholder = "Select...",
  value,
  onChange,
  options,
  required = false,
  disabled = false,
}: CompactSelectProps) {
  const { theme } = useTheme();

  return (
    <div className="space-y-1">
      <Label
        className="text-xs font-medium flex items-center gap-1"
        style={{ color: theme.colors.neutral[700] }}
      >
        {Icon && <Icon className="h-3 w-3" />}
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>
      <Select value={value} onValueChange={onChange} disabled={disabled}>
        <SelectTrigger
          className="h-8 text-sm"
          style={{
            borderColor: theme.colors.neutral[300],
            fontSize: theme.typography.fontSize.sm,
          }}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="text-sm"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// =============================================================================
// COMPACT CHECKBOX GROUP - Compact multi-select checkboxes
// =============================================================================

interface CompactCheckboxGroupProps {
  label: string;
  icon?: LucideIcon;
  options: Array<{ value: string; label: string }>;
  selectedValues: string[];
  onChange: (values: string[]) => void;
  columns?: 1 | 2;
}

export function CompactCheckboxGroup({
  label,
  icon: Icon,
  options,
  selectedValues,
  onChange,
  columns = 1,
}: CompactCheckboxGroupProps) {
  const { theme } = useTheme();

  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter((v) => v !== value));
    }
  };

  const gridCols = columns === 2 ? "grid-cols-2" : "grid-cols-1";

  return (
    <div className="space-y-1">
      <Label
        className="text-xs font-medium flex items-center gap-1"
        style={{ color: theme.colors.neutral[700] }}
      >
        {Icon && <Icon className="h-3 w-3" />}
        {label}
      </Label>
      <div
        className={`grid ${gridCols} gap-2 p-2.5 rounded-md border max-h-36 overflow-y-auto`}
        style={{
          borderColor: theme.colors.neutral[200],
          backgroundColor: theme.colors.neutral[50],
        }}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={`checkbox-${option.value}`}
              checked={selectedValues.includes(option.value)}
              onCheckedChange={(checked) =>
                handleChange(option.value, checked as boolean)
              }
              className="h-3.5 w-3.5"
              style={{
                borderColor: theme.colors.primary[300],
              }}
            />
            <label
              htmlFor={`checkbox-${option.value}`}
              className="text-xs cursor-pointer hover:underline"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// COMPACT FIELD SET - Group related fields with a title
// =============================================================================

interface CompactFieldSetProps {
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  collapsible?: boolean;
  defaultExpanded?: boolean;
}

export function CompactFieldSet({
  title,
  icon: Icon,
  children,
  collapsible = false,
  defaultExpanded = true,
}: CompactFieldSetProps) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = React.useState(defaultExpanded);

  return (
    <div
      className="border rounded-md overflow-hidden"
      style={{ borderColor: theme.colors.neutral[200] }}
    >
      <div
        className={`flex items-center justify-between px-3 py-2 ${
          collapsible ? "cursor-pointer hover:bg-opacity-80" : ""
        }`}
        style={{ backgroundColor: theme.colors.neutral[100] }}
        onClick={() => collapsible && setExpanded(!expanded)}
      >
        <div className="flex items-center gap-2">
          {Icon && (
            <Icon
              className="h-4 w-4"
              style={{ color: theme.colors.primary[600] }}
            />
          )}
          <h3
            className="text-sm font-semibold"
            style={{ color: theme.colors.neutral[800] }}
          >
            {title}
          </h3>
        </div>
        {collapsible && (
          <span className="text-xs" style={{ color: theme.colors.neutral[500] }}>
            {expanded ? "▼" : "▶"}
          </span>
        )}
      </div>
      {expanded && <div className="p-3">{children}</div>}
    </div>
  );
}
