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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Eye, Filter, Search, SlidersHorizontal, X } from "lucide-react"
import { DocumentPreview } from "@/components/admin/document-preview"

export default function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  // Mock data - would come from backend in real implementation
  const documents = [
    {
      id: "DOC001",
      name: "Passport Scan",
      type: "Identification",
      student: {
        name: "Sarah Adams",
        email: "sarah.adams@example.com",
        avatar: "/diverse-student-portraits.png",
        initials: "SA",
      },
      status: "Pending Review",
      uploadDate: "May 10, 2025",
      fileType: "PDF",
      fileSize: "2.4 MB",
    },
    {
      id: "DOC002",
      name: "Academic Transcript",
      type: "Academic",
      student: {
        name: "Michael Chen",
        email: "michael.chen@example.com",
        avatar: "/placeholder.svg?key=zuw6t",
        initials: "MC",
      },
      status: "Approved",
      uploadDate: "May 9, 2025",
      fileType: "PDF",
      fileSize: "3.1 MB",
    },
    {
      id: "DOC003",
      name: "Financial Statement",
      type: "Financial",
      student: {
        name: "Aisha Patel",
        email: "aisha.patel@example.com",
        avatar: "/placeholder.svg?key=vziij",
        initials: "AP",
      },
      status: "Needs Action",
      uploadDate: "May 8, 2025",
      fileType: "PDF",
      fileSize: "1.8 MB",
    },
    {
      id: "DOC004",
      name: "TOEFL Score Report",
      type: "Test Score",
      student: {
        name: "Carlos Rodriguez",
        email: "carlos.rodriguez@example.com",
        avatar: "/placeholder.svg?key=t03tc",
        initials: "CR",
      },
      status: "Approved",
      uploadDate: "May 7, 2025",
      fileType: "PDF",
      fileSize: "1.2 MB",
    },
    {
      id: "DOC005",
      name: "Statement of Purpose",
      type: "Application",
      student: {
        name: "Fatima Al-Farsi",
        email: "fatima.alfarsi@example.com",
        avatar: "/placeholder.svg?key=bnm7r",
        initials: "FA",
      },
      status: "Pending Review",
      uploadDate: "May 6, 2025",
      fileType: "PDF",
      fileSize: "0.9 MB",
    },
  ]

  const handlePreview = (document: any) => {
    setSelectedDocument(document)
    setIsPreviewOpen(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
        <p className="text-muted-foreground">Review and manage student documents</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="flex w-full md:w-auto items-center gap-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search documents..." className="pl-8 w-full" />
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
              <DropdownMenuItem>Document Type</DropdownMenuItem>
              <DropdownMenuItem>Status</DropdownMenuItem>
              <DropdownMenuItem>Student</DropdownMenuItem>
              <DropdownMenuItem>Date Uploaded</DropdownMenuItem>
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
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4">
          <CardTitle className="text-lg">Document Review</CardTitle>
          <CardDescription>Showing {documents.length} documents</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Document</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Upload Date</TableHead>
                <TableHead>File Info</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.map((document) => (
                <TableRow key={document.id}>
                  <TableCell className="font-medium">{document.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={document.student.avatar || "/placeholder.svg"} alt={document.student.name} />
                        <AvatarFallback>{document.student.initials}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">{document.student.name}</div>
                    </div>
                  </TableCell>
                  <TableCell>{document.type}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        document.status === "Approved"
                          ? "default"
                          : document.status === "Needs Action"
                            ? "destructive"
                            : "secondary"
                      }
                      className={
                        document.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : document.status === "Needs Action"
                            ? "bg-red-100 text-red-800"
                            : ""
                      }
                    >
                      {document.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{document.uploadDate}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      {document.fileType} • {document.fileSize}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handlePreview(document)}>
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-green-600">
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Approve</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-600">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Reject</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Document Preview</DialogTitle>
            <DialogDescription>
              {selectedDocument?.name} - Uploaded by {selectedDocument?.student.name}
            </DialogDescription>
          </DialogHeader>
          <DocumentPreview document={selectedDocument} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
