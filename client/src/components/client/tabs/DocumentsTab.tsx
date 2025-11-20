import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InnovacareTheme from "@/styles/innovacare-theme";

export default function DocumentsTab() {
  const { colors, palette } = InnovacareTheme;
  const [profileType, setProfileType] = useState("STAFF");
  const [profileId, setProfileId] = useState("System");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [title, setTitle] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <Tabs defaultValue="search" className="h-full flex flex-col">
        <div className="border-b bg-background px-2 pt-0 pb-1" style={{ borderColor: palette.neutral[200] }}>
          <TabsList className="h-8 bg-muted border rounded-md">
            <TabsTrigger value="search" className="text-[11px] px-3 h-7">Search Documents</TabsTrigger>
            <TabsTrigger value="scan" className="text-[11px] px-3 h-7">Scan Documents</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="search" className="flex-1 overflow-hidden m-0 flex flex-col">
          <div className="pt-0 px-2 pb-2 border-b" style={{ borderColor: palette.neutral[200], backgroundColor: colors.background }}>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
              <div className="space-y-1">
                <Label className="text-xs">Profile Type</Label>
                <Select value={profileType} onValueChange={setProfileType}>
                  <SelectTrigger className="h-8 text-xs"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="STAFF">STAFF</SelectItem>
                    <SelectItem value="CLIENT">CLIENT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Profile ID</Label>
                <Input value={profileId} onChange={(e) => setProfileId(e.target.value)} className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Category</Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="All"/></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="care">Care</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger className="h-8 text-xs"><SelectValue placeholder="All"/></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="pdf">PDF</SelectItem>
                    <SelectItem value="image">Image</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Description</Label>
                <Input className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Date From</Label>
                <Input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Date To</Label>
                <Input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} className="h-8 text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs">Title</Label>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} className="h-8 text-xs" />
              </div>
              <div className="flex items-end gap-2">
                <Button size="sm" variant="default" className="h-8">Upload</Button>
                <Button size="sm" variant="outline" className="h-8">Search</Button>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted">
                  <TableHead className="h-7 px-2 text-[10px]">ID</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">Attachment For</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">UserName</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">Category</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">Title</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">Description</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">Document Type</TableHead>
                  <TableHead className="h-7 px-2 text-[10px]">Size</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell colSpan={8} className="h-20 text-center text-[11px] text-muted-foreground">No record(s) found.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>

        <TabsContent value="scan" className="flex-1 overflow-auto m-0 pt-0 px-4 pb-4">
          <div className="text-sm text-muted-foreground">Scan documents will be displayed here.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
