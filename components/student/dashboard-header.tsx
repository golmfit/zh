"use client"

import { useState } from "react"
import { Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth/auth-provider"

export function DashboardHeader() {
  const [notifications, setNotifications] = useState(3)
  const { user, logout } = useAuth()

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6">
      <div className="flex flex-1 items-center justify-end">
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
                <Bell className="h-5 w-5" />
                {notifications > 0 && (
                  <Badge
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#1C2235] p-0 text-xs text-white"
                    aria-hidden="true"
                  >
                    {notifications}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel>Notifications</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-96 overflow-auto">
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start justify-between">
                      <span className="font-medium">Document Approved</span>
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your passport scan has been approved by your advisor.
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start justify-between">
                      <span className="font-medium">Appointment Reminder</span>
                      <span className="text-xs text-muted-foreground">1d ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      You have an appointment with Advisor John tomorrow at 3:00 PM.
                    </p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start justify-between">
                      <span className="font-medium">Application Update</span>
                      <span className="text-xs text-muted-foreground">3d ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your application to Harvard University has been submitted.
                    </p>
                  </div>
                </DropdownMenuItem>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer justify-center text-center font-medium">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-student-portraits.png" alt="Student" />
                  <AvatarFallback>
                    {user?.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden text-left md:block">
                  <div className="text-sm font-medium">{user?.name}</div>
                  <div className="text-xs text-muted-foreground">Student</div>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => (window.location.href = "/dashboard/settings")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => (window.location.href = "/dashboard/settings")}>
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={logout}>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
