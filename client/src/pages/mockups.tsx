import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/contexts/ThemeContext";
import { colorSchemes, type ThemeScheme } from "@/lib/theme-config";
import ModernHeader from "@/components/ModernHeader";
import {
  Users,
  Calendar,
  Activity,
  TrendingUp,
  Clock,
  MapPin,
  Plus,
  Download,
} from "lucide-react";

export default function MockupsPage() {
  const { theme, currentScheme, setScheme } = useTheme();
  const [selectedScheme, setSelectedScheme] = useState<ThemeScheme>(currentScheme);

  const handleSchemeChange = (scheme: ThemeScheme) => {
    setSelectedScheme(scheme);
    setScheme(scheme);
  };

  // Sample data for dashboard cards
  const dashboardStats = [
    { label: "Active Patients", value: "248", icon: Users, color: theme.colors.primary[500] },
    { label: "Today's Appointments", value: "32", icon: Calendar, color: theme.status.inProgress },
    { label: "Care Tasks", value: "156", icon: Activity, color: theme.status.assigned },
    { label: "Completion Rate", value: "94%", icon: TrendingUp, color: theme.status.completed },
  ];

  const recentActivities = [
    { patient: "John Smith", action: "Morning Care", time: "09:00 AM", status: "Completed" },
    { patient: "Mary Wilson", action: "Nursing Visit", time: "11:00 AM", status: "In Progress" },
    { patient: "Robert Taylor", action: "Companionship", time: "01:00 PM", status: "Assigned" },
    { patient: "Patricia Brown", action: "Medication Support", time: "06:00 PM", status: "Delayed" },
  ];

  const statusColorMap: Record<string, string> = {
    "Completed": theme.status.completed,
    "In Progress": theme.status.inProgress,
    "Assigned": theme.status.assigned,
    "Delayed": theme.status.delayed,
  };

  return (
    <div className="flex flex-col h-screen" style={{ backgroundColor: theme.colors.neutral[50] }}>
      <ModernHeader username="Demo User" role="Administrator" isSuperAdmin={true} />

      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Page Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold" style={{ color: theme.colors.neutral[900] }}>
              Color Scheme Mockups
            </h1>
            <p className="text-sm" style={{ color: theme.colors.neutral[600] }}>
              Interactive demonstration of HealthBridge's 3 professional color schemes
            </p>
          </div>

          {/* Theme Selector */}
          <Card style={{ borderColor: theme.colors.neutral[200] }}>
            <CardHeader>
              <CardTitle className="text-lg">Select Color Scheme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(colorSchemes).map(([key, scheme]) => (
                  <button
                    key={key}
                    onClick={() => handleSchemeChange(key as ThemeScheme)}
                    className={`p-4 rounded-lg border-2 transition-all hover:shadow-md ${
                      selectedScheme === key ? "border-current shadow-lg" : "border-gray-200"
                    }`}
                    style={{
                      borderColor: selectedScheme === key ? scheme.primary[500] : undefined,
                    }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-full shadow-md"
                          style={{ backgroundColor: scheme.primary[500] }}
                        />
                        <div className="text-left">
                          <h3 className="font-semibold text-base">{scheme.name}</h3>
                          <p className="text-xs text-gray-500">{key}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div
                          className="h-8 flex-1 rounded"
                          style={{ backgroundColor: scheme.primary[400] }}
                        />
                        <div
                          className="h-8 flex-1 rounded"
                          style={{ backgroundColor: scheme.primary[500] }}
                        />
                        <div
                          className="h-8 flex-1 rounded"
                          style={{ backgroundColor: scheme.primary[600] }}
                        />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Dashboard Stats - Mockup */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {dashboardStats.map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow"
                style={{ borderColor: theme.colors.neutral[200] }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{ color: theme.colors.neutral[600] }}>
                        {stat.label}
                      </p>
                      <p className="text-3xl font-bold mt-2" style={{ color: theme.colors.neutral[900] }}>
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className="p-3 rounded-full"
                      style={{ backgroundColor: `${stat.color}20` }}
                    >
                      <stat.icon className="h-6 w-6" style={{ color: stat.color }} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activities */}
            <Card style={{ borderColor: theme.colors.neutral[200] }}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="h-5 w-5" style={{ color: theme.colors.primary[600] }} />
                  Recent Activities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg"
                      style={{ backgroundColor: theme.colors.neutral[50] }}
                    >
                      <div className="flex-1">
                        <p className="font-medium text-sm" style={{ color: theme.colors.neutral[900] }}>
                          {activity.patient}
                        </p>
                        <p className="text-xs" style={{ color: theme.colors.neutral[600] }}>
                          {activity.action}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: theme.colors.neutral[500] }}>
                          {activity.time}
                        </span>
                        <Badge
                          className="text-xs"
                          style={{
                            backgroundColor: `${statusColorMap[activity.status]}20`,
                            color: statusColorMap[activity.status],
                            border: `1px solid ${statusColorMap[activity.status]}40`,
                          }}
                        >
                          {activity.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card style={{ borderColor: theme.colors.neutral[200] }}>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    className="h-20 flex-col gap-2"
                    style={{ backgroundColor: theme.colors.primary[500] }}
                  >
                    <Plus className="h-5 w-5 text-white" />
                    <span className="text-sm text-white">New Task</span>
                  </Button>
                  <Button
                    className="h-20 flex-col gap-2"
                    style={{ backgroundColor: theme.colors.secondary[500] }}
                  >
                    <Calendar className="h-5 w-5 text-white" />
                    <span className="text-sm text-white">Schedule</span>
                  </Button>
                  <Button
                    className="h-20 flex-col gap-2"
                    style={{ backgroundColor: theme.colors.accent[500] }}
                  >
                    <Users className="h-5 w-5 text-white" />
                    <span className="text-sm text-white">Clients</span>
                  </Button>
                  <Button
                    className="h-20 flex-col gap-2"
                    variant="outline"
                    style={{ borderColor: theme.colors.primary[500], color: theme.colors.primary[700] }}
                  >
                    <Download className="h-5 w-5" />
                    <span className="text-sm">Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Cards */}
          <Card style={{ borderColor: theme.colors.neutral[200] }}>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5" style={{ color: theme.colors.primary[600] }} />
                Office Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Auckland Office", "Wellington Office", "Christchurch Office"].map((location, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg border"
                    style={{ borderColor: theme.colors.neutral[200] }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="p-2 rounded"
                        style={{ backgroundColor: `${theme.colors.primary[500]}15` }}
                      >
                        <MapPin className="h-4 w-4" style={{ color: theme.colors.primary[600] }} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm" style={{ color: theme.colors.neutral[900] }}>
                          {location}
                        </h4>
                        <p className="text-xs mt-1" style={{ color: theme.colors.neutral[600] }}>
                          {15 + index * 3} Active Staff
                        </p>
                        <p className="text-xs" style={{ color: theme.colors.neutral[600] }}>
                          {42 + index * 8} Patients
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Color Palette Display */}
          <Card style={{ borderColor: theme.colors.neutral[200] }}>
            <CardHeader>
              <CardTitle className="text-lg">Current Theme Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2">Primary Colors</h4>
                  <div className="flex gap-2">
                    {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                      <div
                        key={shade}
                        className="flex-1 h-12 rounded flex items-end justify-center pb-1 text-xs font-mono"
                        style={{
                          backgroundColor: theme.colors.primary[shade as keyof typeof theme.colors.primary],
                          color: shade >= 500 ? "white" : theme.colors.neutral[900],
                        }}
                      >
                        {shade}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Status Colors</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {Object.entries({
                      Completed: theme.status.completed,
                      "In Progress": theme.status.inProgress,
                      Assigned: theme.status.assigned,
                      Delayed: theme.status.delayed,
                    }).map(([label, color]) => (
                      <div key={label} className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded" style={{ backgroundColor: color }} />
                        <span className="text-xs font-medium">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Typography Showcase */}
          <Card style={{ borderColor: theme.colors.neutral[200] }}>
            <CardHeader>
              <CardTitle className="text-lg">Typography Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h1 className="text-3xl font-bold" style={{ fontFamily: theme.typography.fontFamily.secondary }}>
                    Heading 1 - Poppins Bold
                  </h1>
                  <h2 className="text-2xl font-semibold mt-2" style={{ fontFamily: theme.typography.fontFamily.secondary }}>
                    Heading 2 - Poppins Semibold
                  </h2>
                  <h3 className="text-xl font-medium mt-2" style={{ fontFamily: theme.typography.fontFamily.secondary }}>
                    Heading 3 - Poppins Medium
                  </h3>
                </div>
                <div style={{ fontFamily: theme.typography.fontFamily.primary }}>
                  <p className="text-base" style={{ fontSize: theme.typography.fontSize.base }}>
                    Body Text - Inter Regular (14px) - This is the default text size used throughout the application for optimal readability and information density.
                  </p>
                  <p className="text-sm mt-2" style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.neutral[600] }}>
                    Small Text - Inter Regular (13px) - Used for table cells and compact form elements.
                  </p>
                  <p className="text-xs mt-2" style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.neutral[500] }}>
                    Tiny Text - Inter Regular (11px) - Used for labels and captions.
                  </p>
                </div>
                <div style={{ fontFamily: theme.typography.fontFamily.mono }}>
                  <p className="text-sm">
                    Monospace - Fira Code - Task ID: <code className="px-2 py-1 bg-gray-100 rounded">TASK-8721</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
