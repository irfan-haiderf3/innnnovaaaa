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

  // Main menu items for inline display
  const mainMenuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/planboardv3", label: "Plan Board", icon: LayoutDashboard },
  ];

  return (
    <>
      {/* Single Unified Header Row */}
      <div
        className="border-b"
        style={{
          background: `linear-gradient(135deg, ${theme.colors.primary[500]} 0%, ${theme.colors.primary[700]} 100%)`,
          minHeight: "56px",
          borderBottomColor: "rgba(255,255,255,0.15)",
        }}
      >
        <div className="flex items-center justify-between px-4 py-2 gap-2">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Logo size="sm" />
          </div>

          {/* Main Navigation - Inline */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 mx-2">
            {mainMenuItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 gap-1.5 hover:bg-white/20 rounded-md text-white transition-all"
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-xs font-medium hidden xl:inline">{item.label}</span>
                </Button>
              </Link>
            ))}

            {/* Scheduling Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 gap-1.5 hover:bg-white/20 rounded-md text-white transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  <span className="text-xs font-medium hidden xl:inline">Scheduling</span>
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

            {/* Clients Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 gap-1.5 hover:bg-white/20 rounded-md text-white transition-all"
                >
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-medium hidden xl:inline">Clients</span>
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

            {/* More Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 px-3 gap-1.5 hover:bg-white/20 rounded-md text-white transition-all"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span className="text-xs font-medium hidden xl:inline">More</span>
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
                <DropdownMenuItem>
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* User Section */}
          <div className="flex items-center gap-2 flex-shrink-0">
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
              className="hidden md:flex items-center gap-1 px-2 py-0.5 text-xs bg-white/10 border-white/20 text-white backdrop-blur-sm"
            >
              <User className="h-3 w-3" />
              {username}
            </Badge>

            {/* Role Badge */}
            <Badge
              className="hidden md:flex items-center gap-1 px-2 py-0.5 text-xs font-semibold"
              style={{
                backgroundColor: isSuperAdmin ? "white" : "rgba(255, 255, 255, 0.2)",
                color: isSuperAdmin ? theme.colors.primary[700] : "white",
              }}
            >
              {isSuperAdmin && <Shield className="h-3 w-3" />}
              {role}
            </Badge>

            {/* User Menu (Desktop) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex h-8 w-8 rounded-md p-0 text-white hover:bg-white/20 transition-all"
                >
                  <User className="h-4 w-4" />
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
              className="lg:hidden h-8 w-8 p-0 text-white hover:bg-white/20 rounded-md transition-all"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-5 w-5" />
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
