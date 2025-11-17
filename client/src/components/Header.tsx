import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Icon, IconButton } from "@/components/ui/icon";
import { 
  IconRegistry,
  LayoutDashboard,
  Calendar,
  FileText,
  DollarSign,
  Briefcase,
  HelpCircle,
  Wrench,
  BarChart3,
  SettingsIcon,
} from "@/lib/icon-utils";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getCurrentTheme, getThemeDetails } from "@/lib/theme-switcher";

interface HeaderProps {
  showNavigation?: boolean;
  username?: string;
  role?: string;
}

export default function Header({ showNavigation = true, username = "System", role = "Super Admin" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isSuperAdmin = role === "Super Admin";
  const [themeColors, setThemeColors] = useState(() => {
    const theme = getCurrentTheme();
    return getThemeDetails(theme);
  });

  // Update colors when theme changes
  useEffect(() => {
    const interval = setInterval(() => {
      const theme = getCurrentTheme();
      const newColors = getThemeDetails(theme);
      if (JSON.stringify(newColors) !== JSON.stringify(themeColors)) {
        setThemeColors(newColors);
      }
    }, 500);
    
    return () => clearInterval(interval);
  }, [themeColors]);

  // Organize nav items into groups for Super Admin
  const coreNavItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/planboard", label: "Plan Board", icon: Calendar },
    { path: "/planboardv2", label: "Plan Board V2", icon: Calendar },
    { path: "/jobs", label: "Jobs", icon: Briefcase },
    { path: "/scheduling", label: "Scheduling", icon: Calendar },
  ];

  const financialNavItems = [
    { path: "/billing", label: "Billing", icon: DollarSign },
    { path: "/documents", label: "Documents", icon: FileText },
  ];

  const adminNavItems = [
    { path: "/bi", label: "Business Intelligence", icon: BarChart3 },
    { path: "/maintenance", label: "Maintenance", icon: Wrench },
    { path: "/setup", label: "Setup", icon: SettingsIcon },
    { path: "/help", label: "Help", icon: HelpCircle },
  ];

  // For non-admin users, show limited menu
  const regularNavItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { path: "/planboard", label: "Plan Board", icon: Calendar },
    { path: "/jobs", label: "Jobs", icon: Briefcase },
    { path: "/scheduling", label: "Scheduling", icon: Calendar },
    { path: "/help", label: "Help", icon: HelpCircle },
  ];

  const navItems = isSuperAdmin 
    ? [...coreNavItems, ...financialNavItems, ...adminNavItems]
    : regularNavItems;

  const isActive = (path: string) => location === path;

  return (
    <header 
      className="sticky top-0 z-50 w-full shadow-md"
      style={{
        background: `linear-gradient(135deg, ${themeColors.primary[500]} 0%, ${themeColors.primary[700]} 100%)`,
      }}
    >
      {/* Top Section - Logo and User Info */}
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" data-testid="link-home" className="flex-shrink-0">
          <div className="flex items-center gap-3">
            <Logo size="md" />
            <div className="hidden md:block">
              <div className="text-white font-bold text-lg">HealthBridge</div>
              <div className="text-white/80 text-xs">Medical Management Platform</div>
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3 flex-shrink-0">
          {showNavigation && (
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <Badge 
                className="text-xs px-3 py-1.5 whitespace-nowrap bg-white/20 text-white border-white/30 hover:bg-white/30 transition-colors" 
                data-testid="badge-username"
              >
                {username}
              </Badge>
              <Badge 
                className={`text-xs px-3 py-1.5 gap-1.5 whitespace-nowrap transition-all duration-200 ${
                  isSuperAdmin 
                    ? "bg-white text-primary font-semibold shadow-lg" 
                    : "bg-white/20 text-white border-white/30"
                }`} 
                data-testid="badge-role"
              >
                {isSuperAdmin && (
                  <Icon 
                    icon={IconRegistry.user.shield} 
                    size="xs" 
                    glowEffect
                    style={{ color: themeColors.primary[600] }}
                  />
                )}
                {role}
              </Badge>
            </div>
          )}

          <ThemeToggle />

          {showNavigation && (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-10 w-10 transition-all duration-200 hover:bg-white/20 hover:scale-105 ring-2 ring-white/30"
                    data-testid="button-user-menu"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarFallback 
                        className="text-xs bg-white font-semibold"
                        style={{ color: themeColors.primary[600] }}
                      >
                        {isSuperAdmin ? (
                          <Icon 
                            icon={IconRegistry.user.shield} 
                            size="sm" 
                            variant="default" 
                            glowEffect={isSuperAdmin}
                            style={{ color: themeColors.primary[600] }}
                          />
                        ) : "SY"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className={`px-2 py-1.5 ${
                    isSuperAdmin ? "bg-primary/5 rounded-t-md" : ""
                  }`}>
                    <p className="text-xs font-medium flex items-center gap-1.5">
                      {isSuperAdmin && (
                        <Icon 
                          icon={IconRegistry.user.shield} 
                          size="xs" 
                          variant="primary"
                          glowEffect
                        />
                      )}
                      {username}
                    </p>
                    <p className={`text-[10px] ${
                      isSuperAdmin ? "text-primary font-medium" : "text-muted-foreground"
                    }`}>{role}</p>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem data-testid="menu-settings" className="text-xs cursor-pointer transition-all duration-200 hover:pl-4">
                    <Icon icon={IconRegistry.navigation.settings} size="sm" animated className="mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem data-testid="menu-logout" className="text-xs cursor-pointer transition-all duration-200 hover:pl-4 text-red-600 dark:text-red-400">
                    <Icon icon={IconRegistry.user.logout} size="sm" animated className="mr-2" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <IconButton
                icon={mobileMenuOpen ? IconRegistry.actions.close : IconRegistry.actions.menu}
                size="md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden"
                data-testid="button-mobile-menu"
              />
            </>
          )}
        </div>
      </div>

      {/* Bottom Section - Navigation Bar */}
      {showNavigation && (
        <div 
          className="hidden lg:block"
          style={{
            background: `linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(255,255,255,1))`,
            borderTop: `1px solid ${themeColors.primary[200]}`,
          }}
        >
          <nav className="flex items-center gap-1 px-6 py-2">
            {isSuperAdmin ? (
              // Super Admin - Organized menu with separators
              <>
                {coreNavItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link key={item.path} href={item.path}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 text-sm gap-2 px-4 transition-all duration-200 hover:shadow-md rounded-lg"
                        style={{
                          background: isActive(item.path) 
                            ? `linear-gradient(135deg, ${themeColors.primary[500]}, ${themeColors.primary[600]})` 
                            : 'transparent',
                          color: isActive(item.path) ? 'white' : themeColors.neutral[700],
                          fontWeight: isActive(item.path) ? 600 : 500,
                          boxShadow: isActive(item.path) ? `0 4px 12px ${themeColors.primary[300]}` : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive(item.path)) {
                            e.currentTarget.style.backgroundColor = themeColors.primary[50];
                            e.currentTarget.style.color = themeColors.primary[700];
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(item.path)) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = themeColors.neutral[700];
                          }
                        }}
                        data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <Icon 
                          icon={IconComponent} 
                          size="sm" 
                          animated={isActive(item.path)} 
                          strokeWidth={isActive(item.path) ? 2.5 : 2}
                          style={{ color: isActive(item.path) ? 'white' : themeColors.primary[500] }}
                        />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
                <Separator orientation="vertical" className="h-6 mx-2" />
                {financialNavItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link key={item.path} href={item.path}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 text-sm gap-2 px-4 transition-all duration-200 hover:shadow-md rounded-lg"
                        style={{
                          background: isActive(item.path) 
                            ? `linear-gradient(135deg, ${themeColors.primary[500]}, ${themeColors.primary[600]})` 
                            : 'transparent',
                          color: isActive(item.path) ? 'white' : themeColors.neutral[700],
                          fontWeight: isActive(item.path) ? 600 : 500,
                          boxShadow: isActive(item.path) ? `0 4px 12px ${themeColors.primary[300]}` : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive(item.path)) {
                            e.currentTarget.style.backgroundColor = themeColors.primary[50];
                            e.currentTarget.style.color = themeColors.primary[700];
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(item.path)) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = themeColors.neutral[700];
                          }
                        }}
                        data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <Icon 
                          icon={IconComponent} 
                          size="sm" 
                          animated={isActive(item.path)} 
                          strokeWidth={isActive(item.path) ? 2.5 : 2}
                          style={{ color: isActive(item.path) ? 'white' : themeColors.primary[500] }}
                        />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
                <Separator orientation="vertical" className="h-6 mx-2" />
                {adminNavItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link key={item.path} href={item.path}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-9 text-sm gap-2 px-4 transition-all duration-200 hover:shadow-md rounded-lg"
                        style={{
                          background: isActive(item.path) 
                            ? `linear-gradient(135deg, ${themeColors.primary[500]}, ${themeColors.primary[600]})` 
                            : 'transparent',
                          color: isActive(item.path) ? 'white' : themeColors.neutral[700],
                          fontWeight: isActive(item.path) ? 600 : 500,
                          boxShadow: isActive(item.path) ? `0 4px 12px ${themeColors.primary[300]}` : 'none'
                        }}
                        onMouseEnter={(e) => {
                          if (!isActive(item.path)) {
                            e.currentTarget.style.backgroundColor = themeColors.primary[50];
                            e.currentTarget.style.color = themeColors.primary[700];
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isActive(item.path)) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = themeColors.neutral[700];
                          }
                        }}
                        data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <Icon 
                          icon={IconComponent} 
                          size="sm" 
                          animated={isActive(item.path)} 
                          strokeWidth={isActive(item.path) ? 2.5 : 2}
                          style={{ color: isActive(item.path) ? 'white' : themeColors.primary[500] }}
                        />
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}
              </>
            ) : (
              // Regular users - Simple menu
              navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={isActive(item.path) ? "secondary" : "ghost"}
                      size="sm"
                      className="h-8 text-sm gap-2 px-3 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
                      data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon icon={IconComponent} size="sm" animated={isActive(item.path)} strokeWidth={isActive(item.path) ? 2.5 : 2} />
                      {item.label}
                    </Button>
                  </Link>
                );
              })
            )}
          </nav>
        </div>
      )}

      {showNavigation && mobileMenuOpen && (
        <nav className="lg:hidden border-t px-2 py-2 space-y-0.5 max-h-[calc(100vh-2.75rem)] overflow-y-auto">
          {isSuperAdmin ? (
            // Super Admin - Organized mobile menu with labels
            <>
              <div className="text-[10px] font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wider">
                Core Operations
              </div>
              {coreNavItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={isActive(item.path) ? "secondary" : "ghost"}
                      className="w-full justify-start h-7 text-xs gap-1.5 transition-all duration-200 hover:translate-x-1"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon icon={IconComponent} size="sm" animated={isActive(item.path)} />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              <Separator className="my-2" />
              <div className="text-[10px] font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wider">
                Financial
              </div>
              {financialNavItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={isActive(item.path) ? "secondary" : "ghost"}
                      className="w-full justify-start h-7 text-xs gap-1.5 transition-all duration-200 hover:translate-x-1"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon icon={IconComponent} size="sm" animated={isActive(item.path)} />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
              <Separator className="my-2" />
              <div className="text-[10px] font-semibold text-muted-foreground px-2 py-1 uppercase tracking-wider">
                Administration
              </div>
              {adminNavItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant={isActive(item.path) ? "secondary" : "ghost"}
                      className="w-full justify-start h-7 text-xs gap-1.5 transition-all duration-200 hover:translate-x-1"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Icon icon={IconComponent} size="sm" animated={isActive(item.path)} />
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </>
          ) : (
            // Regular users - Simple mobile menu
            navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link key={item.path} href={item.path}>
                  <Button
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    className="w-full justify-start h-7 text-xs gap-1.5 transition-all duration-200 hover:translate-x-1"
                    onClick={() => setMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <Icon icon={IconComponent} size="sm" animated={isActive(item.path)} />
                    {item.label}
                  </Button>
                </Link>
              );
            })
          )}
        </nav>
      )}
    </header>
  );
}
