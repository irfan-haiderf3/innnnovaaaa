/**
 * ============================================================================
 * DOMAIN ENTITIES
 * ============================================================================
 * 
 * Core business entities for the HealthBridge application.
 * These represent the fundamental concepts in the healthcare domain.
 */

// ============================================================================
// BASE TYPES
// ============================================================================

export type UUID = string;
export type Timestamp = string; // ISO 8601 format

// ============================================================================
// PATIENT ENTITY
// ============================================================================

export interface Patient {
  id: UUID;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email?: string;
  phone?: string;
  address?: Address;
  status: PatientStatus;
  coordinator?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type PatientStatus = 
  | 'active'
  | 'inactive'
  | 'discharged'
  | 'deceased';

// ============================================================================
// ALERT ENTITY
// ============================================================================

export interface Alert {
  id: UUID;
  type: AlertType;
  category: AlertCategory;
  priority: AlertPriority;
  title: string;
  description: string;
  patientId?: UUID;
  staffId?: UUID;
  isRead: boolean;
  isDisabled: boolean;
  isSnoozed: boolean;
  snoozeUntil?: Timestamp;
  dueDate?: Timestamp;
  coordinator?: string;
  metadata?: Record<string, any>;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type AlertType =
  | 'home-help'
  | 'client-review'
  | 'client-birthday'
  | 'assessment-due'
  | 'client-off-service'
  | 'visa-expiry'
  | 'appraisal-due'
  | 'pending-training'
  | 'training-expiry'
  | 'license-expiry'
  | 'insurance-expiry'
  | 'carer-contract'
  | 'finishing-schedules'
  | 'unassigned-tasks'
  | 'po-number'
  | 'staff-leave'
  | 'complaints'
  | 'wof-expiry'
  | 'screening'
  | 'referral'
  | 'anniversary'
  | 'over-allocated'
  | 'under-allocated'
  | 'deceased';

export type AlertCategory =
  | 'task'
  | 'event'
  | 'document'
  | 'training'
  | 'leave'
  | 'assessment'
  | 'compliance';

export type AlertPriority =
  | 'low'
  | 'medium'
  | 'high'
  | 'urgent'
  | 'critical';

// ============================================================================
// APPOINTMENT/SCHEDULE ENTITY
// ============================================================================

export interface Appointment {
  id: UUID;
  patientId: UUID;
  caregiverId: UUID;
  serviceType: ServiceType;
  status: AppointmentStatus;
  scheduledStart: Timestamp;
  scheduledEnd: Timestamp;
  actualStart?: Timestamp;
  actualEnd?: Timestamp;
  location?: string;
  notes?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type ServiceType =
  | 'personal-care'
  | 'medical-care'
  | 'companionship'
  | 'housekeeping'
  | 'meal-preparation'
  | 'transportation'
  | 'medication-management';

export type AppointmentStatus =
  | 'scheduled'
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'no-show'
  | 'unassigned';

// ============================================================================
// STAFF/CAREGIVER ENTITY
// ============================================================================

export interface Staff {
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: StaffRole;
  status: StaffStatus;
  qualifications: Qualification[];
  availability?: Availability[];
  hireDate: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type StaffRole =
  | 'administrator'
  | 'coordinator'
  | 'caregiver'
  | 'nurse'
  | 'therapist'
  | 'support-staff';

export type StaffStatus =
  | 'active'
  | 'on-leave'
  | 'suspended'
  | 'terminated';

export interface Qualification {
  id: UUID;
  type: string;
  name: string;
  issueDate: string;
  expiryDate?: string;
  isValid: boolean;
}

export interface Availability {
  dayOfWeek: DayOfWeek;
  startTime: string; // HH:mm format
  endTime: string;
}

export type DayOfWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday';

// ============================================================================
// DOCUMENT ENTITY
// ============================================================================

export interface Document {
  id: UUID;
  title: string;
  type: DocumentType;
  category: DocumentCategory;
  patientId?: UUID;
  staffId?: UUID;
  fileUrl: string;
  mimeType: string;
  fileSize: number;
  uploadedBy: UUID;
  expiryDate?: string;
  status: DocumentStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export type DocumentType =
  | 'assessment'
  | 'care-plan'
  | 'consent-form'
  | 'medical-record'
  | 'insurance'
  | 'contract'
  | 'license'
  | 'certification'
  | 'report'
  | 'other';

export type DocumentCategory =
  | 'patient'
  | 'staff'
  | 'operational'
  | 'compliance';

export type DocumentStatus =
  | 'draft'
  | 'pending-review'
  | 'approved'
  | 'rejected'
  | 'archived'
  | 'expired';

// ============================================================================
// SHARED VALUE OBJECTS
// ============================================================================

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'mobile';
  value: string;
  isPrimary: boolean;
}

export interface Note {
  id: UUID;
  content: string;
  authorId: UUID;
  createdAt: Timestamp;
}

// ============================================================================
// FILTER & PAGINATION TYPES
// ============================================================================

export interface PaginationParams {
  page: number;
  pageSize: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface FilterParams {
  dateFrom?: string;
  dateTo?: string;
  status?: string[];
  search?: string;
  [key: string]: any;
}

// ============================================================================
// ANALYTICS & METRICS
// ============================================================================

export interface Metric {
  label: string;
  value: number | string;
  change?: number;
  trend?: 'up' | 'down' | 'stable';
  icon?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    color?: string;
  }[];
}
