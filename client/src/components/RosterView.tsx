/**
 * MODERN ROSTER VIEW - INNOVACARE DESIGN SYSTEM
 * 
 * A beautiful, modern roster/schedule management interface with:
 * - Multiple view modes (Day, Week, Month, Timeline)
 * - Drag & drop support
 * - Staff assignment visualization
 * - Color-coded status system
 * - Smooth animations and transitions
 * - Healthcare-optimized UX
 */

import { useState, useMemo } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Users,
  User,
  Clock,
  MapPin,
  Phone,
  Mail,
  Plus,
  Filter,
  Search,
  Grid3x3,
  List,
  LayoutList,
  MoreVertical,
  Edit,
  Trash2,
  Copy,
  Eye,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import InnovacareTheme from "@/styles/innovacare-theme";

const { colors, palette, spacing, typography, animations, components } = InnovacareTheme;

export interface RosterTask {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  type: "group" | "individual";
  status: "Unassigned" | "Assigned" | "In Progress" | "Completed" | "Delayed" | "Cancelled";
  assignedTo?: string;
}

export interface RosterViewProps {
  open: boolean;
  onClose: () => void;
  taskGroup: string;
  initialView?: "day" | "week" | "month";
}

export default function RosterView({ open, onClose, taskGroup, initialView = "day" }: RosterViewProps) {
  const [view, setView] = useState<"day" | "week" | "month">(initialView);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [selectedTask, setSelectedTask] = useState<RosterTask | null>(null);
  const [hoveredTask, setHoveredTask] = useState<string | null>(null);

  // Custom scrollbar styles with dark blue color
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: ${palette.neutral[100]};
      border-radius: 4px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: ${colors.primary};
      border-radius: 4px;
      border: 2px solid ${palette.neutral[100]};
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: ${palette.primary.dark};
    }
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: ${colors.primary} ${palette.neutral[100]};
    }
  `;

  // Mock data for demonstration
  const mockTasks: RosterTask[] = [
    {
      id: "1",
      title: "Group Tasks",
      startTime: "09:00",
      endTime: "10:00",
      type: "group",
      status: "Assigned",
    },
    {
      id: "2",
      title: "Group Tasks",
      startTime: "10:00",
      endTime: "11:00",
      type: "group",
      status: "In Progress",
    },
    {
      id: "3",
      title: "Individual Task - Morning Care",
      startTime: "08:00",
      endTime: "09:00",
      type: "individual",
      status: "Completed",
      assignedTo: "Emma Thompson",
    },
  ];

  // Status color mapping using InnovaCare theme
  const getStatusColor = (status: string) => {
    const statusMap: Record<string, { bg: string; text: string; border: string; icon: any }> = {
      "Unassigned": { 
        bg: palette.primary.light + '20', 
        text: colors.primary, 
        border: colors.primary,
        icon: AlertCircle
      },
      "Assigned": { 
        bg: palette.success + '20', 
        text: palette.success, 
        border: palette.success,
        icon: CheckCircle2
      },
      "In Progress": { 
        bg: palette.accent.light + '25', 
        text: colors.accent, 
        border: colors.accent,
        icon: Clock
      },
      "Completed": { 
        bg: palette.success + '20', 
        text: palette.success, 
        border: palette.success,
        icon: CheckCircle2
      },
      "Delayed": { 
        bg: palette.warning + '30', 
        text: palette.warning, 
        border: palette.warning,
        icon: AlertCircle
      },
      "Cancelled": { 
        bg: palette.error + '20', 
        text: palette.error, 
        border: palette.error,
        icon: AlertCircle
      },
    };
    return statusMap[status] || { 
      bg: palette.neutral[100], 
      text: palette.neutral[700], 
      border: palette.neutral[300],
      icon: AlertCircle
    };
  };

  // Filter tasks based on search and status
  const filteredTasks = useMemo(() => {
    return mockTasks.filter(task => {
      const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (task.assignedTo?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      const matchesStatus = filterStatus === "all" || task.status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, filterStatus]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { 
      weekday: "long", 
      year: "numeric", 
      month: "long", 
      day: "numeric" 
    });
  };

  const getDaysInWeek = (date: Date) => {
    const days = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - date.getDay());
    
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const navigateDate = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    
    switch (view) {
      case "day":
        newDate.setDate(newDate.getDate() + (direction === "next" ? 1 : -1));
        break;
      case "week":
        newDate.setDate(newDate.getDate() + (direction === "next" ? 7 : -7));
        break;
      case "month":
        newDate.setMonth(newDate.getMonth() + (direction === "next" ? 1 : -1));
        break;
    }
    
    setCurrentDate(newDate);
  };

  // Modern Day View with enhanced visuals
  const renderDayView = () => {
    const hours = Array.from({ length: 15 }, (_, i) => i + 7); // 7 AM to 9 PM

    return (
      <div className="flex flex-col h-full">
        {/* Date Navigation Bar */}
        <div 
          className="flex items-center justify-between px-3 py-2 border-b" 
          style={{ 
            backgroundColor: palette.neutral[50],
            borderColor: palette.neutral[200] 
          }}
        >
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateDate("prev")}
            className="h-7 px-3 text-xs hover:scale-105 transition-transform"
            style={{ color: colors.primary }}
          >
            <ChevronLeft className="h-3.5 w-3.5 mr-1" />
            Prev Day
          </Button>
          
          <div className="text-center">
            <h3 className="text-sm font-bold" style={{ color: colors.primary }}>
              {formatDate(currentDate)}
            </h3>
            <p className="text-[10px]" style={{ color: palette.neutral[600] }}>
              {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateDate("next")}
            className="h-7 px-3 text-xs hover:scale-105 transition-transform"
            style={{ color: colors.primary }}
          >
            Next Day
            <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>

        <ScrollArea className="flex-1 custom-scrollbar">
          <div className="p-2 space-y-0.5">
            {hours.map((hour) => {
              const tasksAtHour = filteredTasks.filter(
                (task) => parseInt(task.startTime.split(":")[0]) === hour
              );
              
              return (
                <div key={hour} className="flex gap-2 min-h-[50px] group">
                  {/* Time Label - Compact */}
                  <div className="w-14 flex-shrink-0 flex flex-col items-end pt-1">
                    <span 
                      className="text-xs font-semibold" 
                      style={{ color: palette.neutral[700] }}
                    >
                      {hour > 12 ? hour - 12 : hour}:00
                    </span>
                    <span 
                      className="text-[10px]" 
                      style={{ color: palette.neutral[500] }}
                    >
                      {hour >= 12 ? 'PM' : 'AM'}
                    </span>
                  </div>
                  
                  {/* Timeline - Compact */}
                  <div 
                    className="flex-1 border-l-2 pl-2 relative" 
                    style={{ borderColor: tasksAtHour.length > 0 ? colors.primary : palette.neutral[200] }}
                  >
                    {/* Hour indicator dot */}
                    <div 
                      className="absolute left-0 top-1 -translate-x-1/2 w-2 h-2 rounded-full border-2" 
                      style={{
                        backgroundColor: tasksAtHour.length > 0 ? colors.primary : palette.neutral[200],
                        borderColor: colors.background
                      }}
                    />
                    
                    {/* Tasks */}
                    {tasksAtHour.length > 0 ? (
                      <div className="space-y-2">
                        {tasksAtHour.map((task) => {
                          const statusColor = getStatusColor(task.status);
                          const StatusIcon = statusColor.icon;
                          const isHovered = hoveredTask === task.id;
                          
                          return (
                            <div
                              key={task.id}
                              className="group/task p-2 rounded-lg border-l-4 transition-all duration-200 cursor-pointer"
                              style={{
                                backgroundColor: isHovered ? statusColor.bg : colors.background,
                                borderLeftColor: statusColor.border,
                                borderTop: `1px solid ${palette.neutral[200]}`,
                                borderRight: `1px solid ${palette.neutral[200]}`,
                                borderBottom: `1px solid ${palette.neutral[200]}`,
                                boxShadow: isHovered ? spacing.boxShadow.md : spacing.boxShadow.sm
                              }}
                              onMouseEnter={() => setHoveredTask(task.id)}
                              onMouseLeave={() => setHoveredTask(null)}
                              onClick={() => setSelectedTask(task)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-1.5 mb-1">
                                    <StatusIcon 
                                      className="h-3 w-3" 
                                      style={{ color: statusColor.text }}
                                    />
                                    <h4 
                                      className="font-semibold text-xs" 
                                      style={{ color: colors.text }}
                                    >
                                      {task.title}
                                    </h4>
                                  </div>
                                  {task.assignedTo && (
                                    <p className="text-xs" style={{ color: palette.neutral[600] }}>
                                      {task.assignedTo}
                                    </p>
                                  )}
                                </div>
                                
                                {/* Status Badge */}
                                <Badge
                                  variant="outline"
                                  className="text-xs px-1 py-0.5 font-medium flex items-center justify-center"
                                  style={{
                                    backgroundColor: statusColor.bg,
                                    color: statusColor.text,
                                    borderColor: statusColor.border,
                                  }}
                                >
                                  <StatusIcon className="h-2.5 w-2.5 mr-1" />
                                  <span className="flex items-center">{task.status}</span>
                                </Badge>
                              </div>
                              
                              {/* Time and Actions Row */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1 text-xs" style={{ color: palette.neutral[600] }}>
                                  <div className="flex items-center gap-0.5">
                                    <Clock className="h-2.5 w-2.5" />
                                    <span className="font-medium">{task.startTime} - {task.endTime}</span>
                                  </div>
                                </div>
                                
                                {/* Quick Actions (visible on hover) */}
                                <div 
                                  className="flex items-center gap-0.5 opacity-0 group-hover/task:opacity-100 transition-opacity"
                                >
                                  <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className="h-5 w-5 p-0"
                                    onClick={(e) => { e.stopPropagation(); }}
                                  >
                                    <Eye className="h-2.5 w-2.5" />
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className="h-5 w-5 p-0"
                                    onClick={(e) => { e.stopPropagation(); }}
                                  >
                                    <Edit className="h-2.5 w-2.5" />
                                  </Button>
                                  <Button 
                                    size="sm" 
                                    variant="ghost" 
                                    className="h-5 w-5 p-0"
                                    onClick={(e) => { e.stopPropagation(); }}
                                  >
                                    <MoreVertical className="h-2.5 w-2.5" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div 
                        className="py-1 text-xs italic" 
                        style={{ color: palette.neutral[400] }}
                      >
                        No tasks
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    );
  };

  // Modern Week View with enhanced card design
  const renderWeekView = () => {
    const daysInWeek = getDaysInWeek(currentDate);
    
    return (
      <div className="flex flex-col h-full">
        {/* Date Navigation Bar */}
        <div 
          className="flex items-center justify-between px-3 py-2 border-b" 
          style={{ 
            backgroundColor: palette.neutral[50],
            borderColor: palette.neutral[200] 
          }}
        >
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateDate("prev")}
            className="h-7 px-3 text-xs hover:scale-105 transition-transform"
            style={{ color: colors.primary }}
          >
            <ChevronLeft className="h-3.5 w-3.5 mr-1" />
            Prev Week
          </Button>
          
          <div className="text-center">
            <h3 className="text-sm font-bold" style={{ color: colors.primary }}>
              {daysInWeek[0].toLocaleDateString("en-US", { month: "short", day: "numeric" })} - {daysInWeek[6].toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </h3>
            <p className="text-[10px]" style={{ color: palette.neutral[600] }}>
              {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateDate("next")}
            className="h-7 px-3 text-xs hover:scale-105 transition-transform"
            style={{ color: colors.primary }}
          >
            Next Week
            <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>

        <ScrollArea className="flex-1 custom-scrollbar">
          <div className="grid grid-cols-7 gap-1.5 p-2">
            {daysInWeek.map((day, index) => {
              const isToday = day.toDateString() === new Date().toDateString();
              const isSelectedDate = day.toDateString() === currentDate.toDateString();
              
              return (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
                  style={{ 
                    borderColor: isToday ? colors.primary : palette.neutral[200],
                    borderWidth: isToday ? '2px' : '1px',
                    backgroundColor: isSelectedDate ? palette.primary.light + '15' : palette.neutral[50]
                  }}
                >
                  {/* Day Header - Compact */}
                  <div 
                    className="text-center py-1 border-b"
                    style={{
                      backgroundColor: isToday ? colors.primary : palette.neutral[100],
                      borderColor: palette.neutral[200]
                    }}
                  >
                    <div 
                      className="text-[10px] font-semibold uppercase" 
                      style={{ color: isToday ? 'white' : palette.neutral[700] }}
                    >
                      {day.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div 
                      className="text-sm font-bold" 
                      style={{ color: isToday ? 'white' : colors.primary }}
                    >
                      {day.getDate()}
                    </div>
                  </div>
                  
                  {/* Tasks - Compact */}
                  <div className="p-1.5 space-y-1 min-h-[120px]">
                    {filteredTasks.slice(0, 4).map((task) => {
                      const statusColor = getStatusColor(task.status);
                      return (
                        <div
                          key={task.id}
                          className="p-1 rounded border-l-2 cursor-pointer transition-all hover:scale-102 hover:shadow-sm"
                          style={{
                            backgroundColor: statusColor.bg,
                            borderLeft: `2px solid ${statusColor.border}`,
                          }}
                          onClick={() => setSelectedTask(task)}
                        >
                          <div className="text-[10px] font-medium line-clamp-1" style={{ color: statusColor.text }}>
                            {task.title}
                          </div>
                          <div className="text-[9px] flex items-center gap-0.5 mt-0.5" style={{ color: palette.neutral[600] }}>
                            <Clock className="h-2.5 w-2.5" />
                            {task.startTime}
                          </div>
                        </div>
                      );
                    })}
                    {filteredTasks.length > 4 && (
                      <div 
                        className="text-[10px] text-center py-0.5 rounded cursor-pointer transition-colors"
                        style={{
                          backgroundColor: palette.neutral[100],
                          color: colors.primary
                        }}
                        onClick={() => setSelectedTask(filteredTasks[0])}
                      >
                        +{filteredTasks.length - 4} more
                      </div>
                    )}
                    {filteredTasks.length === 0 && (
                      <div 
                        className="text-[10px] text-center py-4 italic" 
                        style={{ color: palette.neutral[400] }}
                      >
                        No tasks
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    );
  };

  // Modern Month View with mini calendar design
  const renderMonthView = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return (
      <div className="flex flex-col h-full">
        {/* Date Navigation Bar */}
        <div 
          className="flex items-center justify-between px-3 py-2 border-b" 
          style={{ 
            backgroundColor: palette.neutral[50],
            borderColor: palette.neutral[200] 
          }}
        >
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateDate("prev")}
            className="h-7 px-3 text-xs hover:scale-105 transition-transform"
            style={{ color: colors.primary }}
          >
            <ChevronLeft className="h-3.5 w-3.5 mr-1" />
            Prev Month
          </Button>
          
          <div className="text-center">
            <h3 className="text-sm font-bold" style={{ color: colors.primary }}>
              {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </h3>
            <p className="text-[10px]" style={{ color: palette.neutral[600] }}>
              {filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}
            </p>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigateDate("next")}
            className="h-7 px-3 text-xs hover:scale-105 transition-transform"
            style={{ color: colors.primary }}
          >
            Next Month
            <ChevronRight className="h-3.5 w-3.5 ml-1" />
          </Button>
        </div>

        {/* Weekday Headers - Compact */}
        <div 
          className="grid grid-cols-7 gap-px py-1 px-2 border-b" 
          style={{ 
            backgroundColor: palette.neutral[100],
            borderColor: palette.neutral[200]
          }}
        >
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, idx) => (
            <div 
              key={day} 
              className="text-center text-[10px] font-semibold py-0.5"
              style={{ color: idx === 0 || idx === 6 ? palette.neutral[500] : palette.neutral[700] }}
            >
              {day}
            </div>
          ))}
        </div>

        <ScrollArea className="flex-1 custom-scrollbar">
          <div className="grid grid-cols-7 gap-1 p-2">
            {days.map((day, index) => {
              const isToday = day && day.toDateString() === new Date().toDateString();
              const isWeekend = day && (day.getDay() === 0 || day.getDay() === 6);
              
              return (
                <div
                  key={index}
                  className="border rounded p-1 min-h-[60px] transition-all hover:shadow-md cursor-pointer"
                  style={{
                    borderColor: isToday ? colors.primary : palette.neutral[200],
                    borderWidth: isToday ? '2px' : '1px',
                    backgroundColor: day 
                      ? (isToday ? palette.primary.light + '15' : palette.neutral[50])
                      : palette.neutral[100],
                    opacity: day ? 1 : 0.4,
                  }}
                >
                  {day && (
                    <>
                      {/* Date Number - Compact */}
                      <div 
                        className="text-xs font-bold mb-0.5"
                        style={{ color: isToday ? colors.primary : palette.neutral[700] }}
                      >
                        {day.getDate()}
                      </div>
                      
                      {/* Task Indicators - Compact */}
                      <div className="space-y-0.5">
                        {filteredTasks.slice(0, 2).map((task) => {
                          const statusColor = getStatusColor(task.status);
                          return (
                            <div 
                              key={task.id}
                              className="flex items-center gap-0.5"
                            >
                              <div 
                                className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: statusColor.border }}
                              />
                              <span 
                                className="text-[9px] line-clamp-1" 
                                style={{ color: palette.neutral[600] }}
                              >
                                {task.title}
                              </span>
                            </div>
                          );
                        })}
                        {filteredTasks.length > 2 && (
                          <div 
                            className="text-[9px] font-medium" 
                            style={{ color: colors.primary }}
                          >
                            +{filteredTasks.length - 2} more
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    );
  };

  return (
    <>
      <style>{scrollbarStyles}</style>
      <Dialog open={open} onOpenChange={onClose}>
        <DialogContent 
          className="max-w-7xl h-[90vh] flex flex-col overflow-hidden"
          style={{ backgroundColor: colors.background }}
        >
        {/* Header Section - Simple Title and Search */}
        <DialogHeader className="border-b pb-2 pr-12" style={{ borderColor: palette.neutral[200] }}>
          <div className="flex items-center justify-between">
              <DialogTitle className="flex items-center gap-2">
                <div 
                  className="p-1.5 rounded" 
                  style={{ backgroundColor: colors.primary + '20' }}
                >
                  <Calendar className="h-4 w-4" style={{ color: colors.primary }} />
                </div>
                <div>
                  <h2 className="text-base font-bold" style={{ color: colors.primary }}>
                    Roster - {taskGroup}
                  </h2>
                  <p className="text-[10px] font-normal" style={{ color: palette.neutral[600] }}>
                    Manage and view staff schedules
                  </p>
                </div>
              </DialogTitle>
              
              {/* Search and Add Button */}
              <div className="flex items-center gap-1.5">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5" style={{ color: palette.neutral[400] }} />
                  <Input
                    placeholder="Search tasks..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 h-7 w-48 text-xs"
                    style={{ borderColor: palette.neutral[300] }}
                  />
                </div>
                
                <Button 
                  size="sm" 
                  className="h-7 text-xs"
                  style={{ backgroundColor: colors.primary, color: 'white' }}
                >
                  <Plus className="h-3.5 w-3.5 mr-1" />
                  Add
                </Button>
              </div>
            </div>
        </DialogHeader>

        {/* Tabs and Content */}
        <Tabs 
          value={view} 
          onValueChange={(v) => setView(v as "day" | "week" | "month")} 
          className="flex-1 flex flex-col min-h-0"
        >
          <div 
            className="flex items-center justify-between border-b px-1 py-1.5"
            style={{ borderColor: palette.neutral[200], backgroundColor: palette.neutral[50] }}
          >
            <TabsList className="bg-white" style={{ borderColor: palette.neutral[200] }}>
              <TabsTrigger 
                value="day" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
                style={{ 
                  color: view === 'day' ? 'white' : colors.primary,
                  backgroundColor: view === 'day' ? colors.primary : 'transparent'
                }}
              >
                <LayoutList className="h-4 w-4 mr-1" />
                Day View
              </TabsTrigger>
              <TabsTrigger 
                value="week"
                style={{ 
                  color: view === 'week' ? 'white' : colors.primary,
                  backgroundColor: view === 'week' ? colors.primary : 'transparent'
                }}
              >
                <Grid3x3 className="h-4 w-4 mr-1" />
                Week View
              </TabsTrigger>
              <TabsTrigger 
                value="month"
                style={{ 
                  color: view === 'month' ? 'white' : colors.primary,
                  backgroundColor: view === 'month' ? colors.primary : 'transparent'
                }}
              >
                <Calendar className="h-4 w-4 mr-1" />
                Month View
              </TabsTrigger>
            </TabsList>
            
            {/* Status Legend with Filter */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium flex items-center" style={{ color: palette.neutral[600] }}>Status:</span>
                {[
                  { status: "Assigned", color: palette.success },
                  { status: "In Progress", color: colors.accent },
                  { status: "Delayed", color: palette.warning },
                  { status: "Unassigned", color: colors.primary },
                ].map(({ status, color }) => (
                  <div key={status} className="flex items-center justify-center gap-1">
                    <div 
                      className="w-3 h-3 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs flex items-center" style={{ color: palette.neutral[600] }}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Filter Dropdown */}
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="h-7 w-32 text-xs" style={{ borderColor: palette.neutral[300] }}>
                  <Filter className="h-3.5 w-3.5 mr-1" />
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Unassigned">Unassigned</SelectItem>
                  <SelectItem value="Assigned">Assigned</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Delayed">Delayed</SelectItem>
                  <SelectItem value="Cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="day" className="flex-1 mt-0 min-h-0">
            {renderDayView()}
          </TabsContent>

          <TabsContent value="week" className="flex-1 mt-0 min-h-0">
            {renderWeekView()}
          </TabsContent>

          <TabsContent value="month" className="flex-1 mt-0 min-h-0">
            {renderMonthView()}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
    </>
  );
}
