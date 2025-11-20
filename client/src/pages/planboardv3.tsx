import { useState } from "react";
import { IHeader, IButton, IIconButton } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";
import UltraCompactFilters, { type FilterValues } from "@/components/UltraCompactFilters";
import PlanboardTable, { type PlanboardEntry } from "@/components/PlanboardTable";
import StatusBar, { type StatusCount } from "@/components/StatusBar";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, FileCheck, Download, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PlanboardV3Page() {
  const { toast } = useToast();
  const [filteredEntries, setFilteredEntries] = useState<PlanboardEntry[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<FilterValues | null>(null);


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
    
    let results = [...mockEntries];
    
    if (filters.status.length > 0) {
      results = results.filter(entry => filters.status.includes(entry.status));
    }
    
    if (filters.clientCity) {
      results = results.filter(entry => entry.city === filters.clientCity);
    }
    
    if (filters.service) {
      results = results.filter(entry => entry.service === filters.service);
    }
    
    if (filters.client && filters.client !== "all") {
      results = results.filter(entry => 
        entry.client.toLowerCase().includes(filters.client.toLowerCase())
      );
    }
    
    if (filters.carer && filters.carer !== "all") {
      results = results.filter(entry => 
        entry.carer.toLowerCase().includes(filters.carer.toLowerCase())
      );
    }
    
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
    
    if (filters.taskId) {
      results = results.filter(entry => 
        entry.taskId.toLowerCase().includes(filters.taskId.toLowerCase())
      );
    }
    
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

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Exporting planboard data to Excel...",
    });
  };

  const { colors, palette } = InnovacareTheme;

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      <IHeader showNavigation={true} username="System" role="Administrator" />

      {/* Ultra Compact Filters - No Padding */}
      <UltraCompactFilters onSearch={handleSearch} onReset={handleReset} />

      {/* Action Bar - Minimal Height */}
      <div className="flex items-center justify-between px-2 py-1 border-b bg-white">
        <div className="flex items-center gap-2 flex-1 overflow-x-auto">
          <Badge variant="outline" className="text-[10px] h-5 px-2 flex-shrink-0">
            <TrendingUp className="h-2.5 w-2.5 mr-1" />
            Records: <span className="font-bold ml-1">{appliedFilters ? filteredEntries.length : mockEntries.length}</span>
          </Badge>
          
          {appliedFilters && (
            <div className="flex flex-wrap gap-1">
              {appliedFilters.status.length > 0 && appliedFilters.status.map((s) => (
                <Badge key={s} variant="secondary" className="text-[9px] h-5 px-1.5">
                  Status: {s}
                </Badge>
              ))}
              {appliedFilters.clientCity && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  City: {appliedFilters.clientCity}
                </Badge>
              )}
              {appliedFilters.service && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  Service: {appliedFilters.service}
                </Badge>
              )}
              {appliedFilters.client && appliedFilters.client !== "all" && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  Client: {appliedFilters.client}
                </Badge>
              )}
              {appliedFilters.carer && appliedFilters.carer !== "all" && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  Carer: {appliedFilters.carer}
                </Badge>
              )}
              {appliedFilters.dateFrom && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  From: {appliedFilters.dateFrom}
                </Badge>
              )}
              {appliedFilters.dateTo && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  To: {appliedFilters.dateTo}
                </Badge>
              )}
              {appliedFilters.taskId && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  Task ID: {appliedFilters.taskId}
                </Badge>
              )}
              {appliedFilters.clientCoordinator && appliedFilters.clientCoordinator !== "all" && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  Client Coord: {appliedFilters.clientCoordinator}
                </Badge>
              )}
              {appliedFilters.carerCoordinator && appliedFilters.carerCoordinator !== "all" && (
                <Badge variant="secondary" className="text-[9px] h-5 px-1.5">
                  Carer Coord: {appliedFilters.carerCoordinator}
                </Badge>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-1 items-center flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleYesterday}
            className="h-6 px-2 text-[10px]"
          >
            <Calendar className="h-3 w-3 mr-1" />
            Yesterday
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExport}
            className="h-6 px-2 text-[10px]"
          >
            <Download className="h-3 w-3 mr-1" />
            Export
          </Button>
          <Button
            size="sm"
            onClick={handleCompleteAll}
            className="h-6 px-2 text-[10px]"
          >
            <FileCheck className="h-3 w-3 mr-1" />
            Complete All
          </Button>
        </div>
      </div>

      {/* Results Table - Maximum Space */}
      <div className="flex-1 overflow-auto p-1">
        <Card className="h-full border-slate-200 overflow-hidden">
          <PlanboardTable entries={appliedFilters ? filteredEntries : mockEntries} />
        </Card>
      </div>

      {/* Status Bar - Minimal */}
      <div className="border-t bg-white px-2 py-1 flex-shrink-0">
        <StatusBar statuses={statusCounts} />
      </div>

      {/* Footer */}
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
