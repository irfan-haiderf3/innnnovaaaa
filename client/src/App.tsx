import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { applyInnovacareTheme } from "@/styles/innovacare-theme";
import { initializeTheme } from "@/design-system";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";

// Legacy Pages
import LoginPage from "@/pages/login";
import HomePage from "@/pages/home-new";
import PlanboardPage from "@/pages/planboard";
import PlanboardV2Page from "@/pages/planboardv2";
import PlanboardV3Page from "@/pages/planboardv3";
import MockupsPage from "@/pages/mockups";

// New Innovacare Pages with Consistent UI
import InnovacareHome from "@/pages/innovacare-home";
import InnovacareLoginPage from "@/pages/innovacare-login";
import InnovacarePlanboardPage from "@/pages/innovacare-planboard";
import ClientProfilePage from "@/pages/client-profile";
import ClientProfileV2Page from "@/pages/client-profile-v2";
import ClientProfileV3Page from "@/pages/client-profile-v3";
import LeaveWizard from "@/pages/leave-wizard";

// Modern Pages with New Design System
import ModernDashboard from "@/pages/ModernDashboard";
import ReferralPage from "@/pages/referral";
import RosterDemoPage from "@/pages/roster-demo";

function Router() {
  return (
    <Switch>
      {/* Default route uses MODERN design system */}
      <Route path="/" component={ModernDashboard} />
      
      {/* Modern Routes with New Design System */}
      <Route path="/dashboard" component={ModernDashboard} />
      <Route path="/modern" component={ModernDashboard} />
      <Route path="/referral" component={ReferralPage} />
      <Route path="/roster" component={RosterDemoPage} />
      
      {/* Innovacare Routes with Consistent UI */}
      <Route path="/innovacare" component={InnovacareHome} />
      <Route path="/innovacare-login" component={InnovacareLoginPage} />
      <Route path="/innovacare-planboard" component={InnovacarePlanboardPage} />
      <Route path="/client-profile" component={ClientProfilePage} />
      <Route path="/client-profile-v2" component={ClientProfileV2Page} />
      <Route path="/client-profile-v3" component={ClientProfileV3Page} />
      <Route path="/wizards" component={LeaveWizard} />
      
      {/* Legacy Routes with Updated UI */}
      <Route path="/login" component={InnovacareLoginPage} />
      <Route path="/home" component={InnovacareHome} />
      <Route path="/planboard" component={InnovacarePlanboardPage} />
      <Route path="/planboardv2" component={PlanboardV2Page} />
      <Route path="/planboardv3" component={PlanboardV3Page} />
      <Route path="/mockups" component={MockupsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Apply modern design system theme on app initialization
  useEffect(() => {
    // Initialize new design system
    initializeTheme();
    
    // Also apply legacy Innovacare theme for compatibility
    applyInnovacareTheme();
    
    // Set document title
    document.title = 'HealthBridge - Healthcare Management Platform';
    
    // Update favicon if needed
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.setAttribute('href', '/favicon.png');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
