import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, FileCheck, Calendar } from "lucide-react"
import { AdminStatsCards } from "@/components/admin/admin-stats-cards"
import { RecentActivityTable } from "@/components/admin/recent-activity-table"
import { AdminChart } from "@/components/admin/admin-chart"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Admin Dashboard</h1>
          <p className="text-muted-foreground">Overview of student applications and system activity</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
            <Users className="mr-2 h-4 w-4" /> Add New Student
          </Button>
        </div>
      </div>

      <AdminStatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Application Status</CardTitle>
            <CardDescription>Distribution of current applications by status</CardDescription>
          </CardHeader>
          <CardContent>
            <AdminChart />
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
              <CardDescription>Latest updates and changes to student records</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <RecentActivityTable />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Users className="mr-2 h-5 w-5 text-[#1C2235]" />
              Manage Students
            </CardTitle>
            <CardDescription>View and edit student profiles</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/admin/students">Go to Students</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <FileCheck className="mr-2 h-5 w-5 text-[#1C2235]" />
              Document Review
            </CardTitle>
            <CardDescription>Review and approve student documents</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/admin/documents">Review Documents</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-[#1C2235]" />
              Appointments
            </CardTitle>
            <CardDescription>Manage upcoming student appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/admin/appointments">View Calendar</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
