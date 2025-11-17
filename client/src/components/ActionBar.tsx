import { Button } from "@/components/ui/button";
import { Calendar, FileCheck } from "lucide-react";

interface ActionBarProps {
  totalRecords: number;
  onYesterday?: () => void;
  onCompleteAll?: () => void;
}

export default function ActionBar({
  totalRecords,
  onYesterday,
  onCompleteAll,
}: ActionBarProps) {
  return (
    <div className="flex items-center justify-between gap-2 p-2 border rounded-md bg-card">
      <div className="text-xs text-muted-foreground">
        Total Record(s): <span className="font-semibold text-foreground">{totalRecords}</span>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={onYesterday}
          data-testid="button-yesterday"
          className="h-7 text-xs"
        >
          <Calendar className="h-3.5 w-3.5 mr-1.5" />
          Yesterday
        </Button>
        <Button
          size="sm"
          onClick={onCompleteAll}
          data-testid="button-complete-all-shifts"
          className="h-7 text-xs"
        >
          <FileCheck className="h-3.5 w-3.5 mr-1.5" />
          Complete All Shifts
        </Button>
      </div>
    </div>
  );
}
