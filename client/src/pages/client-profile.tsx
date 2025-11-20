/**
 * Client Profile Page
 * Comprehensive client management interface
 * Compact, non-scrollable layout with split panels
 */

import { useState } from "react";
import { IHeader } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";
import ClientProfileForm from "@/components/client/ClientProfileForm";
import ScheduleTab from "@/components/client/tabs/ScheduleTab";
import RoleTab from "@/components/client/tabs/RoleTab";
import AssessmentTab from "@/components/client/tabs/AssessmentTab";
import ExpensesTab from "@/components/client/tabs/ExpensesTab";
import CommunicationTab from "@/components/client/tabs/CommunicationTab";
import DocumentsTab from "@/components/client/tabs/DocumentsTab";
import NotesTab from "@/components/client/tabs/NotesTab";
import UsersDocumentsTab from "@/components/client/tabs/UsersDocumentsTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import AppFooter from "@/components/Footer";
import { 
  GripVertical, 
  Calendar,
  UserCog,
  ClipboardList, 
  DollarSign, 
  MessageSquare, 
  FileText, 
  StickyNote, 
  UserCircle,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2
} from "lucide-react";

const { colors, palette } = InnovacareTheme;

interface ClientFormData {
  clientId: string;
  firstName: string;
  middleName: string;
  surname: string;
  knownAs: string;
  dob: string;
  gender: string;
  language: string;
  phoneNo: string;
  mobileNo: string;
  workPhone: string;
  altPhoneNo1: string;
  primaryCoordinator: string;
  nhiNumber: string;
  statusDate: string;
  email: string;
  attendance: string;
  office: string;
  serviceStarted: string;
  zone: string;
  interpreterRequired: boolean;
  ethnicity: string;
  clientType: string;
}

interface Schedule {
  id: string;
  scheduleName: string;
  facility: string;
  mo: boolean;
  tu: boolean;
  we: boolean;
  th: boolean;
  fr: boolean;
  sa: boolean;
  su: boolean;
  carer: string;
  timeFrom: string;
}

