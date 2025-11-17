/**
 * Modern Home Page
 * Complete redesign with beautiful graphical filters, modern data table,
 * and eye-catching design inspired by MediNova medical platform
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModernDataTable, { TableColumn, cellRenderers } from "@/components/modern/ModernDataTable";
import MetricCard, { MetricGrid } from "@/components/modern/MetricCard";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Home as HomeIcon,
  Users,
  FileText,
  Cake,
  Calendar,
  GraduationCap,
  ClipboardList,
  CreditCard,
  Shield,
  AlertCircle,
  FileCheck,
  TrendingUp,
  AlertTriangle,
  FileWarning,
  Award,
  BookOpen,
  Search,
  RefreshCcw,
  Settings,
  Heart,
  Stethoscope,
  Clock,
  CheckCircle,
  Bell,
} from "lucide-react";
import { brandColors, applyBrandTheme } from "@/config/branding";
import { useEffect } from "react";

// Alert data type
interface AlertData {
  id: string;
  disable: boolean;
  disableAll: boolean;
  snooze: boolean;
  alertType: string;
  type: string;
  firstName: string;
  surname: string;
  description: string;
  coordinator: string;
  other: string;
}

// Quick action filter definition
interface QuickFilter {
  id: string;
  label: string;
  icon: any;
  color: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'info';
  count: number;
}

export default function HomePageNew() {
  // Apply branding theme on mount
  useEffect(() => {
    applyBrandTheme();
  }, []);

  // Filter states
  const [dateFrom, setDateFrom] = useState("03/03/2025");
  const [dateTo, setDateTo] = useState("30/11/2025");
  const [office, setOffice] = useState("all");
  const [group, setGroup] = useState("all");
  const [loadDisabledAlerts, setLoadDisabledAlerts] = useState(false);
  const [loadReadAlerts, setLoadReadAlerts] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Quick action filters with counts
  const quickFilters: QuickFilter[] = [
    { id: "home-help", label: "Home Help Leave", icon: HomeIcon, color: "primary", count: 12 },
    { id: "client-review", label: "Client Review", icon: ClipboardList, color: "secondary", count: 8 },
    { id: "client-birthday", label: "Client Birthday", icon: Cake, color: "accent", count: 5 },
    { id: "assessment-due", label: "Assessment Due", icon: FileCheck, color: "info", count: 15 },
    { id: "client-off-service", label: "Client Off Service", icon: AlertCircle, color: "error", count: 3 },
    { id: "visa-expiry", label: "Visa Expiry", icon: FileWarning, color: "warning", count: 7 },
    { id: "appraisal-due", label: "Appraisal Due", icon: TrendingUp, color: "primary", count: 10 },
    { id: "pending-training", label: "Pending Training", icon: GraduationCap, color: "warning", count: 18 },
    { id: "training-expiry", label: "Training Expiry", icon: BookOpen, color: "warning", count: 6 },
    { id: "license-expiry", label: "License Expiry", icon: CreditCard, color: "info", count: 4 },
    { id: "insurance-expiry", label: "Insurance Expiry", icon: Shield, color: "success", count: 9 },
    { id: "carer-contract", label: "Carer Contract End", icon: FileText, color: "accent", count: 11 },
    { id: "finishing-schedules", label: "Finishing Schedules", icon: CheckCircle, color: "success", count: 22 },
    { id: "unassigned-tasks", label: "Unassigned Tasks", icon: AlertTriangle, color: "error", count: 14 },
    { id: "po-number", label: "PO Number", icon: FileText, color: "secondary", count: 5 },
    { id: "staff-leave", label: "Staff Leave", icon: Calendar, color: "info", count: 8 },
    { id: "open-complaints", label: "Open Complaints", icon: AlertCircle, color: "error", count: 2 },
    { id: "wof-expiry", label: "WOF Expiry", icon: FileCheck, color: "success", count: 7 },
    { id: "health-screening", label: "Health Screening", icon: Stethoscope, color: "primary", count: 13 },
    { id: "new-referral", label: "New Referral", icon: Users, color: "accent", count: 6 },
    { id: "work-anniversary", label: "Work Anniversary", icon: Award, color: "warning", count: 4 },
    { id: "over-allocated", label: "Over Allocated", icon: AlertCircle, color: "warning", count: 9 },
    { id: "under-allocated", label: "Under Allocated", icon: Clock, color: "info", count: 12 },
    { id: "deceased-client", label: "Deceased Client", icon: Heart, color: "error", count: 1 },
  ];

  // Mock data for the table
  const mockAlerts: AlertData[] = [
    { 
      id: "2-2-28781", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Carer Unassigned", 
      type: "Task",
      firstName: "Addn", 
      surname: "", 
      description: "Carer Unassigned - Requires immediate attention", 
      coordinator: "John Smith", 
      other: "Priority: High" 
    },
    { 
      id: "2-1-49871", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Carer Leave", 
      type: "Leave",
      firstName: "Amandeep", 
      surname: "Kaur", 
      description: "On leave (Sick Leave) from 14/05/2025 to 14/05/2025", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-3-15234", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Assessment Due", 
      type: "Assessment",
      firstName: "Michael", 
      surname: "Brown", 
      description: "Annual assessment due by 20/05/2025", 
      coordinator: "Emma Davis", 
      other: "Urgent" 
    },
    { 
      id: "2-4-67890", 
      disable: true, 
      disableAll: false, 
      snooze: false, 
      alertType: "Training Expiry", 
      type: "Training",
      firstName: "Sophie", 
      surname: "Wilson", 
      description: "First Aid certification expires 25/05/2025", 
      coordinator: "James Miller", 
      other: "" 
    },
    { 
      id: "2-5-42156", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Client Birthday", 
      type: "Event",
      firstName: "Robert", 
      surname: "Taylor", 
      description: "Birthday on 18/05/2025", 
      coordinator: "Lisa Anderson", 
      other: "Send card" 
    },
  ];

  // Table columns configuration
  const columns: TableColumn<AlertData>[] = [
    { 
      key: "id", 
      label: "ID", 
      sortable: true, 
      width: "120px",
      render: (value) => <span className="font-bold text-primary">{value}</span>
    },
    { 
      key: "disable", 
      label: "Disable", 
      width: "80px",
      render: (value) => cellRenderers.boolean(value, <CheckCircle className="h-4 w-4" />)
    },
    { 
      key: "disableAll", 
      label: "Disable All", 
      width: "90px",
      render: (value) => cellRenderers.boolean(value, <CheckCircle className="h-4 w-4" />)
    },
    { 
      key: "snooze", 
      label: "Snooze", 
      width: "80px",
      render: (value) => cellRenderers.boolean(value, <Bell className="h-4 w-4" />)
    },
    { 
      key: "alertType", 
      label: "Alert Type", 
      sortable: true, 
      width: "150px",
      render: (value) => cellRenderers.badge(value)
    },
    { 
      key: "type", 
      label: "Type", 
      sortable: true, 
      width: "100px"
    },
    { 
      key: "firstName", 
      label: "First Name", 
      sortable: true, 
      width: "120px"
    },
    { 
      key: "surname", 
      label: "Surname", 
      sortable: true, 
      width: "120px"
    },
    { 
      key: "description", 
      label: "Description", 
      width: "250px"
    },
    { 
      key: "coordinator", 
      label: "Coordinator", 
      sortable: true, 
      width: "150px"
    },
    { 
      key: "other", 
      label: "Other", 
      width: "150px"
    },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: brandColors.neutral[50] }}>
      <Header showNavigation={true} username="System" role="Super Admin" />

      {/* Filters Bar - Modern & Compact */}
      <div 
        className="border-b shadow-sm px-4 py-3"
        style={{
          background: `linear-gradient(to bottom, ${brandColors.neutral[50]}, ${brandColors.primary[50]})`,
          borderColor: brandColors.primary[200]
        }}
      >
        <div className="flex items-end gap-3 flex-wrap">
          {/* Date From */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold" style={{ color: brandColors.neutral[700] }}>
              Date From
            </Label>
            <Input
              type="text"
              className="h-9 w-32 text-sm"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>

          {/* Date To */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold" style={{ color: brandColors.neutral[700] }}>
              Date To
            </Label>
            <Input
              type="text"
              className="h-9 w-32 text-sm"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>

          {/* Office */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold" style={{ color: brandColors.neutral[700] }}>
              Office
            </Label>
            <Select value={office} onValueChange={setOffice}>
              <SelectTrigger className="h-9 w-36 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Offices</SelectItem>
                <SelectItem value="auckland">Auckland</SelectItem>
                <SelectItem value="wellington">Wellington</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Group */}
          <div className="space-y-1">
            <Label className="text-xs font-semibold" style={{ color: brandColors.neutral[700] }}>
              Group
            </Label>
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger className="h-9 w-36 text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Groups</SelectItem>
                <SelectItem value="clinical">Clinical</SelectItem>
                <SelectItem value="admin">Administrative</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Checkboxes */}
          <div className="flex items-center gap-4 pl-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="load-disabled"
                checked={loadDisabledAlerts}
                onCheckedChange={(checked) => setLoadDisabledAlerts(checked as boolean)}
              />
              <label htmlFor="load-disabled" className="text-sm cursor-pointer font-medium" style={{ color: brandColors.neutral[700] }}>
                Load Disabled Alerts
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="load-read"
                checked={loadReadAlerts}
                onCheckedChange={(checked) => setLoadReadAlerts(checked as boolean)}
              />
              <label htmlFor="load-read" className="text-sm cursor-pointer font-medium" style={{ color: brandColors.neutral[700] }}>
                Load Read Alerts
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 ml-auto items-center">
            <Button 
              size="sm" 
              className="h-9 gap-2"
              style={{
                background: `linear-gradient(135deg, ${brandColors.primary[500]}, ${brandColors.primary[600]})`,
                color: 'white',
              }}
            >
              <Search className="h-4 w-4" />
              Search
            </Button>
            <Button 
              size="sm" 
              variant="outline"
              className="h-9 gap-2"
              style={{
                borderColor: brandColors.primary[400],
                color: brandColors.primary[600],
              }}
            >
              <RefreshCcw className="h-4 w-4" />
              Reset
            </Button>
            <Button 
              size="sm" 
              variant="ghost"
              className="h-9 w-9 p-0"
              style={{
                color: brandColors.neutral[600],
              }}
            >
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Action Filters - Beautiful Metric Cards */}
      <div 
        className="border-b p-3 overflow-x-auto"
        style={{
          background: brandColors.neutral[50],
          borderColor: brandColors.neutral[200]
        }}
      >
        <MetricGrid className="grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
          {quickFilters.map((filter) => (
            <MetricCard
              key={filter.id}
              title={filter.label}
              value={filter.count}
              icon={filter.icon}
              color={filter.color}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(activeFilter === filter.id ? null : filter.id)}
            />
          ))}
        </MetricGrid>
      </div>

      {/* Table Controls */}
      <div 
        className="border-b px-4 py-2 flex items-center gap-2"
        style={{
          backgroundColor: brandColors.neutral[100],
          borderColor: brandColors.neutral[200]
        }}
      >
        <Button size="sm" variant="ghost" className="h-8 gap-2 text-xs">
          <FileText className="h-3.5 w-3.5" style={{ color: brandColors.neutral[600] }} />
          Preview
        </Button>
        <Button size="sm" variant="ghost" className="h-8 gap-2 text-xs">
          <Settings className="h-3.5 w-3.5" style={{ color: brandColors.neutral[600] }} />
          Column Options
        </Button>
        <Button size="sm" variant="ghost" className="h-8 gap-2 text-xs">
          <FileCheck className="h-3.5 w-3.5" style={{ color: brandColors.neutral[600] }} />
          Save Layout
        </Button>
        <Button size="sm" variant="ghost" className="h-8 gap-2 text-xs">
          <RefreshCcw className="h-3.5 w-3.5" style={{ color: brandColors.neutral[600] }} />
          Clear Layout
        </Button>
        
        <div className="ml-auto">
          <span className="text-sm font-semibold" style={{ color: brandColors.neutral[600] }}>
            {mockAlerts.length} alerts {activeFilter && `(filtered by ${quickFilters.find(f => f.id === activeFilter)?.label})`}
          </span>
        </div>
      </div>

      {/* Modern Data Table */}
      <div className="flex-1 overflow-hidden p-4">
        <ModernDataTable 
          data={mockAlerts} 
          columns={columns}
        />
      </div>

      <Footer />
    </div>
  );
}
