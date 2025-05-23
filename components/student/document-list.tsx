"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Download, Eye, FileText, MoreHorizontal, Trash2, Upload } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function DocumentList() {
  const [selectedDocument, setSelectedDocument] = useState<any>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  // Mock uploaded documents - would come from backend in real implementation
  const uploadedDocuments = [
    {
      id: "doc1",
      name: "Passport.pdf",
      type: "Passport",
      uploadDate: "May 10, 2025",
      size: "2.4 MB",
      status: "Pending Review",
    },
    {
      id: "doc2",
      name: "Resume_Sarah_Adams.pdf",
      type: "Resume/CV",
      uploadDate: "May 8, 2025",
      size: "1.2 MB",
      status: "Approved",
    },
    {
      id: "doc3",
      name: "Personal_Statement.pdf",
      type: "Personal Statement",
      uploadDate: "May 5, 2025",
      size: "0.8 MB",
      status: "Approved",
    },
    {
      id: "doc4",
      name: "TOEFL_Score_Report.pdf",
      type: "Test Scores",
      uploadDate: "May 3, 2025",
      size: "1.5 MB",
      status: "Needs Action",
    },
    {
      id: "doc5",
      name: "Recommendation_Letter_1.pdf",
      type: "Letters of Recommendation",
      uploadDate: "May 1, 2025",
      size: "0.6 MB",
      status: "Approved",
    },
  ]

  const handlePreview = (document: any) => {
    setSelectedDocument(document)
    setIsPreviewOpen(true)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>
      case "Pending Review":
        return <Badge variant="secondary">Pending Review</Badge>
      case "Needs Action":
        return <Badge variant="destructive">Needs Action</Badge>
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      {uploadedDocuments.length === 0 ? (
        <div className="text-center py-8">
          <FileText className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
          <h3 className="mt-4 text-lg font-medium">No documents uploaded yet</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Upload your required documents to proceed with your applications.
          </p>
        </div>
      ) : (
        <div className="space-y-2">
          {uploadedDocuments.map((document) => (
            <div
              key={document.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-start gap-3 mb-3 sm:mb-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F7FA]">
                  <FileText className="h-5 w-5 text-[#1C2235]" />
                </div>
                <div>
                  <div className="font-medium">{document.name}</div>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">
                      {document.type} • {document.size} • {document.uploadDate}
                    </span>
                    {getStatusBadge(document.status)}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => handlePreview(document)}>
                  <Eye className="mr-2 h-4 w-4" /> View
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More options</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Replace File</DropdownMenuItem>
                    <DropdownMenuItem>Rename</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      )}

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{selectedDocument?.name}</DialogTitle>
            <DialogDescription>
              Uploaded on {selectedDocument?.uploadDate} • Status: {selectedDocument?.status}
            </DialogDescription>
          </DialogHeader>
          <div className="aspect-[16/9] bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">Document preview would appear here</p>
          </div>
          <div className="flex justify-between">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
            {selectedDocument?.status === "Needs Action" && (
              <Button className="bg-[#1C2235] hover:bg-[#2A3147]">
                <Upload className="mr-2 h-4 w-4" /> Upload New Version
              </Button>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
