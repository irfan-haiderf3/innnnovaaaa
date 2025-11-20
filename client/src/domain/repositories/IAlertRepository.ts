/**
 * Alert Repository Interface
 * Defines contract for alert data operations
 */

import type { Alert, PaginatedResponse, PaginationParams, FilterParams } from '../entities';

export interface IAlertRepository {
  /**
   * Get all alerts with optional filters and pagination
   */
  getAlerts(
    filters?: FilterParams,
    pagination?: PaginationParams
  ): Promise<PaginatedResponse<Alert>>;

  /**
   * Get a single alert by ID
   */
  getAlert(id: string): Promise<Alert>;

  /**
   * Create a new alert
   */
  createAlert(alert: Omit<Alert, 'id' | 'createdAt' | 'updatedAt'>): Promise<Alert>;

  /**
   * Update an existing alert
   */
  updateAlert(id: string, updates: Partial<Alert>): Promise<Alert>;

  /**
   * Delete an alert
   */
  deleteAlert(id: string): Promise<void>;

  /**
   * Mark alert as read
   */
  markAsRead(id: string): Promise<void>;

  /**
   * Disable/Enable alert
   */
  toggleDisable(id: string, disabled: boolean): Promise<void>;

  /**
   * Snooze alert until specified date
   */
  snoozeAlert(id: string, until: string): Promise<void>;

  /**
   * Get alerts count by type
   */
  getAlertCounts(): Promise<Record<string, number>>;
}
