import { useState } from "react";
import { 
  Menu, X, Shield, User, Settings, LogOut, Palette,
  LayoutDashboard, Calendar, Users, FileText, 
  Activity, Stethoscope, ClipboardList, BarChart3,
  Bell, MessageSquare, HelpCircle, Home
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { useTheme } from "@/contexts/ThemeContext";
import { colorSchemes, type ThemeScheme } from "@/lib/theme-config";
import { Link } from "wouter";

interface ModernHeaderProps {
  username?: string;
  role?: string;
  isSuperAdmin?: boolean;
  onMenuClick?: () => void;
}

export default function ModernHeader({
  username = "John Admin",
  role = "System Admin",
  isSuperAdmin = true,
  onMenuClick,
}: ModernHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentScheme, theme, setScheme } = useTheme();

  const handleThemeChange = (scheme: ThemeScheme) => {
    setScheme(scheme);
  };

  return (
    <>
      {/* Top Section - Logo and User Info */}
      <div
        className="border-b shadow-lg"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.primary[700]} 100%)`,
          minHeight: "64px",
        }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Logo size="md" />
          </div>

          {/* User Info Section */}
          <div className="flex items-center gap-4">
            {/* Theme Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 text-white hover:bg-white/20 rounded-lg transition-all"
                  title="Change Theme"
                >
                  <Palette className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Color Scheme</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {Object.entries(colorSchemes).map(([key, scheme]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => handleThemeChange(key as ThemeScheme)}
                    className={currentScheme === key ? "bg-accent" : ""}
                  >
                    <div className="flex items-center gap-2 w-full">
                      <div
                        className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: scheme.primary[500] }}
                      />
                      <span className="flex-1">{scheme.name}</span>
                      {currentScheme === key && (
                        <span className="text-xs text-primary">✓</span>
                      )}
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Badge */}
            <Badge
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm bg-white/10 border-white/20 text-white backdrop-blur-sm"
            >
              <User className="h-4 w-4" />
              {username}
            </Badge>

            {/* Role Badge */}
            <Badge
              className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-semibold shadow-lg"
              style={{
                backgroundColor: isSuperAdmin ? "white" : "rgba(255, 255, 255, 0.2)",
                color: isSuperAdmin ? theme.colors.primary[700] : "white",
              }}
            >
              {isSuperAdmin && <Shield className="h-4 w-4" />}
              {role}
            </Badge>

            {/* User Menu (Desktop) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex h-10 w-10 rounded-full p-0 text-white hover:bg-white/20 transition-all shadow-md hover:shadow-lg"
                >
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-10 w-10 p-0 text-white hover:bg-white/20 rounded-lg transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Navigation Bar */}
      <div
        className="border-b bg-white/95 backdrop-blur-sm shadow-md"
        style={{ minHeight: "56px" }}
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Main Navigation Menu */}
          <nav className="flex items-center gap-2">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="h-10 px-4 gap-2 hover:bg-accent rounded-lg transition-all"
                style={{ color: theme.colors.primary[700] }}
              >
                <Home className="h-5 w-5" />
                <span className="font-semibold text-sm hidden md:inline">Home</span>
              </Button>
            </Link>
            
            <Link href="/planboardv3">
              <Button
                variant="ghost"
                size="sm"
                className="h-10 px-4 gap-2 hover:bg-accent rounded-lg transition-all"
                style={{ color: theme.colors.primary[700] }}
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="font-semibold text-sm hidden md:inline">Plan Board</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 px-4 gap-2 hover:bg-accent rounded-lg transition-all"
                  style={{ color: theme.colors.primary[700] }}
                >
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold text-sm hidden md:inline">Scheduling</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ClipboardList className="mr-2 h-4 w-4" />
                  Task Management
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Activity className="mr-2 h-4 w-4" />
                  Staff Schedule
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 px-4 gap-2 hover:bg-accent rounded-lg transition-all"
                  style={{ color: theme.colors.primary[700] }}
                >
                  <Users className="h-5 w-5" />
                  <span className="font-semibold text-sm hidden md:inline">Clients</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Users className="mr-2 h-4 w-4" />
                  Client List
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  Care Plans
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Stethoscope className="mr-2 h-4 w-4" />
                  Medical Records
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-10 px-4 gap-2 hover:bg-accent rounded-lg transition-all"
                  style={{ color: theme.colors.primary[700] }}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-semibold text-sm hidden md:inline">Reports</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Analytics Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  Care Reports
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Activity className="mr-2 h-4 w-4" />
                  Performance Metrics
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 relative rounded-lg hover:bg-accent transition-all"
              title="Notifications"
            >
              <Bell className="h-5 w-5" style={{ color: theme.colors.primary[700] }} />
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 bg-red-500 rounded-full animate-pulse shadow-lg"></span>
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 rounded-lg hover:bg-accent transition-all"
              title="Messages"
            >
              <MessageSquare className="h-5 w-5" style={{ color: theme.colors.primary[700] }} />
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0 rounded-lg hover:bg-accent transition-all"
              title="Help"
            >
              <HelpCircle className="h-5 w-5" style={{ color: theme.colors.primary[700] }} />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="right" className="w-80">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            {/* User Info Mobile */}
            <div className="flex flex-col gap-2 pb-4 border-b">
              <Badge variant="outline" className="w-fit">
                <User className="h-3 w-3 mr-1" />
                {username}
              </Badge>
              <Badge
                className="w-fit"
                style={{
                  backgroundColor: theme.colors.primary[500],
                  color: "white",
                }}
              >
                {isSuperAdmin && <Shield className="h-3 w-3 mr-1" />}
                {role}
              </Badge>
            </div>

            {/* Navigation Links Mobile */}
            <div>
              <h3 className="text-sm font-semibold mb-2">Navigation</h3>
              <div className="space-y-1">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Button>
                </Link>
                <Link href="/planboardv3" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Plan Board
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Calendar className="mr-2 h-4 w-4" />
                  Scheduling
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Clients
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Reports
                </Button>
              </div>
            </div>

            {/* Theme Selector Mobile */}
            <div className="pt-4 border-t">
              <h3 className="text-sm font-semibold mb-2">Color Scheme</h3>
              <div className="space-y-2">
                {Object.entries(colorSchemes).map(([key, scheme]) => (
                  <Button
                    key={key}
                    variant={currentScheme === key ? "default" : "outline"}
                    size="sm"
                    className="w-full justify-start gap-2"
                    onClick={() => {
                      handleThemeChange(key as ThemeScheme);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <div
                      className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: scheme.primary[500] }}
                    />
                    {scheme.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
