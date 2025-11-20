import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Icon, StatusIcon } from "@/components/ui/icon";
import { IconRegistry, StatusIconConfig } from "@/lib/icon-utils";
import { getCurrentTheme, getThemeDetails } from "@/lib/theme-switcher";
import RosterView from "./RosterView";
import { 
  Users, 
  FileText, 
  Calendar, 
  Home, 
  Truck,
  AlertCircle,
  Bell,
  CheckCircle2,
  Clock
} from "lucide-react";

export interface PlanboardEntry {
  id: string;
  exportStatus: string;
  status: string;
  taskGroup: string;
  taskId: string;
  scheduleName: string;
  service: string;
  clientCoordinator: string;
  carerCoordinator: string;
  client: string;
  carer: string;
  dateFrom: string;
  dateTo: string;
  startTime: string;
  endTime: string;
  duration: string;
  city: string;
}

interface PlanboardTableProps {
  entries: PlanboardEntry[];
}

export default function PlanboardTable({ entries }: PlanboardTableProps) {
  const [sortBy, setSortBy] = useState<keyof PlanboardEntry>("taskId");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [rosterOpen, setRosterOpen] = useState(false);
  const [selectedTaskGroup, setSelectedTaskGroup] = useState("");
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

  const handleSort = (column: keyof PlanboardEntry) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  const sortedEntries = [...entries].sort((a, b) => {
    const aVal = a[sortBy];
    const bVal = b[sortBy];
    if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
    if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  const handleOpenRoster = (taskGroup: string) => {
    setSelectedTaskGroup(taskGroup);
    setRosterOpen(true);
  };

  const getIconForTaskGroup = (taskGroup: string) => {
    const group = taskGroup.toLowerCase();
    if (group.includes("care")) return Home;
    if (group.includes("therapy")) return FileText;
    if (group.includes("transport")) return Truck;
    if (group.includes("assessment")) return CheckCircle2;
    if (group.includes("nursing")) return AlertCircle;
    return Calendar;
  };

  const getStatusBadge = (status: string) => {
    // Icon config stays the same, but visual style should match StatusBar legend
    const iconMap: Record<string, { icon: any; animated?: boolean }> = {
      "Completed": { icon: IconRegistry.status.success, animated: false },
      "In Progress": { icon: IconRegistry.status.pending, animated: true },
      "Assigned": { icon: IconRegistry.status.assigned, animated: false },
      "Delayed": { icon: IconRegistry.status.warning, animated: true },
      "Unassigned": { icon: IconRegistry.status.unassigned, animated: false },
      "Cancelled": { icon: IconRegistry.status.cancelled, animated: false },
    };

    // Map status to legend color key
    const colorKey = (() => {
      switch (status) {
        case "Unassigned":
          return "blue" as const;
        case "Assigned":
        case "Completed":
          return "green" as const;
        case "In Progress":
          return "cyan" as const;
        case "Delayed":
          return "orange" as const;
        case "Cancelled":
          return "red" as const;
        default:
          return "gray" as const;
      }
    })();

    // Styles aligned with StatusBar.getColorStyle
    const styleByColor = (color: string) => {
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
        default:
          return { backgroundColor: themeColors.neutral[200], color: themeColors.neutral[700], borderColor: themeColors.neutral[300] };
      }
    };

    const IconCfg = iconMap[status] || { icon: IconRegistry.status.assigned, animated: false };
    const IconComponent = IconCfg.icon;
    const badgeStyle = styleByColor(colorKey);

    return (
      <Badge
        variant="outline"
        className="text-[10px] font-semibold px-2 py-0.5 gap-1.5 transition-all duration-200 hover:scale-105"
        style={badgeStyle}
      >
        <Icon
          icon={IconComponent}
          size="xs"
          animated={IconCfg.animated}
          strokeWidth={2.5}
          className="drop-shadow-sm"
          style={{ color: badgeStyle.color }}
        />
        {status}
      </Badge>
    );
  };

  return (
    <>
      <RosterView 
        open={rosterOpen} 
        onClose={() => setRosterOpen(false)} 
        taskGroup={selectedTaskGroup}
      />
      <div className="h-full flex flex-col rounded-md border bg-card shadow-sm">
        <ScrollArea className="flex-1">
        <Table>
          <TableHeader 
            className="sticky top-0 z-20 border-b-2"
            style={{ 
              background: `linear-gradient(to right, ${themeColors.neutral[100]}, ${themeColors.primary[50]}, ${themeColors.neutral[100]})`,
              borderColor: themeColors.primary[200]
            }}
          >
            <TableRow className="hover:bg-transparent">
              <TableHead className="min-w-[50px] h-9 text-xs font-bold px-2" style={{ color: themeColors.neutral[700] }}>
                Icons
              </TableHead>
              <TableHead 
                className="sticky left-[50px] z-10 min-w-[100px] h-9 font-bold"
                style={{ 
                  background: `linear-gradient(to right, ${themeColors.neutral[100]}, ${themeColors.primary[50]}, ${themeColors.neutral[100]})`,
                  color: themeColors.neutral[700]
                }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("exportStatus")}
                  className="h-7 text-xs font-bold px-2 hover:bg-white/50 transition-all duration-200"
                  data-testid="button-sort-export"
                >
                  Export Status
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[90px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("status")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-status"
                >
                  Status
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[100px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("taskGroup")}
                  className="h-7 text-xs font-bold px-2 hover:bg-white/50 transition-all duration-200"
                  data-testid="button-sort-taskgroup"
                >
                  Task Group
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[80px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("taskId")}
                  className="h-7 text-xs font-bold px-2 hover:bg-white/50 transition-all duration-200"
                  data-testid="button-sort-taskid"
                >
                  Task ID
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[150px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("scheduleName")}
                  className="h-7 text-xs font-bold px-2 hover:bg-white/50 transition-all duration-200"
                  data-testid="button-sort-schedule"
                >
                  Schedule Name
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[140px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("service")}
                  className="h-7 text-xs font-bold px-2 hover:bg-white/50 transition-all duration-200"
                  data-testid="button-sort-service"
                >
                  Service
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[130px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("clientCoordinator")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-client-coord"
                >
                  Client Coordinator
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[130px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("carerCoordinator")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-carer-coord"
                >
                  Carer Coordinator
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[120px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("client")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-client"
                >
                  Client
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[120px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("carer")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-carer"
                >
                  Carer
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[90px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("dateFrom")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-datefrom"
                >
                  Date From
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[90px] h-9 font-bold" style={{ color: themeColors.neutral[700] }}>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSort("dateTo")}
                  className="h-7 text-xs font-bold px-2 transition-all duration-200"
                  data-testid="button-sort-dateto"
                >
                  Date To
                  <Icon icon={IconRegistry.actions.sort} size="xs" className="ml-1" animated />
                </Button>
              </TableHead>
              <TableHead className="min-w-[80px] h-9 text-xs font-bold px-2" style={{ color: themeColors.neutral[700] }}>Start Time</TableHead>
              <TableHead className="min-w-[80px] h-9 text-xs font-bold px-2" style={{ color: themeColors.neutral[700] }}>End Time</TableHead>
              <TableHead className="min-w-[80px] h-9 text-xs font-bold px-2" style={{ color: themeColors.neutral[700] }}>Duration</TableHead>
              <TableHead className="min-w-[100px] h-9 text-xs font-bold px-2" style={{ color: themeColors.neutral[700] }}>City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedEntries.length === 0 ? (
              <TableRow>
                <TableCell colSpan={17} className="text-center text-muted-foreground py-8 text-sm">
                  No records found
                </TableCell>
              </TableRow>
            ) : (
              sortedEntries.map((entry, index) => (
                <TableRow
                  key={entry.id}
                  data-testid={`row-planboard-${index}`}
                  className="h-10 transition-all duration-150 hover:shadow-sm border-b"
                  style={{
                    backgroundColor: index % 2 === 0 ? themeColors.neutral[50] : themeColors.neutral[100],
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = `${themeColors.primary[100]}50`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? themeColors.neutral[50] : themeColors.neutral[100];
                  }}
                >
                  <TableCell className="text-xs py-2 px-2">
                    <div className="flex gap-1 items-center">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-primary/10"
                        onClick={() => handleOpenRoster(entry.taskGroup)}
                        title="View Roster"
                      >
                        <Users className="h-3.5 w-3.5" style={{ color: themeColors.primary[600] }} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-accent/10"
                        title="Alerts"
                      >
                        <Bell className="h-3.5 w-3.5" style={{ color: themeColors.warning }} />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="sticky left-[50px] bg-inherit z-10 text-xs py-2 px-2 font-medium" style={{ color: themeColors.neutral[600] }}>
                    {entry.exportStatus || '-'}
                  </TableCell>
                  <TableCell className="text-xs py-2 px-2">{getStatusBadge(entry.status)}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-medium" style={{ color: themeColors.neutral[700] }}>
                    <Badge 
                      variant="outline" 
                      className="text-[10px] font-semibold"
                      style={{
                        backgroundColor: themeColors.accent[50],
                        color: themeColors.accent[700],
                        borderColor: themeColors.accent[200]
                      }}
                    >
                      {entry.taskGroup}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-xs py-2 px-2 font-bold" style={{ color: themeColors.primary[600] }}>{entry.taskId}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-medium" style={{ color: themeColors.neutral[800] }}>{entry.scheduleName}</TableCell>
                  <TableCell className="text-xs py-2 px-2" style={{ color: themeColors.neutral[600] }}>{entry.service}</TableCell>
                  <TableCell className="text-xs py-2 px-2" style={{ color: themeColors.neutral[600] }}>{entry.clientCoordinator}</TableCell>
                  <TableCell className="text-xs py-2 px-2" style={{ color: themeColors.neutral[600] }}>{entry.carerCoordinator}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-medium" style={{ color: themeColors.neutral[800] }}>{entry.client}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-medium" style={{ color: themeColors.neutral[800] }}>{entry.carer || <span className="italic" style={{ color: themeColors.neutral[400] }}>Unassigned</span>}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-mono" style={{ color: themeColors.neutral[600] }}>{entry.dateFrom}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-mono" style={{ color: themeColors.neutral[600] }}>{entry.dateTo}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-mono" style={{ color: themeColors.neutral[600] }}>{entry.startTime}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-mono" style={{ color: themeColors.neutral[600] }}>{entry.endTime}</TableCell>
                  <TableCell className="text-xs py-2 px-2 font-semibold" style={{ color: themeColors.primary[600] }}>{entry.duration}</TableCell>
                  <TableCell className="text-xs py-2 px-2" style={{ color: themeColors.neutral[600] }}>{entry.city}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
    </>
  );
}
