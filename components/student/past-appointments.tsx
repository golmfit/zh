import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, FileText, MapPin, Video } from "lucide-react"

export function PastAppointments() {
  // Mock data - would come from backend in real implementation
  const appointments = [
    {
      id: "past1",
      title: "Initial Consultation",
      date: "April 5, 2025",
      time: "11:00 AM - 12:00 PM",
      type: "In-Person",
      location: "ZHAcademie Office, Room 101",
      advisor: {
        name: "John Smith",
        avatar: "/placeholder.svg?key=advisor",
        initials: "JS",
      },
      notes: "Discussed university preferences and program options",
      hasSummary: true,
    },
    {
      id: "past2",
      title: "Application Strategy Session",
      date: "April 15, 2025",
      time: "2:00 PM - 3:00 PM",
      type: "Virtual",
      advisor: {
        name: "Emily Johnson",
        avatar: "/placeholder.svg?key=advisor2",
        initials: "EJ",
      },
      notes: "Reviewed academic transcripts and test scores",
      hasSummary: true,
    },
    {
      id: "past3",
      title: "Document Review",
      date: "April 28, 2025",
      time: "10:30 AM - 11:30 AM",
      type: "Virtual",
      advisor: {
        name: "John Smith",
        avatar: "/placeholder.svg?key=advisor",
        initials: "JS",
      },
      notes: "Reviewed personal statement draft",
      hasSummary: true,
    },
  ]

  return (
    <div className="space-y-4">
      {appointments.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-10">
            <div className="rounded-full bg-muted p-3">
              <Calendar className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium">No past appointments</h3>
            <p className="mt-2 text-sm text-muted-foreground text-center max-w-sm">
              You don't have any past appointments. Once you've had meetings with your advisor, they'll appear here.
            </p>
          </CardContent>
        </Card>
      ) : (
        appointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="font-medium text-lg">{appointment.title}</h3>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{appointment.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {appointment.type === "Virtual" ? (
                        <Video className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span>
                        {appointment.type}
                        {appointment.location && ` • ${appointment.location}`}
                      </span>
                    </div>
                  </div>
                  {appointment.notes && (
                    <div className="bg-muted p-3 rounded-md">
                      <p className="text-sm">{appointment.notes}</p>
                    </div>
                  )}
                </div>
                <div className="flex flex-row md:flex-col items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={appointment.advisor.avatar || "/placeholder.svg"}
                        alt={appointment.advisor.name}
                      />
                      <AvatarFallback>{appointment.advisor.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="text-sm font-medium">{appointment.advisor.name}</div>
                      <div className="text-xs text-muted-foreground">Academic Advisor</div>
                    </div>
                  </div>
                  {appointment.hasSummary && (
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" /> View Summary
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  )
}
