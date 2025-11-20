/**
 * Innovacare Header Component
 * Clean, modern header with 4-color design system
 * No gradients - flat design inspired by Healthline
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import InnovacareTheme, { getContrastText } from "@/styles/innovacare-theme";
import {
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Briefcase,
  HelpCircle,
  Wrench,
  BarChart3,
  Settings,
  LogOut,
  User,
  Users,
  Menu,
  X,
  Monitor,
  UserSquare2,
  Wallet,
  Smartphone,
  Mail,
  MapPin,
  Activity,
  TrendingUp,
  MoreHorizontal,
  ClipboardList,
} from "lucide-react";
import appLogo from "@/components/images/ic_launcher.png";

const { colors, palette, spacing, animations, components } = InnovacareTheme;

interface IHeaderProps {
  showNavigation?: boolean;
  username?: string;
  role?: string;
  /** Whether header itself should be sticky. When embedded in a sticky parent, set false to avoid overlap. */
  sticky?: boolean;
}

export default function IHeader({ 
  showNavigation = true, 
  username = "System", 
  role = "Administrator",
  sticky = true,
}: IHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  
  // Navigation items - matching the menu from the image
  const navItems = [
    { path: "/innovacare", label: "Home", icon: LayoutDashboard },
    { path: "/planboardv2", label: "Planboard", icon: ClipboardList },
    { path: "/referral", label: "Referral", icon: FileText },
    { path: "/client-profile", label: "Client Profile", icon: Users },
    { path: "/monitoring", label: "Monitoring", icon: Monitor },
    { path: "/crm", label: "CRM", icon: UserSquare2 },
    { path: "/scheduling", label: "Scheduling", icon: Calendar },
    { path: "/billing", label: "Billing", icon: DollarSign },
    { path: "/wage", label: "Wage", icon: Wallet },
    { path: "/smart-app", label: "Smart App", icon: Smartphone },
    { path: "/mail-merge", label: "Mail Merge", icon: Mail },
    { path: "/documents", label: "Documents", icon: FileText },
    { path: "/map", label: "Map", icon: MapPin },
    { path: "/maintenance", label: "Maintenance", icon: Wrench },
    { path: "/business-intelligence", label: "Business Intelligence", icon: TrendingUp },
    { path: "/setup", label: "Setup", icon: Settings },
    { path: "/help", label: "Help", icon: HelpCircle },
  ];
  
  const isActive = (path: string) => location === path;
  
  // Main menu items (first 8 visible, rest in More dropdown)
  const mainMenuItems = navItems.slice(0, 8);
  // More menu items (rest)
  const moreMenuItems = navItems.slice(8);

  return (
    <header 
      className={(sticky ? "sticky top-0 z-50 " : "") + "w-full"}
      style={{
        backgroundColor: palette.neutral[50],
        borderBottom: `1px solid ${palette.neutral[100]}`,
        boxShadow: spacing.boxShadow.sm,
      }}
    >
      {/* Single Unified Header Row */}
      <div className="flex h-14 items-center justify-between px-4 gap-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div 
            className="w-9 h-9 rounded-md overflow-hidden flex items-center justify-center"
            style={{
              backgroundColor: colors.background,
              transition: animations.transition.base,
              border: `1px solid ${palette.neutral[200]}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = animations.hoverScale.sm;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img src={appLogo} alt="Innovacare" className="w-8 h-8 object-contain" />
          </div>
          <h1 
            className="font-bold text-base hidden sm:block"
            style={{ color: colors.text }}
          >
            Innovacare
          </h1>
        </Link>

        {/* Main Navigation - Inline with increased margin from logo */}
        {showNavigation && (
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 ml-6 mr-2">
            {mainMenuItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              
              return (
                <div key={item.path} className="flex items-center">
                  <Link href={item.path}>
                    <button
                      className="px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 whitespace-nowrap"
                      style={{
                        backgroundColor: active ? colors.primary : 'transparent',
                        color: active ? getContrastText(colors.primary) : colors.text,
                        transition: animations.transition.base,
                      }}
                      onMouseEnter={(e) => {
                        if (!active) {
                          e.currentTarget.style.backgroundColor = palette.neutral[100];
                          e.currentTarget.style.color = colors.primary;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!active) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = colors.text;
                        }
                      }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span className="hidden xl:inline">{item.label}</span>
                    </button>
                  </Link>
                  {index < mainMenuItems.length - 1 && (
                    <div 
                      className="h-4 w-px mx-0.5" 
                      style={{ backgroundColor: palette.neutral[200] }}
                    />
                  )}
                </div>
              );
            })}
            
            {/* More Dropdown */}
            {moreMenuItems.length > 0 && (
              <div className="flex items-center">
                <div 
                  className="h-4 w-px mx-0.5" 
                  style={{ backgroundColor: palette.neutral[200] }}
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className="px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-1.5 whitespace-nowrap"
                      style={{
                        backgroundColor: 'transparent',
                        color: colors.text,
                        transition: animations.transition.base,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = palette.neutral[100];
                        e.currentTarget.style.color = colors.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = colors.text;
                      }}
                    >
                      <MoreHorizontal className="h-3.5 w-3.5" />
                      <span className="hidden xl:inline">More</span>
                    </button>
                  </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {moreMenuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link key={item.path} href={item.path}>
                        <DropdownMenuItem className="cursor-pointer">
                          <Icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </DropdownMenuItem>
                      </Link>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            )}
          </nav>
        )}
        
        {/* User Section */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {showNavigation && (
            <>
              {/* System Badge */}
              <Badge 
                className="hidden md:flex px-2 py-0.5 text-xs font-medium"
                style={{
                  backgroundColor: palette.neutral[100],
                  color: colors.text,
                  border: 'none',
                }}
              >
                {username}
              </Badge>
              
              {/* Administrator Badge */}
              <Badge 
                className="hidden md:flex px-2 py-0.5 text-xs font-semibold"
                style={{
                  backgroundColor: colors.accent,
                  color: getContrastText(colors.accent),
                  border: 'none',
                }}
              >
                {role}
              </Badge>
              
              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 rounded-md"
                    style={{
                      backgroundColor: palette.neutral[100],
                      transition: animations.transition.base,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = palette.neutral[200];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = palette.neutral[100];
                    }}
                  >
                    <Avatar className="h-7 w-7">
                      <AvatarFallback 
                        style={{
                          backgroundColor: colors.primary,
                          color: getContrastText(colors.primary),
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}
                      >
                        {username.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      {username}
                    </p>
                    <p className="text-xs" style={{ color: palette.neutral[500] }}>
                      {role}
                    </p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden h-8 w-8"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </>
          )}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {showNavigation && mobileMenuOpen && (
        <nav 
          className="lg:hidden border-t px-4 py-2 space-y-1"
          style={{
            backgroundColor: colors.background,
            borderColor: palette.neutral[200],
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link key={item.path} href={item.path}>
                <button
                  className="w-full px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2"
                  style={{
                    backgroundColor: active ? colors.primary : 'transparent',
                    color: active ? getContrastText(colors.primary) : colors.text,
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
