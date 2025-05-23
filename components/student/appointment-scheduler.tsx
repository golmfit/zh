"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AppointmentSchedulerProps {
  onScheduled: () => void
}

export function AppointmentScheduler({ onScheduled }: AppointmentSchedulerProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [timeSlot, setTimeSlot] = useState<string | undefined>()
  const [advisor, setAdvisor] = useState<string>("john-smith")
  const [notes, setNotes] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock time slots - would be dynamically generated based on advisor availability
  const timeSlots = [
    "9:00 AM - 9:30 AM",
    "9:30 AM - 10:00 AM",
    "10:00 AM - 10:30 AM",
    "10:30 AM - 11:00 AM",
    "11:00 AM - 11:30 AM",
    "1:00 PM - 1:30 PM",
    "1:30 PM - 2:00 PM",
    "2:00 PM - 2:30 PM",
    "2:30 PM - 3:00 PM",
  ]

  const handleSubmit = () => {
    if (!date || !timeSlot) return

    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onScheduled()
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label>Select Advisor</Label>
            <Select value={advisor} onValueChange={setAdvisor}>
              <SelectTrigger>
                <SelectValue placeholder="Select advisor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="john-smith">John Smith</SelectItem>
                <SelectItem value="emily-johnson">Emily Johnson</SelectItem>
                <SelectItem value="david-wong">David Wong</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Select Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              disabled={(date) => {
                // Disable weekends and past dates
                const day = date.getDay()
                return day === 0 || day === 6 || date < new Date()
              }}
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label>Select Time Slot</Label>
            <RadioGroup value={timeSlot} onValueChange={setTimeSlot} className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => (
                <div key={slot} className="flex items-center space-x-2">
                  <RadioGroupItem value={slot} id={slot} />
                  <Label htmlFor={slot} className="text-sm">
                    {slot}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any specific topics you'd like to discuss"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="h-[120px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onScheduled}>
          Cancel
        </Button>
        <Button
          className="bg-[#1C2235] hover:bg-[#2A3147]"
          onClick={handleSubmit}
          disabled={!date || !timeSlot || isSubmitting}
        >
          {isSubmitting ? "Scheduling..." : "Schedule Appointment"}
        </Button>
      </div>
    </div>
  )
}
