import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import NotFound from "@/pages/not-found";
import LoginPage from "@/pages/login";
import HomePage from "@/pages/home-new";
import PlanboardPage from "@/pages/planboard";
import PlanboardV2Page from "@/pages/planboardv2";
import PlanboardV3Page from "@/pages/planboardv3";
import MockupsPage from "@/pages/mockups";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route path="/planboard" component={PlanboardPage} />
      <Route path="/planboardv2" component={PlanboardV2Page} />
      <Route path="/planboardv3" component={PlanboardV3Page} />
      <Route path="/mockups" component={MockupsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
