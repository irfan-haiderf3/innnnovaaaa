import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { getCurrentTheme, getThemeDetails } from "@/lib/theme-switcher";

export interface StatusCount {
  label: string;
  count: number;
  color?: string;
}

interface StatusBarProps {
  statuses: StatusCount[];
}

export default function StatusBar({ statuses }: StatusBarProps) {
  const [themeColors, setThemeColors] = useState(() => {
    const theme = getCurrentTheme();
    return getThemeDetails(theme);
  });

  // Update colors when theme changes
  useEffect(() => {
    const interval = setInterval(() => {
      const theme = getCurrentTheme();
      const newColors = getThemeDetails(theme);
      if (JSON.stringify(newColors) !== JSON.stringify(themeColors)) {
        setThemeColors(newColors);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, [themeColors]);

  const getColorStyle = (color?: string) => {
    switch (color) {
      case "purple":
        return { backgroundColor: `${themeColors.secondary[100]}`, color: themeColors.secondary[700], borderColor: themeColors.secondary[300] };
      case "blue":
        return { backgroundColor: `${themeColors.primary[100]}`, color: themeColors.primary[700], borderColor: themeColors.primary[300] };
      case "green":
        return { backgroundColor: `${themeColors.success}20`, color: themeColors.success, borderColor: `${themeColors.success}50` };
      case "red":
        return { backgroundColor: `${themeColors.error}20`, color: themeColors.error, borderColor: `${themeColors.error}50` };
      case "yellow":
        return { backgroundColor: `${themeColors.warning}20`, color: themeColors.warning, borderColor: `${themeColors.warning}50` };
      case "orange":
        return { backgroundColor: `${themeColors.warning}30`, color: themeColors.warning, borderColor: `${themeColors.warning}60` };
      case "cyan":
        return { backgroundColor: `${themeColors.accent[100]}`, color: themeColors.accent[700], borderColor: themeColors.accent[300] };
      case "pink":
        return { backgroundColor: `${themeColors.secondary[100]}`, color: themeColors.secondary[600], borderColor: themeColors.secondary[200] };
      case "gray":
        return { backgroundColor: themeColors.neutral[200], color: themeColors.neutral[700], borderColor: themeColors.neutral[300] };
      default:
        return { backgroundColor: themeColors.neutral[100], color: themeColors.neutral[700], borderColor: themeColors.neutral[300] };
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border rounded-md bg-card">
      {statuses.map((status, index) => (
        <Badge
          key={index}
          variant="outline"
          className="text-xs gap-1.5"
          style={getColorStyle(status.color)}
          data-testid={`status-badge-${status.label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          <span>{status.label}</span>
          <span className="font-semibold">({status.count})</span>
        </Badge>
      ))}
    </div>
  );
}
