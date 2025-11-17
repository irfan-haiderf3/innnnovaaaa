import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, RotateCcw, ChevronDown, ChevronUp } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";

export interface FilterValues {
  status: string[];
  clientCity: string;
  service: string;
  client: string;
  carer: string;
  facility: string;
  dateFrom: string;
  dateTo: string;
  taskId: string;
  clientCoordinator: string;
  carerCoordinator: string;
  office: string;
  group: string;
  dhbRegion: string;
  searchBy: "taskId" | "dates";
}

interface CompactSearchFiltersProps {
  onSearch: (filters: FilterValues) => void;
  onReset: () => void;
}

export default function CompactSearchFilters({
  onSearch,
  onReset,
}: CompactSearchFiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    status: [],
    clientCity: "",
    service: "",
    client: "",
    carer: "",
    facility: "",
    dateFrom: "",
    dateTo: "",
    taskId: "",
    clientCoordinator: "",
    carerCoordinator: "",
    office: "All",
    group: "All",
    dhbRegion: "",
    searchBy: "dates",
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const statuses = [
    "Assigned",
    "Cancelled",
    "Completed",
    "Delayed",
    "In Progress",
    "Partial Unconfirmed",
    "Received",
    "Unassigned",
    "Update Required",
  ];

  const cities = [
    "Aihuru",
    "Akigawa",
    "Akina",
    "Albany",
    "Albert Town",
    "Alexandria",
    "Amberley",
    "Aongatete",
    "Apiti",
    "Aranga",
  ];

  const services = [
    "ACC Access-HC941",
    "ACC Access-RTI",
    "ACC Nursing-HC941",
    "ACC Phoenix-HC941",
    "ACC Phoenix-RTI",
    "Geneva-ACC Nursing",
    "Healthcare NZ-OT Schedule",
    "IF - Geneva",
    "IF Phoenix-Nursing-HC941",
    "IF-Manawatu-YP-HCNZ",
  ];

  const handleStatusToggle = (status: string) => {
    setFilters({
      ...filters,
      status: filters.status.includes(status)
        ? filters.status.filter((s) => s !== status)
        : [...filters.status, status],
    });
  };

  const handleSearch = () => {
    console.log("Searching with filters:", filters);
    onSearch(filters);
  };

  const handleReset = () => {
    setFilters({
      status: [],
      clientCity: "",
      service: "",
      client: "",
      carer: "",
      facility: "",
      dateFrom: "",
      dateTo: "",
      taskId: "",
      clientCoordinator: "",
      carerCoordinator: "",
      office: "All",
      group: "All",
      dhbRegion: "",
      searchBy: "dates",
    });
    onReset();
  };

  return (
    <div className="flex flex-col gap-3">
      {/* Basic Filters - Horizontal Layout */}
      <Card className="p-3 shadow-sm border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Status Filter */}
          <div className="space-y-1.5">
            <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              Status
            </Label>
            <div className="border-2 border-slate-200 rounded-lg p-2 max-h-[140px] overflow-y-auto bg-white shadow-sm hover:border-primary/30 transition-colors">
              {statuses.map((status) => (
                <div key={status} className="flex items-center space-x-2 py-0.5">
                  <Checkbox
                    id={`status-${status}`}
                    checked={filters.status.includes(status)}
                    onCheckedChange={() => handleStatusToggle(status)}
                  />
                  <label
                    htmlFor={`status-${status}`}
                    className="text-xs cursor-pointer flex-1"
                  >
                    {status}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Client Filter */}
          <div className="space-y-1.5">
            <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              Client
            </Label>
            <Select value={filters.client} onValueChange={(value) => setFilters({ ...filters, client: value })}>
              <SelectTrigger className="h-9 text-xs">
                <SelectValue placeholder="All Clients" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date From Filter */}
          <div className="space-y-1.5">
            <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              Date From
            </Label>
            <Input
              type="date"
              className="h-9 text-xs"
              value={filters.dateFrom}
              onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
            />
          </div>

          {/* Date To Filter */}
          <div className="space-y-1.5">
            <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <div className="h-1 w-1 rounded-full bg-primary" />
              Date To
            </Label>
            <Input
              type="date"
              className="h-9 text-xs"
              value={filters.dateTo}
              onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="text-xs font-semibold text-primary hover:bg-primary/10"
          >
            {showAdvanced ? <ChevronUp className="mr-1.5 h-4 w-4" /> : <ChevronDown className="mr-1.5 h-4 w-4" />}
            Advanced Search Options
          </Button>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handleReset}
              className="h-9 font-semibold shadow-sm hover:shadow-md transition-all"
            >
              <RotateCcw className="mr-1.5 h-4 w-4" />
              Reset
            </Button>
            <Button
              size="sm"
              onClick={handleSearch}
              className="h-9 font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Search className="mr-1.5 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </Card>

      {/* Advanced Filters - Expandable Section */}
      {showAdvanced && (
        <Card className="p-3 shadow-sm border-slate-200 bg-slate-50/50">
          <div className="space-y-3">
            <div className="flex items-center gap-2 pb-2 border-b">
              <h3 className="text-sm font-bold text-slate-700">Advanced Filter Options</h3>
            </div>

            {/* Row 1: Service, City, Task ID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700">Service</Label>
                <div className="border-2 border-slate-200 rounded-lg p-2 max-h-[120px] overflow-y-auto bg-white shadow-sm">
                  {services.map((service) => (
                    <div
                      key={service}
                      className={`px-2 py-1 text-xs cursor-pointer rounded-md font-medium transition-all ${
                        filters.service === service
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                      onClick={() => setFilters({ ...filters, service: service })}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-bold text-slate-700">Client City</Label>
                <div className="border-2 border-slate-200 rounded-lg p-2 max-h-[120px] overflow-y-auto bg-white shadow-sm">
                  {cities.map((city) => (
                    <div
                      key={city}
                      className={`px-2 py-1 text-xs cursor-pointer rounded-md font-medium transition-all ${
                        filters.clientCity === city
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                      onClick={() => setFilters({ ...filters, clientCity: city })}
                    >
                      {city}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="task-id" className="text-xs font-bold text-slate-700">Task ID</Label>
                <Input
                  id="task-id"
                  className="h-9 text-xs"
                  placeholder="Enter Task ID"
                  value={filters.taskId}
                  onChange={(e) => setFilters({ ...filters, taskId: e.target.value })}
                />
              </div>
            </div>

            {/* Row 2: Carer, Facility, Office */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="carer" className="text-xs font-bold text-slate-700">Carer</Label>
                <Select value={filters.carer} onValueChange={(value) => setFilters({ ...filters, carer: value })}>
                  <SelectTrigger id="carer" className="h-9 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="facility" className="text-xs font-bold text-slate-700">Facility</Label>
                <Select value={filters.facility} onValueChange={(value) => setFilters({ ...filters, facility: value })}>
                  <SelectTrigger id="facility" className="h-9 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="office" className="text-xs font-bold text-slate-700">Office</Label>
                <Select value={filters.office} onValueChange={(value) => setFilters({ ...filters, office: value })}>
                  <SelectTrigger id="office" className="h-9 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3: Coordinators and Group */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="client-coordinator" className="text-xs font-bold text-slate-700">Client Coordinator</Label>
                <Select value={filters.clientCoordinator} onValueChange={(value) => setFilters({ ...filters, clientCoordinator: value })}>
                  <SelectTrigger id="client-coordinator" className="h-9 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="carer-coordinator" className="text-xs font-bold text-slate-700">Carer Coordinator</Label>
                <Select value={filters.carerCoordinator} onValueChange={(value) => setFilters({ ...filters, carerCoordinator: value })}>
                  <SelectTrigger id="carer-coordinator" className="h-9 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="group" className="text-xs font-bold text-slate-700">Group</Label>
                <Select value={filters.group} onValueChange={(value) => setFilters({ ...filters, group: value })}>
                  <SelectTrigger id="group" className="h-9 text-xs">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 4: DHB Region and Search Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="dhb-region" className="text-xs font-bold text-slate-700">DHB Region</Label>
                <Select value={filters.dhbRegion} onValueChange={(value) => setFilters({ ...filters, dhbRegion: value })}>
                  <SelectTrigger id="dhb-region" className="h-9 text-xs">
                    <SelectValue placeholder="Select Region..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ashburton">Ashburton, Banks Peninsula a...</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5 md:col-span-2">
                <Label className="text-xs font-bold text-slate-700">Search By</Label>
                <div className="flex items-center gap-6 h-9">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="search-taskid"
                      checked={filters.searchBy === "taskId"}
                      onCheckedChange={() => setFilters({ ...filters, searchBy: "taskId" })}
                    />
                    <label htmlFor="search-taskid" className="text-xs cursor-pointer font-medium">
                      Task ID
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="search-dates"
                      checked={filters.searchBy === "dates"}
                      onCheckedChange={() => setFilters({ ...filters, searchBy: "dates" })}
                    />
                    <label htmlFor="search-dates" className="text-xs cursor-pointer font-medium">
                      Dates
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
