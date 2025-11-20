/**
 * Client Schedule Table Component
 * Right panel with schedule information and tabs
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  Edit,
  Trash2,
  Calendar,
  List,
  CheckCircle,
  FileCheck,
  ClipboardList,
} from "lucide-react";

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

interface ClientScheduleTableProps {
  schedules: Schedule[];
  onAdd?: () => void;
  onEdit?: (id: string) => void;
  onRemove?: (id: string) => void;
}

export default function ClientScheduleTable({
  schedules,
  onAdd,
  onEdit,
  onRemove,
}: ClientScheduleTableProps) {
  const [selectedSchedules, setSelectedSchedules] = useState<string[]>([]);

  const toggleSchedule = (id: string) => {
    setSelectedSchedules((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const DayCheckbox = ({ checked }: { checked: boolean }) => (
    <div className="flex justify-center">
      {checked ? (
        <CheckCircle className="h-3 w-3 text-primary" />
      ) : (
        <span className="text-muted-foreground/40">-</span>
      )}
    </div>
  );

  return (
    <div className="h-full flex flex-col overflow-hidden bg-white">
      {/* Action Buttons Bar */}
      <div className="px-2 py-1.5 border-b flex flex-wrap items-center gap-1 bg-gray-50">
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-[10px] px-2"
          onClick={onAdd}
        >
          <Plus className="h-3 w-3 mr-1" />
          Add
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-[10px] px-2"
          disabled={selectedSchedules.length === 0}
        >
          <Edit className="h-3 w-3 mr-1" />
          Edit
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-7 text-[10px] px-2"
          disabled={selectedSchedules.length === 0}
        >
          <Trash2 className="h-3 w-3 mr-1" />
          Remove
        </Button>
        <div className="h-7 w-px bg-border mx-1" />
        <Button size="sm" variant="outline" className="h-7 text-[10px] px-2">
          <List className="h-3 w-3 mr-1" />
          List View
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[10px] px-2">
          <Calendar className="h-3 w-3 mr-1" />
          Calendar View
        </Button>
        <div className="h-7 w-px bg-border mx-1" />
        <Button size="sm" variant="outline" className="h-7 text-[10px] px-2">
          <CheckCircle className="h-3 w-3 mr-1" />
          Approved
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[10px] px-2">
          <FileCheck className="h-3 w-3 mr-1" />
          Fill Schedule
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[10px] px-2">
          <ClipboardList className="h-3 w-3 mr-1" />
          Completion Questionnaire
        </Button>
        <Button size="sm" variant="outline" className="h-7 text-[10px] px-2 ml-auto">
          Load Completed Schedules
        </Button>
      </div>

      {/* Status Bar */}
      <div className="px-2 py-1 border-b flex flex-wrap items-center gap-2 text-[10px] bg-muted overflow-x-auto">
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary h-5 text-[10px]">
          <span className="font-semibold mr-1">In Progress</span>
          <span className="bg-red-500 text-white px-1 rounded">0</span>
        </Badge>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent h-5 text-[10px]">
          <span className="font-semibold mr-1">Deleted</span>
          <span className="bg-red-500 text-white px-1 rounded">0</span>
        </Badge>
        <Badge variant="outline" className="bg-primary/10 text-primary border-primary h-5 text-[10px]">
          <span className="font-semibold mr-1">Completed</span>
          <span className="bg-primary text-primary-foreground px-1 rounded">0</span>
        </Badge>
        <Badge variant="outline" className="bg-accent/10 text-accent border-accent h-5 text-[10px]">
          <span className="font-semibold mr-1">External Provider</span>
          <span className="bg-accent text-accent-foreground px-1 rounded">0</span>
        </Badge>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="h-7 px-2 text-[10px] w-8"></TableHead>
              <TableHead className="h-7 px-2 text-[10px]">Schedule ID</TableHead>
              <TableHead className="h-7 px-2 text-[10px]">Schedule Name</TableHead>
              <TableHead className="h-7 px-2 text-[10px]">Facility</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">Mo</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">Tu</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">We</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">Th</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">Fr</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">Sa</TableHead>
              <TableHead className="h-7 px-1 text-[10px] text-center w-8">Su</TableHead>
              <TableHead className="h-7 px-2 text-[10px]">Carer</TableHead>
              <TableHead className="h-7 px-2 text-[10px]">Time From</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedules.length === 0 ? (
              <TableRow>
                <TableCell colSpan={14} className="h-20 text-center text-[11px] text-muted-foreground">
                  No schedules found. Click "Add" to create a new schedule.
                </TableCell>
              </TableRow>
            ) : (
              schedules.map((schedule) => (
                <TableRow
                  key={schedule.id}
                  className="h-8 hover:bg-gray-50"
                >
                  <TableCell className="px-2">
                    <Checkbox
                      checked={selectedSchedules.includes(schedule.id)}
                      onCheckedChange={() => toggleSchedule(schedule.id)}
                      className="h-3.5 w-3.5"
                    />
                  </TableCell>
                  <TableCell className="px-2 text-[11px]">{schedule.id}</TableCell>
                  <TableCell className="px-2 text-[11px] font-medium">
                    {schedule.scheduleName}
                  </TableCell>
                  <TableCell className="px-2 text-[11px]">{schedule.facility}</TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.mo} />
                  </TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.tu} />
                  </TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.we} />
                  </TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.th} />
                  </TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.fr} />
                  </TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.sa} />
                  </TableCell>
                  <TableCell className="px-1">
                    <DayCheckbox checked={schedule.su} />
                  </TableCell>
                  <TableCell className="px-2 text-[11px]">{schedule.carer}</TableCell>
                  <TableCell className="px-2 text-[11px]">{schedule.timeFrom}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
