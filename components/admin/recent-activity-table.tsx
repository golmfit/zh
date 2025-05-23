import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function RecentActivityTable() {
  // Mock data - would come from backend in real implementation
  const activities = [
    {
      id: 1,
      student: {
        name: "Sarah Adams",
        email: "sarah.adams@example.com",
        avatar: "/diverse-student-portraits.png",
        initials: "SA",
      },
      action: "Document Uploaded",
      status: "Pending Review",
      timestamp: "2h ago",
    },
    {
      id: 2,
      student: {
        name: "Michael Chen",
        email: "michael.chen@example.com",
        avatar: "/placeholder.svg?key=zuw6t",
        initials: "MC",
      },
      action: "Application Submitted",
      status: "Completed",
      timestamp: "3h ago",
    },
    {
      id: 3,
      student: {
        name: "Aisha Patel",
        email: "aisha.patel@example.com",
        avatar: "/placeholder.svg?key=vziij",
        initials: "AP",
      },
      action: "Appointment Scheduled",
      status: "Upcoming",
      timestamp: "5h ago",
    },
    {
      id: 4,
      student: {
        name: "Carlos Rodriguez",
        email: "carlos.rodriguez@example.com",
        avatar: "/placeholder.svg?key=t03tc",
        initials: "CR",
      },
      action: "Visa Interview",
      status: "Completed",
      timestamp: "1d ago",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50">
                <th className="h-12 px-4 text-left align-middle font-medium">Student</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Action</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Time</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity.id} className="border-b transition-colors hover:bg-muted/50">
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={activity.student.avatar || "/placeholder.svg"} alt={activity.student.name} />
                        <AvatarFallback>{activity.student.initials}</AvatarFallback>
                      </Avatar>
                      <div className="grid gap-0.5">
                        <div className="font-medium">{activity.student.name}</div>
                        <div className="text-xs text-muted-foreground">{activity.student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle">{activity.action}</td>
                  <td className="p-4 align-middle">
                    <Badge
                      variant={
                        activity.status === "Completed"
                          ? "default"
                          : activity.status === "Pending Review"
                            ? "secondary"
                            : "outline"
                      }
                    >
                      {activity.status}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle text-muted-foreground">{activity.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
