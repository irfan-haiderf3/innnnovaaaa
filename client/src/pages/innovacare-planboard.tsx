/**
 * Innovacare Planboard Page
 * Modern, consistent UI with 4-color design system
 */

import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  IHeader,
  IButton,
  IIconButton,
  IDataTable,
  InnovacareTheme,
} from "@/components/innovacare";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ChevronRight,
  Search,
  Table,
  RefreshCcw,
  Calendar,
  Check,
  Filter,
  X,
  Settings,
  Download,
  Clipboard,
  CalendarCheck,
} from "lucide-react";

const { colors, palette, spacing } = InnovacareTheme;

// Types
interface PlanboardEntry {
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

interface FilterValues {
  status: string[];
  clientCity: string;
  service: string;
  client: string;
  carer: string;
  dateFrom: string;
  dateTo: string;
  taskId: string;
  clientCoordinator: string;
  carerCoordinator: string;
}

interface StatusCount {
  label: string;
  count: number;
  color: string;
}

export default function InnovacarePlanboardPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("filters");
  const [filteredEntries, setFilteredEntries] = useState<PlanboardEntry[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<FilterValues | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [showStatusLegend, setShowStatusLegend] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [filtersCollapsed, setFiltersCollapsed] = useState(false);
  const [resultsCollapsed, setResultsCollapsed] = useState(false);

  // Form state for filters
  const [status, setStatus] = useState<string[]>([]);
  const [clientCity, setClientCity] = useState("");
  const [service, setService] = useState("");
  const [client, setClient] = useState("");
  const [carer, setCarer] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [taskId, setTaskId] = useState("");
  const [clientCoordinator, setClientCoordinator] = useState("");
  const [carerCoordinator, setCarerCoordinator] = useState("");

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
    { label: "Provisional Status", count: 0, color: "#EC4899" }, // Pink
    { label: "Unassigned", count: 1, color: "#2C5282" }, // Deep blue (changed from purple)
    { label: "Assigned", count: 3, color: "#10B981" }, // Green
    { label: "In Progress", count: 1, color: "#0EA5E9" }, // Cyan
    { label: "Delayed", count: 1, color: "#F59E0B" }, // Orange
    { label: "Completed", count: 1, color: "#10B981" }, // Green
    { label: "Cancelled", count: 1, color: "#EF4444" }, // Red
    { label: "Update Required", count: 0, color: "#F59E0B" }, // Orange
  ];

  const handleSearch = () => {
    const filters: FilterValues = {
      status,
      clientCity,
      service,
      client,
      carer,
      dateFrom,
      dateTo,
      taskId,
      clientCoordinator,
      carerCoordinator,
    };
    
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
    setCurrentPage(1); // Reset to first page
    
    toast({
      title: "Search Applied",
      description: `Found ${results.length} record(s) matching your filters.`,
    });
    setActiveTab("results");
  };

