import PlanboardPage from '../../pages/planboard';
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

export default function PlanboardPageExample() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <PlanboardPage />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
