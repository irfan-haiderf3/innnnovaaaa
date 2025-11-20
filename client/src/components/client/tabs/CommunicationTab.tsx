import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import InnovacareTheme from "@/styles/innovacare-theme";

export default function CommunicationTab() {
  const { colors, palette } = InnovacareTheme;

  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <Tabs defaultValue="system" className="h-full flex flex-col">
        <div className="border-b bg-background px-2 py-1" style={{ borderColor: palette.neutral[200] }}>
          <TabsList className="h-8 bg-muted border rounded-md">
            <TabsTrigger value="system" className="text-[11px] px-3 h-7">System Communication</TabsTrigger>
            <TabsTrigger value="outside" className="text-[11px] px-3 h-7">Outside Communication</TabsTrigger>
            <TabsTrigger value="auto" className="text-[11px] px-3 h-7">Auto Notification Settings</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="system" className="flex-1 overflow-hidden m-0 flex flex-col">
          <div className="flex-1 flex flex-col">
            <div className="px-2 py-2 border-b" style={{ borderColor: palette.neutral[200], backgroundColor: colors.background }}>
              <div className="text-xs font-semibold mb-2">Search</div>
              <div className="border rounded p-2 bg-white" style={{ borderColor: palette.neutral[200] }}>
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <Checkbox id="notif-all" /> <label htmlFor="notif-all">All</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="notif-sms" /> <label htmlFor="notif-sms">SMS</label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox id="notif-email" /> <label htmlFor="notif-email">Email</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-2 py-1 flex items-center gap-2 border-b" style={{ borderColor: palette.neutral[200] }}>
              <Button size="sm" className="h-7 text-[10px]">New Email</Button>
              <Button size="sm" variant="outline" className="h-7 text-[10px]">New SMS</Button>
              <Button size="sm" variant="outline" className="h-7 text-[10px]">Send System Notification</Button>
              <div className="ml-auto flex gap-2">
                <Button size="sm" variant="outline" className="h-7 text-[10px]">Preview</Button>
                <Button size="sm" variant="outline" className="h-7 text-[10px]">Print</Button>
              </div>
            </div>

            <div className="flex-1 overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted">
                    <TableHead className="h-7 px-2 text-[10px]">Subject</TableHead>
                    <TableHead className="h-7 px-2 text-[10px]">Inserted At</TableHead>
                    <TableHead className="h-7 px-2 text-[10px]">Sent By</TableHead>
                    <TableHead className="h-7 px-2 text-[10px]">Email To</TableHead>
                    <TableHead className="h-7 px-2 text-[10px]">CC</TableHead>
                    <TableHead className="h-7 px-2 text-[10px]">Status</TableHead>
                    <TableHead className="h-7 px-2 text-[10px]">Delivered At</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={7} className="h-20 text-center text-[11px] text-muted-foreground">No record(s) found.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="outside" className="flex-1 overflow-auto m-0 pt-0 px-4 pb-4">
          <div className="text-sm text-muted-foreground">Outside communication will be displayed here.</div>
        </TabsContent>

        <TabsContent value="auto" className="flex-1 overflow-auto m-0 pt-0 px-4 pb-4">
          <div className="text-sm text-muted-foreground">Auto notification settings will be displayed here.</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
