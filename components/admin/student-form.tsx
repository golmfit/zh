"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface StudentFormProps {
  onSubmit: () => void
}

export function StudentForm({ onSubmit }: StudentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onSubmit()
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Country of Origin</Label>
          <Select>
            <SelectTrigger id="country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="china">China</SelectItem>
              <SelectItem value="india">India</SelectItem>
              <SelectItem value="nigeria">Nigeria</SelectItem>
              <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
              <SelectItem value="south-korea">South Korea</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="advisor">Assigned Advisor</Label>
          <Select>
            <SelectTrigger id="advisor">
              <SelectValue placeholder="Select advisor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="john-smith">John Smith</SelectItem>
              <SelectItem value="emily-johnson">Emily Johnson</SelectItem>
              <SelectItem value="david-wong">David Wong</SelectItem>
              <SelectItem value="unassigned">Unassigned</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="interests">Academic Interests</Label>
          <Input id="interests" placeholder="e.g., Computer Science, Business, Engineering" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea id="notes" className="min-h-[100px]" />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <Button variant="outline" type="button" onClick={onSubmit}>
          Cancel
        </Button>
        <Button className="bg-[#1C2235] hover:bg-[#2A3147]" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Adding Student..." : "Add Student"}
        </Button>
      </div>
    </form>
  )
}
