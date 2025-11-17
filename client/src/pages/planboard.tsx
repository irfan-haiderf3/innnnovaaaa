import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchFilters, { type FilterValues } from "@/components/SearchFilters";
import PlanboardTable, { type PlanboardEntry } from "@/components/PlanboardTable";
import ActionBar from "@/components/ActionBar";
import StatusBar, { type StatusCount } from "@/components/StatusBar";
import { ThemeSwitcherPanel } from "@/components/ThemeSwitcherPanel";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronRight, Search, Table } from "lucide-react";

export default function PlanboardPage() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("filters");
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
    setActiveTab("results");
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

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header showNavigation={true} username="System" role="Super Admin" />

      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 flex overflow-hidden">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab} 
              className="flex-1 flex overflow-hidden"
              orientation="vertical"
            >
              <div className="flex-1 flex flex-col overflow-hidden">
                <TabsContent value="filters" className="flex-1 mt-0 flex p-2">
                  <Card className="h-full w-full flex flex-col">
                    <CardHeader className="pb-2 pt-2 px-3 flex-shrink-0">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-semibold">Search Planboard</CardTitle>
                        <ThemeSwitcherPanel />
                      </div>
                    </CardHeader>
                    <CardContent className="pb-2 px-3 flex-1 flex flex-col min-h-0">
                      <SearchFilters onSearch={handleSearch} onReset={handleReset} />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="results" className="flex-1 mt-0 flex flex-col p-2 gap-2">
                  <div className="flex items-center justify-between gap-2">
                    <ActionBar
                      totalRecords={appliedFilters ? filteredEntries.length : mockEntries.length}
                      onYesterday={handleYesterday}
                      onCompleteAll={handleCompleteAll}
                    />
                    <ThemeSwitcherPanel />
                  </div>
                  
                  {appliedFilters && (
                    <Card className="flex-shrink-0">
                      <CardContent className="p-2">
                        <div className="text-xs">
                          <span className="font-semibold">Active Filters: </span>
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
                      </CardContent>
                    </Card>
                  )}

                  <div className="flex-1 min-h-0">
                    <PlanboardTable entries={appliedFilters ? filteredEntries : mockEntries} />
                  </div>

                  <StatusBar statuses={statusCounts} />
                </TabsContent>
              </div>

              <TabsList className="h-full w-auto flex-col gap-1 rounded-none border-l bg-muted/30 p-2">
                <TabsTrigger 
                  value="filters" 
                  className="writing-mode-vertical-rl rotate-180 h-auto py-4 px-2 text-xs data-[state=active]:bg-background"
                  data-testid="tab-filters"
                >
                  <Search className="h-3.5 w-3.5 mb-2" />
                  Search & Filters
                </TabsTrigger>
                <TabsTrigger 
                  value="results" 
                  className="writing-mode-vertical-rl rotate-180 h-auto py-4 px-2 text-xs data-[state=active]:bg-background"
                  data-testid="tab-results"
                >
                  <Table className="h-3.5 w-3.5 mb-2" />
                  Planboard Results
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
