/**
 * ROSTER DEMO PAGE - INNOVACARE DESIGN SYSTEM
 * 
 * Showcase of the modern, beautiful roster/scheduling UI
 * Demonstrates all view modes and interactive features
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RosterView from "@/components/RosterView";
import InnovacareTheme from "@/styles/innovacare-theme";
import { 
  Calendar, 
  Users, 
  Clock, 
  TrendingUp,
  Activity,
  UserCheck,
  AlertCircle
} from "lucide-react";

const { colors, palette, spacing } = InnovacareTheme;

export default function RosterDemoPage() {
  const [rosterOpen, setRosterOpen] = useState(false);
  const [selectedTaskGroup, setSelectedTaskGroup] = useState("All Tasks");

  const stats = [
    {
      label: "Total Tasks",
      value: "24",
      change: "+12%",
      icon: Calendar,
      color: colors.primary,
      bgColor: palette.primary.light + '20'
    },
    {
      label: "Staff Assigned",
      value: "18",
      change: "+5%",
      icon: UserCheck,
      color: palette.success,
      bgColor: palette.success + '20'
    },
    {
      label: "In Progress",
      value: "8",
      change: "+3%",
      icon: Activity,
      color: colors.accent,
      bgColor: palette.accent.light + '20'
    },
    {
      label: "Pending",
      value: "3",
      change: "-2%",
      icon: AlertCircle,
      color: palette.warning,
      bgColor: palette.warning + '30'
    }
  ];

  const taskGroups = [
    { name: "Morning Care", count: 8, color: palette.success },
    { name: "Therapy Sessions", count: 6, color: colors.accent },
    { name: "Medical Assessments", count: 4, color: colors.primary },
    { name: "Group Activities", count: 6, color: palette.warning }
  ];

  return (
    <div 
      className="min-h-screen p-6" 
      style={{ backgroundColor: palette.neutral[50] }}
    >
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h1 
              className="text-3xl font-bold mb-1" 
              style={{ color: colors.primary }}
            >
              Staff Roster & Scheduling
            </h1>
            <p className="text-sm" style={{ color: palette.neutral[600] }}>
              Modern, intuitive staff scheduling and task management
            </p>
          </div>
          <Button
            size="lg"
            onClick={() => setRosterOpen(true)}
            style={{ 
              backgroundColor: colors.primary,
              color: 'white'
            }}
            className="shadow-lg hover:shadow-xl transition-shadow"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Open Full Roster
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card 
              key={index}
              className="border transition-all hover:shadow-lg cursor-pointer"
              style={{ 
                borderColor: palette.neutral[200],
                boxShadow: spacing.boxShadow.sm
              }}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium mb-1" style={{ color: palette.neutral[600] }}>
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold" style={{ color: stat.color }}>
                      {stat.value}
                    </p>
                    <p className="text-xs mt-1" style={{ color: palette.success }}>
                      {stat.change} from last week
                    </p>
                  </div>
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: stat.bgColor }}
                  >
                    <Icon className="h-6 w-6" style={{ color: stat.color }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Task Groups */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Groups Overview */}
        <Card 
          className="border"
          style={{ 
            borderColor: palette.neutral[200],
            boxShadow: spacing.boxShadow.sm,
            backgroundColor: colors.background
          }}
        >
          <CardHeader className="border-b" style={{ borderColor: palette.neutral[200] }}>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" style={{ color: colors.primary }} />
              <span style={{ color: colors.primary }}>Task Groups</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-3">
              {taskGroups.map((group, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md hover:scale-102"
                  style={{ 
                    borderColor: palette.neutral[200],
                    backgroundColor: palette.neutral[50]
                  }}
                  onClick={() => {
                    setSelectedTaskGroup(group.name);
                    setRosterOpen(true);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: group.color }}
                      />
                      <div>
                        <h3 className="font-semibold" style={{ color: palette.neutral[800] }}>
                          {group.name}
                        </h3>
                        <p className="text-xs" style={{ color: palette.neutral[600] }}>
                          {group.count} tasks scheduled
                        </p>
                      </div>
                    </div>
                    <div 
                      className="text-2xl font-bold px-3 py-1 rounded-lg"
                      style={{ 
                        color: group.color,
                        backgroundColor: group.color + '20'
                      }}
                    >
                      {group.count}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features Showcase */}
        <Card 
          className="border"
          style={{ 
            borderColor: palette.neutral[200],
            boxShadow: spacing.boxShadow.sm,
            backgroundColor: colors.background
          }}
        >
          <CardHeader className="border-b" style={{ borderColor: palette.neutral[200] }}>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" style={{ color: colors.primary }} />
              <span style={{ color: colors.primary }}>Roster Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4">
              {[
                {
                  title: "Multiple View Modes",
                  description: "Switch between Day, Week, and Month views for different perspectives",
                  icon: Calendar,
                  color: colors.primary
                },
                {
                  title: "Real-time Updates",
                  description: "Instant task status updates with color-coded visual indicators",
                  icon: Activity,
                  color: palette.success
                },
                {
                  title: "Smart Filtering",
                  description: "Search and filter tasks by status, staff, or time period",
                  icon: Users,
                  color: colors.accent
                },
                {
                  title: "Quick Actions",
                  description: "Hover over tasks for instant edit, view, and management options",
                  icon: Clock,
                  color: palette.warning
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="p-2 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: feature.color + '20' }}
                    >
                      <Icon className="h-4 w-4" style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-0.5" style={{ color: palette.neutral[800] }}>
                        {feature.title}
                      </h4>
                      <p className="text-xs" style={{ color: palette.neutral[600] }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Design Highlights */}
      <Card 
        className="border mt-6"
        style={{ 
          borderColor: palette.neutral[200],
          boxShadow: spacing.boxShadow.md,
          backgroundColor: colors.background
        }}
      >
        <CardHeader className="border-b" style={{ borderColor: palette.neutral[200] }}>
          <CardTitle style={{ color: colors.primary }}>
            Design Highlights
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold mb-2" style={{ color: colors.primary }}>
                🎨 Modern Theme
              </h4>
              <p className="text-sm" style={{ color: palette.neutral[600] }}>
                Consistent InnovaCare design system with professional healthcare colors, 
                subtle shadows, and smooth transitions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: palette.success }}>
                ⚡ Smooth Interactions
              </h4>
              <p className="text-sm" style={{ color: palette.neutral[600] }}>
                Hover effects, scale animations, and intuitive navigation create 
                a delightful user experience.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-2" style={{ color: colors.accent }}>
                📱 Responsive Design
              </h4>
              <p className="text-sm" style={{ color: palette.neutral[600] }}>
                Adapts beautifully to different screen sizes with optimized 
                layouts for desktop, tablet, and mobile.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roster Modal */}
      <RosterView
        open={rosterOpen}
        onClose={() => setRosterOpen(false)}
        taskGroup={selectedTaskGroup}
        initialView="day"
      />
    </div>
  );
}
