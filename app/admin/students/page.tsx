"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Filter, MoreHorizontal, PlusCircle, Search, SlidersHorizontal } from "lucide-react"
import { StudentForm } from "@/components/admin/student-form"

export default function StudentsPage() {
  const [isAddingStudent, setIsAddingStudent] = useState(false)

  // Mock data - would come from backend in real implementation
  const students = [
    {
      id: "STU001",
      name: "Sarah Adams",
      email: "sarah.adams@example.com",
      country: "Canada",
      applications: 3,
      status: "Active",
      advisor: "John Smith",
      lastActive: "2h ago",
      avatar: "/diverse-student-portraits.png",
      initials: "SA",
    },
    {
      id: "STU002",
      name: "Michael Chen",
      email: "michael.chen@example.com",
      country: "China",
      applications: 2,
      status: "Active",
      advisor: "Emily Johnson",
      lastActive: "1d ago",
      avatar: "/placeholder.svg?key=zuw6t",
      initials: "MC",
    },
    {
      id: "STU003",
      name: "Aisha Patel",
      email: "aisha.patel@example.com",
      country: "India",
      applications: 4,
      status: "Active",
      advisor: "John Smith",
      lastActive: "3h ago",
      avatar: "/placeholder.svg?key=vziij",
      initials: "AP",
    },
    {
      id: "STU004",
      name: "Carlos Rodriguez",
      email: "carlos.rodriguez@example.com",
      country: "Mexico",
      applications: 1,
      status: "Pending",
      advisor: "Emily Johnson",
      lastActive: "5d ago",
      avatar: "/placeholder.svg?key=t03tc",
      initials: "CR",
    },
    {
      id: "STU005",
      name: "Fatima Al-Farsi",
      email: "fatima.alfarsi@example.com",
      country: "UAE",
      applications: 2,
      status: "Active",
      advisor: "John Smith",
      lastActive: "1h ago",
      avatar: "/placeholder.svg?key=bnm7r",
      initials: "FA",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Students</h1>
          <p className="text-muted-foreground">Manage and view all student profiles</p>
        </div>
        <Dialog open={isAddingStudent} onOpenChange={setIsAddingStudent}>
          <DialogTrigger asChild>
            <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Student
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle>Add New Student</DialogTitle>
              <DialogDescription>Enter the student's information to create a new account.</DialogDescription>
            </DialogHeader>
            <StudentForm onSubmit={() => setIsAddingStudent(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex w-full md:w-auto items-center gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search students..." className="pl-8 w-full" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter By</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Country</DropdownMenuItem>
              <DropdownMenuItem>Advisor</DropdownMenuItem>
              <DropdownMenuItem>Application Stage</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="outline" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Sort</span>
          </Button>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <CardTitle className="text-lg">Student List</CardTitle>
          <CardDescription>Showing {students.length} students</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Country</TableHead>
                <TableHead>Applications</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Advisor</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground">{student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.country}</TableCell>
                  <TableCell>{student.applications}</TableCell>
                  <TableCell>
                    <Badge
                      variant={student.status === "Active" ? "default" : "secondary"}
                      className={student.status === "Active" ? "bg-green-100 text-green-800" : ""}
                    >
                      {student.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{student.advisor}</TableCell>
                  <TableCell>{student.lastActive}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit Details</DropdownMenuItem>
                        <DropdownMenuItem>View Documents</DropdownMenuItem>
                        <DropdownMenuItem>View Applications</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Deactivate</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
