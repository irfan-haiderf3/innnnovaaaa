/**
 * ============================================================================
 * MODERN DASHBOARD PAGE
 * ============================================================================
 * 
 * Comprehensive example showcasing the modernized HealthBridge design system.
 * Demonstrates:
 * - Design tokens usage
 * - Atomic component library
 * - Scroll-less dashboard layout
 * - High-density, efficient UI
 * - Clean architecture patterns
 * 
 * @page ModernDashboard
 */

import React, { useState } from 'react';
import { TOKENS, initializeTheme } from '@/design-system';
import { IHeader } from '@/components/innovacare';
import {
  DashboardLayout,
  DashboardHeader,
  DashboardFilters,
  DashboardMetrics,
  DashboardToolbar,
  DashboardContent,
} from '@/components/templates';
import { Button, Input } from '@/components/atoms';
import { IDataTable, cellRenderers } from '@/components/innovacare';
import type { TableColumn } from '@/components/innovacare';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import AppFooter from '@/components/Footer';
import {
  Users,
  Calendar,
  FileText,
  AlertCircle,
  CheckCircle,
  Clock,
  Search,
  RefreshCcw,
  XCircle,
  Briefcase,
} from 'lucide-react';

// ============================================================================
// MOCK DATA
// ============================================================================

const quickActions = [
  { id: 'home_help_leave', label: 'Home Help Leave', icon: Briefcase },
  { id: 'home_help_birthday', label: 'Home Help Birthday', icon: Calendar },
  { id: 'client_review', label: 'Client Review', icon: FileText },
  { id: 'client_birthday', label: 'Client Birthday', icon: Calendar },
  { id: 'assessment_due', label: 'Assessment Due', icon: CheckCircle },
  { id: 'client_off_service', label: 'Client Off Service', icon: XCircle },
  { id: 'visa_expiry', label: 'Visa Expiry', icon: FileText },
  { id: 'appraisal_due', label: 'Appraisal Due', icon: FileText },
  { id: 'pending_training', label: 'Pending Training', icon: Clock },
  { id: 'training_expiry', label: 'Training Expiry', icon: Clock },
  { id: 'license_expiry', label: 'License Expiry', icon: FileText },
  { id: 'insurance_expiry', label: 'Insurance Expiry', icon: FileText },
  { id: 'carer_contract_end_due', label: 'Carer Contract End Date Due', icon: AlertCircle },
  { id: 'finishing_schedules', label: 'Finishing Schedules', icon: Clock },
  { id: 'unassigned_tasks', label: 'Un-Assigned Tasks', icon: Users },
  { id: 'po_number_missing', label: 'PO Number Missing', icon: FileText },
  { id: 'staff_leave', label: 'Staff Leave', icon: Calendar },
  { id: 'id_card_expiry', label: 'ID Card Expiry', icon: FileText },
  { id: 'overlapping_back_to_back', label: 'Overlapping/Back to Back', icon: AlertCircle },
  { id: 'health_screening_check', label: 'Health Screening Check', icon: CheckCircle },
  { id: 'new_referral', label: 'New Referral', icon: FileText },
  { id: 'work_anniversary', label: 'Work Anniversary', icon: Calendar },
  { id: 'equipment_review', label: 'Equipment Review', icon: FileText },
  { id: 'hazards_checklist', label: 'Hazards Checklist', icon: AlertCircle },
  { id: 'open_complaints', label: 'Open Complaints', icon: AlertCircle },
  { id: 'chart_expiry', label: 'Chart Expiry', icon: FileText },
  { id: 'over_allocated', label: 'Over Allocated', icon: AlertCircle },
  { id: 'under_allocated', label: 'Under Allocated', icon: AlertCircle },
  { id: 'wof_expiry', label: 'WOF Expiry', icon: FileText },
  { id: 'registration_expiry', label: 'Registration Expiry', icon: FileText },
  { id: 'deceased_client', label: 'Deceased Client', icon: XCircle },
  { id: 'exceeding_off_services', label: 'Exceeding Off Services', icon: AlertCircle },
  { id: 'acc_casemix', label: 'ACC-Casemix', icon: FileText },
  { id: 'clearance', label: 'Clearance', icon: FileText },
  { id: 'ref_contract_end_due', label: 'Ref/Contract End Date Due', icon: AlertCircle },
];

type DashboardRow = {
  id: string;
  date: string; // yyyy-mm-dd
  office: 'north' | 'south' | 'east' | 'west';
  group: 'all' | 'a' | 'b' | 'c';
  read: boolean;
  disable: boolean;
  disableAll: boolean;
  snooze: boolean;
  alertType: string;
  type: string;
  firstName: string;
  surname: string;
  description: string;
  coordinator: string;
  other?: string;
  readBy?: string;
};

