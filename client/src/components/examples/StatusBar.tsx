import StatusBar from '../StatusBar';

export default function StatusBarExample() {
  const mockStatuses = [
    { label: "Provisional Status", count: 0, color: "purple" },
    { label: "Unassigned", count: 5, color: "blue" },
    { label: "Assigned", count: 12, color: "green" },
    { label: "In Progress", count: 3, color: "cyan" },
    { label: "Delayed", count: 2, color: "orange" },
    { label: "Completed", count: 18, color: "green" },
  ];

  return (
    <div className="p-6">
      <StatusBar statuses={mockStatuses} />
    </div>
  );
}
