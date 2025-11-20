/**
 * Schedule Tab Component - Legacy Style
 * Matches the original healthcare application design
 */

import { useState } from "react";
import InnovacareTheme from "@/styles/innovacare-theme";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Plus, Edit2, Trash2, Search, FileText } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

interface ScheduleTabProps {
  schedules: Schedule[];
}

export default function ScheduleTab({ schedules }: ScheduleTabProps) {
  const { colors, palette } = InnovacareTheme;
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="h-full flex flex-col overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Header with toolbar */}
      <div className="border-b flex items-center justify-between px-2 py-1" style={{ backgroundColor: palette.neutral[100] }}>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" style={{ color: colors.primary }} />
          <span className="text-xs font-semibold" style={{ color: colors.primary }}>Schedule Management</span>
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
            <FileText className="h-3 w-3 mr-1" />
            List View
          </Button>
          <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
            <Calendar className="h-3 w-3 mr-1" />
            Calendar View
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div className="border-b px-2 py-1.5 flex items-center gap-2" style={{ backgroundColor: palette.neutral[50] }}>
        <Search className="h-3 w-3" style={{ color: palette.neutral[400] }} />
        <Input 
          placeholder="Search schedules..." 
          className="h-6 text-[10px] flex-1 border-0 bg-transparent focus-visible:ring-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table with sticky header */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-[10px]" style={{ borderCollapse: 'collapse' }}>
          <thead className="sticky top-0 z-10" style={{ backgroundColor: palette.neutral[100] }}>
            <tr>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Schedule ID</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Schedule Name</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Facility</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>Mo</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>Tu</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>We</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>Th</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>Fr</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>Sa</th>
              <th className="px-1 py-1.5 text-center font-semibold border-b border-r" style={{ borderColor: palette.neutral[300], width: '30px' }}>Su</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b border-r" style={{ borderColor: palette.neutral[300] }}>Carer</th>
              <th className="px-2 py-1.5 text-left font-semibold border-b" style={{ borderColor: palette.neutral[300] }}>Time From</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((schedule, index) => (
              <tr 
                key={schedule.id}
                className="hover:bg-blue-50 cursor-pointer transition-colors"
                style={{ 
                  backgroundColor: index % 2 === 0 ? 'white' : palette.neutral[50] 
                }}
              >
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{schedule.id}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{schedule.scheduleName}</td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{schedule.facility}</td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.mo} className="h-3 w-3" />
                </td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.tu} className="h-3 w-3" />
                </td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.we} className="h-3 w-3" />
                </td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.th} className="h-3 w-3" />
                </td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.fr} className="h-3 w-3" />
                </td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.sa} className="h-3 w-3" />
                </td>
                <td className="px-1 py-1.5 text-center border-b border-r" style={{ borderColor: palette.neutral[200] }}>
                  <Checkbox checked={schedule.su} className="h-3 w-3" />
                </td>
                <td className="px-2 py-1.5 border-b border-r" style={{ borderColor: palette.neutral[200] }}>{schedule.carer}</td>
                <td className="px-2 py-1.5 border-b" style={{ borderColor: palette.neutral[200] }}>{schedule.timeFrom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Status indicators at bottom */}
      <div className="border-t px-2 py-1 flex items-center gap-3" style={{ backgroundColor: palette.neutral[100] }}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#4CAF50' }}></div>
          <span className="text-[10px]" style={{ color: palette.neutral[700] }}>In Progress</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#F44336' }}></div>
          <span className="text-[10px]" style={{ color: palette.neutral[700] }}>Delayed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#2196F3' }}></div>
          <span className="text-[10px]" style={{ color: palette.neutral[700] }}>Completed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#6B7280' }}></div>
          <span className="text-[10px]" style={{ color: palette.neutral[700] }}>External Provider</span>
        </div>
      </div>
    </div>
  );
}
