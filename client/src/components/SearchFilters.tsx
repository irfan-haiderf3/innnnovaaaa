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
import { Search, RotateCcw } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

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

interface SearchFiltersProps {
  onSearch: (filters: FilterValues) => void;
  onReset: () => void;
}

export default function SearchFilters({
  onSearch,
  onReset,
}: SearchFiltersProps) {
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
    <div className="flex flex-col gap-2 h-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 flex-shrink-0">
        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <div className="h-1 w-1 rounded-full bg-primary" />
            Status
          </Label>
          <div className="border-2 border-slate-200 rounded-lg p-1.5 h-[110px] overflow-y-auto bg-white shadow-sm hover:border-primary/30 transition-colors">
            {statuses.map((status) => (
              <div key={status} className="flex items-center space-x-2 py-0.5">
                <Checkbox
                  id={`status-${status}`}
                  checked={filters.status.includes(status)}
                  onCheckedChange={() => handleStatusToggle(status)}
                  data-testid={`checkbox-${status.toLowerCase().replace(/\s+/g, "-")}`}
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

        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <div className="h-1 w-1 rounded-full bg-primary" />
            Client City
          </Label>
          <div className="border-2 border-slate-200 rounded-lg p-1.5 h-[110px] overflow-y-auto bg-white shadow-sm hover:border-primary/30 transition-colors">
            {cities.map((city) => (
              <div
                key={city}
                className={`px-2.5 py-1 text-xs cursor-pointer rounded-md font-medium transition-all ${
                  filters.clientCity === city 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-slate-100 text-slate-700"
                }`}
                onClick={() => setFilters({ ...filters, clientCity: city })}
                data-testid={`city-${city.toLowerCase()}`}
              >
                {city}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <Label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
            <div className="h-1 w-1 rounded-full bg-primary" />
            Service
          </Label>
          <div className="border-2 border-slate-200 rounded-lg p-1.5 h-[110px] overflow-y-auto bg-white shadow-sm hover:border-primary/30 transition-colors">
            {services.map((service) => (
              <div
                key={service}
                className={`px-2.5 py-1 text-xs cursor-pointer rounded-md font-medium transition-all ${
                  filters.service === service 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "hover:bg-slate-100 text-slate-700"
                }`}
                onClick={() => setFilters({ ...filters, service: service })}
                data-testid={`service-${service.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-shrink-0">
        <div className="space-y-1">
          <Label htmlFor="client" className="text-xs font-bold text-slate-700">Client</Label>
          <Select value={filters.client} onValueChange={(value) => setFilters({ ...filters, client: value })}>
            <SelectTrigger id="client" className="h-8 text-xs" data-testid="select-client">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="carer" className="text-xs font-bold text-slate-700">Carer</Label>
          <Select value={filters.carer} onValueChange={(value) => setFilters({ ...filters, carer: value })}>
            <SelectTrigger id="carer" className="h-8 text-xs" data-testid="select-carer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="facility" className="text-xs font-bold text-slate-700">Facility</Label>
          <Select value={filters.facility} onValueChange={(value) => setFilters({ ...filters, facility: value })}>
            <SelectTrigger id="facility" className="h-8 text-xs" data-testid="select-facility">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="office" className="text-xs font-bold text-slate-700">Office</Label>
          <Select value={filters.office} onValueChange={(value) => setFilters({ ...filters, office: value })}>
            <SelectTrigger id="office" className="h-8 text-xs" data-testid="select-office">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-shrink-0">
        <div className="space-y-1">
          <Label htmlFor="date-from" className="text-xs font-bold text-slate-700">Date From</Label>
          <Input
            id="date-from"
            type="date"
            className="h-8 text-xs"
            value={filters.dateFrom}
            onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
            data-testid="input-date-from"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="date-to" className="text-xs font-bold text-slate-700">Date To</Label>
          <Input
            id="date-to"
            type="date"
            className="h-8 text-xs"
            value={filters.dateTo}
            onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
            data-testid="input-date-to"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="task-id" className="text-xs font-bold text-slate-700">Task ID</Label>
          <Input
            id="task-id"
            className="h-8 text-xs"
            value={filters.taskId}
            onChange={(e) => setFilters({ ...filters, taskId: e.target.value })}
            data-testid="input-task-id"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="group" className="text-xs font-bold text-slate-700">Group</Label>
          <Select value={filters.group} onValueChange={(value) => setFilters({ ...filters, group: value })}>
            <SelectTrigger id="group" className="h-8 text-xs" data-testid="select-group">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 flex-shrink-0">
        <div className="space-y-1">
          <Label htmlFor="client-coordinator" className="text-xs font-bold text-slate-700">Client Coordinator</Label>
          <Select value={filters.clientCoordinator} onValueChange={(value) => setFilters({ ...filters, clientCoordinator: value })}>
            <SelectTrigger id="client-coordinator" className="h-8 text-xs" data-testid="select-client-coordinator">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="carer-coordinator" className="text-xs font-bold text-slate-700">Carer Coordinator</Label>
          <Select value={filters.carerCoordinator} onValueChange={(value) => setFilters({ ...filters, carerCoordinator: value })}>
            <SelectTrigger id="carer-coordinator" className="h-8 text-xs" data-testid="select-carer-coordinator">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor="dhb-region" className="text-xs font-bold text-slate-700">DHB Region</Label>
          <Select value={filters.dhbRegion} onValueChange={(value) => setFilters({ ...filters, dhbRegion: value })}>
            <SelectTrigger id="dhb-region" className="h-8 text-xs" data-testid="select-dhb-region">
              <SelectValue placeholder="Ashburton, Banks Peninsula a..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ashburton">Ashburton, Banks Peninsula a...</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-1 flex-shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="search-taskid"
              checked={filters.searchBy === "taskId"}
              onCheckedChange={() => setFilters({ ...filters, searchBy: "taskId" })}
              data-testid="checkbox-search-taskid"
            />
            <label htmlFor="search-taskid" className="text-xs cursor-pointer">
              Task ID
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="search-dates"
              checked={filters.searchBy === "dates"}
              onCheckedChange={() => setFilters({ ...filters, searchBy: "dates" })}
              data-testid="checkbox-search-dates"
            />
            <label htmlFor="search-dates" className="text-xs cursor-pointer">
              Dates
            </label>
          </div>
        </div>

        <div className="flex gap-2 ml-auto">
          <Button 
            size="sm" 
            variant="outline" 
            onClick={handleReset} 
            data-testid="button-reset" 
            className="h-9 font-semibold shadow-sm hover:shadow-md transition-all hover:bg-slate-50"
          >
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset Filters
          </Button>
          <Button 
            size="sm" 
            onClick={handleSearch} 
            data-testid="button-search" 
            className="h-9 font-bold shadow-md hover:shadow-lg transition-all"
          >
            <Search className="mr-2 h-4 w-4" />
            Apply Search
          </Button>
        </div>
      </div>
    </div>
  );
}
