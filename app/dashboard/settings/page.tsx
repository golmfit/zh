"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check, Upload } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SettingsPage() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleUpdate = () => {
    setIsUpdating(true)
    // Simulate API call
    setTimeout(() => {
      setIsUpdating(false)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 3000)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your account preferences and profile</p>
      </div>

      {showSuccess && (
        <Alert className="bg-green-50 border-green-200">
          <Check className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Success</AlertTitle>
          <AlertDescription className="text-green-700">Your settings have been updated successfully.</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/diverse-student-portraits.png" alt="Profile" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full sm:w-auto">
                    <Upload className="mr-2 h-4 w-4" /> Change Photo
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full sm:w-auto text-muted-foreground">
                    Remove Photo
                  </Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Adams" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="sarah.adams@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (234) 567-8901" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" defaultValue="123 Student Lane, College Town, CA 90210" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country of Residence</Label>
                  <Select defaultValue="canada">
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="canada">Canada</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="mandarin">Mandarin</SelectItem>
                      <SelectItem value="arabic">Arabic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="bg-[#1C2235] hover:bg-[#2A3147]" onClick={handleUpdate} disabled={isUpdating}>
                {isUpdating ? "Updating..." : "Update Profile"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account security and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Enable 2FA</Label>
                    <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                  </div>
                  <Switch />
                </div>
              </div>
              <div className="pt-4 border-t">
                <h3 className="font-medium mb-4">Account Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Time Zone</Label>
                      <p className="text-sm text-muted-foreground">Set your local time zone for accurate scheduling</p>
                    </div>
                    <Select defaultValue="america-new_york">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select time zone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="america-new_york">Eastern Time (ET)</SelectItem>
                        <SelectItem value="america-chicago">Central Time (CT)</SelectItem>
                        <SelectItem value="america-denver">Mountain Time (MT)</SelectItem>
                        <SelectItem value="america-los_angeles">Pacific Time (PT)</SelectItem>
                        <SelectItem value="etc-utc">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                Delete Account
              </Button>
              <Button className="bg-[#1C2235] hover:bg-[#2A3147]" onClick={handleUpdate} disabled={isUpdating}>
                {isUpdating ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Control how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-applications">Application Updates</Label>
                    <Switch id="email-applications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-documents">Document Status Changes</Label>
                    <Switch id="email-documents" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-appointments">Appointment Reminders</Label>
                    <Switch id="email-appointments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-messages">New Messages</Label>
                    <Switch id="email-messages" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="email-marketing">Marketing & Newsletters</Label>
                    <Switch id="email-marketing" />
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t space-y-4">
                <h3 className="font-medium">SMS Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-appointments">Appointment Reminders</Label>
                    <Switch id="sms-appointments" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-deadlines">Important Deadlines</Label>
                    <Switch id="sms-deadlines" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="sms-documents">Urgent Document Requests</Label>
                    <Switch id="sms-documents" />
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t space-y-4">
                <h3 className="font-medium">In-App Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-all">Enable All In-App Notifications</Label>
                    <Switch id="app-all" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="app-sound">Notification Sounds</Label>
                    <Switch id="app-sound" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#1C2235] hover:bg-[#2A3147]" onClick={handleUpdate} disabled={isUpdating}>
                {isUpdating ? "Saving Preferences..." : "Save Notification Preferences"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
