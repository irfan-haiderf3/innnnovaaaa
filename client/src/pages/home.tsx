import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeSwitcherPanel } from "@/components/ThemeSwitcherPanel";
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
  HelpCircle,
  Users,
  FileText,
  Cake,
  Calendar,
  GraduationCap,
  ClipboardList,
  CreditCard,
  Shield,
  AlertCircle,
  UserCheck,
  FileCheck,
  TrendingUp,
  Bell,
  MessageSquare,
  Settings,
  Activity,
  RefreshCcw,
  CheckCircle,
  Clock,
  MapPin,
  Heart,
  Stethoscope,
  AlertTriangle,
  FileWarning,
  Award,
  BookOpen,
  Search,
} from "lucide-react";

interface QuickActionButton {
  id: string;
  label: string;
  icon: any;
  color: string;
  hoverColor: string;
}

export default function HomePage() {
  const [dateFrom, setDateFrom] = useState("03/03/2025");
  const [dateTo, setDateTo] = useState("30/11/2025");
  const [office, setOffice] = useState("all");
  const [group, setGroup] = useState("all");
  const [loadDisabledAlerts, setLoadDisabledAlerts] = useState(false);
  const [loadReadAlerts, setLoadReadAlerts] = useState(false);

  const quickActions: QuickActionButton[] = [
    { id: "home-help", label: "Home Help Leave", icon: HomeIcon, color: "bg-blue-500", hoverColor: "hover:bg-blue-600" },
    { id: "client-review", label: "Client Review", icon: ClipboardList, color: "bg-purple-500", hoverColor: "hover:bg-purple-600" },
    { id: "client-birthday", label: "Client Birthday", icon: Cake, color: "bg-pink-500", hoverColor: "hover:bg-pink-600" },
    { id: "assessment-due", label: "Assessment Due", icon: FileCheck, color: "bg-teal-500", hoverColor: "hover:bg-teal-600" },
    { id: "client-off-service", label: "Client Off Service", icon: AlertCircle, color: "bg-red-500", hoverColor: "hover:bg-red-600" },
    { id: "visa-expiry", label: "Visa Expiry", icon: FileWarning, color: "bg-orange-500", hoverColor: "hover:bg-orange-600" },
    
    { id: "appraisal-due", label: "Appraisal Due", icon: TrendingUp, color: "bg-indigo-500", hoverColor: "hover:bg-indigo-600" },
    { id: "pending-training", label: "Pending Training", icon: GraduationCap, color: "bg-yellow-500", hoverColor: "hover:bg-yellow-600" },
    { id: "training-expiry", label: "Training Expiry", icon: BookOpen, color: "bg-amber-500", hoverColor: "hover:bg-amber-600" },
    { id: "license-expiry", label: "License Expiry", icon: CreditCard, color: "bg-cyan-500", hoverColor: "hover:bg-cyan-600" },
    { id: "insurance-expiry", label: "Insurance Expiry", icon: Shield, color: "bg-emerald-500", hoverColor: "hover:bg-emerald-600" },
    { id: "carer-contract", label: "Carer Contract End Date Due", icon: FileText, color: "bg-lime-500", hoverColor: "hover:bg-lime-600" },
    { id: "finishing-schedules", label: "Finishing Schedules", icon: CheckCircle, color: "bg-green-500", hoverColor: "hover:bg-green-600" },
    
    { id: "unassigned-tasks", label: "Un-Assigned Tasks", icon: AlertTriangle, color: "bg-rose-500", hoverColor: "hover:bg-rose-600" },
    { id: "po-number", label: "PO Number", icon: FileText, color: "bg-violet-500", hoverColor: "hover:bg-violet-600" },
    { id: "staff-leave", label: "Staff Leave", icon: Calendar, color: "bg-fuchsia-500", hoverColor: "hover:bg-fuchsia-600" },
    { id: "open-complaints", label: "Open Complaints", icon: MessageSquare, color: "bg-red-600", hoverColor: "hover:bg-red-700" },
    { id: "chart-expiry", label: "Chart Expiry", icon: Activity, color: "bg-blue-600", hoverColor: "hover:bg-blue-700" },
    { id: "over-allocated", label: "Over Allocated", icon: AlertCircle, color: "bg-orange-600", hoverColor: "hover:bg-orange-700" },
    { id: "under-allocated", label: "Under Allocated", icon: Clock, color: "bg-gray-500", hoverColor: "hover:bg-gray-600" },
    
    { id: "id-card-expiry", label: "ID Card Expiry", icon: CreditCard, color: "bg-purple-600", hoverColor: "hover:bg-purple-700" },
    { id: "overspend-back", label: "Over/Appg/ Back to Back", icon: TrendingUp, color: "bg-pink-600", hoverColor: "hover:bg-pink-700" },
    { id: "health-screening", label: "Health Screening Check", icon: Stethoscope, color: "bg-teal-600", hoverColor: "hover:bg-teal-700" },
    { id: "deceased-client", label: "Deceased Client", icon: Heart, color: "bg-slate-600", hoverColor: "hover:bg-slate-700" },
    { id: "new-referral", label: "New Referral", icon: Users, color: "bg-indigo-600", hoverColor: "hover:bg-indigo-700" },
    { id: "work-anniversary", label: "Work Anniversary", icon: Award, color: "bg-yellow-600", hoverColor: "hover:bg-yellow-700" },
    { id: "equipment-review", label: "Equipment Review", icon: Settings, color: "bg-cyan-600", hoverColor: "hover:bg-cyan-700" },
    { id: "hazards-checklist", label: "Hazards Checklist", icon: AlertTriangle, color: "bg-red-700", hoverColor: "hover:bg-red-800" },
    
    { id: "wof-expiry", label: "WOF Expiry", icon: FileCheck, color: "bg-emerald-600", hoverColor: "hover:bg-emerald-700" },
    { id: "registration-expiry", label: "Registration Expiry", icon: FileText, color: "bg-lime-600", hoverColor: "hover:bg-lime-700" },
    { id: "exceeding-services", label: "Exceeding Off Services", icon: TrendingUp, color: "bg-rose-600", hoverColor: "hover:bg-rose-700" },
    { id: "acc-casemix", label: "ACC-Casemix", icon: FileCheck, color: "bg-violet-600", hoverColor: "hover:bg-violet-700" },
    { id: "clearance", label: "Clearance", icon: CheckCircle, color: "bg-green-600", hoverColor: "hover:bg-green-700" },
    { id: "ref-contract-end", label: "Ref/Contract End Date Due", icon: Calendar, color: "bg-blue-700", hoverColor: "hover:bg-blue-800" },
  ];

  const mockData = [
    { id: "2-2-28751", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "Aidan", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28751", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "Aidan", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28751", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "Aidan", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28751", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "Aidan", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
    { id: "2-2-28831", disable: false, disableAll: false, snooze: true, alertType: "Carer unassi...", firstName: "AN test", surname: "", description: "Carer Unassigned", coordinator: "", other: "" },
  ];

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-slate-50">
      <Header showNavigation={true} username="System" role="Super Admin" />

      {/* Filters Bar - Ultra Compact */}
      <div className="bg-white border-b shadow-sm px-2 py-1.5">
        <div className="flex items-end gap-2 flex-wrap">
          {/* Date From */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Date From</Label>
            <Input
              type="text"
              className="h-7 w-28 text-xs px-2"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </div>

          {/* Date To */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Date To</Label>
            <Input
              type="text"
              className="h-7 w-28 text-xs px-2"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </div>

          {/* Office */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Office</Label>
            <Select value={office} onValueChange={setOffice}>
              <SelectTrigger className="h-7 w-32 text-xs px-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Group */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600">Group</Label>
            <Select value={group} onValueChange={setGroup}>
              <SelectTrigger className="h-7 w-32 text-xs px-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Checkboxes - Aligned with other fields */}
          <div className="space-y-0.5">
            <Label className="text-[11px] font-semibold text-slate-600 invisible">Options</Label>
            <div className="flex items-center gap-3 h-7">
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="load-disabled"
                  checked={loadDisabledAlerts}
                  onCheckedChange={(checked) => setLoadDisabledAlerts(checked as boolean)}
                  className="h-3 w-3"
                />
                <label htmlFor="load-disabled" className="text-xs cursor-pointer whitespace-nowrap">
                  Load Disabled Alerts
                </label>
              </div>
              <div className="flex items-center space-x-1.5">
                <Checkbox
                  id="load-read"
                  checked={loadReadAlerts}
                  onCheckedChange={(checked) => setLoadReadAlerts(checked as boolean)}
                  className="h-3 w-3"
                />
                <label htmlFor="load-read" className="text-xs cursor-pointer whitespace-nowrap">
                  Load Read Alerts
                </label>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-1 ml-auto items-center">
            <Button size="sm" variant="outline" className="h-7 px-3 text-xs">
              <Search className="h-3 w-3 mr-1" />
              Search
            </Button>
            <Button size="sm" variant="outline" className="h-7 px-3 text-xs">
              <RefreshCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
            <ThemeSwitcherPanel />
          </div>
        </div>
      </div>

      {/* Quick Action Buttons - Grid Layout */}
      <div className="bg-gradient-to-b from-slate-50 to-white border-b p-2">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1">
          {quickActions.map((action) => (
            <Button
              key={action.id}
              variant="outline"
              className={`h-12 flex flex-col items-center justify-center gap-1 ${action.color} text-white border-0 ${action.hoverColor} transition-all hover:scale-105 hover:shadow-md`}
            >
              <action.icon className="h-4 w-4" />
              <span className="text-[9px] font-medium text-center leading-tight">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Table Controls */}
      <div className="bg-slate-100 border-b px-2 py-1 flex items-center gap-2">
        <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
          <FileText className="h-3 w-3 mr-1" />
          Preview
        </Button>
        <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
          <Settings className="h-3 w-3 mr-1" />
          Column Options
        </Button>
        <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
          <FileCheck className="h-3 w-3 mr-1" />
          Save Layout
        </Button>
        <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
          <RefreshCcw className="h-3 w-3 mr-1" />
          Clear Layout
        </Button>
      </div>

      {/* Data Table */}
      <div className="flex-1 overflow-auto bg-white">
        <table className="w-full text-xs border-collapse">
          <thead className="bg-slate-200 sticky top-0">
            <tr>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">ID</th>
              <th className="border border-slate-300 px-2 py-1 text-center font-semibold">Disable</th>
              <th className="border border-slate-300 px-2 py-1 text-center font-semibold">Disable All</th>
              <th className="border border-slate-300 px-2 py-1 text-center font-semibold">Snooze</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">Alert Type</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">Type</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">First Name</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">Surname</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">Description</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">Coordinator</th>
              <th className="border border-slate-300 px-2 py-1 text-left font-semibold">Other</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="border border-slate-300 px-2 py-1 text-blue-600 font-medium">{row.id}</td>
                <td className="border border-slate-300 px-2 py-1 text-center">
                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                    <CheckCircle className={`h-4 w-4 ${row.disable ? 'text-red-500' : 'text-slate-300'}`} />
                  </Button>
                </td>
                <td className="border border-slate-300 px-2 py-1 text-center">
                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                    <CheckCircle className={`h-4 w-4 ${row.disableAll ? 'text-red-500' : 'text-slate-300'}`} />
                  </Button>
                </td>
                <td className="border border-slate-300 px-2 py-1 text-center">
                  <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
                    <Bell className={`h-4 w-4 ${row.snooze ? 'text-green-500' : 'text-slate-300'}`} />
                  </Button>
                </td>
                <td className="border border-slate-300 px-2 py-1">
                  <Button variant="ghost" size="sm" className="h-5 px-1 text-[10px]">
                    <FileText className="h-3 w-3 mr-1" />
                    {row.alertType}
                  </Button>
                </td>
                <td className="border border-slate-300 px-2 py-1">
                  <Button variant="ghost" size="sm" className="h-5 px-1 text-[10px]">
                    <FileText className="h-3 w-3" />
                  </Button>
                </td>
                <td className="border border-slate-300 px-2 py-1">{row.firstName}</td>
                <td className="border border-slate-300 px-2 py-1">{row.surname}</td>
                <td className="border border-slate-300 px-2 py-1">{row.description}</td>
                <td className="border border-slate-300 px-2 py-1">{row.coordinator}</td>
                <td className="border border-slate-300 px-2 py-1">{row.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
