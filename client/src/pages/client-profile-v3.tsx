import { useState } from "react";
import { IHeader } from "@/components/innovacare";
import InnovacareTheme from "@/styles/innovacare-theme";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AppFooter from "@/components/Footer";
import { User, Calendar, MessageSquare, FileText, Save, Search, Upload } from "lucide-react";

const { colors, palette } = InnovacareTheme;

interface ClientFormData {
  // Basic Information
  clientId: string;
  title: string;
  firstName: string;
  middleName: string;
  surname: string;
  knownAs: string;
  dob: string;
  dobYear: string;
  maritalStatus: string;
  gender: string;
  
  // Contact & Status
  country: string;
  phoneNo: string;
  mobileNo: string;
  workPhone: string;
  email: string;
  office: string;
  primaryCoordinator: string;
  
  // Identifiers
  mrn: string;
  cdp: string;
  ivrPin: string;
  ethnicity: string;
}

export default function ClientProfileV3Page() {
  const [activeTab, setActiveTab] = useState("profile");
  const [formData, setFormData] = useState<ClientFormData>({
    clientId: "",
    title: "",
    firstName: "",
    middleName: "",
    surname: "",
    knownAs: "",
    dob: "",
    dobYear: "",
    maritalStatus: "",
    gender: "",
    country: "New Zealand",
    phoneNo: "",
    mobileNo: "",
    workPhone: "",
    email: "",
    office: "Phoenix Healthcare",
    primaryCoordinator: "",
    mrn: "",
    cdp: "",
    ivrPin: "",
    ethnicity: ""
  });

  const updateField = (field: keyof ClientFormData, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const FormField = ({ label, value, onChange, type = "text", options, required = false }: any) => (
    <div className="space-y-1">
      <Label className="text-xs font-medium block" style={{ color: palette.neutral[700] }}>
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </Label>
      {options ? (
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger className="h-9 text-sm">
            <SelectValue placeholder={`Select ${label}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((opt: any) => (
              <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      ) : (
        <Input 
          className="h-9 text-sm" 
          type={type} 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
        />
      )}
    </div>
  );

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      <IHeader showNavigation={true} username="System" role="Administrator" />
      
      {/* Page Header */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="bg-white px-6 py-4 flex items-center justify-between border-b" style={{ borderColor: palette.neutral[200] }}>
          <h1 className="text-xl font-semibold" style={{ color: colors.text }}>Client Profile</h1>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="default" className="h-9 text-sm px-4">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button size="default" className="h-9 text-sm px-5" style={{ background: colors.primary, color: 'white' }}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
            <Button variant="outline" size="default" className="h-9 text-sm px-4">
              + New
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 flex flex-col overflow-hidden">
          <div className="bg-white border-b" style={{ borderColor: palette.neutral[200] }}>
            <TabsList className="h-12 bg-transparent border-none p-0 px-6 gap-2">
              {[
                { value: "profile", label: "Profile", icon: User },
                { value: "schedule", label: "Schedule", icon: Calendar },
                { value: "contacts", label: "Contacts", icon: User },
                { value: "documents", label: "Documents", icon: FileText }
              ].map(tab => (
                <TabsTrigger 
                  key={tab.value} 
                  value={tab.value} 
                  className="h-12 px-4 text-sm font-medium rounded-md data-[state=active]:shadow-none"
                  style={{ 
                    backgroundColor: activeTab === tab.value ? colors.primary : 'transparent',
                    color: activeTab === tab.value ? 'white' : palette.neutral[600]
                  }}
                >
                  <tab.icon className="h-4 w-4 mr-2" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* Profile Tab Content */}
          <div className="flex-1 overflow-auto">
            <TabsContent value="profile" className="m-0 h-full">
              <div className="p-6">
                <div className="grid grid-cols-12 gap-6">
                  {/* Left Column - Basic Information */}
                  <div className="col-span-4">
                    <div className="bg-white rounded-lg border p-5 space-y-4" style={{ borderColor: palette.neutral[200] }}>
                      <h3 className="text-sm font-semibold pb-2 border-b" style={{ color: colors.primary, borderColor: palette.neutral[200] }}>
                        Basic Information
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="Client ID" 
                          value={formData.clientId} 
                          onChange={(v: string) => updateField("clientId", v)} 
                        />
                        <FormField 
                          label="Title" 
                          value={formData.title} 
                          onChange={(v: string) => updateField("title", v)}
                          options={[
                            { value: "mr", label: "Mr" },
                            { value: "mrs", label: "Mrs" },
                            { value: "ms", label: "Ms" },
                            { value: "dr", label: "Dr" }
                          ]}
                        />
                      </div>

                      <FormField 
                        label="First Name" 
                        value={formData.firstName} 
                        onChange={(v: string) => updateField("firstName", v)}
                        required
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="Middle Name" 
                          value={formData.middleName} 
                          onChange={(v: string) => updateField("middleName", v)} 
                        />
                        <FormField 
                          label="Surname" 
                          value={formData.surname} 
                          onChange={(v: string) => updateField("surname", v)} 
                        />
                      </div>

                      <FormField 
                        label="Known As" 
                        value={formData.knownAs} 
                        onChange={(v: string) => updateField("knownAs", v)} 
                      />

                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="DOB" 
                          value={formData.dob} 
                          onChange={(v: string) => updateField("dob", v)}
                          type="date"
                        />
                        <FormField 
                          label="Year(s)" 
                          value={formData.dobYear} 
                          onChange={(v: string) => updateField("dobYear", v)} 
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="Marital Status" 
                          value={formData.maritalStatus} 
                          onChange={(v: string) => updateField("maritalStatus", v)}
                          options={[
                            { value: "single", label: "Single" },
                            { value: "married", label: "Married" },
                            { value: "divorced", label: "Divorced" },
                            { value: "widowed", label: "Widowed" }
                          ]}
                        />
                        <FormField 
                          label="Gender" 
                          value={formData.gender} 
                          onChange={(v: string) => updateField("gender", v)}
                          options={[
                            { value: "male", label: "Male" },
                            { value: "female", label: "Female" },
                            { value: "other", label: "Other" }
                          ]}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Contact & Status */}
                  <div className="col-span-4">
                    <div className="bg-white rounded-lg border p-5 space-y-4" style={{ borderColor: palette.neutral[200] }}>
                      <h3 className="text-sm font-semibold pb-2 border-b" style={{ color: colors.primary, borderColor: palette.neutral[200] }}>
                        Contact & Status
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="Country" 
                          value={formData.country} 
                          onChange={(v: string) => updateField("country", v)}
                          options={[
                            { value: "New Zealand", label: "New Zealand" },
                            { value: "Australia", label: "Australia" },
                            { value: "UK", label: "United Kingdom" }
                          ]}
                        />
                        <FormField 
                          label="Phone No." 
                          value={formData.phoneNo} 
                          onChange={(v: string) => updateField("phoneNo", v)} 
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="Country" 
                          value={formData.country} 
                          onChange={(v: string) => updateField("country", v)}
                          options={[
                            { value: "New Zealand", label: "New Zealand" },
                            { value: "Australia", label: "Australia" }
                          ]}
                        />
                        <FormField 
                          label="Mobile No." 
                          value={formData.mobileNo} 
                          onChange={(v: string) => updateField("mobileNo", v)} 
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <FormField 
                          label="Country" 
                          value={formData.country} 
                          onChange={(v: string) => updateField("country", v)}
                          options={[
                            { value: "New Zealand", label: "New Zealand" },
                            { value: "Australia", label: "Australia" }
                          ]}
                        />
                        <FormField 
                          label="Work Phone" 
                          value={formData.workPhone} 
                          onChange={(v: string) => updateField("workPhone", v)} 
                        />
                      </div>

                      <FormField 
                        label="Email" 
                        value={formData.email} 
                        onChange={(v: string) => updateField("email", v)}
                        type="email"
                      />

                      <FormField 
                        label="Office" 
                        value={formData.office} 
                        onChange={(v: string) => updateField("office", v)}
                        options={[
                          { value: "Phoenix Healthcare", label: "Phoenix Healthcare" },
                          { value: "Central Office", label: "Central Office" },
                          { value: "North Shore", label: "North Shore" }
                        ]}
                      />

                      <FormField 
                        label="Primary Coordinator" 
                        value={formData.primaryCoordinator} 
                        onChange={(v: string) => updateField("primaryCoordinator", v)} 
                      />
                    </div>
                  </div>

                  {/* Right Column - Photo & Identifiers */}
                  <div className="col-span-4">
                    <div className="space-y-6">
                      {/* Photo Upload */}
                      <div className="bg-white rounded-lg border p-5" style={{ borderColor: palette.neutral[200] }}>
                        <div className="flex flex-col items-center space-y-4">
                          <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-100 border-2 border-dashed" style={{ borderColor: palette.neutral[300] }}>
                            <User className="w-16 h-16" style={{ color: palette.neutral[400] }} />
                          </div>
                          <Button variant="outline" size="sm" className="text-sm" style={{ color: colors.primary }}>
                            <Upload className="h-4 w-4 mr-2" />
                            Upload Photo
                          </Button>
                        </div>
                      </div>

                      {/* Identifiers */}
                      <div className="bg-white rounded-lg border p-5 space-y-4" style={{ borderColor: palette.neutral[200] }}>
                        <h3 className="text-sm font-semibold pb-2 border-b" style={{ color: colors.primary, borderColor: palette.neutral[200] }}>
                          Identifiers
                        </h3>

                        <FormField 
                          label="MRN" 
                          value={formData.mrn} 
                          onChange={(v: string) => updateField("mrn", v)} 
                        />

                        <FormField 
                          label="CDP" 
                          value={formData.cdp} 
                          onChange={(v: string) => updateField("cdp", v)}
                          options={[
                            { value: "cdp1", label: "CDP Option 1" },
                            { value: "cdp2", label: "CDP Option 2" },
                            { value: "cdp3", label: "CDP Option 3" }
                          ]}
                        />

                        <FormField 
                          label="IVR PIN" 
                          value={formData.ivrPin} 
                          onChange={(v: string) => updateField("ivrPin", v)} 
                        />

                        <FormField 
                          label="Ethnicity" 
                          value={formData.ethnicity} 
                          onChange={(v: string) => updateField("ethnicity", v)}
                          options={[
                            { value: "nz-european", label: "NZ European" },
                            { value: "maori", label: "Māori" },
                            { value: "pacific", label: "Pacific Islander" },
                            { value: "asian", label: "Asian" },
                            { value: "other", label: "Other" }
                          ]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule" className="m-0 p-6">
              <div className="bg-white rounded-lg border p-6 text-center" style={{ borderColor: palette.neutral[200] }}>
                <Calendar className="h-12 w-12 mx-auto mb-3" style={{ color: palette.neutral[300] }} />
                <p className="text-sm" style={{ color: palette.neutral[500] }}>
                  Schedule content will be displayed here
                </p>
              </div>
            </TabsContent>

            {/* Contacts Tab */}
            <TabsContent value="contacts" className="m-0 p-6">
              <div className="bg-white rounded-lg border p-6 text-center" style={{ borderColor: palette.neutral[200] }}>
                <User className="h-12 w-12 mx-auto mb-3" style={{ color: palette.neutral[300] }} />
                <p className="text-sm" style={{ color: palette.neutral[500] }}>
                  Contacts content will be displayed here
                </p>
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents" className="m-0 p-6">
              <div className="bg-white rounded-lg border p-6 text-center" style={{ borderColor: palette.neutral[200] }}>
                <FileText className="h-12 w-12 mx-auto mb-3" style={{ color: palette.neutral[300] }} />
                <p className="text-sm" style={{ color: palette.neutral[500] }}>
                  Documents content will be displayed here
                </p>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
      <AppFooter />
    </div>
  );
}
