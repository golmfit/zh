import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, Clock, Edit, Eye, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ApplicationsListProps {
  status: "active" | "completed" | "all"
}

export function ApplicationsList({ status }: ApplicationsListProps) {
  // Mock data - would come from backend in real implementation
  const applications = [
    {
      id: "app1",
      university: "Harvard University",
      program: "Computer Science, MS",
      deadline: "December 15, 2025",
      status: "In Progress",
      progress: 60,
      lastUpdated: "May 8, 2025",
    },
    {
      id: "app2",
      university: "Massachusetts Institute of Technology",
      program: "Computer Science, MS",
      deadline: "December 1, 2025",
      status: "In Progress",
      progress: 40,
      lastUpdated: "May 7, 2025",
    },
    {
      id: "app3",
      university: "Stanford University",
      program: "Computer Science, MS",
      deadline: "November 15, 2025",
      status: "Not Started",
      progress: 0,
      lastUpdated: "Not started yet",
    },
    {
      id: "app4",
      university: "University of California, Berkeley",
      program: "Computer Science, MS",
      deadline: "January 5, 2026",
      status: "Submitted",
      progress: 100,
      lastUpdated: "April 30, 2025",
    },
    {
      id: "app5",
      university: "Carnegie Mellon University",
      program: "Computer Science, MS",
      deadline: "December 10, 2025",
      status: "Accepted",
      progress: 100,
      lastUpdated: "May 1, 2025",
    },
  ]

  // Filter applications based on status
  const filteredApplications = applications.filter((app) => {
    if (status === "all") return true
    if (status === "active") return app.status !== "Accepted" && app.status !== "Rejected"
    if (status === "completed") return app.status === "Accepted" || app.status === "Rejected"
    return true
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Accepted":
        return <Badge className="bg-green-100 text-green-800">Accepted</Badge>
      case "Rejected":
        return <Badge variant="destructive">Rejected</Badge>
      case "Submitted":
        return <Badge variant="secondary">Submitted</Badge>
      case "In Progress":
        return (
          <Badge variant="outline" className="border-[#1C2235] text-[#1C2235]">
            In Progress
          </Badge>
        )
      case "Not Started":
        return <Badge variant="outline">Not Started</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {filteredApplications.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <div className="rounded-full bg-muted p-3">
              <Clock className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No applications found</h3>
            <p className="mt-2 text-sm text-muted-foreground text-center max-w-sm">
              {status === "active"
                ? "You don't have any active applications. Start a new application to begin the process."
                : status === "completed"
                  ? "You don't have any completed applications yet."
                  : "You haven't started any applications yet. Click 'New Application' to begin."}
            </p>
            <Button className="mt-4 bg-[#1C2235] hover:bg-[#2A3147]">Start New Application</Button>
          </CardContent>
        </Card>
      ) : (
        filteredApplications.map((application) => (
          <Card key={application.id}>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{application.university}</CardTitle>
                  <CardDescription>{application.program}</CardDescription>
                </div>
                {getStatusBadge(application.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Application Deadline</div>
                    <div className="font-medium">{application.deadline}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Last Updated</div>
                    <div className="font-medium">{application.lastUpdated}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-muted-foreground">Completion</div>
                    <div className="font-medium">{application.progress}%</div>
                  </div>
                </div>

                {application.status !== "Accepted" && application.status !== "Rejected" && (
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-[#1C2235]" style={{ width: `${application.progress}%` }}></div>
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {application.status === "In Progress" && (
                    <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
                      <Edit className="mr-2 h-4 w-4" /> Continue Application
                    </Button>
                  )}
                  {application.status === "Not Started" && (
                    <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
                      <ArrowUpRight className="mr-2 h-4 w-4" /> Start Application
                    </Button>
                  )}
                  {application.status === "Submitted" && (
                    <Button variant="outline">
                      <Eye className="mr-2 h-4 w-4" /> View Application
                    </Button>
                  )}
                  {application.status === "Accepted" && (
                    <>
                      <Button className="bg-[#1C2235] hover:bg-[#2A3147]">Accept Offer</Button>
                      <Button variant="outline">Decline Offer</Button>
                    </>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">More options</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>View University Profile</DropdownMenuItem>
                      <DropdownMenuItem>Contact Advisor</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
