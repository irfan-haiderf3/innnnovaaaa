import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InnovacareTheme from "@/styles/innovacare-theme";

export default function NotesTab() {
  const { colors, palette } = InnovacareTheme;
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <div className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: colors.background }}>
      <div className="grid grid-cols-12 flex-1 min-h-0">
        {/* Category tree - starts from top */}
        <div className="col-span-3 border-r overflow-auto p-2" style={{ borderColor: palette.neutral[200], backgroundColor: palette.neutral[50] }}>
          <div className="text-[10px] font-semibold mb-1.5" style={{ color: colors.primary }}>Category</div>
          <div className="space-y-1.5 text-[10px]">
            <div className="flex items-center gap-1.5"><Checkbox id="cat-all" className="h-3 w-3" /><label htmlFor="cat-all" className="text-[10px]">All</label></div>
            <div className="flex items-center gap-1.5"><Checkbox id="cat-accident" className="h-3 w-3" /><label htmlFor="cat-accident" className="text-[10px]">Accident</label></div>
            <div>
              <div className="flex items-center gap-1.5"><Checkbox id="cat-incident" className="h-3 w-3" /><label htmlFor="cat-incident" className="text-[10px]">Accident / Incident reporting</label></div>
              <div className="ml-4 mt-1 space-y-1.5">
                <div className="flex items-center gap-1.5"><Checkbox id="cat-falls" className="h-3 w-3" /><label htmlFor="cat-falls" className="text-[10px]">Falls</label></div>
              </div>
            </div>
            <div className="flex items-center gap-1.5"><Checkbox id="cat-accompany" className="h-3 w-3" /><label htmlFor="cat-accompany" className="text-[10px]">Accompanying the client</label></div>
          </div>
        </div>

        {/* Right pane - starts from top */}
        <div className="col-span-9 flex flex-col min-h-0" style={{ backgroundColor: colors.background }}>
          {/* Filters - compact, no top padding */}
          <div className="p-2 border-b" style={{ borderColor: palette.neutral[200], backgroundColor: palette.neutral[50] }}>
            <div className="text-[10px] font-semibold mb-1.5" style={{ color: colors.primary }}>Notes Date</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1.5 items-end">
              <div className="space-y-0.5">
                <Label className="text-[10px]">Date From</Label>
                <Input type="date" className="h-7 text-[10px]" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              </div>
              <div className="space-y-0.5">
                <Label className="text-[10px]">Date To</Label>
                <Input type="date" className="h-7 text-[10px]" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
              </div>
              <div className="flex gap-1.5 col-span-2">
                <Button size="sm" className="h-7 text-[10px] px-3">Search</Button>
                <Button size="sm" variant="outline" className="h-7 text-[10px] px-3">Reset</Button>
              </div>
            </div>
          </div>

          {/* Toolbar - compact */}
          <div className="px-2 py-1 border-b flex gap-1.5" style={{ borderColor: palette.neutral[200], backgroundColor: colors.background }}>
            <Button size="sm" variant="outline" className="h-6 text-[10px] px-2">Add</Button>
            <Button size="sm" variant="outline" className="h-6 text-[10px] px-2">Edit</Button>
            <Button size="sm" variant="outline" className="h-6 text-[10px] px-2">Remove</Button>
            <div className="ml-auto flex gap-1.5">
              <Button size="sm" variant="outline" className="h-6 text-[10px] px-2">Preview</Button>
              <Button size="sm" variant="outline" className="h-6 text-[10px] px-2">Print</Button>
            </div>
          </div>

          {/* Results table - compact */}
          <div className="flex-1 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow style={{ backgroundColor: palette.neutral[100] }}>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Notes...</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Full Name</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Category</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Notes</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Inserted At</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Inserted By</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Updated By</TableHead>
                  <TableHead className="h-6 px-2 text-[9px] font-semibold">Updated At</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={8} className="h-16 text-center text-[10px] text-muted-foreground">No record(s) found.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
