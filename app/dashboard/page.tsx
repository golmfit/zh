import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, MessageSquare, School } from "lucide-react"
import { ApplicationStageTracker } from "@/components/student/application-stage-tracker"
import { QuickStatsCards } from "@/components/student/quick-stats-cards"

export default function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome, Sarah</h1>
          <p className="text-muted-foreground">Track your application progress and manage your documents</p>
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
            <Calendar className="mr-2 h-4 w-4" /> Book Appointment
          </Button>
        </div>
      </div>

      <ApplicationStageTracker />

      <QuickStatsCards />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <FileText className="mr-2 h-5 w-5 text-[#1C2235]" />
              Upload Documents
            </CardTitle>
            <CardDescription>Submit required files for your application</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/dashboard/documents">Go to Documents</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <School className="mr-2 h-5 w-5 text-[#1C2235]" />
              My Applications
            </CardTitle>
            <CardDescription>Check your university application status</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/dashboard/applications">View Applications</a>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-[#1C2235]" />
              Message Advisor
            </CardTitle>
            <CardDescription>Get help from your assigned advisor</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full" asChild>
              <a href="/dashboard/advisor">Contact Advisor</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
