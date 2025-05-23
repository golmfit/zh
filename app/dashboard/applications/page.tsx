import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ApplicationsList } from "@/components/student/applications-list"
import { ApplicationTimeline } from "@/components/student/application-timeline"
import { PlusCircle } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">My Applications</h1>
          <p className="text-muted-foreground">Track your university applications and admission status</p>
        </div>
        <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
          <PlusCircle className="mr-2 h-4 w-4" /> New Application
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <ApplicationsList status="active" />
        </TabsContent>
        <TabsContent value="completed" className="space-y-4">
          <ApplicationsList status="completed" />
        </TabsContent>
        <TabsContent value="all" className="space-y-4">
          <ApplicationsList status="all" />
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Application Timeline</CardTitle>
          <CardDescription>Key dates and deadlines for your applications</CardDescription>
        </CardHeader>
        <CardContent>
          <ApplicationTimeline />
        </CardContent>
      </Card>
    </div>
  )
}
