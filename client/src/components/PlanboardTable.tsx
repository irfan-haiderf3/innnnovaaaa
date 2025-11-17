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

  const getStatusBadge = (status: string) => {
    const statusConfig: Record<string, { icon: any; bgColor: string; textColor: string; animated?: boolean }> = {
      "Completed": { 
        icon: IconRegistry.status.success, 
        bgColor: themeColors.success, 
        textColor: themeColors.neutral[50],
        animated: false 
      },
      "In Progress": { 
        icon: IconRegistry.status.pending, 
        bgColor: themeColors.accent[500], 
        textColor: themeColors.neutral[50],
        animated: true 
      },
      "Assigned": { 
        icon: IconRegistry.status.assigned, 
        bgColor: "#06B6D4", // Vibrant cyan for assigned tasks
        textColor: "#ffffff",
        animated: false 
      },
      "Delayed": { 
        icon: IconRegistry.status.warning, 
        bgColor: themeColors.warning, 
        textColor: themeColors.neutral[900],
        animated: true 
      },
      "Unassigned": { 
        icon: IconRegistry.status.unassigned, 
        bgColor: themeColors.secondary[400], 
        textColor: themeColors.neutral[50],
        animated: false 
      },
      "Cancelled": { 
        icon: IconRegistry.status.cancelled, 
        bgColor: themeColors.neutral[500], 
        textColor: themeColors.neutral[50],
        animated: false 
      },
    };

    const config = statusConfig[status] || { 
      icon: IconRegistry.status.assigned, 
      bgColor: themeColors.neutral[400], 
      textColor: themeColors.neutral[50],
      animated: false
    };
    const IconComponent = config.icon;

    return (
      <Badge 
        variant="default" 
        className="text-[10px] font-semibold px-2 py-0.5 gap-1.5 transition-all duration-200 hover:scale-105 hover:shadow-lg"
        style={{ 
          backgroundColor: config.bgColor, 
          color: config.textColor,
          borderColor: config.bgColor,
          boxShadow: `0 2px 6px ${config.bgColor}40`
        }}
      >
        <Icon 
          icon={IconComponent} 
          size="xs" 
          animated={config.animated}
          strokeWidth={2.5}
          className="drop-shadow-sm"
        />
        {status}
      </Badge>
    );
  };

  return (
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
              <TableHead 
                className="sticky left-0 z-10 min-w-[100px] h-9 font-bold"
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
                <TableCell colSpan={16} className="text-center text-muted-foreground py-8 text-sm">
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
                  <TableCell className="sticky left-0 bg-inherit z-10 text-xs py-2 px-2 font-medium" style={{ color: themeColors.neutral[600] }}>
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
  );
}
