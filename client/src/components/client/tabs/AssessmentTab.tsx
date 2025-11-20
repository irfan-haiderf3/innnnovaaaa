import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientScheduleTable from "@/components/client/ClientScheduleTable";
import InnovacareTheme from "@/styles/innovacare-theme";
import { Calendar, Syringe } from "lucide-react";

interface Schedule {
  id: string;
  scheduleName: string;
  facility: string;
  mo: boolean;
  tu: boolean;
  we: boolean;
  th: boolean;
  fr: boolean;
  sa: boolean;
  su: boolean;
  carer: string;
  timeFrom: string;
}

interface AssessmentTabProps {
  schedules: Schedule[];
}

export default function AssessmentTab({ schedules }: AssessmentTabProps) {
  const { colors, palette } = InnovacareTheme;

  return (
    <div className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: colors.background }}>
      <Tabs defaultValue="schedule" className="h-full flex flex-col">
        {/* Header - starts from top, no extra padding */}
        <div className="flex items-center justify-between border-b px-2 py-1.5" style={{ borderColor: palette.neutral[200], backgroundColor: palette.neutral[50] }}>
          <h3 className="text-xs font-semibold" style={{ color: colors.primary }}>Assessment Management</h3>
          <TabsList className="h-7 bg-white border rounded-md">
            <TabsTrigger value="schedule" className="text-[10px] px-2 h-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Calendar className="h-3 w-3 mr-1" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="vaccination" className="text-[10px] px-2 h-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Syringe className="h-3 w-3 mr-1" />
              Vaccination
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Tab Content - starts immediately, no padding */}
        <TabsContent value="schedule" className="flex-1 overflow-hidden m-0 p-0">
          <ClientScheduleTable schedules={schedules} />
        </TabsContent>

        <TabsContent value="vaccination" className="flex-1 overflow-auto m-0 p-2">
          <div className="text-xs text-muted-foreground">Vaccination records will be displayed here.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
