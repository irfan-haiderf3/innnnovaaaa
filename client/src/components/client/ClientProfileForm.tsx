/**
 * Client Profile Form Component
 * Compact profile form with gradient header and beautiful action buttons
 * Legacy system inspired with modern design
 */

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import InnovacareTheme from "@/styles/innovacare-theme";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User } from "lucide-react";

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

interface ClientProfileFormProps {
  formData: ClientFormData;
  onChange: (data: ClientFormData) => void;
}

export default function ClientProfileForm({ formData, onChange }: ClientProfileFormProps) {
  const updateField = (field: keyof ClientFormData, value: any) => {
    onChange({ ...formData, [field]: value });
  };

  // Render Profile Tab Content
  const renderProfileContent = () => (
    <>
      {/* Profile Photo - Legacy Style Silhouette - Compact */}
      <div className="flex justify-center mb-1">
        <div className="w-12 h-12 bg-gray-900 rounded flex items-center justify-end overflow-hidden relative border border-gray-300">
          {/* Silhouette head - circle */}
          <div 
            className="absolute rounded-full bg-gray-400"
            style={{
              width: '18px',
              height: '18px',
              top: '6px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
          {/* Silhouette shoulders - arc */}
          <div 
            className="absolute bg-gray-400 rounded-t-full"
            style={{
              width: '30px',
              height: '24px',
              bottom: '-6px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          />
        </div>
      </div>

      {/* 3-Column Grid - Ultra Compact */}
      <div className="grid grid-cols-3 gap-1.5">
        {/* Column 1 */}
        <div className="space-y-0.5">
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Client ID</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.clientId} onChange={(e) => updateField("clientId", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">First Name</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.firstName} onChange={(e) => updateField("firstName", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Middle Name</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.middleName} onChange={(e) => updateField("middleName", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Gender</Label>
            <Select value={formData.gender} onValueChange={(v) => updateField("gender", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Phone No.</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" placeholder="Phone" value={formData.phoneNo} onChange={(e) => updateField("phoneNo", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Email</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.email} onChange={(e) => updateField("email", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Service Started</Label>
            <Input type="text" placeholder="DD/MM/YYYY" className="h-5 text-[10px] placeholder:text-[10px]" value={formData.serviceStarted} onChange={(e) => updateField("serviceStarted", e.target.value)} />
          </div>
        </div>
        
        {/* Column 2 */}
        <div className="space-y-0.5">
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Title</Label>
            <Select value={formData.gender} onValueChange={(v) => updateField("gender", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue placeholder="Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mr">Mr</SelectItem>
                <SelectItem value="mrs">Mrs</SelectItem>
                <SelectItem value="ms">Ms</SelectItem>
                <SelectItem value="dr">Dr</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Surname</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.surname} onChange={(e) => updateField("surname", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Known as</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.knownAs} onChange={(e) => updateField("knownAs", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Language</Label>
            <Select value={formData.language} onValueChange={(v) => updateField("language", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Maori">Māori</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Mobile No.</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" placeholder="Mobile" value={formData.mobileNo} onChange={(e) => updateField("mobileNo", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Attendance</Label>
            <Select value={formData.attendance} onValueChange={(v) => updateField("attendance", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Mobile App">Mobile App</SelectItem>
                <SelectItem value="Manual">Manual</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Zone</Label>
            <Select value={formData.zone} onValueChange={(v) => updateField("zone", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue placeholder="Select Zone" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zone1">Zone 1</SelectItem>
                <SelectItem value="zone2">Zone 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Column 3 */}
        <div className="space-y-0.5">
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">DOB</Label>
            <Input type="text" placeholder="DD/MM/YYYY" className="h-5 text-[10px] placeholder:text-[10px]" value={formData.dob} onChange={(e) => updateField("dob", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Ethnicity</Label>
            <Select value={formData.ethnicity} onValueChange={(v) => updateField("ethnicity", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nz-european">NZ European</SelectItem>
                <SelectItem value="maori">Māori</SelectItem>
                <SelectItem value="pacific">Pacific Islander</SelectItem>
                <SelectItem value="asian">Asian</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Marital Status</Label>
            <Select>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Work Phone</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" placeholder="Work" value={formData.workPhone} onChange={(e) => updateField("workPhone", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">NHI Number</Label>
            <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.nhiNumber} onChange={(e) => updateField("nhiNumber", e.target.value)} />
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Office</Label>
            <Select value={formData.office} onValueChange={(v) => updateField("office", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Phoenix Healthcare">Phoenix Healthcare</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0">
            <Label className="text-[10px] font-medium leading-tight">Client Type</Label>
            <Select value={formData.clientType} onValueChange={(v) => updateField("clientType", v)}>
              <SelectTrigger className="h-5 text-[10px]">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="regular">Regular</SelectItem>
                <SelectItem value="vip">VIP</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Fields */}
      <div className="grid grid-cols-3 gap-1.5 mt-1">
        <div className="space-y-0">
          <Label className="text-[10px] font-medium leading-tight">Alt Phone No.</Label>
          <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.altPhoneNo1} onChange={(e) => updateField("altPhoneNo1", e.target.value)} />
        </div>
        <div className="space-y-0">
          <Label className="text-[10px] font-medium leading-tight">Primary Coordinator</Label>
          <Select value={formData.primaryCoordinator} onValueChange={(v) => updateField("primaryCoordinator", v)}>
            <SelectTrigger className="h-5 text-[10px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="coordinator1">Sarah Johnson</SelectItem>
              <SelectItem value="coordinator2">David Lee</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-0">
          <Label className="text-[10px] font-medium leading-tight">Status Date</Label>
          <Input className="h-5 text-[10px] placeholder:text-[10px]" value={formData.statusDate} onChange={(e) => updateField("statusDate", e.target.value)} />
        </div>
      </div>

      {/* Interpreter Required Checkbox */}
      <div className="flex items-center gap-2 mt-1">
        <Checkbox
          checked={formData.interpreterRequired}
          onCheckedChange={(checked) => updateField("interpreterRequired", checked)}
          className="h-3.5 w-3.5"
        />
        <Label className="text-[10px]">Interpreter Required</Label>
      </div>
    </>
  );

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: InnovacareTheme.colors.background }}>
      {/* Header with gradient */}
      <div 
        className="px-3 py-1.5 border-b flex items-center gap-2 shadow-sm" 
        style={{ 
          background: `linear-gradient(135deg, ${InnovacareTheme.colors.primary} 0%, ${InnovacareTheme.palette.primary.dark} 100%)`,
        }}
      >
        <User className="h-4 w-4 text-white" />
        <span className="text-sm font-semibold text-white">Client Profile</span>
      </div>

      {/* Profile Content */}
      <div className="flex-1 overflow-auto p-2">
        {renderProfileContent()}
      </div>

      {/* Action Buttons - Compact & Beautiful */}
      <div 
        className="px-2 py-1.5 border-t flex gap-1.5 shadow-inner" 
        style={{ backgroundColor: InnovacareTheme.palette.neutral[50] }}
      >
        <Button 
          size="sm" 
          variant="outline" 
          className="h-7 text-[11px] flex-1 px-3 font-medium hover:bg-red-50 hover:border-red-300 hover:text-red-700 transition-all"
        >
          Delete
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="h-7 text-[11px] flex-1 px-3 font-medium hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all"
        >
          Search
        </Button>
        <Button 
          size="sm" 
          className="h-7 text-[11px] flex-1 px-3 font-medium shadow-md hover:shadow-lg transition-all" 
          style={{ 
            background: `linear-gradient(135deg, ${InnovacareTheme.colors.primary} 0%, ${InnovacareTheme.palette.primary.dark} 100%)`,
            color: 'white',
            border: 'none'
          }}
        >
          Save
        </Button>
        <Button 
          size="sm" 
          variant="outline" 
          className="h-7 text-[11px] flex-1 px-3 font-medium hover:bg-green-50 hover:border-green-300 hover:text-green-700 transition-all"
        >
          New
        </Button>
      </div>
    </div>
  );
}
