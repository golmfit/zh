import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AdvisorMessages } from "@/components/student/advisor-messages"
import { Calendar, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function AdvisorPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">My Advisor</h1>
        <p className="text-muted-foreground">Connect with your dedicated academic advisor</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Your Advisor</CardTitle>
            <CardDescription>Your dedicated point of contact</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg?key=advisor" alt="John Smith" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">John Smith</h3>
            <p className="text-sm text-muted-foreground mb-4">Senior Academic Advisor</p>
            <div className="space-y-2 w-full">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">john.smith@zhacademie.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+1 (234) 567-8901</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mt-6">
              <Button variant="outline" asChild>
                <Link href="/dashboard/appointments">
                  <Calendar className="mr-2 h-4 w-4" /> Book
                </Link>
              </Button>
              <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
                <Mail className="mr-2 h-4 w-4" /> Message
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="messages" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="notes">Session Notes</TabsTrigger>
            </TabsList>
            <TabsContent value="messages" className="space-y-4">
              <AdvisorMessages />
            </TabsContent>
            <TabsContent value="notes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Session Notes</CardTitle>
                  <CardDescription>Notes from your previous advising sessions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Initial Consultation</h3>
                        <span className="text-sm text-muted-foreground">April 5, 2025</span>
                      </div>
                      <p className="text-sm">
                        Discussed university preferences and program options. Sarah is interested in Computer Science
                        programs at top-tier universities. We identified Harvard, MIT, and Stanford as target schools.
                        Next steps: Prepare application materials and start working on personal statement.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Application Strategy Session</h3>
                        <span className="text-sm text-muted-foreground">April 15, 2025</span>
                      </div>
                      <p className="text-sm">
                        Reviewed Sarah's academic transcripts and test scores. Developed a strategy for university
                        applications with a focus on highlighting research experience. Recommended adding two safety
                        schools to the list. Next steps: Complete Common App profile and draft personal statement.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Document Review</h3>
                        <span className="text-sm text-muted-foreground">April 28, 2025</span>
                      </div>
                      <p className="text-sm">
                        Reviewed first draft of personal statement and provided feedback. Discussed letter of
                        recommendation strategy. Next steps: Revise personal statement and contact professors for
                        recommendation letters.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
