import { useState, useEffect } from "react";
import { IHeader, IButton, IIconButton, IMetricCard, IMetricGrid } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";
import SearchFilters, { type FilterValues } from "@/components/SearchFilters";
import PlanboardTable, { type PlanboardEntry } from "@/components/PlanboardTable";
import StatusBar, { type StatusCount } from "@/components/StatusBar";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar, FileCheck, Filter, Maximize2, Minimize2, GripVertical, PanelLeft, PanelRight, MoreVertical, X, Users, ClipboardList, AlertCircle, FileText, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Quick action filter definition
interface QuickFilter {
  id: string;
  label: string;
  icon: any;
  color: 'primary' | 'accent' | 'success' | 'warning' | 'error';
  count: number;
}

export default function PlanboardV2Page() {
  const { toast } = useToast();
  const [filterPanelOpen, setFilterPanelOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [filteredEntries, setFilteredEntries] = useState<PlanboardEntry[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<FilterValues | null>(null);
  const [filterWidth, setFilterWidth] = useState(50); // Percentage width
  const [isDragging, setIsDragging] = useState(false);
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [tableExpanded, setTableExpanded] = useState(false);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [rightPanelCollapsed, setRightPanelCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [showQuickFilters, setShowQuickFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Quick action filters
  const quickFilters: QuickFilter[] = [
    { id: "unassigned", label: "Unassigned", icon: AlertTriangle, color: "error", count: 14 },
    { id: "in-progress", label: "In Progress", icon: ClipboardList, color: "accent", count: 22 },
    { id: "delayed", label: "Delayed", icon: AlertCircle, color: "warning", count: 8 },
    { id: "completed", label: "Completed", icon: FileCheck, color: "success", count: 45 },
    { id: "client-review", label: "Review Due", icon: FileText, color: "primary", count: 12 },
    { id: "urgent", label: "Urgent", icon: AlertCircle, color: "error", count: 5 },
  ];

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setFilterPanelOpen(false);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle dragging for resizable divider
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const container = document.getElementById('resizable-container');
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
      
      // Limit width between 20% and 80%
      if (newWidth >= 20 && newWidth <= 80) {
        setFilterWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging]);

  const mockEntries: PlanboardEntry[] = [
    {
      id: "1",
      exportStatus: "",
      status: "Assigned",
      taskGroup: "Daily Care",
      taskId: "T12345",
      scheduleName: "Morning Personal Care",
      service: "ACC Access-HC941",
      clientCoordinator: "Sarah Johnson",
      carerCoordinator: "Michael Brown",
      client: "Margaret Wilson",
      carer: "Emma Thompson",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "08:00",
      endTime: "10:00",
      duration: "2:00",
      city: "Albany",
    },
    {
      id: "2",
      exportStatus: "",
      status: "In Progress",
      taskGroup: "Therapy",
      taskId: "T12346",
      scheduleName: "Physical Therapy Session",
      service: "ACC Phoenix-RTI",
      clientCoordinator: "David Lee",
      carerCoordinator: "Jennifer White",
      client: "Robert Chen",
      carer: "James Mitchell",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "10:30",
      endTime: "11:30",
      duration: "1:00",
      city: "Akina",
    },
    {
      id: "3",
      exportStatus: "",
      status: "Completed",
      taskGroup: "Assessment",
      taskId: "T12347",
      scheduleName: "Initial Health Assessment",
      service: "Healthcare NZ-OT Schedule",
      clientCoordinator: "Lisa Anderson",
      carerCoordinator: "Robert Davis",
      client: "Elizabeth Martinez",
      carer: "Sophia Garcia",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "13:00",
      endTime: "14:30",
      duration: "1:30",
      city: "Alexandria",
    },
    {
      id: "4",
      exportStatus: "",
      status: "Assigned",
      taskGroup: "Nursing",
      taskId: "T12348",
      scheduleName: "Medication Administration",
      service: "Geneva-ACC Nursing",
      clientCoordinator: "Sarah Johnson",
      carerCoordinator: "Michael Brown",
      client: "William Taylor",
      carer: "Olivia Johnson",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "15:00",
      endTime: "15:30",
      duration: "0:30",
      city: "Amberley",
    },
    {
      id: "5",
      exportStatus: "",
      status: "Unassigned",
      taskGroup: "Daily Care",
      taskId: "T12349",
      scheduleName: "Evening Personal Care",
      service: "ACC Access-HC941",
      clientCoordinator: "David Lee",
      carerCoordinator: "Jennifer White",
      client: "Patricia Anderson",
      carer: "",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "18:00",
      endTime: "19:30",
      duration: "1:30",
      city: "Aongatete",
    },
    {
      id: "6",
      exportStatus: "",
      status: "Delayed",
      taskGroup: "Transport",
      taskId: "T12350",
      scheduleName: "Medical Appointment Transport",
      service: "IF - Geneva",
      clientCoordinator: "Lisa Anderson",
      carerCoordinator: "Robert Davis",
      client: "James Wilson",
      carer: "Daniel Lee",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "09:30",
      endTime: "11:00",
      duration: "1:30",
      city: "Apiti",
    },
    {
      id: "7",
      exportStatus: "",
      status: "Assigned",
      taskGroup: "Therapy",
      taskId: "T12351",
      scheduleName: "Occupational Therapy",
      service: "ACC Phoenix-HC941",
      clientCoordinator: "Sarah Johnson",
      carerCoordinator: "Michael Brown",
      client: "Mary Brown",
      carer: "Ava Williams",
      dateFrom: "11/12/2025",
      dateTo: "11/12/2025",
      startTime: "10:00",
      endTime: "11:00",
      duration: "1:00",
      city: "Aranga",
    },
    {
      id: "8",
      exportStatus: "",
      status: "Cancelled",
      taskGroup: "Daily Care",
      taskId: "T12352",
      scheduleName: "Home Support Services",
      service: "IF Phoenix-Nursing-HC941",
      clientCoordinator: "David Lee",
      carerCoordinator: "Jennifer White",
      client: "John Davis",
      carer: "Isabella Martinez",
      dateFrom: "11/12/2025",
      dateTo: "11/12/2025",
      startTime: "14:00",
      endTime: "16:00",
      duration: "2:00",
      city: "Albany",
    },
  ];

  const statusCounts: StatusCount[] = [
    { label: "Provisional Status", count: 0, color: "purple" },
    { label: "Unassigned", count: 1, color: "blue" },
    { label: "Assigned", count: 3, color: "green" },
    { label: "In Progress", count: 1, color: "cyan" },
    { label: "Delayed", count: 1, color: "orange" },
    { label: "Completed", count: 1, color: "green" },
    { label: "Cancelled", count: 1, color: "red" },
    { label: "Update Required", count: 0, color: "yellow" },
    { label: "Notes", count: 0, color: "pink" },
    { label: "Shadowing", count: 0, color: "gray" },
    { label: "Group Tasks", count: 0, color: "purple" },
    { label: "Without Travel", count: 0, color: "gray" },
    { label: "On Time", count: 0, color: "green" },
  ];

  const handleSearch = (filters: FilterValues) => {
    console.log("Searching with filters:", filters);
    
    // Filter the entries based on the selected filters
    let results = [...mockEntries];
    
    // Filter by status
    if (filters.status.length > 0) {
      results = results.filter(entry => filters.status.includes(entry.status));
    }
    
    // Filter by client city
    if (filters.clientCity) {
      results = results.filter(entry => entry.city === filters.clientCity);
    }
    
    // Filter by service
    if (filters.service) {
      results = results.filter(entry => entry.service === filters.service);
    }
    
    // Filter by client
    if (filters.client && filters.client !== "all") {
      results = results.filter(entry => 
        entry.client.toLowerCase().includes(filters.client.toLowerCase())
      );
    }
    
    // Filter by carer
    if (filters.carer && filters.carer !== "all") {
      results = results.filter(entry => 
        entry.carer.toLowerCase().includes(filters.carer.toLowerCase())
      );
    }
    
    // Filter by date range
    if (filters.dateFrom) {
      results = results.filter(entry => {
        const entryDate = new Date(entry.dateFrom.split('/').reverse().join('-'));
        const filterDate = new Date(filters.dateFrom);
        return entryDate >= filterDate;
      });
    }
    
    if (filters.dateTo) {
      results = results.filter(entry => {
        const entryDate = new Date(entry.dateTo.split('/').reverse().join('-'));
        const filterDate = new Date(filters.dateTo);
        return entryDate <= filterDate;
      });
    }
    
    // Filter by task ID
    if (filters.taskId) {
      results = results.filter(entry => 
        entry.taskId.toLowerCase().includes(filters.taskId.toLowerCase())
      );
    }
    
    // Filter by coordinators
    if (filters.clientCoordinator && filters.clientCoordinator !== "all") {
      results = results.filter(entry => 
        entry.clientCoordinator.toLowerCase().includes(filters.clientCoordinator.toLowerCase())
      );
    }
    
    if (filters.carerCoordinator && filters.carerCoordinator !== "all") {
      results = results.filter(entry => 
        entry.carerCoordinator.toLowerCase().includes(filters.carerCoordinator.toLowerCase())
      );
    }
    
    setFilteredEntries(results);
    setAppliedFilters(filters);
    
    toast({
      title: "Search Applied",
      description: `Found ${results.length} record(s) matching your filters.`,
    });
  };

  const handleReset = () => {
    console.log("Resetting filters");
    setFilteredEntries([]);
    setAppliedFilters(null);
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared.",
    });
  };

  const handleYesterday = () => {
    console.log("Loading yesterday's data");
    toast({
      title: "Yesterday's Data",
      description: "Loading planboard data from yesterday.",
    });
  };

  const handleCompleteAll = () => {
    console.log("Completing all shifts");
    toast({
      title: "Success",
      description: "All pending shifts have been marked as complete.",
    });
  };

  // Calculate paginated entries
  const displayedEntries = appliedFilters ? filteredEntries : mockEntries;
  const totalPages = Math.ceil(displayedEntries.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedEntries = displayedEntries.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [appliedFilters]);

  const { colors, palette } = InnovacareTheme;

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      <IHeader showNavigation={true} username="System" role="Administrator" />

      {/* Desktop Resizable Layout */}
      {!isMobile && (
        <div id="resizable-container" className="flex flex-1 overflow-hidden relative">
          {/* Left Collapse Tab */}
          {leftPanelCollapsed && (
            <div 
              className="w-10 flex flex-col items-center justify-center border-r cursor-pointer hover:bg-primary/5 transition-colors"
              onClick={() => setLeftPanelCollapsed(false)}
              style={{ 
                backgroundColor: colors.background,
                borderColor: palette.neutral[200],
              }}
            >
              <PanelLeft className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs font-semibold text-primary writing-mode-vertical" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Filters
              </div>
            </div>
          )}

          {/* Filter Section */}
          {!leftPanelCollapsed && (
          <div 
            className="overflow-hidden flex flex-col border-r"
            style={{ 
              width: filterExpanded ? '100%' : tableExpanded ? '0%' : `${filterWidth}%`,
              transition: filterExpanded || tableExpanded ? 'width 0.3s ease-in-out' : 'none',
              backgroundColor: colors.background,
              borderColor: palette.neutral[200],
            }}
          >
            <div className="flex items-center justify-between p-3 border-b bg-background/50">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-primary" />
                <h2 className="text-sm font-semibold">Search Filters</h2>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setLeftPanelCollapsed(true)}
                  title="Collapse filter panel"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => {
                    if (filterExpanded) {
                      setFilterExpanded(false);
                    } else {
                      setFilterExpanded(true);
                      setTableExpanded(false);
                    }
                  }}
                  title={filterExpanded ? "Restore" : "Expand to full screen"}
                >
                  {filterExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-3">
              <SearchFilters onSearch={handleSearch} onReset={handleReset} />
            </div>
          </div>
          )}

          {/* Draggable Divider */}
          {!filterExpanded && !tableExpanded && !leftPanelCollapsed && (
            <div
              className="w-1 bg-border hover:bg-primary/50 cursor-col-resize flex items-center justify-center relative group transition-colors"
              onMouseDown={() => setIsDragging(true)}
            >
              <div className="absolute inset-y-0 -left-1 -right-1 flex items-center justify-center">
                <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          )}

          {/* Results Section */}
          <div 
            className="overflow-hidden flex flex-col"
            style={{ 
              width: tableExpanded ? '100%' : filterExpanded ? '0%' : `${100 - filterWidth}%`,
              transition: filterExpanded || tableExpanded ? 'width 0.3s ease-in-out' : 'none',
              backgroundColor: colors.background,
            }}
          >
            <div className="flex items-center justify-between p-3 border-b bg-background/50">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold">Results</h2>
                <Badge variant="outline" className="text-xs">
                  Showing: <span className="font-semibold ml-1">{startIndex + 1}-{Math.min(endIndex, displayedEntries.length)}</span> of <span className="font-semibold">{displayedEntries.length}</span>
                </Badge>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => {
                    if (tableExpanded) {
                      setTableExpanded(false);
                    } else {
                      setTableExpanded(true);
                      setFilterExpanded(false);
                    }
                  }}
                  title={tableExpanded ? "Restore" : "Expand to full screen"}
                >
                  {tableExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => setRightPanelCollapsed(true)}
                  title="Collapse status panel"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Active Filters Display */}
            {appliedFilters && (
              <div className="px-2 pt-2">
                <Card className="bg-muted/30">
                  <div className="p-2">
                    <div className="text-xs">
                      <span className="font-semibold text-primary">Active Filters: </span>
                      {appliedFilters.status.length > 0 && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Status: {appliedFilters.status.join(", ")}</Badge>
                      )}
                      {appliedFilters.clientCity && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">City: {appliedFilters.clientCity}</Badge>
                      )}
                      {appliedFilters.service && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Service: {appliedFilters.service}</Badge>
                      )}
                      {appliedFilters.dateFrom && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">From: {appliedFilters.dateFrom}</Badge>
                      )}
                      {appliedFilters.dateTo && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">To: {appliedFilters.dateTo}</Badge>
                      )}
                      {appliedFilters.taskId && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Task ID: {appliedFilters.taskId}</Badge>
                      )}
                      {appliedFilters.client && appliedFilters.client !== "all" && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Client: {appliedFilters.client}</Badge>
                      )}
                      {appliedFilters.carer && appliedFilters.carer !== "all" && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Carer: {appliedFilters.carer}</Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Results Table */}
            <div className="flex-1 overflow-auto p-2">
              <Card className="h-full">
                <PlanboardTable entries={paginatedEntries} />
              </Card>
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between px-4 py-2 border-t bg-background">
                <div className="text-xs text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="h-8 text-xs"
                  >
                    <ChevronLeft className="h-3.5 w-3.5 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="h-8 text-xs"
                  >
                    Next
                    <ChevronRight className="h-3.5 w-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            )}

            {/* Action Buttons Dropdown */}
            <div className="flex gap-2 p-2 border-t bg-background">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 text-xs flex-1"
                  >
                    <MoreVertical className="h-3.5 w-3.5 mr-1.5" />
                    Quick Actions
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem onClick={handleYesterday}>
                    <Calendar className="h-3.5 w-3.5 mr-2" />
                    Yesterday
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleCompleteAll}>
                    <FileCheck className="h-3.5 w-3.5 mr-2" />
                    Complete All
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Status Bar */}
            {!rightPanelCollapsed && (
              <div className="p-2 border-t bg-background">
                <StatusBar statuses={statusCounts} />
              </div>
            )}
          </div>

          {/* Right Collapse Tab */}
          {rightPanelCollapsed && (
            <div 
              className="w-10 flex flex-col items-center justify-center border-l cursor-pointer hover:bg-primary/5 transition-colors"
              onClick={() => setRightPanelCollapsed(false)}
              style={{ 
                backgroundColor: colors.background,
                borderColor: palette.neutral[200],
              }}
            >
              <PanelRight className="h-5 w-5 text-primary mb-2" />
              <div className="text-xs font-semibold text-primary writing-mode-vertical" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                Status
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile Layout */}
      {isMobile && (
        <>
          {/* Mobile Filter Sheet */}
          <Sheet open={filterPanelOpen} onOpenChange={setFilterPanelOpen}>
            <SheetContent side="left" className="w-full sm:w-96 p-0 flex flex-col">
              <SheetHeader className="p-3 border-b">
                <SheetTitle className="flex items-center gap-2 text-sm">
                  <Filter className="h-4 w-4 text-primary" />
                  Search Filters
                </SheetTitle>
              </SheetHeader>
              <div className="flex-1 overflow-auto p-3">
                <SearchFilters 
                  onSearch={(filters) => {
                    handleSearch(filters);
                    if (isMobile) setFilterPanelOpen(false);
                  }} 
                  onReset={handleReset} 
                />
              </div>
            </SheetContent>
          </Sheet>

          {/* Main Content Area */}
          <main className="flex-1 flex flex-col overflow-hidden">
            {/* Action Bar with Toggle */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 p-2 border-b bg-background">
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8"
                  onClick={() => setFilterPanelOpen(true)}
                >
                  <Filter className="h-3.5 w-3.5 mr-1.5" />
                  <span>Filters</span>
                </Button>
                
                <Badge variant="outline" className="text-xs">
                  Total: <span className="font-semibold ml-1">{appliedFilters ? filteredEntries.length : mockEntries.length}</span>
                </Badge>
              </div>

              <div className="flex gap-2 w-full sm:w-auto sm:ml-auto">
                <div className="relative">
                  <IButton 
                    icon={Filter} 
                    size="sm" 
                    variant={showQuickFilters ? "primary" : "outline"}
                    onClick={() => setShowQuickFilters(!showQuickFilters)}
                  >
                    {showQuickFilters ? 'Hide Filters' : 'Show Filters'}
                  </IButton>
                  {selectedFilters.length > 0 && (
                    <span 
                      className="absolute -top-1 -right-1 rounded-full text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center"
                      style={{
                        backgroundColor: InnovacareTheme.colors.primary,
                        color: 'white',
                      }}
                    >
                      {selectedFilters.length}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleYesterday}
                  className="h-8 text-xs flex-1 sm:flex-none"
                >
                  <Calendar className="h-3.5 w-3.5 sm:mr-1.5" />
                  <span className="hidden sm:inline">Yesterday</span>
                </Button>
                <Button
                  size="sm"
                  onClick={handleCompleteAll}
                  className="h-8 text-xs flex-1 sm:flex-none"
                >
                  <FileCheck className="h-3.5 w-3.5 sm:mr-1.5" />
                  <span className="hidden sm:inline">Complete All</span>
                </Button>
              </div>
            </div>

            {/* Quick Actions Section */}
            {showQuickFilters && selectedFilters.length > 0 && (
              <div style={{ borderBottom: `1px solid ${InnovacareTheme.palette.neutral[200]}` }}>
                <IMetricGrid>
                  {quickFilters
                    .filter(f => selectedFilters.includes(f.id))
                    .map((filter) => (
                      <div key={filter.id} className="relative">
                        <IMetricCard
                          title={filter.label}
                          value={filter.count}
                          icon={filter.icon}
                          color={filter.color}
                          active={activeFilter === filter.id}
                          onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedFilters(selectedFilters.filter(id => id !== filter.id));
                            if (activeFilter === filter.id) setActiveFilter(null);
                          }}
                          className="absolute -top-1 -right-1 rounded-full p-0.5 shadow-md hover:scale-110 transition-transform"
                          style={{
                            backgroundColor: InnovacareTheme.palette.error,
                            color: 'white',
                          }}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                </IMetricGrid>
              </div>
            )}

            {/* Empty State for Quick Filters */}
            {showQuickFilters && selectedFilters.length === 0 && (
              <div 
                className="px-4 py-3 text-center"
                style={{
                  backgroundColor: InnovacareTheme.palette.neutral[50],
                  borderBottom: `1px solid ${InnovacareTheme.palette.neutral[200]}`,
                }}
              >
                <p className="text-xs" style={{ color: InnovacareTheme.palette.neutral[500] }}>
                  No quick filters selected. Use the dropdown below to add filter cards.
                </p>
              </div>
            )}

            {/* Add Quick Filter Dropdown */}
            {showQuickFilters && (
              <div 
                className="px-2 py-2 flex items-center gap-2"
                style={{
                  backgroundColor: InnovacareTheme.colors.background,
                  borderBottom: `1px solid ${InnovacareTheme.palette.neutral[200]}`,
                }}
              >
                <Select 
                  value="" 
                  onValueChange={(value) => {
                    if (!selectedFilters.includes(value)) {
                      setSelectedFilters([...selectedFilters, value]);
                    }
                  }}
                >
                  <SelectTrigger className="h-8 w-52 text-xs">
                    <SelectValue placeholder="+ Add quick filter..." />
                  </SelectTrigger>
                  <SelectContent>
                    {quickFilters
                      .filter(f => !selectedFilters.includes(f.id))
                      .map(filter => (
                        <SelectItem key={filter.id} value={filter.id}>
                          {filter.label} ({filter.count})
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                
                {selectedFilters.length > 0 && (
                  <div style={{ color: InnovacareTheme.palette.error }}>
                    <IButton
                      icon={X}
                      size="sm"
                      variant="ghost"
                      onClick={() => {
                        setSelectedFilters([]);
                        setActiveFilter(null);
                      }}
                    >
                      Clear All
                    </IButton>
                  </div>
                )}
              </div>
            )}

            {/* Active Filters Display */}
            {appliedFilters && (
              <div className="px-2 pt-2">
                <Card className="bg-muted/30">
                  <div className="p-2">
                    <div className="text-xs">
                      <span className="font-semibold text-primary">Active Filters: </span>
                      {appliedFilters.status.length > 0 && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Status: {appliedFilters.status.join(", ")}</Badge>
                      )}
                      {appliedFilters.clientCity && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">City: {appliedFilters.clientCity}</Badge>
                      )}
                      {appliedFilters.service && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Service: {appliedFilters.service}</Badge>
                      )}
                      {appliedFilters.dateFrom && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">From: {appliedFilters.dateFrom}</Badge>
                      )}
                      {appliedFilters.dateTo && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">To: {appliedFilters.dateTo}</Badge>
                      )}
                      {appliedFilters.taskId && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Task ID: {appliedFilters.taskId}</Badge>
                      )}
                      {appliedFilters.client && appliedFilters.client !== "all" && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Client: {appliedFilters.client}</Badge>
                      )}
                      {appliedFilters.carer && appliedFilters.carer !== "all" && (
                        <Badge variant="secondary" className="text-[10px] mr-1 mb-1">Carer: {appliedFilters.carer}</Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Results Table */}
            <div className="flex-1 overflow-auto p-2">
              <Card className="h-full">
                <PlanboardTable entries={appliedFilters ? filteredEntries : mockEntries} />
              </Card>
            </div>

            {/* Status Bar */}
            <div className="p-2 border-t bg-background">
              <StatusBar statuses={statusCounts} />
            </div>
          </main>
        </>
      )}

      <div 
        className="py-2 px-4 text-center text-xs"
        style={{
          backgroundColor: colors.background,
          borderTop: `1px solid ${palette.neutral[200]}`,
          color: palette.neutral[500],
        }}
      >
        © 2025 Innovacare Healthcare Management. All rights reserved.
      </div>
    </div>
  );
}
