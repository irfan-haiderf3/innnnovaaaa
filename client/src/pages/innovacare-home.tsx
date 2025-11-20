/**
 * Innovacare Home Page
 * Clean, modern healthcare management interface
 * 4-color design system, no gradients, Healthline-inspired
 */

import { useState, useEffect } from "react";
import { 
  IHeader, 
  IMetricCard, 
  IMetricGrid, 
  IButton, 
  IIconButton,
  IDataTable, 
  cellRenderers,
  InnovacareTheme,
  applyInnovacareTheme,
  type TableColumn 
} from "@/components/innovacare";
import Footer from "@/components/Footer";
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
  Home,
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
  Filter,
  Download,
  Eye,
  Save,
  X,
  Plus,
} from "lucide-react";

const { colors, palette } = InnovacareTheme;

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
  color: 'primary' | 'accent' | 'success' | 'warning' | 'error';
  count: number;
}

export default function InnovacareHome() {
  // Apply theme on mount
  useEffect(() => {
    applyInnovacareTheme();
    // Update page title
    document.title = 'Innovacare - Healthcare Management Platform';
  }, []);

  // Filter states
  const [dateFrom, setDateFrom] = useState("03/03/2025");
  const [dateTo, setDateTo] = useState("30/11/2025");
  const [office, setOffice] = useState("all");
  const [group, setGroup] = useState("all");
  const [loadDisabledAlerts, setLoadDisabledAlerts] = useState(false);
  const [loadReadAlerts, setLoadReadAlerts] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showQuickFilters, setShowQuickFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Quick action filters - ultra compact
  const quickFilters: QuickFilter[] = [
    { id: "home-help", label: "Home Help", icon: Home, color: "primary", count: 12 },
    { id: "client-review", label: "Review", icon: ClipboardList, color: "accent", count: 8 },
    { id: "client-birthday", label: "Birthday", icon: Cake, color: "success", count: 5 },
    { id: "assessment-due", label: "Assessment", icon: FileCheck, color: "warning", count: 15 },
    { id: "client-off-service", label: "Off Service", icon: AlertCircle, color: "error", count: 3 },
    { id: "visa-expiry", label: "Visa Exp", icon: FileWarning, color: "warning", count: 7 },
    { id: "appraisal-due", label: "Appraisal", icon: TrendingUp, color: "primary", count: 10 },
    { id: "pending-training", label: "Training", icon: GraduationCap, color: "warning", count: 18 },
    { id: "training-expiry", label: "Train Exp", icon: BookOpen, color: "warning", count: 6 },
    { id: "license-expiry", label: "License", icon: CreditCard, color: "accent", count: 4 },
    { id: "insurance-expiry", label: "Insurance", icon: Shield, color: "success", count: 9 },
    { id: "carer-contract", label: "Contract", icon: FileText, color: "accent", count: 11 },
    { id: "finishing-schedules", label: "Finishing", icon: CheckCircle, color: "success", count: 22 },
    { id: "unassigned-tasks", label: "Unassigned", icon: AlertTriangle, color: "error", count: 14 },
    { id: "po-number", label: "PO Number", icon: FileText, color: "primary", count: 5 },
    { id: "staff-leave", label: "Leave", icon: Calendar, color: "accent", count: 8 },
    { id: "complaints", label: "Complaints", icon: AlertCircle, color: "error", count: 2 },
    { id: "wof-expiry", label: "WOF", icon: FileCheck, color: "success", count: 7 },
    { id: "screening", label: "Screening", icon: Stethoscope, color: "primary", count: 13 },
    { id: "referral", label: "Referral", icon: Users, color: "accent", count: 6 },
    { id: "anniversary", label: "Anniversary", icon: Award, color: "warning", count: 4 },
    { id: "over-allocated", label: "Over Alloc", icon: AlertCircle, color: "warning", count: 9 },
    { id: "under-allocated", label: "Under Alloc", icon: Clock, color: "accent", count: 12 },
    { id: "deceased", label: "Deceased", icon: Heart, color: "error", count: 1 },
  ];

  // Mock data for the table - includes mix of disabled/enabled and read/unread
  const allAlerts: AlertData[] = [
    { 
      id: "2-2-28751", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Carer Unassigned", 
      type: "Carer unassign",
      firstName: "Aidan", 
      surname: "", 
      description: "Carer Unassigned", 
      coordinator: "", 
      other: "" 
    },
    { 
      id: "2-2-28751", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Carer Unassigned", 
      type: "Carer unassign",
      firstName: "Aidan", 
      surname: "", 
      description: "Carer Unassigned", 
      coordinator: "", 
      other: "" 
    },
    { 
      id: "2-2-28752", 
      disable: true, 
      disableAll: false, 
      snooze: false, 
      alertType: "Assessment Due", 
      type: "Assessment",
      firstName: "John", 
      surname: "Smith", 
      description: "Assessment Due", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28753", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Training Expiry", 
      type: "Training",
      firstName: "Emma", 
      surname: "Davis", 
      description: "Training Expiry", 
      coordinator: "Mike Brown", 
      other: "" 
    },
    { 
      id: "2-2-28831", 
      disable: true, 
      disableAll: false, 
      snooze: true, 
      alertType: "Visa Expiry", 
      type: "Visa",
      firstName: "AN test", 
      surname: "", 
      description: "Visa Expiry", 
      coordinator: "", 
      other: "" 
    },
    { 
      id: "2-2-28831", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Carer Unassigned", 
      type: "Carer unassign",
      firstName: "AN test", 
      surname: "", 
      description: "Carer Unassigned", 
      coordinator: "", 
      other: "" 
    },
    { 
      id: "2-2-28832", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Client Birthday", 
      type: "Birthday",
      firstName: "Mary", 
      surname: "Johnson", 
      description: "Client Birthday", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
    { 
      id: "2-2-28833", 
      disable: true, 
      disableAll: false, 
      snooze: true, 
      alertType: "License Expiry", 
      type: "License",
      firstName: "Robert", 
      surname: "Wilson", 
      description: "License Expiry", 
      coordinator: "David Lee", 
      other: "" 
    },
    { 
      id: "2-2-28834", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Insurance Expiry", 
      type: "Insurance",
      firstName: "Patricia", 
      surname: "Martinez", 
      description: "Insurance Expiry", 
      coordinator: "Jennifer White", 
      other: "" 
    },
    { 
      id: "2-2-28835", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Contract Renewal", 
      type: "Contract",
      firstName: "James", 
      surname: "Anderson", 
      description: "Contract Renewal", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28836", 
      disable: true, 
      disableAll: false, 
      snooze: false, 
      alertType: "Appraisal Due", 
      type: "Appraisal",
      firstName: "Linda", 
      surname: "Taylor", 
      description: "Appraisal Due", 
      coordinator: "Mike Brown", 
      other: "" 
    },
    { 
      id: "2-2-28837", 
      disable: false, 
      disableAll: false, 
      snooze: true, 
      alertType: "Off Service", 
      type: "Off Service",
      firstName: "William", 
      surname: "Garcia", 
      description: "Client Off Service", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
    { 
      id: "2-2-28838", 
      disable: true, 
      disableAll: true, 
      snooze: true, 
      alertType: "Staff Leave", 
      type: "Leave",
      firstName: "Barbara", 
      surname: "Thomas", 
      description: "Staff Leave Request", 
      coordinator: "Robert Davis", 
      other: "" 
    },
    { 
      id: "2-2-28839", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Home Help", 
      type: "Home Help",
      firstName: "Michael", 
      surname: "Chen", 
      description: "Home Help Service Required", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28840", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Client Review", 
      type: "Review",
      firstName: "Sophie", 
      surname: "Williams", 
      description: "Quarterly Review Due", 
      coordinator: "Mike Brown", 
      other: "" 
    },
    { 
      id: "2-2-28841", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Training Pending", 
      type: "Training",
      firstName: "David", 
      surname: "Lee", 
      description: "First Aid Training Pending", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
    { 
      id: "2-2-28842", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "WOF Expiry", 
      type: "WOF",
      firstName: "Rachel", 
      surname: "Green", 
      description: "Vehicle WOF Expires Soon", 
      coordinator: "David Lee", 
      other: "" 
    },
    { 
      id: "2-2-28843", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Screening", 
      type: "Screening",
      firstName: "Tom", 
      surname: "Harris", 
      description: "Health Screening Required", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28844", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "New Referral", 
      type: "Referral",
      firstName: "Lucy", 
      surname: "Brown", 
      description: "New Client Referral", 
      coordinator: "Mike Brown", 
      other: "" 
    },
    { 
      id: "2-2-28845", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Anniversary", 
      type: "Anniversary",
      firstName: "Kevin", 
      surname: "Martin", 
      description: "Work Anniversary", 
      coordinator: "", 
      other: "" 
    },
    { 
      id: "2-2-28846", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Over Allocated", 
      type: "Over Allocation",
      firstName: "Amanda", 
      surname: "Scott", 
      description: "Over Allocated Hours", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
    { 
      id: "2-2-28847", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Under Allocated", 
      type: "Under Allocation",
      firstName: "Nathan", 
      surname: "Young", 
      description: "Under Allocated Hours", 
      coordinator: "David Lee", 
      other: "" 
    },
    { 
      id: "2-2-28848", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "PO Number", 
      type: "PO Number",
      firstName: "Grace", 
      surname: "Taylor", 
      description: "PO Number Required", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28849", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Complaint", 
      type: "Complaint",
      firstName: "Chris", 
      surname: "Walker", 
      description: "Client Complaint Received", 
      coordinator: "Mike Brown", 
      other: "High Priority" 
    },
    { 
      id: "2-2-28850", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Finishing Schedule", 
      type: "Finishing",
      firstName: "Olivia", 
      surname: "Moore", 
      description: "Schedule Finishing Today", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
    { 
      id: "2-2-28851", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Equipment Review", 
      type: "Equipment",
      firstName: "Daniel", 
      surname: "White", 
      description: "Equipment Safety Check", 
      coordinator: "David Lee", 
      other: "" 
    },
    { 
      id: "2-2-28852", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Medication Review", 
      type: "Medication",
      firstName: "Isabella", 
      surname: "Clark", 
      description: "Medication Review Due", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28853", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Care Plan Update", 
      type: "Care Plan",
      firstName: "Ethan", 
      surname: "Lewis", 
      description: "Care Plan Needs Update", 
      coordinator: "Mike Brown", 
      other: "" 
    },
    { 
      id: "2-2-28854", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Document Missing", 
      type: "Documentation",
      firstName: "Ava", 
      surname: "Robinson", 
      description: "Required Document Missing", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
    { 
      id: "2-2-28855", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Schedule Conflict", 
      type: "Schedule",
      firstName: "Liam", 
      surname: "King", 
      description: "Schedule Conflict Detected", 
      coordinator: "David Lee", 
      other: "Urgent" 
    },
    { 
      id: "2-2-28856", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Time Sheet", 
      type: "Time Sheet",
      firstName: "Mia", 
      surname: "Hill", 
      description: "Time Sheet Approval Needed", 
      coordinator: "Sarah Johnson", 
      other: "" 
    },
    { 
      id: "2-2-28857", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Quality Audit", 
      type: "Audit",
      firstName: "Noah", 
      surname: "Adams", 
      description: "Quality Audit Scheduled", 
      coordinator: "Mike Brown", 
      other: "" 
    },
    { 
      id: "2-2-28858", 
      disable: false, 
      disableAll: false, 
      snooze: false, 
      alertType: "Risk Assessment", 
      type: "Risk",
      firstName: "Emma", 
      surname: "Baker", 
      description: "Risk Assessment Due", 
      coordinator: "Lisa Anderson", 
      other: "" 
    },
  ];

  // Filter alerts based on checkbox states
  // snooze: false = unread alert, snooze: true = read alert
  const mockAlerts = allAlerts.filter(alert => {
    // Filter out disabled alerts unless checkbox is checked
    if (alert.disable && !loadDisabledAlerts) return false;
    // Filter out read alerts (snooze=true) unless checkbox is checked
    if (alert.snooze && !loadReadAlerts) return false;
    return true;
  });

  // Table columns configuration
  const columns: TableColumn<AlertData>[] = [
    { 
      key: "id", 
      label: "ID", 
      sortable: true, 
      width: "120px",
    },
    { 
      key: "disable", 
      label: "Disable", 
      width: "80px",
      render: (value) => cellRenderers.boolean(value)
    },
    { 
      key: "disableAll", 
      label: "Disable All", 
      width: "90px",
      render: (value) => cellRenderers.boolean(value)
    },
    { 
      key: "alertType", 
      label: "Alert Type", 
      sortable: true, 
      width: "150px",
      render: (value) => cellRenderers.badge(value, 'primary')
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
    <div 
      className="h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: palette.neutral[50] }}
    >
      <IHeader showNavigation={true} username="System" role="Administrator" />

      {/* Filters Bar - Clean & Compact */}
      <div 
        className="px-4 py-2"
        style={{
          backgroundColor: colors.background,
          borderBottom: `1px solid ${palette.neutral[200]}`,
        }}
      >
        <div className="flex items-end gap-2 flex-wrap">
          {/* Date Filters */}
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold" style={{ color: palette.neutral[600] }}>
              Date From
            </Label>
            <Input
              type="text"
              className="h-8 w-28 text-xs"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              style={{
                borderColor: palette.neutral[300],
                fontSize: '0.75rem',
              }}
            />
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-semibold" style={{ color: palette.neutral[600] }}>
              Date To
            </Label>
            <Input
              type="text"
              className="h-8 w-28 text-xs"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              style={{
                borderColor: palette.neutral[300],
                fontSize: '0.75rem',
              }}
            />
          </div>

          {/* Select Filters */}
          <div className="space-y-1">
            <Label className="text-[10px] font-semibold" style={{ color: palette.neutral[600] }}>
              Office
            </Label>
            <Select value={office} onValueChange={setOffice}>
              <SelectTrigger className="h-8 w-32 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Offices</SelectItem>
                <SelectItem value="auckland">Auckland</SelectItem>
                <SelectItem value="wellington">Wellington</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label className="text-[10px] font-semibold" style={{ color: palette.neutral[600] }}>
              Group
            </Label>
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger className="h-8 w-32 text-xs">
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
          <div className="flex items-end gap-3 pl-2 pb-0.5"style={{marginBottom:'5px'}}>
            <div className="flex items-center space-x-1">
              <Checkbox
                id="load-disabled"
                checked={loadDisabledAlerts}
                onCheckedChange={(checked) => setLoadDisabledAlerts(checked as boolean)}
                className="h-3.5 w-3.5"
              />
              <label 
                htmlFor="load-disabled" 
                className="text-xs cursor-pointer"
                style={{ color: palette.neutral[700], }}
              >
                Disabled Alerts
              </label>
            </div>
            <div className="flex items-center space-x-1">
              <Checkbox
                id="load-read"
                checked={loadReadAlerts}
                onCheckedChange={(checked) => setLoadReadAlerts(checked as boolean)}
                className="h-3.5 w-3.5"
              />
              <label 
                htmlFor="load-read" 
                className="text-xs cursor-pointer"
                style={{ color: palette.neutral[700] }}
              >
                Read Alerts
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-1.5 ml-auto">
            <IButton icon={Search} size="sm" variant="primary">
              Search
            </IButton>
            <IButton icon={RefreshCcw} size="sm" variant="outline">
              Reset
            </IButton>
            <IIconButton icon={Filter} size="sm" variant="ghost" tooltip="More Filters" />
          </div>
        </div>
      </div>

      {/* Quick Filters - Show only selected filters when expanded */}
      {showQuickFilters && selectedFilters.length > 0 && (
        <div 
          className="px-3 py-2 overflow-x-auto"
          style={{
            backgroundColor: palette.neutral[50],
            borderBottom: `1px solid ${palette.neutral[200]}`,
          }}
        >
          <IMetricGrid>
            {quickFilters
              .filter(filter => selectedFilters.includes(filter.id))
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
                      backgroundColor: palette.error,
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
      
      {/* Empty State when no filters selected */}
      {showQuickFilters && selectedFilters.length === 0 && (
        <div 
          className="px-4 py-3 text-center"
          style={{
            backgroundColor: palette.neutral[50],
            borderBottom: `1px solid ${palette.neutral[200]}`,
          }}
        >
          <p className="text-xs" style={{ color: palette.neutral[500] }}>
            No filters selected. Use the dropdown below to add filter cards.
          </p>
        </div>
      )}

      {/* Table Controls - Improved UI */}
      <div 
        className="px-4 py-2.5 flex items-center gap-2"
        style={{
          backgroundColor: colors.background,
          borderBottom: `1px solid ${palette.neutral[200]}`,
        }}
      >
        {/* Quick Filter Toggle & Selector */}
        <div className="flex items-center gap-2">
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
                  backgroundColor: colors.primary,
                  color: 'white',
                }}
              >
                {selectedFilters.length}
              </span>
            )}
          </div>
          
          {showQuickFilters && (
            <>
              <Select 
                value="" 
                onValueChange={(value) => {
                  if (!selectedFilters.includes(value)) {
                    setSelectedFilters([...selectedFilters, value]);
                  }
                }}
              >
                <SelectTrigger className="h-8 w-52 text-xs">
                  <SelectValue placeholder="+ Add filter card..." />
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
                <div style={{ color: palette.error }}>
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
            </>
          )}
        </div>

        <div className="h-6 w-px" style={{ backgroundColor: palette.neutral[300] }} />
        
        {/* Action Buttons */}
        <IButton icon={Eye} size="sm" variant="outline">
          Preview
        </IButton>
        <IButton icon={Settings} size="sm" variant="outline">
          Columns
        </IButton>
        <IButton icon={Save} size="sm" variant="primary">
          Save Layout
        </IButton>
        <IButton icon={Download} size="sm" variant="outline">
          Export
        </IButton>
        
        <div className="ml-auto flex items-center gap-3">
          <span 
            className="text-xs font-semibold"
            style={{ color: palette.neutral[700] }}
          >
            {mockAlerts.length} alerts ({allAlerts.length} total)
            {activeFilter && ` • ${quickFilters.find(f => f.id === activeFilter)?.label}`}
          </span>
        </div>
      </div>

      {/* Data Table with Pagination */}
      <div className="flex-1 p-3" style={{ minHeight: 0, display: 'flex', flexDirection: 'column' }}>
        <IDataTable 
          data={mockAlerts} 
          columns={columns}
          showPagination={true}
          pageSize={18}
        />
      </div>

      {/* Footer */}
      <div 
        className="flex-shrink-0 px-4 py-2 text-center"
        style={{
          backgroundColor: colors.background,
          borderTop: `1px solid ${palette.neutral[200]}`,
        }}
      >
        <p 
          className="text-xs"
          style={{ color: palette.neutral[500] }}
        >
          © 2025 Innovacare Healthcare Management. All rights reserved.
        </p>
      </div>
    </div>
  );
}
