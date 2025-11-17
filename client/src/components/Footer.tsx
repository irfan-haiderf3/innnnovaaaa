export default function Footer() {
  const currentDate = new Date().toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).replace(',', '');

  return (
    <footer className="border-t bg-background">
      <div className="px-3 py-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span data-testid="text-messages">0 new message(s)</span>
            <span className="text-[10px]">Start Billing Payroll</span>
          </div>
          <div className="flex items-center gap-3">
            <span data-testid="text-datetime">{currentDate}</span>
            <span>Pakistan Standard Time</span>
            <span className="font-medium" data-testid="text-version">Phoenix-UAT 8.3.13.14</span>
            <span>Opened Forms: 1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
