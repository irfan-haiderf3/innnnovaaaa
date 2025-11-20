import { useState } from "react";
import { IHeader } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppFooter from "@/components/Footer";
import { User, Calendar, UserCog, ClipboardList, MessageSquare, FileText, UserCircle, ChevronRight, Phone, Mail, Building, Save, Clock, MapPin, LogOut, CheckSquare, FileSignature, HeartPulse, Users } from "lucide-react";

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
  maritalStatus: string;
}

export default function ClientProfileV2Page() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState<ClientFormData>({
    clientId: "CLT-2025-001",
    firstName: "John",
    middleName: "Michael",
    surname: "Smith",
    knownAs: "John",
    dob: "15/03/1965",
    gender: "male",
    language: "English",
    phoneNo: "+64 9 123 4567",
    mobileNo: "+64 21 987 6543",
    workPhone: "+64 9 555 0123",
    altPhoneNo1: "+64 9 888 9999",
    primaryCoordinator: "Sarah Johnson",
    nhiNumber: "ABC1234",
    statusDate: "12/11/2025",
    email: "john.smith@email.com",
    attendance: "Mobile App",
    office: "Phoenix Healthcare",
    serviceStarted: "01/01/2024",
    zone: "zone1",
    interpreterRequired: false,
    ethnicity: "nz-european",
    clientType: "regular",
    maritalStatus: "married"
  });

  const updateField = (field: keyof ClientFormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const InfoSection = ({ title, icon: Icon, children }: any) => (
    <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: palette.neutral[200], boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
      <div className="px-3 py-1.5 border-b flex items-center gap-2" style={{ backgroundColor: palette.neutral[50], borderColor: palette.neutral[200] }}>
        <Icon className="h-3.5 w-3.5" style={{ color: colors.primary }} />
        <h3 className="text-[12px] font-semibold" style={{ color: colors.text }}>{title}</h3>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );

  const FormField = ({ label, value, onChange, type = "text", options, span = 1, icon: Icon }: any) => (
    <div className={`col-span-${span}`}>
      <Label className="text-[10px] font-medium mb-0.5 block flex items-center gap-1" style={{ color: palette.neutral[600] }}>
        {Icon && <Icon className="h-2.5 w-2.5" />}
        {label}
      </Label>
      {options ? (
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="h-7 text-[11px] py-0"><SelectValue /></SelectTrigger>
          <SelectContent>{options.map((opt: any) => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}</SelectContent>
        </Select>
      ) : (
        <Input className="h-7 text-[11px] py-0" type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      <IHeader showNavigation={true} username="System" role="Administrator" />
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="bg-white px-3 py-1.5 flex items-center justify-between" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
          <div className="flex items-center gap-1.5 text-[10px]" style={{ color: palette.neutral[500] }}>
            <span className="cursor-pointer" style={{ color: palette.neutral[500] }} onMouseEnter={(e) => e.currentTarget.style.color = colors.primary} onMouseLeave={(e) => e.currentTarget.style.color = palette.neutral[500]}>Clients</span>
            <ChevronRight className="h-2.5 w-2.5" />
            <span className="font-medium" style={{ color: colors.text }}>{formData.firstName} {formData.surname}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Button variant="outline" size="sm" className="h-6 text-[10px] px-2">Delete</Button>
            <Button variant="outline" size="sm" className="h-6 text-[10px] px-2">Search</Button>
            <Button size="sm" className="h-6 text-[10px] px-3" style={{ background: colors.primary, color: 'white' }}>
              <Save className="h-2.5 w-2.5 mr-1" />Save
            </Button>
            <Button variant="outline" size="sm" className="h-6 text-[10px] px-2">New</Button>
          </div>
        </div>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white overflow-x-auto" style={{ borderBottom: `1px solid ${palette.neutral[200]}` }}>
            <div className="flex gap-0.5 p-1.5 w-max min-w-full">
              {[
                { value: "profile", label: "Profile", icon: User, disabled: false },
                { value: "schedule", label: "Schedule", icon: Calendar, disabled: false },
                { value: "service", label: "Service Coordinator", icon: UserCog, disabled: false },
                { value: "assessment", label: "Assessment", icon: ClipboardList, disabled: false },
                { value: "contacts", label: "Contacts", icon: UserCircle, disabled: false },
                { value: "documents", label: "Documents", icon: FileText, disabled: false },
                { value: "offservice", label: "Off Service", icon: LogOut, disabled: false },
                { value: "attendance", label: "Attendance", icon: CheckSquare, disabled: false },
                { value: "addresses", label: "Addresses", icon: MapPin, disabled: false },
                { value: "communications", label: "Communication", icon: MessageSquare, disabled: false },
                { value: "log", label: "Log", icon: FileSignature, disabled: false },
                { value: "clientcare", label: "Client Specific Carer", icon: HeartPulse, disabled: true },
                { value: "group", label: "Group", icon: Users, disabled: true }
              ].map(tab => (
                <button
                  key={tab.value}
                  disabled={tab.disabled}
                  onClick={() => !tab.disabled && setActiveTab(tab.value)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-medium rounded border transition-all flex-shrink-0 whitespace-nowrap"
                  style={{
                    backgroundColor: activeTab === tab.value 
                      ? 'white'
                      : tab.disabled 
                        ? palette.neutral[100]
                        : palette.neutral[50],
                    borderColor: activeTab === tab.value 
                      ? colors.primary
                      : palette.neutral[300],
                    color: tab.disabled 
                      ? palette.neutral[400]
                      : activeTab === tab.value 
                        ? colors.primary
                        : palette.neutral[700],
                    cursor: tab.disabled ? 'not-allowed' : 'pointer',
                    boxShadow: activeTab === tab.value ? `0 0 0 1px ${colors.primary}` : 'none',
                    opacity: tab.disabled ? 0.6 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!tab.disabled && activeTab !== tab.value) {
                      e.currentTarget.style.backgroundColor = palette.neutral[100];
                      e.currentTarget.style.borderColor = palette.neutral[400];
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!tab.disabled && activeTab !== tab.value) {
                      e.currentTarget.style.backgroundColor = palette.neutral[50];
                      e.currentTarget.style.borderColor = palette.neutral[300];
                    }
                  }}
                >
                  <tab.icon className="h-3.5 w-3.5" style={{ color: activeTab === tab.value ? colors.primary : palette.neutral[600] }} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            <TabsContent value="profile" className="m-0">
              <div className="bg-white p-3" style={{ borderBottom: `1px solid ${palette.neutral[200]}` }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-base font-bold shadow-md" style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${palette.primary.dark} 100%)` }}>
                    {formData.firstName[0]}{formData.surname[0]}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h2 className="text-lg font-bold" style={{ color: colors.text }}>{formData.firstName} {formData.middleName} {formData.surname}</h2>
                      <Badge className="h-4 text-[9px] px-1.5" style={{ backgroundColor: palette.success, color: 'white' }}>Active</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-[11px]" style={{ color: palette.neutral[600] }}>
                      <span className="flex items-center gap-1"><User className="h-3 w-3" />ID: {formData.clientId}</span>
                      <span className="flex items-center gap-1"><Building className="h-3 w-3" />{formData.office}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" />Started: {formData.serviceStarted}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 space-y-2">
                <InfoSection title="Personal Information" icon={User}>
                  <div className="grid grid-cols-4 gap-x-3 gap-y-1.5">
                    <FormField label="Client ID" value={formData.clientId} onChange={(v: string) => updateField("clientId", v)} />
                    <FormField label="First Name" value={formData.firstName} onChange={(v: string) => updateField("firstName", v)} />
                    <FormField label="Middle Name" value={formData.middleName} onChange={(v: string) => updateField("middleName", v)} />
                    <FormField label="Surname" value={formData.surname} onChange={(v: string) => updateField("surname", v)} />
                    <FormField label="Known As" value={formData.knownAs} onChange={(v: string) => updateField("knownAs", v)} />
                    <FormField label="Date of Birth" value={formData.dob} onChange={(v: string) => updateField("dob", v)} />
                    <FormField label="Gender" value={formData.gender} onChange={(v: string) => updateField("gender", v)} options={[{value:"male",label:"Male"},{value:"female",label:"Female"},{value:"other",label:"Other"}]} />
                    <FormField label="Marital Status" value={formData.maritalStatus} onChange={(v: string) => updateField("maritalStatus", v)} options={[{value:"single",label:"Single"},{value:"married",label:"Married"},{value:"divorced",label:"Divorced"}]} />
                    <FormField label="Ethnicity" value={formData.ethnicity} onChange={(v: string) => updateField("ethnicity", v)} options={[{value:"nz-european",label:"NZ European"},{value:"maori",label:"Māori"},{value:"pacific",label:"Pacific Islander"}]} />
                    <FormField label="Language" value={formData.language} onChange={(v: string) => updateField("language", v)} options={[{value:"English",label:"English"},{value:"Maori",label:"Māori"}]} />
                    <FormField label="NHI Number" value={formData.nhiNumber} onChange={(v: string) => updateField("nhiNumber", v)} />
                    <div className="flex items-end">
                      <div className="flex items-center space-x-1.5">
                        <Checkbox id="interpreter" className="h-3.5 w-3.5" checked={formData.interpreterRequired} onCheckedChange={(checked) => updateField("interpreterRequired", checked)} />
                        <Label htmlFor="interpreter" className="text-[10px] font-medium cursor-pointer" style={{ color: palette.neutral[600] }}>Interpreter Required</Label>
                      </div>
                    </div>
                  </div>
                </InfoSection>
                <InfoSection title="Contact Information" icon={Phone}>
                  <div className="grid grid-cols-4 gap-x-3 gap-y-1.5">
                    <FormField label="Phone Number" icon={Phone} value={formData.phoneNo} onChange={(v: string) => updateField("phoneNo", v)} />
                    <FormField label="Mobile Number" icon={Phone} value={formData.mobileNo} onChange={(v: string) => updateField("mobileNo", v)} />
                    <FormField label="Work Phone" icon={Phone} value={formData.workPhone} onChange={(v: string) => updateField("workPhone", v)} />
                    <FormField label="Alternative Phone" icon={Phone} value={formData.altPhoneNo1} onChange={(v: string) => updateField("altPhoneNo1", v)} />
                    <FormField label="Email Address" icon={Mail} value={formData.email} onChange={(v: string) => updateField("email", v)} type="email" span={2} />
                  </div>
                </InfoSection>
                <InfoSection title="Service Information" icon={Building}>
                  <div className="grid grid-cols-4 gap-x-3 gap-y-1.5">
                    <FormField label="Office" value={formData.office} onChange={(v: string) => updateField("office", v)} options={[{value:"Phoenix Healthcare",label:"Phoenix Healthcare"}]} />
                    <FormField label="Client Type" value={formData.clientType} onChange={(v: string) => updateField("clientType", v)} options={[{value:"regular",label:"Regular"},{value:"vip",label:"VIP"}]} />
                    <FormField label="Zone" value={formData.zone} onChange={(v: string) => updateField("zone", v)} options={[{value:"zone1",label:"Zone 1"},{value:"zone2",label:"Zone 2"}]} />
                    <FormField label="Primary Coordinator" value={formData.primaryCoordinator} onChange={(v: string) => updateField("primaryCoordinator", v)} options={[{value:"Sarah Johnson",label:"Sarah Johnson"}]} />
                    <FormField label="Service Started" value={formData.serviceStarted} onChange={(v: string) => updateField("serviceStarted", v)} />
                    <FormField label="Status Date" value={formData.statusDate} onChange={(v: string) => updateField("statusDate", v)} />
                    <FormField label="Attendance Method" value={formData.attendance} onChange={(v: string) => updateField("attendance", v)} options={[{value:"Mobile App",label:"Mobile App"},{value:"Manual",label:"Manual"}]} />
                  </div>
                </InfoSection>
              </div>
            </TabsContent>
            {/* Schedule Tab */}
            <TabsContent value="schedule" className="m-0 h-full flex flex-col">
              {/* Toolbar */}
              <div className="bg-white px-3 py-2 flex items-center gap-2 flex-wrap" style={{ borderBottom: `1px solid ${palette.neutral[200]}` }}>
                <Button variant="outline" size="sm" className="h-7 text-[10px] px-2">
                  <span className="mr-1">+</span>Add
                </Button>
                <Button variant="outline" size="sm" className="h-7 text-[10px] px-2">Edit</Button>
                <Button variant="outline" size="sm" className="h-7 text-[10px] px-2">Remove</Button>
                <div className="h-4 w-px" style={{ backgroundColor: palette.neutral[300] }}></div>
                <Button variant="outline" size="sm" className="h-7 text-[10px] px-2">
                  <Calendar className="h-3 w-3 mr-1" />Calendar View
                </Button>
                <div className="flex-1"></div>
                <div className="flex items-center gap-3 text-[10px]">
                  <span className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#FFA500' }}></div>
                    In Progress
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F56565' }}></div>
                    Deleted
                  </span>
                  <span className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: palette.success }}></div>
                    Completed
                  </span>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="flex-1 overflow-auto bg-white">
                <table className="w-full text-[11px]" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                  <thead className="sticky top-0 z-10" style={{ backgroundColor: palette.neutral[50] }}>
                    <tr>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Schedule ID</th>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Schedule Name</th>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Facility</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>M</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>T</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>W</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Th</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>F</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Sa</th>
                      <th className="px-1 py-2 text-center font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Su</th>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Carer</th>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Time From</th>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Time To</th>
                      <th className="px-2 py-2 text-left font-semibold" style={{ borderBottom: `1px solid ${palette.neutral[200]}`, color: colors.text }}>Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { id: "SCH001", name: "Morning Personal Care", facility: "Albany", days: [1,1,1,1,1,0,0], carer: "Emma Thompson", from: "08:00", to: "09:00", freq: "Daily", status: "completed" },
                      { id: "SCH002", name: "Medication Management", facility: "Central", days: [1,1,1,1,1,1,1], carer: "David Lee", from: "12:00", to: "12:30", freq: "Daily", status: "progress" },
                      { id: "SCH003", name: "Evening Care", facility: "North Shore", days: [1,0,1,0,1,0,0], carer: "Sarah Wilson", from: "18:00", to: "19:30", freq: "Alternate", status: "completed" },
                      { id: "SCH004", name: "Physiotherapy", facility: "Albany", days: [0,1,0,1,0,0,0], carer: "Mike Chen", from: "14:00", to: "15:00", freq: "Weekly", status: "progress" },
                    ].map((schedule, idx) => (
                      <tr key={idx} className="group hover:bg-opacity-50" style={{ backgroundColor: idx % 2 === 0 ? 'white' : palette.neutral[50] }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = palette.primary.light + '10'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = idx % 2 === 0 ? 'white' : palette.neutral[50]}>
                        <td className="px-2 py-2" style={{ borderBottom: `1px solid ${palette.neutral[100]}` }}>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: schedule.status === 'completed' ? palette.success : '#FFA500' }}></div>
                            <span style={{ color: colors.text }}>{schedule.id}</span>
                          </div>
                        </td>
                        <td className="px-2 py-2 font-medium" style={{ borderBottom: `1px solid ${palette.neutral[100]}`, color: colors.text }}>{schedule.name}</td>
                        <td className="px-2 py-2" style={{ borderBottom: `1px solid ${palette.neutral[100]}`, color: palette.neutral[600] }}>{schedule.facility}</td>
                        {schedule.days.map((day, i) => (
                          <td key={i} className="px-1 py-2 text-center" style={{ borderBottom: `1px solid ${palette.neutral[100]}` }}>
                            {day ? <Checkbox checked className="h-3.5 w-3.5 pointer-events-none" /> : <Checkbox className="h-3.5 w-3.5 pointer-events-none" />}
                          </td>
                        ))}
                        <td className="px-2 py-2" style={{ borderBottom: `1px solid ${palette.neutral[100]}`, color: palette.neutral[600] }}>{schedule.carer}</td>
                        <td className="px-2 py-2" style={{ borderBottom: `1px solid ${palette.neutral[100]}`, color: palette.neutral[600] }}>{schedule.from}</td>
                        <td className="px-2 py-2" style={{ borderBottom: `1px solid ${palette.neutral[100]}`, color: palette.neutral[600] }}>{schedule.to}</td>
                        <td className="px-2 py-2" style={{ borderBottom: `1px solid ${palette.neutral[100]}` }}>
                          <Badge className="h-5 text-[9px] px-2" style={{ backgroundColor: palette.primary.light + '20', color: colors.primary, border: 'none' }}>{schedule.freq}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TabsContent>

            {/* Service Coordinator Tab */}
            <TabsContent value="service" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Service Coordinator content will be displayed here
              </div>
            </TabsContent>

            {/* Assessment Tab */}
            <TabsContent value="assessment" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Assessment content will be displayed here
              </div>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Contacts content will be displayed here
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Documents content will be displayed here
              </div>
            </TabsContent>

            {/* Off Service Tab */}
            <TabsContent value="offservice" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Off Service content will be displayed here
              </div>
            </TabsContent>

            {/* Attendance Tab */}
            <TabsContent value="attendance" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Attendance content will be displayed here
              </div>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Addresses content will be displayed here
              </div>
            </TabsContent>

            {/* Communications Tab */}
            <TabsContent value="communications" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Communication content will be displayed here
              </div>
            </TabsContent>

            {/* Log Tab */}
            <TabsContent value="log" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Log content will be displayed here
              </div>
            </TabsContent>

            {/* Client Specific Carer Tab (Disabled) */}
            <TabsContent value="clientcare" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Client Specific Carer content will be displayed here
              </div>
            </TabsContent>

            {/* Group Tab (Disabled) */}
            <TabsContent value="group" className="m-0 p-3">
              <div className="bg-white rounded-lg p-6 text-center text-sm" style={{ border: `1px solid ${palette.neutral[200]}`, boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', color: palette.neutral[500] }}>
                Group content will be displayed here
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      <AppFooter />
    </div>
  );
}
