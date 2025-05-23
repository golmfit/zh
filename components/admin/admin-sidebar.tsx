"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { BarChart, FileText, Home, LogOut, Settings, Users, Calendar, MessageSquare, Bell } from "lucide-react"
import { useAuth } from "@/components/auth/auth-provider"

export function AdminSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const { logout } = useAuth()

  const routes = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      href: "/admin/students",
      label: "Students",
      icon: Users,
    },
    {
      href: "/admin/documents",
      label: "Documents",
      icon: FileText,
    },
    {
      href: "/admin/appointments",
      label: "Appointments",
      icon: Calendar,
    },
    {
      href: "/admin/messages",
      label: "Messages",
      icon: MessageSquare,
    },
    {
      href: "/admin/reports",
      label: "Reports",
      icon: BarChart,
    },
    {
      href: "/admin/notifications",
      label: "Notifications",
      icon: Bell,
    },
    {
      href: "/admin/settings",
      label: "Settings",
      icon: Settings,
    },
  ]

  const handleLogout = () => {
    logout()
  }

  return (
    <div
      className={`relative border-r bg-[#1C2235] text-white transition-all duration-300 ${
        isCollapsed ? "w-[70px]" : "w-[250px]"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-4">
        <Link href="/admin/dashboard" className="flex items-center">
          {!isCollapsed && <span className="text-lg font-bold">ZH Admin</span>}
          {isCollapsed && <span className="text-lg font-bold">ZH</span>}
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-white hover:bg-[#2A3147]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`h-4 w-4 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-3 py-2">
          <nav className="flex flex-col gap-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  pathname === route.href
                    ? "bg-[#2A3147] text-white"
                    : "text-gray-300 hover:bg-[#2A3147] hover:text-white"
                }`}
              >
                <route.icon className={`h-5 w-5 ${isCollapsed ? "mx-auto" : ""}`} />
                {!isCollapsed && <span>{route.label}</span>}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-300 hover:bg-[#2A3147] hover:text-white transition-colors"
          >
            <LogOut className={`h-5 w-5 ${isCollapsed ? "mx-auto" : ""}`} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </ScrollArea>
    </div>
  )
}
