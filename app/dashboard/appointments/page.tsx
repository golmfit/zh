"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { AppointmentScheduler } from "@/components/student/appointment-scheduler"
import { UpcomingAppointments } from "@/components/student/upcoming-appointments"
import { PastAppointments } from "@/components/student/past-appointments"
import { CalendarIcon, PlusCircle } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function AppointmentsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Appointments</h1>
          <p className="text-muted-foreground">Schedule and manage meetings with your advisor</p>
        </div>
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
              <PlusCircle className="mr-2 h-4 w-4" /> Book Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Book an Appointment</DialogTitle>
              <DialogDescription>Select a date and time to schedule a meeting with your advisor.</DialogDescription>
            </DialogHeader>
            <AppointmentScheduler onScheduled={() => setIsBookingOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5" />
              Calendar
            </CardTitle>
            <CardDescription>Select a date to view availability</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="space-y-4">
              <UpcomingAppointments />
            </TabsContent>
            <TabsContent value="past" className="space-y-4">
              <PastAppointments />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
