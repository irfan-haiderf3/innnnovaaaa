/**
 * Leave Wizard Page
 * Multi-step wizard for assigning leave and viewing carer tasks
 * Based on desktop Leave Wizard interface
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Wizard, WizardStep } from "@/components/Wizard";
import { IHeader, IDataTable, IButton, type TableColumn } from "@/components/innovacare";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InnovacareTheme, { applyInnovacareTheme } from "@/styles/innovacare-theme";
import { Plus, Edit, Trash2 } from "lucide-react";

const { colors, palette } = InnovacareTheme;

// Leave entry data type
interface LeaveEntry {
  id: string;
  leaveType: string;
  dateFrom: string;
  dateTo: string;
  unit: string;
  status: string;
  leaveTaken: number;
  notes: string;
}

export default function LeaveWizard() {
  const [, navigate] = useLocation();

  // Apply theme
  useEffect(() => {
    applyInnovacareTheme();
    document.title = "Leave Wizard - Innovacare";
  }, []);

  // Form state for Step 1
  const [leaveType, setLeaveType] = useState("ACC Leave - Work Related");
  const [dateFrom, setDateFrom] = useState("19/11/2025 00:00");
  const [dateTo, setDateTo] = useState("19/11/2025 23:59");
  const [leaveUnit, setLeaveUnit] = useState("Hour");
  const [leaveStatus, setLeaveStatus] = useState("Approved");
  const [leaveTaken, setLeaveTaken] = useState("0.0");
  const [notes, setNotes] = useState("");
  const [certificateStatus, setCertificateStatus] = useState("");

  // Leave entries for grid
  const [leaveEntries, setLeaveEntries] = useState<LeaveEntry[]>([
    {
      id: "1",
      leaveType: "ACC Leave - Work Related",
      dateFrom: "19/11/2025 00:00",
      dateTo: "19/11/2025 23:59",
      unit: "Hour",
      status: "Approved",
      leaveTaken: 0.0,
      notes: "",
    },
  ]);

  // Step 2 state - Duty Tasks
  const [selectedDuties, setSelectedDuties] = useState<string[]>([]);

  // Step 3 state - Missing Hours
  const [missingHours, setMissingHours] = useState<any[]>([]);

  // Add new leave entry
  const handleAddLeave = () => {
    const newEntry: LeaveEntry = {
      id: String(leaveEntries.length + 1),
      leaveType,
      dateFrom,
      dateTo,
      unit: leaveUnit,
      status: leaveStatus,
      leaveTaken: parseFloat(leaveTaken),
      notes,
    };
    setLeaveEntries([...leaveEntries, newEntry]);
    
    // Reset form
    setNotes("");
    setLeaveTaken("0.0");
  };

  // Table columns for leave entries - Compact
  const leaveColumns: TableColumn<LeaveEntry>[] = [
    { key: "leaveType", label: "Leave Type", sortable: true, width: "140px" },
    { key: "dateFrom", label: "From", sortable: true, width: "120px" },
    { key: "dateTo", label: "To", sortable: true, width: "120px" },
    { key: "unit", label: "Unit", width: "60px" },
    { key: "status", label: "Status", width: "80px" },
    { key: "leaveTaken", label: "Taken", width: "60px" },
    { key: "notes", label: "Notes", width: "180px" },
  ];

  // Wizard steps
  const wizardSteps: WizardStep[] = [
    {
      id: "step1",
      title: "Leave Details",
      description: "Select leave reason and leave period time.",
      content: (
        <div className="space-y-2">
          {/* Leave Form - Ultra Compact */}
          <div
            className="p-2 rounded"
            style={{
              backgroundColor: colors.background,
              border: `1px solid ${palette.neutral[200]}`,
            }}
          >
            <h3
              className="text-xs font-semibold mb-1.5"
              style={{ color: palette.neutral[700] }}
            >
              Leave Information
            </h3>

            <div className="grid grid-cols-3 gap-1.5">
              {/* Leave Type */}
              <div className="space-y-1">
                <Label htmlFor="leaveType" className="text-xs">Leave Type:</Label>
                <Select value={leaveType} onValueChange={setLeaveType}>
                  <SelectTrigger id="leaveType" className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACC Leave - Work Related">
                      ACC Leave - Work Related
                    </SelectItem>
                    <SelectItem value="Annual Leave">Annual Leave</SelectItem>
                    <SelectItem value="Sick Leave">Sick Leave</SelectItem>
                    <SelectItem value="Bereavement Leave">Bereavement Leave</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Leave Status */}
              <div className="space-y-1">
                <Label htmlFor="leaveStatus" className="text-xs">Leave Status:</Label>
                <Select value={leaveStatus} onValueChange={setLeaveStatus}>
                  <SelectTrigger id="leaveStatus" className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Approved">Approved</SelectItem>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date From */}
              <div className="space-y-1">
                <Label htmlFor="dateFrom" className="text-xs">Date From:</Label>
                <Input
                  id="dateFrom"
                  type="text"
                  className="h-8 text-xs"
                  value={dateFrom}
                  onChange={(e) => setDateFrom(e.target.value)}
                />
              </div>

              {/* Date To */}
              <div className="space-y-1">
                <Label htmlFor="dateTo" className="text-xs">Date To:</Label>
                <Input
                  id="dateTo"
                  type="text"
                  className="h-8 text-xs"
                  value={dateTo}
                  onChange={(e) => setDateTo(e.target.value)}
                />
              </div>

              {/* Leave Unit */}
              <div className="space-y-1">
                <Label htmlFor="leaveUnit" className="text-xs">Leave Unit:</Label>
                <Select value={leaveUnit} onValueChange={setLeaveUnit}>
                  <SelectTrigger id="leaveUnit" className="h-8 text-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Hour">Hour</SelectItem>
                    <SelectItem value="Day">Day</SelectItem>
                    <SelectItem value="Week">Week</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Leave Taken */}
              <div className="space-y-1">
                <Label htmlFor="leaveTaken" className="text-xs">Leave Taken:</Label>
                <Input
                  id="leaveTaken"
                  type="number"
                  step="0.1"
                  className="h-8 text-xs"
                  value={leaveTaken}
                  onChange={(e) => setLeaveTaken(e.target.value)}
                />
              </div>

              {/* Notes - Full Width */}
              <div className="col-span-3 space-y-1">
                <Label htmlFor="notes" className="text-xs">Notes:</Label>
                <Textarea
                  id="notes"
                  rows={2}
                  className="text-xs"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add any additional notes..."
                />
              </div>

              {/* Certificate Status - Full Width */}
              <div className="col-span-3 space-y-1">
                <Label htmlFor="certificateStatus" className="text-xs">Certificate Status:</Label>
                <Select value={certificateStatus} onValueChange={setCertificateStatus}>
                  <SelectTrigger id="certificateStatus" className="h-8 text-xs">
                    <SelectValue placeholder="Select certificate status..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="received">Received</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="not-required">Not Required</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Action Buttons - Ultra Compact */}
            <div className="flex gap-1 mt-1.5">
              <IButton icon={Plus} variant="primary" size="sm" onClick={handleAddLeave}>
                Add
              </IButton>
              <IButton icon={Edit} variant="outline" size="sm">
                Edit
              </IButton>
              <IButton icon={Trash2} variant="outline" size="sm">
                Remove
              </IButton>
            </div>
          </div>

          {/* Leave Entries Table - Ultra Compact */}
          <div>
            <h3
              className="text-xs font-semibold mb-1.5"
              style={{ color: palette.neutral[700] }}
            >
              Leave Entries
            </h3>
            <div
              className="rounded overflow-hidden"
              style={{ border: `1px solid ${palette.neutral[200]}` }}
            >
              <IDataTable
                data={leaveEntries}
                columns={leaveColumns}
                showPagination={false}
              />
            </div>
          </div>
        </div>
      ),
      isValid: () => leaveEntries.length > 0,
    },
    {
      id: "step2",
      title: "Duty Tasks",
      description: "View his/her duty task(s).",
      content: (
        <div className="space-y-2">
          <div
            className="p-4 rounded text-center"
            style={{
              backgroundColor: palette.neutral[50],
              border: `2px dashed ${palette.neutral[300]}`,
            }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: palette.neutral[600] }}
            >
              No duty tasks scheduled for the selected leave period.
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: palette.neutral[500] }}
            >
              If duties are scheduled, they will appear here for reassignment.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "step3",
      title: "Missing Hours",
      description: "View missing hour(s).",
      content: (
        <div className="space-y-2">
          <div
            className="p-4 rounded text-center"
            style={{
              backgroundColor: palette.neutral[50],
              border: `2px dashed ${palette.neutral[300]}`,
            }}
          >
            <p
              className="text-sm font-medium"
              style={{ color: palette.neutral[600] }}
            >
              No missing hours detected.
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: palette.neutral[500] }}
            >
              All scheduled hours are accounted for during the leave period.
            </p>
          </div>

          {/* Summary - Ultra Compact */}
          <div
            className="p-2 rounded"
            style={{
              backgroundColor: palette.success + "10",
              border: `1px solid ${palette.success}`,
            }}
          >
            <h4
              className="font-semibold text-sm mb-1"
              style={{ color: palette.success }}
            >
              ✓ Leave Assignment Ready
            </h4>
            <p className="text-xs" style={{ color: palette.neutral[700] }}>
              All steps completed. Click <strong>Finish</strong> to complete the leave
              assignment process.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const handleComplete = () => {
    console.log("Leave wizard completed!");
    navigate("/innovacare");
  };

  const handleCancel = () => {
    navigate("/innovacare");
  };

  const handleSave = () => {
    console.log("Leave wizard saved!");
    // Save current state without completing
  };

  return (
    <div className="h-screen flex flex-col">
      <IHeader showNavigation={true} username="System" role="Administrator" />
      
      <div className="flex-1 overflow-hidden">
        <Wizard
          title="Leave Wizard"
          steps={wizardSteps}
          onComplete={handleComplete}
          onCancel={handleCancel}
          onSave={handleSave}
          showStepNumbers={true}
        />
      </div>
    </div>
  );
}
