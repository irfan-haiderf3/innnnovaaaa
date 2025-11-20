/**
 * Role Tab Component - Legacy Style
 * Manages client service roles and assignments
 */

import { useState } from "react";
import InnovacareTheme from "@/styles/innovacare-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserCog, Plus, Edit2, Trash2, Save } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Role {
  id: string;
  roleName: string;
  serviceType: string;
  coordinator: string;
  startDate: string;
  endDate: string;
  status: string;
}

export default function RoleTab() {
  const { colors, palette } = InnovacareTheme;
  const [roles, setRoles] = useState<Role[]>([
    {
      id: "R001",
      roleName: "Home Care",
      serviceType: "Personal Care",
      coordinator: "Sarah Johnson",
      startDate: "01/01/2025",
      endDate: "31/12/2025",
      status: "Active",
    },
  ]);

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Header with toolbar */}
      <div className="border-b flex items-center justify-between px-2 py-1" style={{ backgroundColor: palette.neutral[100] }}>
        <div className="flex items-center gap-2">
          <UserCog className="h-4 w-4" style={{ color: colors.primary }} />
          <span className="text-xs font-semibold" style={{ color: colors.primary }}>Client Role Management</span>
        </div>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
            <Plus className="h-3 w-3 mr-1" />
            Add
          </Button>
          <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
            <Edit2 className="h-3 w-3 mr-1" />
            Edit
          </Button>
          <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
            <Trash2 className="h-3 w-3 mr-1" />
            Remove
          </Button>
          <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
            <Save className="h-3 w-3 mr-1" />
            Save
          </Button>
        </div>
      </div>

      {/* Form Section */}
      <div className="p-2 border-b" style={{ backgroundColor: palette.neutral[50] }}>
        <div className="grid grid-cols-4 gap-2">
          <div className="space-y-0.5">
            <Label className="text-[10px] font-medium">Role Name</Label>
            <Input className="h-6 text-[10px]" placeholder="Enter role name" />
          </div>
          <div className="space-y-0.5">
            <Label className="text-[10px] font-medium">Service Type</Label>
            <Select>
              <SelectTrigger className="h-6 text-[10px]">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">Personal Care</SelectItem>
                <SelectItem value="medical">Medical Care</SelectItem>
                <SelectItem value="therapy">Therapy</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0.5">
            <Label className="text-[10px] font-medium">Coordinator</Label>
            <Select>
              <SelectTrigger className="h-6 text-[10px]">
                <SelectValue placeholder="Select coordinator" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sarah">Sarah Johnson</SelectItem>
                <SelectItem value="david">David Lee</SelectItem>
                <SelectItem value="emma">Emma Thompson</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-0.5">
            <Label className="text-[10px] font-medium">Status</Label>
            <Select>
              <SelectTrigger className="h-6 text-[10px]">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2 mt-2">
          <div className="space-y-0.5">
            <Label className="text-[10px] font-medium">Start Date</Label>
            <Input type="text" placeholder="DD/MM/YYYY" className="h-6 text-[10px]" />
          </div>
          <div className="space-y-0.5">
            <Label className="text-[10px] font-medium">End Date</Label>
            <Input type="text" placeholder="DD/MM/YYYY" className="h-6 text-[10px]" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[10px]" style={{ borderCollapse: 'collapse' }}>
          <thead className="sticky top-0 z-10" style={{ backgroundColor: palette.neutral[100] }}>
            <tr>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Role ID</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Role Name</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Service Type</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Coordinator</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Start Date</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>End Date</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b" style={{ borderColor: palette.neutral[300] }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role, index) => (
              <tr 
                key={role.id}
                className="hover:bg-blue-50 cursor-pointer transition-colors"
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'white' : palette.neutral[50] 
                }}
              >
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{role.id}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{role.roleName}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{role.serviceType}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{role.coordinator}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{role.startDate}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{role.endDate}</td>
                <td className="px-2 py-1.5 border-b" style={{ borderColor: palette.neutral[200] }}>
                  <span 
                    className="px-2 py-0.5 rounded-full text-[9px] font-medium"
                    style={{
                      backgroundColor: role.status === 'Active' ? '#DCFCE7' : '#FEE2E2',
                      color: role.status === 'Active' ? '#16A34A' : '#DC2626',
                    }}
                  >
                    {role.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer info */}
      <div className="border-t px-2 py-1 text-[10px]" style={{ backgroundColor: palette.neutral[100], color: palette.neutral[600] }}>
        Total Roles: {roles.length}
      </div>
    </div>
  );
}
