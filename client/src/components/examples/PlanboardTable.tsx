import PlanboardTable from '../PlanboardTable';

export default function PlanboardTableExample() {
  const mockEntries = [
    {
      id: "1",
      exportStatus: "",
      status: "Assigned",
      taskGroup: "Daily Care",
      taskId: "T12345",
      scheduleName: "Morning Personal Care",
      service: "ACC Access-HC941",
      clientCoordinator: "Sarah Johnson",
      carerCoordinator: "Michael Brown",
      client: "Margaret Wilson",
      carer: "Emma Thompson",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "08:00",
      endTime: "10:00",
      duration: "2:00",
      city: "Albany",
    },
    {
      id: "2",
      exportStatus: "",
      status: "In Progress",
      taskGroup: "Therapy",
      taskId: "T12346",
      scheduleName: "Physical Therapy",
      service: "ACC Phoenix-RTI",
      clientCoordinator: "David Lee",
      carerCoordinator: "Jennifer White",
      client: "Robert Chen",
      carer: "James Mitchell",
      dateFrom: "11/11/2025",
      dateTo: "11/11/2025",
      startTime: "10:30",
      endTime: "11:30",
      duration: "1:00",
      city: "Akina",
    },
  ];

  return (
    <div className="p-6">
      <PlanboardTable entries={mockEntries} />
    </div>
  );
}