const rows: DashboardRow[] = [
  { id: '2-2-28781', date: '2025-03-02', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'Aidan', surname: 'Adam', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28782', date: '2025-03-05', office: 'north', group: 'a', read: true, disable: false, disableAll: false, snooze: true, alertType: 'Carer leave', type: 'Carer Leave', firstName: 'Arandeep', surname: 'Kaur', description: 'On leave (Sick Leave) from 14/05/2025', coordinator: '', other: '', readBy: 'Coordinator' },
  { id: '2-2-28783', date: '2025-03-08', office: 'south', group: 'b', read: false, disable: false, disableAll: false, snooze: false, alertType: 'AN test', type: 'AN test', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28784', date: '2025-03-10', office: 'east', group: 'b', read: false, disable: true, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'Aidan', surname: 'Adam', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28785', date: '2025-03-12', office: 'west', group: 'c', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'Aidan', surname: 'Adam', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28786', date: '2025-03-14', office: 'west', group: 'c', read: false, disable: false, disableAll: true, snooze: false, alertType: 'Documentation', type: 'Missing document', firstName: 'Alice', surname: 'Brown', description: 'Missing CPR certificate', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28787', date: '2025-03-16', office: 'south', group: 'b', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Appointment', type: 'Reminder', firstName: 'Jane', surname: 'Smith', description: 'Appointment reminder', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28788', date: '2025-03-20', office: 'east', group: 'a', read: true, disable: false, disableAll: false, snooze: false, alertType: 'Assessment', type: 'Overdue', firstName: 'Bob', surname: 'Johnson', description: 'Assessment overdue', coordinator: '', other: '', readBy: 'Supervisor' },
  { id: '2-2-28831', date: '2025-03-21', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'Aidan', surname: '', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-22', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-23', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-24', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-25', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-26', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-27', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-28', office: 'north', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'AN', surname: 'test', description: 'Carer Unassigned', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28831', date: '2025-03-29', office: 'south', group: 'b', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Training expiry', type: 'Training Expiry', firstName: 'Marcus', surname: 'Lee', description: 'First Aid certification expires 15/04/2025', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28832', date: '2025-03-30', office: 'east', group: 'c', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Client birthday', type: 'Client Birthday', firstName: 'Jennifer', surname: 'Taylor', description: 'Birthday on 05/04/2025', coordinator: 'Kiran', other: '', readBy: '' },
  { id: '2-2-28833', date: '2025-04-01', office: 'west', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Assessment due', type: 'Assessment Due', firstName: 'Hannah', surname: 'Brazil', description: 'Annual assessment due', coordinator: 'Hannah Brazil', other: '', readBy: '' },
  { id: '2-2-28834', date: '2025-04-02', office: 'north', group: 'b', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Visa expiry', type: 'Visa Expiry', firstName: 'Frederick', surname: 'Account', description: 'Work visa expires 20/04/2025', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28835', date: '2025-04-03', office: 'south', group: 'c', read: false, disable: false, disableAll: false, snooze: false, alertType: 'License expiry', type: 'License Expiry', firstName: 'Sarah', surname: 'Williams', description: 'Nursing license renewal required', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28836', date: '2025-04-04', office: 'east', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Equipment review', type: 'Equipment Review', firstName: 'Michael', surname: 'Brown', description: 'Wheelchair maintenance check needed', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28837', date: '2025-04-05', office: 'west', group: 'b', read: false, disable: false, disableAll: false, snooze: false, alertType: 'New referral', type: 'New Referral', firstName: 'Judy', surname: 'Charlton', description: 'New client referral received', coordinator: '', other: '', readBy: '' },
  { id: '2-2-28838', date: '2025-04-06', office: 'north', group: 'c', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Client off service', type: 'Client Off Service', firstName: 'Patricia', surname: 'Makwana', description: 'Client scheduled off service 10/04/2025', coordinator: '', other: '', readBy: '' },
  { id: '64-27-5348517', date: '2025-04-07', office: 'south', group: 'a', read: false, disable: false, disableAll: false, snooze: false, alertType: 'New test client', type: 'New Test', firstName: 'New', surname: 'test client', description: 'New client setup required', coordinator: '', other: '', readBy: '' },
  { id: '64-21-2013492', date: '2025-04-08', office: 'east', group: 'b', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Carer unassigned', type: 'Carer unassigned', firstName: 'Kiran', surname: '', description: 'Multiple shifts unassigned', coordinator: '', other: '', readBy: '' },
  { id: '64-21-2013492', date: '2025-04-09', office: 'west', group: 'c', read: false, disable: false, disableAll: false, snooze: false, alertType: 'Insurance expiry', type: 'Insurance Expiry', firstName: 'David', surname: 'Chen', description: 'Vehicle insurance renewal due', coordinator: '', other: '', readBy: '' },
];

// ============================================================================
// PAGE COMPONENT
// ============================================================================

export default function ModernDashboard() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateFrom, setDateFrom] = useState('2025-01-01');
  const [dateTo, setDateTo] = useState('2025-01-31');
  const [office, setOffice] = useState<'all' | 'north' | 'south' | 'east' | 'west'>('all');
  const [group, setGroup] = useState<'all' | 'a' | 'b' | 'c'>('all');
  const [loadDisabled, setLoadDisabled] = useState(false);
  const [loadRead, setLoadRead] = useState(false);

  // Initialize theme on mount
  React.useEffect(() => {
    initializeTheme();
    document.title = 'Dashboard - HealthBridge';
  }, []);

  // Filter rows based on filters and search
  const filteredRows = rows.filter((row) => {
    const inDateRange = (!dateFrom || row.date >= dateFrom) && (!dateTo || row.date <= dateTo);
    const matchesOffice = office === 'all' || row.office === office;
    const matchesGroup = group === 'all' || row.group === group;
    const matchesDisabled = loadDisabled ? true : (!row.disable && !row.disableAll);
    const matchesRead = loadRead ? true : !row.read;
    const actionLabel = activeFilter ? (quickActions.find(a => a.id === activeFilter)?.label.toLowerCase() || '') : '';
    const matchesAction = !activeFilter || row.alertType.toLowerCase().includes(actionLabel) || row.type.toLowerCase().includes(actionLabel);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = q === '' || [row.id, row.firstName, row.surname, row.description, row.alertType, row.type]
      .join(' ') 
      .toLowerCase()
      .includes(q);
    return inDateRange && matchesOffice && matchesGroup && matchesDisabled && matchesRead && matchesAction && matchesSearch;
  });

  // ============================================================================
  // RENDER SECTIONS
  // ============================================================================

  // Header - use global IHeader within sticky DashboardHeader to avoid double 100vh
  const renderHeader = () => (
    <DashboardHeader height="auto">
      <IHeader showNavigation={true} username="System" role="Administrator" sticky={false} />
    </DashboardHeader>
  );

  // Filters
  const renderFilters = () => (
    <DashboardFilters>
      <div style={{ display: 'flex', alignItems: 'end', gap: TOKENS.spacing[3], flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing[1] }}>
          <label
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              fontWeight: TOKENS.typography.fontWeight.semibold,
              color: TOKENS.color.neutral[600],
            }}
          >
            Date From
          </label>
          <Input
            type="date"
            size="sm"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing[1] }}>
          <label
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              fontWeight: TOKENS.typography.fontWeight.semibold,
              color: TOKENS.color.neutral[600],
            }}
          >
            Date To
          </label>
          <Input
            type="date"
            size="sm"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing[1] }}>
          <label
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              fontWeight: TOKENS.typography.fontWeight.semibold,
              color: TOKENS.color.neutral[600],
            }}
          >
            Office
          </label>
          <div style={{ minWidth: 160 }}>
            <Select value={office} onValueChange={(v) => setOffice(v as any)}>
              <SelectTrigger className="h-7 text-xs">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="north">North</SelectItem>
                <SelectItem value="south">South</SelectItem>
                <SelectItem value="east">East</SelectItem>
                <SelectItem value="west">West</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing[1] }}>
          <label
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              fontWeight: TOKENS.typography.fontWeight.semibold,
              color: TOKENS.color.neutral[600],
            }}
          >
            Group
          </label>
          <div style={{ minWidth: 120 }}>
            <Select value={group} onValueChange={(v) => setGroup(v as any)}>
              <SelectTrigger className="h-7 text-xs">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="a">A</SelectItem>
                <SelectItem value="b">B</SelectItem>
                <SelectItem value="c">C</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: TOKENS.spacing[1] }}>
          <label
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              fontWeight: TOKENS.typography.fontWeight.semibold,
              color: TOKENS.color.neutral[600],
            }}
          >
            Alert
          </label>
          <div style={{ minWidth: 200 }}>
            <Select value={activeFilter ?? 'all'} onValueChange={(v) => setActiveFilter(v === 'all' ? null : v)}>
              <SelectTrigger className="h-7 text-xs">
                <SelectValue placeholder="All" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {quickActions.map((a) => (
                  <SelectItem key={a.id} value={a.id}>{a.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Input
          type="text"
          size="sm"
          placeholder="Search alerts..."
          iconBefore={Search}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: TOKENS.spacing[2], marginLeft: TOKENS.spacing[4] }}>
          <label className="inline-flex items-center gap-2 text-xs" style={{ color: TOKENS.color.neutral[600] }}>
            <Checkbox checked={loadDisabled} onCheckedChange={(v) => setLoadDisabled(Boolean(v))} /> Load Disabled Alerts
          </label>
          <label className="inline-flex items-center gap-2 text-xs" style={{ color: TOKENS.color.neutral[600] }}>
            <Checkbox checked={loadRead} onCheckedChange={(v) => setLoadRead(Boolean(v))} /> Load Read Alerts
          </label>
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', gap: TOKENS.spacing[2] }}>
          <Button variant="primary" size="sm" iconBefore={Search}>
            Search
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconBefore={RefreshCcw}
            onClick={() => {
              setActiveFilter(null);
              setSearchQuery('');
              setDateFrom('2025-01-01');
              setDateTo('2025-01-31');
              setOffice('all');
              setGroup('all');
              setLoadDisabled(false);
              setLoadRead(false);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </DashboardFilters>
  );

  // Metrics (repurposed as Quick Actions grid)
  const renderMetrics = () => (
    <DashboardMetrics>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: TOKENS.spacing[2] }}>
        {quickActions.map((action) => (
          <Button
            key={action.id}
            size="sm"
            variant={activeFilter === action.id ? 'primary' : 'outline'}
            iconBefore={action.icon}
            onClick={() => setActiveFilter(activeFilter === action.id ? null : action.id)}
            style={{
              fontSize: TOKENS.typography.fontSize.xs,
              padding: `${TOKENS.spacing[1.5]} ${TOKENS.spacing[3]}`,
            }}
          >
            {action.label}
          </Button>
        ))}
      </div>
    </DashboardMetrics>
  );

  // Toolbar - options styled as subtle links (no icons), remove right-side icon group
  const renderToolbar = () => (
    <DashboardToolbar>
      <div style={{ display: 'flex', gap: TOKENS.spacing[3], alignItems: 'center' }}>
        <Button variant="ghost" size="sm" style={{ color: TOKENS.color.neutral[700] }}>Preview</Button>
        <Button variant="ghost" size="sm" style={{ color: TOKENS.color.neutral[700] }}>Column Options</Button>
        <Button variant="ghost" size="sm" style={{ color: TOKENS.color.neutral[700] }}>Save Layout</Button>
        <Button variant="ghost" size="sm" style={{ color: TOKENS.color.neutral[700] }}>Clear Layout</Button>
      </div>
      <div style={{ marginLeft: 'auto', fontSize: TOKENS.typography.fontSize.sm, color: TOKENS.color.neutral[600] }}>
        Showing <strong>{filteredRows.length}</strong> of <strong>{rows.length}</strong> records
        {activeFilter && ` • Filter: ${quickActions.find(a => a.id === activeFilter)?.label}`}
      </div>
    </DashboardToolbar>
  );

  // Content
  const renderContent = () => (
    <DashboardContent>
      <div
        style={{
          backgroundColor: TOKENS.color.neutral[0],
          borderRadius: TOKENS.borderRadius.lg,
          border: `1px solid ${TOKENS.color.neutral[200]}`,
          overflow: 'hidden',
        }}
      >
        {(() => {
          const columns: TableColumn<DashboardRow>[] = [
            { key: 'id', label: 'ID', sortable: true, width: '140px' },
            { key: 'date', label: 'Alert Date', sortable: true, width: '120px' },
            { key: 'disable', label: 'Disable', width: '90px', render: (v) => cellRenderers.boolean(Boolean(v)) },
            { key: 'disableAll', label: 'Disable All', width: '110px', render: (v) => cellRenderers.boolean(Boolean(v)) },
            { key: 'alertType', label: 'Alert Type', width: '160px', render: (v) => cellRenderers.badge(String(v), 'accent') },
            { key: 'type', label: 'Type', width: '160px' },
            { key: 'firstName', label: 'First Name', sortable: true, width: '140px' },
            { key: 'surname', label: 'Surname', sortable: true, width: '140px' },
            { key: 'readBy', label: 'Read By', width: '140px' },
            { key: 'description', label: 'Description', width: 'auto' },
            { key: 'coordinator', label: 'Coordinator', width: '140px' },
            { key: 'other', label: 'Other', width: '120px' },
          ];
          return (
            <IDataTable<DashboardRow>
              data={filteredRows}
              columns={columns}
              pageSize={10}
              showPagination={true}
            />
          );
        })()}
      </div>
    </DashboardContent>
  );

  // Footer (shared Planboard-style footer)
  const renderFooter = () => <AppFooter />;

  // ============================================================================
  // MAIN RENDER
  // ============================================================================

  return (
    <DashboardLayout
      header={renderHeader()}
      filters={renderFilters()}
      metrics={renderMetrics()}
      toolbar={renderToolbar()}
      content={renderContent()}
      footer={renderFooter()}
      footerSeparator={false}
    />
  );
}
