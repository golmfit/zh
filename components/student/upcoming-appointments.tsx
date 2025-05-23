import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Clock, MapPin, MoreHorizontal, Video } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function UpcomingAppointments() {
  // Mock data - would come from backend in real implementation
  const appointments = [
    {
      id: "apt1",
      title: "Visa Application Review",
      date: "May 15, 2025",
      time: "10:00 AM - 11:00 AM",
      type: "Virtual",
      advisor: {
        name: "John Smith",
        avatar: "/placeholder.svg?key=advisor",
        initials: "JS",
      },
      notes: "Review DS-160 form and prepare for visa interview",
    },
    {
      id: "apt2",
      title: "University Application Strategy",
      date: "May 20, 2025",
      time: "2:00 PM - 3:00 PM",
      type: "In-Person",
      location: "ZHAcademie Office, Room 203",
      advisor: {
        name: "Emily Johnson",
        avatar: "/placeholder.svg?key=advisor2",
        initials: "EJ",
      },
      notes: "Discuss application strategy for Harvard and MIT",
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
            <h3 className="mt-4 text-lg font-medium">No upcoming appointments</h3>
            <p className="mt-2 text-sm text-muted-foreground text-center max-w-sm">
              You don't have any scheduled appointments. Book a meeting with your advisor to get started.
            </p>
            <Button className="mt-4 bg-[#1C2235] hover:bg-[#2A3147]">Book Appointment</Button>
          </CardContent>
        </Card>
      ) : (
        appointments.map((appointment) => (
          <Card key={appointment.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-lg">{appointment.title}</h3>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">More options</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Reschedule</DropdownMenuItem>
                        <DropdownMenuItem>Add to Calendar</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Cancel Appointment</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
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
                  {appointment.type === "Virtual" && (
                    <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
                      <Video className="mr-2 h-4 w-4" /> Join Meeting
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