export default function ClientProfilePage() {
  const [formData, setFormData] = useState<ClientFormData>({
    clientId: "",
    firstName: "",
    middleName: "",
    surname: "",
    knownAs: "",
    dob: "",
    gender: "",
    language: "English",
    phoneNo: "",
    mobileNo: "",
    workPhone: "",
    altPhoneNo1: "",
    primaryCoordinator: "",
    nhiNumber: "",
    statusDate: "12/11/2025",
    email: "",
    attendance: "Mobile App",
    office: "Phoenix Healthcare",
    serviceStarted: "",
    zone: "",
    interpreterRequired: false,
    ethnicity: "Select Ethnicity",
    clientType: "",
  });

  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      id: "S001",
      scheduleName: "Morning Personal Care",
      facility: "Albany",
      mo: true,
      tu: true,
      we: true,
      th: true,
      fr: true,
      sa: false,
      su: false,
      carer: "Emma Thompson",
      timeFrom: "08:00",
    },
  ]);

  const [panelWidth, setPanelWidth] = useState(45); // Left panel width percentage - wider for 3-column form
  const [isDragging, setIsDragging] = useState(false);
  const [leftPanelCollapsed, setLeftPanelCollapsed] = useState(false);
  const [leftPanelExpanded, setLeftPanelExpanded] = useState(false);

  // Handle dragging for resizable divider
  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const container = document.getElementById("client-profile-container");
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;

    // Limit width between 25% and 50%
    if (newWidth >= 25 && newWidth <= 50) {
      setPanelWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getActualWidth = () => {
    if (leftPanelExpanded) return 100;
    if (leftPanelCollapsed) return 0;
    return panelWidth;
  };

  return (
    <div
      className="h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: palette.neutral[50] }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <IHeader showNavigation={true} username="System" role="Administrator" />

      {/* Main Workspace */}
      <div className="border-b bg-white shadow-sm flex-1 flex flex-col min-h-0">
        <Tabs defaultValue="schedule" orientation="vertical" className="w-full flex-1 flex flex-col min-h-0">

          {/* Main Content - Split Layout */}
          <div id="client-profile-container" className="flex overflow-hidden min-h-0 flex-1">
            {/* Left Panel - Client Profile Form */}
            {!leftPanelCollapsed && (
              <div
                className="overflow-hidden flex flex-col border-r transition-all duration-300"
                style={{
                  width: leftPanelExpanded ? '100%' : `${panelWidth}%`,
                  backgroundColor: colors.background,
                  borderColor: palette.neutral[200],
                }}
              >
                {/* Panel Controls */}
                <div className="flex items-center justify-end gap-1 px-2 py-1 border-b" style={{ backgroundColor: palette.neutral[100] }}>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={() => {
                      if (leftPanelExpanded) {
                        setLeftPanelExpanded(false);
                      } else {
                        setLeftPanelExpanded(true);
                      }
                    }}
                    title={leftPanelExpanded ? "Restore" : "Maximize"}
                  >
                    {leftPanelExpanded ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-6 w-6 p-0"
                    onClick={() => setLeftPanelCollapsed(true)}
                    title="Collapse"
                  >
                    <ChevronLeft className="h-3.5 w-3.5" />
                  </Button>
                </div>
                <ClientProfileForm formData={formData} onChange={setFormData} />
              </div>
            )}

            {/* Collapsed Panel - Show Expand Button with Label */}
            {leftPanelCollapsed && (
              <div className="w-10 border-r flex flex-col items-center py-2" style={{ backgroundColor: palette.neutral[100] }}>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 mb-2"
                  onClick={() => setLeftPanelCollapsed(false)}
                  title="Expand Client Profile"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </Button>
                <div 
                  className="text-[10px] font-semibold text-center"
                  style={{ 
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    color: colors.primary,
                    letterSpacing: '0.5px'
                  }}
                >
                  Client Profile
                </div>
              </div>
            )}

            {/* Draggable Divider */}
            {!leftPanelCollapsed && !leftPanelExpanded && (
              <div
                className="w-1 bg-border hover:bg-primary/50 cursor-col-resize flex items-center justify-center relative group transition-colors"
                onMouseDown={handleMouseDown}
                style={{ userSelect: "none" }}
              >
                <div className="absolute inset-y-0 -left-1 -right-1 flex items-center justify-center">
                  <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )}

            {/* Right Panel - Tab Content + Right-aligned Vertical Tabs Menu */}
            {!leftPanelExpanded && (
              <div className="overflow-hidden flex flex-row flex-1 min-h-0" style={{ backgroundColor: colors.background }}>
                {/* Tab content area - starts at top, no padding */}
                <div className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                  <TabsContent value="schedule" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <ScheduleTab schedules={schedules} />
                  </TabsContent>
                  <TabsContent value="role" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <RoleTab />
                  </TabsContent>
                  <TabsContent value="assessment" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <AssessmentTab schedules={schedules} />
                  </TabsContent>
                  <TabsContent value="expenses" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <ExpensesTab />
                  </TabsContent>
                  <TabsContent value="communication" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <CommunicationTab />
                  </TabsContent>
                  <TabsContent value="documents" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <DocumentsTab />
                  </TabsContent>
                  <TabsContent value="notes" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <NotesTab />
                  </TabsContent>
                  <TabsContent value="users-docu" className="flex-1 overflow-hidden min-h-0 m-0 p-0 flex flex-col">
                    <UsersDocumentsTab />
                  </TabsContent>
                </div>

                {/* Vertical tabs menu on the right - SCROLLABLE */}
                <TabsList className="h-full w-24 flex-col items-center justify-start rounded-none border-l bg-white px-1 py-2 gap-1 overflow-y-auto">
                  <TabsTrigger value="schedule" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <Calendar className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Schedule</span>
                  </TabsTrigger>
                  <TabsTrigger value="role" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <UserCog className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Role</span>
                  </TabsTrigger>
                  <TabsTrigger value="assessment" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <ClipboardList className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Assessment</span>
                  </TabsTrigger>
                  <TabsTrigger value="expenses" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Expenses</span>
                  </TabsTrigger>
                  <TabsTrigger value="communication" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Comm</span>
                  </TabsTrigger>
                  <TabsTrigger value="documents" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Documents</span>
                  </TabsTrigger>
                  <TabsTrigger value="notes" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <StickyNote className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Notes</span>
                  </TabsTrigger>
                  <TabsTrigger value="users-docu" className="w-full py-3 rounded-none flex flex-col items-center gap-1 data-[state=active]:bg-primary/10 data-[state=active]:text-primary">
                    <UserCircle className="h-6 w-6 text-primary" />
                    <span className="text-[11px] font-medium">Users</span>
                  </TabsTrigger>
                </TabsList>
              </div>
            )}
          </div>
        </Tabs>
      </div>

      {/* Footer */}
      <AppFooter />
    </div>
  );
}
