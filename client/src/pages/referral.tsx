import React from 'react';
import { TOKENS, initializeTheme } from '@/design-system';
import { IHeader } from '@/components/innovacare';
import {
  DashboardLayout,
  DashboardHeader,
  DashboardContent,
} from '@/components/templates';
import { Input, Button } from '@/components/atoms';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import InnovacareTheme from '@/styles/innovacare-theme';

export default function ReferralPage() {
  React.useEffect(() => {
    initializeTheme();
    document.title = 'Referral - HealthBridge';
  }, []);

  const SectionCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div
      style={{
        backgroundColor: TOKENS.color.neutral[0],
        border: `1px solid ${TOKENS.color.neutral[200]}`,
        borderRadius: TOKENS.borderRadius.md,
      }}
    >
      <div
        style={{
          padding: '4px 8px',
          borderBottom: `1px solid ${TOKENS.color.neutral[200]}`,
          fontSize: '11px',
          fontWeight: TOKENS.typography.fontWeight.bold,
          color: TOKENS.color.neutral[800],
          backgroundColor: TOKENS.color.neutral[50],
          letterSpacing: '0.3px',
          textTransform: 'uppercase' as const,
        }}
      >
        {title}
      </div>
      <div style={{ padding: '6px' }}>{children}</div>
    </div>
  );

  const Field: React.FC<{ label: string; children: React.ReactNode; minWidth?: number }> = ({ label, children, minWidth = 110 }) => (
    <div style={{ minWidth, display: 'flex', flexDirection: 'column', gap: '2px' }}>
      <Label className="text-[10px] font-medium">
        {label}
      </Label>
      {children}
    </div>
  );

  const renderHeader = () => (
    <DashboardHeader height="auto">
      <IHeader showNavigation={true} sticky={false} />
    </DashboardHeader>
  );

  const renderContent = () => (
    <DashboardContent padding={0.5}>
      <div style={{ display: 'grid', gap: '6px' }}>
        <SectionCard title="Referral Details">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, minmax(110px, 1fr))',
              gap: '6px',
            }}
          >
            <Field label="Referral No."><Input className="h-6 text-[10px]" placeholder="Auto" disabled /></Field>
            <Field label="Payer"><Input className="h-6 text-[10px]" placeholder="Enter payer" /></Field>
            <Field label="Department">
              <Select>
                <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent><SelectItem value="ns01">NS01</SelectItem></SelectContent>
              </Select>
            </Field>
            <Field label="Received">
              <Input className="h-6 text-[10px]" type="datetime-local" />
            </Field>
            <Field label="Status Date"><Input className="h-6 text-[10px]" type="date" /></Field>
            <Field label="Referral Status">
              <Select>
                <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="ACC Number"><Input className="h-6 text-[10px]" /></Field>
            <Field label="PO Number"><Input className="h-6 text-[10px]" /></Field>
            <Field label="No. of Hours/Visits"><Input className="h-6 text-[10px]" type="number" step="0.25" /></Field>
            <Field label="Date of Injury"><Input className="h-6 text-[10px]" type="date" /></Field>
            <Field label="Referral Categories">
              <Select>
                <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cat1">Category 1</SelectItem>
                  <SelectItem value="cat2">Category 2</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Group">
              <Select>
                <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="All" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Service Outcome">
              <Select>
                <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Select" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            <Field label="Goal Outcome"><Input className="h-6 text-[10px]" placeholder="Enter goal" /></Field>
            <Field label="Reason for Acceptance"><Input className="h-6 text-[10px]" placeholder="Reason" /></Field>
            <Field label="Reason for Injury"><Input className="h-6 text-[10px]" placeholder="Reason" /></Field>
            <Field label="Case Manager"><Input className="h-6 text-[10px]" /></Field>
            <Field label="Finish Date"><Input className="h-6 text-[10px]" type="date" /></Field>
            <Field label="Email"><Input className="h-6 text-[10px]" type="email" /></Field>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <label className="inline-flex items-center gap-2">
                <Checkbox className="h-3.5 w-3.5" />
                <span className="text-[10px]">Referral Extension</span>
              </label>
              <label className="inline-flex items-center gap-2">
                <Checkbox className="h-3.5 w-3.5" />
                <span className="text-[10px]">Link to Client Profile</span>
              </label>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Client Details">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1fr',
              gap: '8px',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(110px, 1fr))', gap: '6px' }}>
              <Field label="NHI Number"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Title">
                <Select>
                  <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Mr/Ms" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mr">Mr</SelectItem>
                    <SelectItem value="ms">Ms</SelectItem>
                    <SelectItem value="mrs">Mrs</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="First Name"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Middle Name"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Surname"><Input className="h-6 text-[10px]" /></Field>
              <Field label="DOB"><Input className="h-6 text-[10px]" type="date" /></Field>
              <Field label="Gender">
                <Select>
                  <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Phone No."><Input className="h-6 text-[10px]" /></Field>
              <Field label="Mobile No."><Input className="h-6 text-[10px]" /></Field>
              <Field label="Email"><Input className="h-6 text-[10px]" type="email" /></Field>
              <Field label="Ethnicity">
                <Select>
                  <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eth1">Ethnicity 1</SelectItem>
                    <SelectItem value="eth2">Ethnicity 2</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(110px, 1fr))', gap: '6px' }}>
              <Field label="Unit/House No."><Input className="h-6 text-[10px]" /></Field>
              <Field label="Fly/Building"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Street"><Input className="h-6 text-[10px]" /></Field>
              <Field label="City"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Post Code"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Type">
                <Select>
                  <SelectTrigger className="h-6 text-[10px]"><SelectValue placeholder="Service Delivery" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sd">Service Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Longitude"><Input className="h-6 text-[10px]" /></Field>
              <Field label="Latitude"><Input className="h-6 text-[10px]" /></Field>
              <div style={{ gridColumn: '1 / -1' }}>
                <Field label="Notes"><Input className="h-6 text-[10px]" placeholder="Add notes" /></Field>
              </div>
            </div>
          </div>
        </SectionCard>
      </div>
    </DashboardContent>
  );

  const renderFooter = () => (
    <div 
      style={{ 
        position: 'sticky',
        bottom: 0,
        backgroundColor: TOKENS.color.neutral[0],
        borderTop: `1px solid ${TOKENS.color.neutral[200]}`,
        padding: '8px 12px',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '6px',
        zIndex: 10
      }}
    >
      <Button variant="outline" className="h-6 text-[10px] px-3">Cancel</Button>
      <Button variant="primary" className="h-6 text-[10px] px-3" style={{ marginRight: '8px' }}>Save</Button>
    </div>
  );

  return (
    <DashboardLayout
      header={renderHeader()}
      content={renderContent()}
      footer={renderFooter()}
      footerSeparator={false}
    />
  );
}
