import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { Icon } from "@/components/ui/icon";
import { IconRegistry } from "@/lib/icon-utils";
import healthcareImage from "@assets/generated_images/Healthcare_provider_with_elderly_patient_fcadcc1b.png";
import icLauncherLogo from "@/components/images/ic_launcher.png";
import { getCurrentTheme, getThemeDetails } from "@/lib/theme-switcher";

export default function LoginPage() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [themeColors, setThemeColors] = useState(() => {
    const theme = getCurrentTheme();
    return getThemeDetails(theme);
  });

  // Update colors when theme changes
  useEffect(() => {
    const handleStorageChange = () => {
      const theme = getCurrentTheme();
      setThemeColors(getThemeDetails(theme));
    };
    
    window.addEventListener('storage', handleStorageChange);
    // Also listen for custom theme change events
    const interval = setInterval(() => {
      const theme = getCurrentTheme();
      const newColors = getThemeDetails(theme);
      if (JSON.stringify(newColors) !== JSON.stringify(themeColors)) {
        setThemeColors(newColors);
      }
    }, 500);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, [themeColors]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempted with:", { username, password });
    
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/planboard");
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Left Side - Image Section */}
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden">
        <img
          src={healthcareImage}
          alt="Healthcare professional with patient"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-br via-transparent" 
          style={{ 
            background: `linear-gradient(to bottom right, ${themeColors.primary[500]}30, transparent, ${themeColors.secondary[500]}20)` 
          }}
        />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h2 className="text-3xl font-bold mb-2 drop-shadow-lg"   
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${themeColors.primary[500]}, ${themeColors.secondary[500]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >Innovacare</h2>
          <p className="text-lg drop-shadow-md"  
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${themeColors.secondary[500]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >Modern Healthcare Management System</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 flex items-start justify-center p-4 md:p-6 pt-8">
        <div className="w-full max-w-md space-y-4">
          {/* Header Section - Compact */}
          <div className="flex flex-col items-center text-center space-y-2">
            <img src={icLauncherLogo} alt="HealthBridge Logo" className="h-16 w-16" />
            <div>
              <h1 
                className="text-xl font-bold mt-2 bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(to right, ${themeColors.primary[500]}, ${themeColors.secondary[500]})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Welcome Back
              </h1>
              <p className="text-xs text-muted-foreground mt-1">
                Sign in to access your healthcare dashboard
              </p>
            </div>
          </div>

          {/* Login Form Card with Theme Background */}
          <Card 
            className="border" 
            style={{ 
              backgroundColor: themeColors.neutral[100],
              borderColor: themeColors.neutral[300]
            }}
          >
            <CardHeader className="pb-3 pt-4 px-5">
              <CardTitle className="text-base" style={{ color: themeColors.primary[700] }}>Sign In</CardTitle>
              <CardDescription className="text-xs" style={{ color: themeColors.neutral[600] }}>
                Enter your credentials to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <Label 
                    htmlFor="username" 
                    className="text-xs font-medium"
                    style={{ color: themeColors.neutral[700] }}
                  >
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder=""
                    className="h-9 text-sm"
                    style={{
                      backgroundColor: themeColors.neutral[50],
                      borderColor: themeColors.neutral[400],
                      color: themeColors.neutral[900]
                    }}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    data-testid="input-username"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label 
                    htmlFor="password" 
                    className="text-xs font-medium"
                    style={{ color: themeColors.neutral[700] }}
                  >
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder=""
                    className="h-9 text-sm"
                    style={{
                      backgroundColor: themeColors.neutral[50],
                      borderColor: themeColors.neutral[400],
                      color: themeColors.neutral[900]
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    data-testid="input-password"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-9 mt-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] hover:opacity-90"
                  style={{ 
                    backgroundColor: themeColors.primary[500],
                    color: themeColors.neutral[50],
                  }}
                  disabled={isLoading}
                  data-testid="button-login"
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Help Section Card with Theme Colors */}
          <Card 
            className="border shadow-lg" 
            style={{ 
              backgroundColor: themeColors.neutral[50],
              borderColor: themeColors.neutral[300]
            }}
          >
            <CardHeader className="pb-3 pt-4 px-6">
              <CardTitle 
                className="text-sm font-semibold" 
                style={{ color: themeColors.accent[600] }}
              >
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm px-6 pb-4">
              <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1" style={{ color: themeColors.neutral[700] }}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: `${themeColors.accent[100]}` }}>
                  <Icon 
                    icon={IconRegistry.communication.mail} 
                    size="sm" 
                    variant="accent"
                    animated
                  />
                </div>
                <span className="text-sm">support@healthcarepro.com</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1" style={{ color: themeColors.neutral[700] }}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ backgroundColor: `${themeColors.accent[100]}` }}>
                  <Icon 
                    icon={IconRegistry.communication.phone} 
                    size="sm" 
                    variant="accent"
                    animated
                  />
                </div>
                <span className="text-sm">1-800-HEALTH-PRO</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
