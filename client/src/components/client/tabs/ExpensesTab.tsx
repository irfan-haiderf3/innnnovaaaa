import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InnovacareTheme from "@/styles/innovacare-theme";

export default function ExpensesTab() {
  const { colors, palette } = InnovacareTheme;
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [status, setStatus] = useState("all");

  return (
    <div className="flex-1 overflow-hidden flex flex-col" style={{ backgroundColor: colors.background }}>
      {/* Filters - starts from top, compact */}
      <div className="p-2 border-b grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-1.5" style={{ borderColor: palette.neutral[200], backgroundColor: palette.neutral[50] }}>
        <div className="space-y-0.5">
          <Label className="text-[10px] font-medium">Date From</Label>
          <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="h-7 text-[10px]" />
        </div>
        <div className="space-y-0.5">
          <Label className="text-[10px] font-medium">Date To</Label>
          <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="h-7 text-[10px]" />
        </div>
        <div className="space-y-0.5">
          <Label className="text-[10px] font-medium">Filter Type</Label>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="h-7 text-[10px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="expenses">Expenses</SelectItem>
              <SelectItem value="wages">Wages</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-0.5">
          <Label className="text-[10px] font-medium">Status</Label>
          <Select value={status} onValueChange={setStatus}>
            <SelectTrigger className="h-7 text-[10px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-end gap-1.5 col-span-1 md:col-span-2">
          <Button size="sm" variant="default" className="h-7 text-[10px] px-3">Search</Button>
          <Button size="sm" variant="outline" className="h-7 text-[10px] px-3">Reset</Button>
        </div>
      </div>

      {/* Results table - compact */}
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow style={{ backgroundColor: palette.neutral[100] }}>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Date</TableHead>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Expense Type</TableHead>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Expense Form</TableHead>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Expense</TableHead>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Payment Status</TableHead>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Last Updated By</TableHead>
              <TableHead className="h-6 px-2 text-[9px] font-semibold">Last Updated At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={7} className="h-16 text-center text-[10px] text-muted-foreground">No record(s) found.</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
