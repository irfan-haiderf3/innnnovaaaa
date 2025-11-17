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

interface UltraCompactFiltersProps {
  onSearch: (filters: FilterValues) => void;
  onReset: () => void;
}

export default function UltraCompactFilters({
  onSearch,
  onReset,
}: UltraCompactFiltersProps) {
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
    "Aihuru", "Akigawa", "Akina", "Albany", "Albert Town",
    "Alexandria", "Amberley", "Aongatete", "Apiti", "Aranga",
  ];

  const services = [
    "ACC Access-HC941", "ACC Access-RTI", "ACC Nursing-HC941",
    "ACC Phoenix-HC941", "ACC Phoenix-RTI", "Geneva-ACC Nursing",
    "Healthcare NZ-OT Schedule", "IF - Geneva", "IF Phoenix-Nursing-HC941",
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
    <div className="bg-white border-b shadow-sm">
      {/* Primary Filters - Ultra Compact Single Row */}
      <div className="px-2 py-1.5 border-b bg-slate-50/50">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
          {/* Date From */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Date From</Label>
            <Input
              type="date"
              className="h-7 text-xs px-2"
              value={filters.dateFrom}
              onChange={(e) => setFilters({ ...filters, dateFrom: e.target.value })}
            />
          </div>

          {/* Date To */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Date To</Label>
            <Input
              type="date"
              className="h-7 text-xs px-2"
              value={filters.dateTo}
              onChange={(e) => setFilters({ ...filters, dateTo: e.target.value })}
            />
          </div>

          {/* Office */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Office</Label>
            <Select value={filters.office} onValueChange={(value) => setFilters({ ...filters, office: value })}>
              <SelectTrigger className="h-7 text-xs px-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Group */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Group</Label>
            <Select value={filters.group} onValueChange={(value) => setFilters({ ...filters, group: value })}>
              <SelectTrigger className="h-7 text-xs px-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Client */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Client</Label>
            <Select value={filters.client} onValueChange={(value) => setFilters({ ...filters, client: value })}>
              <SelectTrigger className="h-7 text-xs px-2">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Status (Compact) */}
          <div className="space-y-0.5 md:col-span-2">
            <Label className="text-[11px] font-semibold text-slate-600">
              Status ({filters.status.length} selected)
            </Label>
            <div className="h-7 border rounded-md px-2 py-1 bg-white text-xs overflow-x-auto whitespace-nowrap">
              {filters.status.length > 0 ? filters.status.join(", ") : "All Statuses"}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1 items-end">
            <Button size="sm" variant="outline" onClick={handleReset} className="h-7 px-2 text-xs">
              <RotateCcw className="h-3 w-3" />
            </Button>
            <Button size="sm" onClick={handleSearch} className="h-7 px-3 text-xs font-semibold">
              <Search className="h-3 w-3 mr-1" />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Advanced Toggle Button */}
      <div className="px-2 py-1 bg-slate-50/30 border-b">
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="h-6 text-xs font-medium text-primary hover:bg-primary/5 px-2"
        >
          {showAdvanced ? (
            <><ChevronUp className="h-3 w-3 mr-1" /> Hide Advanced</>
          ) : (
            <><ChevronDown className="h-3 w-3 mr-1" /> Show Advanced</>
          )}
        </Button>
      </div>

      {/* Advanced Filters - Expandable */}
      {showAdvanced && (
        <div className="px-2 py-2 bg-slate-50/30 border-b">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {/* Status Checkboxes */}
            <div className="space-y-1">
              <Label className="text-[11px] font-semibold text-slate-600">Status (Select Multiple)</Label>
              <div className="border rounded-md p-1.5 bg-white max-h-[100px] overflow-y-auto">
                {statuses.map((status) => (
                  <div key={status} className="flex items-center space-x-1.5 py-0.5">
                    <Checkbox
                      id={`status-${status}`}
                      checked={filters.status.includes(status)}
                      onCheckedChange={() => handleStatusToggle(status)}
                      className="h-3 w-3"
                    />
                    <label htmlFor={`status-${status}`} className="text-xs cursor-pointer">
                      {status}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Service */}
            <div className="space-y-1">
              <Label className="text-[11px] font-semibold text-slate-600">Service</Label>
              <div className="border rounded-md p-1.5 bg-white max-h-[100px] overflow-y-auto">
                {services.map((service) => (
                  <div
                    key={service}
                    className={`px-1.5 py-0.5 text-xs cursor-pointer rounded transition-colors ${
                      filters.service === service
                        ? "bg-primary text-white font-medium"
                        : "hover:bg-slate-100"
                    }`}
                    onClick={() => setFilters({ ...filters, service })}
                  >
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Client City */}
            <div className="space-y-1">
              <Label className="text-[11px] font-semibold text-slate-600">Client City</Label>
              <div className="border rounded-md p-1.5 bg-white max-h-[100px] overflow-y-auto">
                {cities.map((city) => (
                  <div
                    key={city}
                    className={`px-1.5 py-0.5 text-xs cursor-pointer rounded transition-colors ${
                      filters.clientCity === city
                        ? "bg-primary text-white font-medium"
                        : "hover:bg-slate-100"
                    }`}
                    onClick={() => setFilters({ ...filters, clientCity: city })}
                  >
                    {city}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Filters Column */}
            <div className="space-y-2">
              {/* Task ID */}
              <div className="space-y-0.5">
                <Label htmlFor="task-id" className="text-[11px] font-semibold text-slate-600">Task ID</Label>
                <Input
                  id="task-id"
                  className="h-7 text-xs px-2"
                  placeholder="Enter Task ID"
                  value={filters.taskId}
                  onChange={(e) => setFilters({ ...filters, taskId: e.target.value })}
                />
              </div>

              {/* Carer */}
              <div className="space-y-0.5">
                <Label htmlFor="carer" className="text-[11px] font-semibold text-slate-600">Carer</Label>
                <Select value={filters.carer} onValueChange={(value) => setFilters({ ...filters, carer: value })}>
                  <SelectTrigger id="carer" className="h-7 text-xs px-2">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Facility */}
              <div className="space-y-0.5">
                <Label htmlFor="facility" className="text-[11px] font-semibold text-slate-600">Facility</Label>
                <Select value={filters.facility} onValueChange={(value) => setFilters({ ...filters, facility: value })}>
                  <SelectTrigger id="facility" className="h-7 text-xs px-2">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Coordinators */}
            <div className="space-y-2 md:col-span-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-0.5">
                  <Label htmlFor="client-coordinator" className="text-[11px] font-semibold text-slate-600">Client Coordinator</Label>
                  <Select value={filters.clientCoordinator} onValueChange={(value) => setFilters({ ...filters, clientCoordinator: value })}>
                    <SelectTrigger id="client-coordinator" className="h-7 text-xs px-2">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-0.5">
                  <Label htmlFor="carer-coordinator" className="text-[11px] font-semibold text-slate-600">Carer Coordinator</Label>
                  <Select value={filters.carerCoordinator} onValueChange={(value) => setFilters({ ...filters, carerCoordinator: value })}>
                    <SelectTrigger id="carer-coordinator" className="h-7 text-xs px-2">
                      <SelectValue placeholder="All" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* DHB Region */}
              <div className="space-y-0.5">
                <Label htmlFor="dhb-region" className="text-[11px] font-semibold text-slate-600">DHB Region</Label>
                <Select value={filters.dhbRegion} onValueChange={(value) => setFilters({ ...filters, dhbRegion: value })}>
                  <SelectTrigger id="dhb-region" className="h-7 text-xs px-2">
                    <SelectValue placeholder="Select Region..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ashburton">Ashburton, Banks Peninsula</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Search By */}
              <div className="flex items-center gap-4 pt-1">
                <Label className="text-[11px] font-semibold text-slate-600">Search By:</Label>
                <div className="flex items-center space-x-1.5">
                  <Checkbox
                    id="search-taskid"
                    checked={filters.searchBy === "taskId"}
                    onCheckedChange={() => setFilters({ ...filters, searchBy: "taskId" })}
                    className="h-3 w-3"
                  />
                  <label htmlFor="search-taskid" className="text-xs cursor-pointer">Task ID</label>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Checkbox
                    id="search-dates"
                    checked={filters.searchBy === "dates"}
                    onCheckedChange={() => setFilters({ ...filters, searchBy: "dates" })}
                    className="h-3 w-3"
                  />
                  <label htmlFor="search-dates" className="text-xs cursor-pointer">Dates</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
