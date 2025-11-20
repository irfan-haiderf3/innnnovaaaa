/**
 * Innovacare Login Page
 * Modern, clean login with 4-color design system
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import InnovacareTheme, { getContrastText } from "@/styles/innovacare-theme";
import { IButton } from "@/components/innovacare";
import { User, Lock, Mail, Phone, Info, HelpCircle } from "lucide-react";
import healthcareImage from "@assets/generated_images/Healthcare_provider_with_elderly_patient_fcadcc1b.png";
import logoImage from "@/components/images/ic_launcher.png";

const { colors, palette, spacing, animations } = InnovacareTheme;

export default function InnovacareLoginPage() {
  const [, setLocation] = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempted with:", { username, password });
    
    setTimeout(() => {
      setIsLoading(false);
      setLocation("/innovacare-planboard");
    }, 1000);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden" style={{ backgroundColor: palette.neutral[50] }}>
      {/* Left Side - Image Section */}
      <div className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden">
        <img
          src={healthcareImage}
          alt="Healthcare professional with patient"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: `${colors.primary}80`,
          }}
        />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <div 
            className="text-3xl font-bold mb-2"
            style={{ color: 'white' }}
          >
            Innovacare
          </div>
          <p 
            className="text-lg"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            Modern Healthcare Management Platform
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div 
        className="flex-1 flex items-center justify-center p-4 md:p-6"
        style={{ backgroundColor: colors.background }}
      >
        <div className="w-full max-w-md space-y-4">
          {/* Header Section - More Compact */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div 
              className="w-24 h-24 rounded-lg flex items-center justify-center p-2"
              style={{
              }}
            >
              <img 
                src={logoImage} 
                alt="Innovacare Logo" 
                className="w-full h-full object-stretch"
              />
            </div>
            <div>
              <h1 
                className="text-xl font-bold mt-2"
                style={{ color: colors.primary }}
              >
                Welcome to Innovacare
              </h1>
              <p 
                className="text-xs mt-0.5"
                style={{ color: palette.neutral[600] }}
              >
                Sign in to access your healthcare dashboard
              </p>
            </div>
          </div>

          {/* Login Form Card - More Compact */}
          <Card style={{ 
            backgroundColor: colors.background,
            borderColor: palette.neutral[200],
            boxShadow: spacing.boxShadow.md,
          }}>
            <CardHeader className="pb-3 pt-4 px-5">
              <CardTitle 
                className="text-base"
                style={{ color: colors.primary }}
              >
                Sign In
              </CardTitle>
              <CardDescription 
                className="text-xs"
                style={{ color: palette.neutral[600] }}
              >
                Enter your credentials to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-1.5">
                  <Label 
                    htmlFor="username" 
                    className="text-sm font-medium"
                    style={{ color: palette.neutral[700] }}
                  >
                    Username
                  </Label>
                  <div className="relative">
                    <div 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: palette.neutral[400] }}
                    >
                      <User size={16} />
                    </div>
                    <Input
                      id="username"
                      type="text"
                      className="pl-10 h-11 text-sm"
                      style={{
                        backgroundColor: palette.neutral[50],
                        borderColor: palette.neutral[300],
                        color: colors.text,
                      }}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      data-testid="input-username"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label 
                    htmlFor="password" 
                    className="text-sm font-medium"
                    style={{ color: palette.neutral[700] }}
                  >
                    Password
                  </Label>
                  <div className="relative">
                    <div 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: palette.neutral[400] }}
                    >
                      <Lock size={16} />
                    </div>
                    <Input
                      id="password"
                      type="password"
                      className="pl-10 h-11 text-sm"
                      style={{
                        backgroundColor: palette.neutral[50],
                        borderColor: palette.neutral[300],
                        color: colors.text,
                      }}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      data-testid="input-password"
                    />
                  </div>
                </div>

                <IButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isLoading}
                  fullWidth
                >
                  {isLoading ? "Signing in..." : "Sign In"}
                </IButton>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card style={{ 
            backgroundColor: colors.background,
            borderColor: palette.neutral[200],
          }}>
            <CardHeader className="pb-2 pt-3 px-5">
              <CardTitle 
                className="text-sm font-semibold"
                style={{ color: colors.accent }}
              >
                Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm px-5 pb-3">
              <div 
                className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1"
                style={{ color: palette.neutral[700] }}
              >
                <div 
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ 
                    backgroundColor: `${colors.accent}15`,
                    color: colors.accent,
                  }}
                >
                  <Mail size={16} />
                </div>
                <span className="text-sm">support@innovacare.com</span>
              </div>
              <div 
                className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1"
                style={{ color: palette.neutral[700] }}
              >
                <div 
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ 
                    backgroundColor: `${colors.accent}15`,
                    color: colors.accent,
                  }}
                >
                  <Phone size={16} />
                </div>
                <span className="text-sm">1-800-INNOVACARE</span>
              </div>
              <div 
                className="flex items-center gap-3 transition-all duration-200 hover:translate-x-1"
                style={{ color: palette.neutral[700] }}
              >
                <div 
                  className="flex items-center justify-center w-8 h-8 rounded-full"
                  style={{ 
                    backgroundColor: `${colors.accent}15`,
                    color: colors.accent,
                  }}
                >
                  <HelpCircle size={16} />
                </div>
                <span className="text-sm">Forgot Password?</span>
              </div>
            </CardContent>
          </Card>
          
          {/* Footer */}
          <div className="text-center">
            <p 
              className="text-xs"
              style={{ color: palette.neutral[500] }}
            >
              © 2025 Innovacare. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