  const handleReset = () => {
    console.log("Resetting filters");
    setStatus([]);
    setClientCity("");
    setService("");
    setClient("");
    setCarer("");
    setDateFrom("");
    setDateTo("");
    setTaskId("");
    setClientCoordinator("");
    setCarerCoordinator("");
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

  // Collapse handlers with accordion behavior
  const toggleFiltersCollapse = () => {
    if (!filtersCollapsed) {
      // Collapsing filters, expand results
      setFiltersCollapsed(true);
      setResultsCollapsed(false);
      setActiveTab("results");
    } else {
      // Expanding filters
      setFiltersCollapsed(false);
      setActiveTab("filters");
    }
  };

  const toggleResultsCollapse = () => {
    if (!resultsCollapsed) {
      // Collapsing results, expand filters
      setResultsCollapsed(true);
      setFiltersCollapsed(false);
      setActiveTab("filters");
    } else {
      // Expanding results
      setResultsCollapsed(false);
      setActiveTab("results");
    }
  };

  // Table columns configuration
  const columns = [
    { key: "status", label: "Status", sortable: true },
    { key: "taskId", label: "Task ID", sortable: true },
    { key: "scheduleName", label: "Schedule", sortable: true },
    { key: "service", label: "Service", sortable: true },
    { key: "client", label: "Client", sortable: true },
    { key: "carer", label: "Carer", sortable: true },
    { key: "dateFrom", label: "Date From", sortable: true },
    { key: "dateTo", label: "Date To", sortable: true },
    { key: "startTime", label: "Start", sortable: true },
    { key: "endTime", label: "End", sortable: true },
    { key: "duration", label: "Duration", sortable: true },
    { key: "city", label: "City", sortable: true },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      <IHeader showNavigation={true} username="System" role="Administrator" />

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex overflow-hidden">
            {/* Main Content Area with Collapsible Sections */}
            <div className="flex-1 flex overflow-hidden">
              {/* Filters Section */}
              {!filtersCollapsed && (
                <div className={`flex flex-col overflow-hidden p-2 transition-all duration-300 ${resultsCollapsed ? 'flex-1' : 'w-1/2'}`}>
                  <Card className="h-full w-full flex flex-col" style={{ 
                    backgroundColor: colors.background,
                    borderColor: palette.neutral[200],
                    boxShadow: spacing.boxShadow.sm,
                  }}>
                    <CardHeader className="pb-2 pt-2 px-4 flex-shrink-0 border-b" style={{ borderColor: palette.neutral[200] }}>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold" style={{ color: colors.primary }}>
                          Planboard Search
                        </CardTitle>
                        <button
                          onClick={toggleFiltersCollapse}
                          className="p-1 hover:bg-primary/10 rounded transition-colors"
                          title="Collapse Section"
                        >
                          <ChevronRight className="h-4 w-4" style={{ color: colors.primary }} />
                        </button>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 px-4 flex-1 flex flex-col min-h-0 overflow-auto py-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Status Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Status
                          </Label>
                          <Select value={status[0] || "all"} onValueChange={(value) => setStatus(value === 'all' ? [] : [value])}>
                            <SelectTrigger className="h-8 text-xs" style={{ borderColor: palette.neutral[300] }}>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All</SelectItem>
                              <SelectItem value="Assigned">Assigned</SelectItem>
                              <SelectItem value="Unassigned">Unassigned</SelectItem>
                              <SelectItem value="In Progress">In Progress</SelectItem>
                              <SelectItem value="Completed">Completed</SelectItem>
                              <SelectItem value="Delayed">Delayed</SelectItem>
                              <SelectItem value="Cancelled">Cancelled</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* City Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Client City
                          </Label>
                          <Select value={clientCity || 'all'} onValueChange={(v) => setClientCity(v === 'all' ? '' : v)}>
                            <SelectTrigger className="h-8 text-xs" style={{ borderColor: palette.neutral[300] }}>
                              <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All</SelectItem>
                              <SelectItem value="Albany">Albany</SelectItem>
                              <SelectItem value="Akina">Akina</SelectItem>
                              <SelectItem value="Alexandria">Alexandria</SelectItem>
                              <SelectItem value="Amberley">Amberley</SelectItem>
                              <SelectItem value="Aongatete">Aongatete</SelectItem>
                              <SelectItem value="Apiti">Apiti</SelectItem>
                              <SelectItem value="Aranga">Aranga</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Service Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Service
                          </Label>
                          <Select value={service || 'all'} onValueChange={(v) => setService(v === 'all' ? '' : v)}>
                            <SelectTrigger className="h-8 text-xs" style={{ borderColor: palette.neutral[300] }}>
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="all">All</SelectItem>
                              <SelectItem value="ACC Access-HC941">ACC Access-HC941</SelectItem>
                              <SelectItem value="ACC Phoenix-RTI">ACC Phoenix-RTI</SelectItem>
                              <SelectItem value="Healthcare NZ-OT Schedule">Healthcare NZ-OT Schedule</SelectItem>
                              <SelectItem value="Geneva-ACC Nursing">Geneva-ACC Nursing</SelectItem>
                              <SelectItem value="IF - Geneva">IF - Geneva</SelectItem>
                              <SelectItem value="ACC Phoenix-HC941">ACC Phoenix-HC941</SelectItem>
                              <SelectItem value="IF Phoenix-Nursing-HC941">IF Phoenix-Nursing-HC941</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Client Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Client
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            placeholder="Search clients" 
                            value={client}
                            onChange={(e) => setClient(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>

                        {/* Carer Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Carer
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            placeholder="Search carers" 
                            value={carer}
                            onChange={(e) => setCarer(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>

                        {/* Date From Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Date From
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            type="date"
                            value={dateFrom}
                            onChange={(e) => setDateFrom(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>

                        {/* Date To Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Date To
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            type="date"
                            value={dateTo}
                            onChange={(e) => setDateTo(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>

                        {/* Task ID Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Task ID
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            placeholder="Task ID" 
                            value={taskId}
                            onChange={(e) => setTaskId(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>

                        {/* Client Coordinator Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Client Coordinator
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            placeholder="Client coordinator" 
                            value={clientCoordinator}
                            onChange={(e) => setClientCoordinator(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>

                        {/* Carer Coordinator Filter */}
                        <div className="space-y-2">
                          <Label className="text-xs font-semibold" style={{ color: palette.neutral[700] }}>
                            Carer Coordinator
                          </Label>
                          <Input 
                            className="h-8 text-xs"
                            placeholder="Carer coordinator" 
                            value={carerCoordinator}
                            onChange={(e) => setCarerCoordinator(e.target.value)}
                            style={{ borderColor: palette.neutral[300] }}
                          />
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-end gap-2">
                        <IButton 
                          variant="outline" 
                          icon={RefreshCcw} 
                          size="sm" 
                          onClick={handleReset}
                        >
                          Reset
                        </IButton>
                        <IButton 
                          variant="primary" 
                          icon={Search} 
                          size="sm" 
                          onClick={handleSearch}
                        >
                          Search
                        </IButton>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Collapsed Filters Label */}
              {filtersCollapsed && (
                <div className="w-10 border-r flex flex-col items-center py-2" style={{ backgroundColor: palette.neutral[100] }}>
                  <button
                    onClick={toggleFiltersCollapse}
                    className="mb-2 p-1 hover:bg-primary/10 rounded"
                    title="Expand Search & Filters"
                  >
                    <ChevronRight className="h-4 w-4" style={{ color: colors.primary }} />
                  </button>
                  <div 
                    className="text-[10px] font-semibold text-center"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      color: colors.primary,
                      letterSpacing: '0.5px'
                    }}
                  >
                    Search & Filters
                  </div>
                </div>
              )}

              {/* Results Section */}
              {!resultsCollapsed && (
                <div className={`flex flex-col overflow-hidden p-2 gap-2 transition-all duration-300 ${filtersCollapsed ? 'flex-1' : 'w-1/2'}`}>
                  {/* Results Header with Collapse Button */}
                  <div className="flex items-center justify-between px-2 py-1.5 border-b" style={{ 
                    backgroundColor: palette.neutral[100],
                    borderColor: palette.neutral[200]
                  }}>
                    <h3 className="text-sm font-semibold" style={{ color: colors.primary }}>
                      Planboard Results
                    </h3>
                    <button
                      onClick={toggleResultsCollapse}
                      className="p-1 hover:bg-primary/10 rounded transition-colors"
                      title="Collapse Section"
                    >
                      <ChevronRight className="h-4 w-4" style={{ color: colors.primary }} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <IButton 
                        variant="outline" 
                        size="sm" 
                        icon={Calendar}
                        onClick={handleYesterday}
                      >
                        Yesterday
                      </IButton>
                      <IButton 
                        variant="outline" 
                        size="sm" 
                        icon={CalendarCheck}
                        onClick={handleCompleteAll}
                      >
                        Complete All
                      </IButton>
                      
                      {/* Status Legend Toggle */}
                      <div className="relative">
                        <IButton
                          icon={Filter}
                          size="sm"
                          variant={showStatusLegend ? "primary" : "outline"}
                          onClick={() => setShowStatusLegend(!showStatusLegend)}
                        >
                          {showStatusLegend ? 'Hide Status' : 'Show Status'}
                        </IButton>
                        {selectedStatuses.length > 0 && (
                          <span 
                            className="absolute -top-1 -right-1 rounded-full text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center"
                            style={{
                              backgroundColor: colors.primary,
                              color: 'white',
                            }}
                          >
                            {selectedStatuses.length}
                          </span>
                        )}
                      </div>
                      
                      {showStatusLegend && (
                        <Select
                          value=""
                          onValueChange={(value) => {
                            if (!selectedStatuses.includes(value)) {
                              setSelectedStatuses([...selectedStatuses, value]);
                            }
                          }}
                        >
                          <SelectTrigger className="h-8 w-48 text-xs">
                            <SelectValue placeholder="+ Add status filter..." />
                          </SelectTrigger>
                          <SelectContent>
                            {statusCounts
                              .filter(s => !selectedStatuses.includes(s.label))
                              .map(status => (
                                <SelectItem key={status.label} value={status.label}>
                                  {status.label} ({status.count})
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      )}
                      
                      {selectedStatuses.length > 0 && (
                        <IButton
                          icon={X}
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedStatuses([])}
                        >
                          Clear Status
                        </IButton>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <IIconButton icon={Download} size="sm" variant="ghost" tooltip="Export" />
                      <IIconButton icon={Settings} size="sm" variant="ghost" tooltip="Settings" />
                    </div>
                  </div>
                  
                  {/* Selected Status Filters Display */}
                  {showStatusLegend && selectedStatuses.length > 0 && (
                    <div className="flex items-center gap-2 p-2 overflow-x-auto" style={{
                      backgroundColor: palette.neutral[50],
                      borderRadius: '6px',
                      border: `1px solid ${palette.neutral[200]}`,
                    }}>
                      {selectedStatuses.map(statusLabel => {
                        const status = statusCounts.find(s => s.label === statusLabel);
                        return status ? (
                          <div
                            key={status.label}
                            className="relative flex items-center gap-1 px-2 py-1 rounded text-xs whitespace-nowrap"
                            style={{
                              backgroundColor: status.color + '20',
                              color: status.color,
                              border: `1px solid ${status.color}`,
                            }}
                          >
                            <span className="font-semibold">{status.count}</span>
                            <span>{status.label}</span>
                            <button
                              onClick={() => setSelectedStatuses(selectedStatuses.filter(s => s !== statusLabel))}
                              className="ml-1 hover:scale-110 transition-transform"
                            >
                              <X className="h-3 w-3" />
                            </button>
                          </div>
                        ) : null;
                      })}
                    </div>
                  )}
                  
                  {appliedFilters && (
                    <Card className="flex-shrink-0" style={{ 
                      backgroundColor: colors.background,
                      borderColor: palette.neutral[200],
                    }}>
                      <CardContent className="p-2">
                        <div className="flex items-center justify-between">
                          <div className="text-xs" style={{ color: palette.neutral[600] }}>
                            <span className="font-semibold" style={{ color: colors.text }}>Active Filters: </span>
                            {appliedFilters.status.length > 0 && (
                              <span className="mr-2">Status: {appliedFilters.status.join(", ")}</span>
                            )}
                            {appliedFilters.clientCity && (
                              <span className="mr-2">City: {appliedFilters.clientCity}</span>
                            )}
                            {appliedFilters.service && (
                              <span className="mr-2">Service: {appliedFilters.service}</span>
                            )}
                            {appliedFilters.dateFrom && (
                              <span className="mr-2">From: {appliedFilters.dateFrom}</span>
                            )}
                            {appliedFilters.dateTo && (
                              <span className="mr-2">To: {appliedFilters.dateTo}</span>
                            )}
                            {appliedFilters.taskId && (
                              <span className="mr-2">Task ID: {appliedFilters.taskId}</span>
                            )}
                          </div>
                          <IIconButton 
                            icon={X} 
                            size="sm" 
                            variant="ghost" 
                            tooltip="Clear Filters" 
                            onClick={handleReset} 
                          />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex-1">
                    <IDataTable 
                      data={appliedFilters ? filteredEntries : mockEntries} 
                      columns={columns}
                      pageSize={pageSize}
                      showPagination={true}
                    />
                  </div>

                  {/* Status Legend - Always visible at bottom */}
                  <div className="flex items-center justify-start gap-1 p-2 overflow-x-auto" style={{ 
                    backgroundColor: colors.background,
                    borderTop: `1px solid ${palette.neutral[200]}`,
                  }}>
                    {statusCounts.map((status, index) => (
                      <div 
                        key={status.label}
                        className="flex items-center gap-1 px-2 py-1 rounded text-xs whitespace-nowrap cursor-help"
                        style={{
                          backgroundColor: status.color + '20',
                          color: status.color,
                          border: `1px solid ${status.color}`,
                        }}
                        title={`${status.label}: ${status.count} tasks`}
                      >
                        <span className="font-semibold">{status.count}</span>
                        <span>{status.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Collapsed Results Label */}
              {resultsCollapsed && (
                <div className="w-10 border-l flex flex-col items-center py-2" style={{ backgroundColor: palette.neutral[100] }}>
                  <button
                    onClick={toggleResultsCollapse}
                    className="mb-2 p-1 hover:bg-primary/10 rounded"
                    title="Expand Planboard Results"
                  >
                    <ChevronRight className="h-4 w-4" style={{ color: colors.primary }} />
                  </button>
                  <div 
                    className="text-[10px] font-semibold text-center"
                    style={{ 
                      writingMode: 'vertical-rl',
                      transform: 'rotate(180deg)',
                      color: colors.primary,
                      letterSpacing: '0.5px'
                    }}
                  >
                    Planboard Results
                  </div>
                </div>
              )}
            </div>

            {/* Right Side Collapse Controls */}
            <div className="h-full w-auto flex flex-col gap-1 rounded-none border-l bg-muted/30 p-2" style={{
              borderColor: palette.neutral[200],
              backgroundColor: palette.neutral[50],
            }}>
              <button 
                onClick={toggleFiltersCollapse}
                className="writing-mode-vertical-rl rotate-180 h-auto py-4 px-2 text-xs hover:bg-primary/10 rounded transition-colors"
                style={{
                  backgroundColor: !filtersCollapsed ? colors.primary : 'transparent',
                  color: !filtersCollapsed ? 'white' : palette.neutral[700],
                }}
                title={filtersCollapsed ? "Expand Search & Filters" : "Collapse Search & Filters"}
              >
                <Search className="h-3.5 w-3.5 mb-2" />
                Search & Filters
              </button>
              <button 
                onClick={toggleResultsCollapse}
                className="writing-mode-vertical-rl rotate-180 h-auto py-4 px-2 text-xs hover:bg-primary/10 rounded transition-colors"
                style={{
                  backgroundColor: !resultsCollapsed ? colors.primary : 'transparent',
                  color: !resultsCollapsed ? 'white' : palette.neutral[700],
                }}
                title={resultsCollapsed ? "Expand Planboard Results" : "Collapse Planboard Results"}
              >
                <Table className="h-3.5 w-3.5 mb-2" />
                Planboard Results
              </button>
            </div>
          </div>
        </main>
      </div>

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
