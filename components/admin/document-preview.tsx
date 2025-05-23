import { Button } from "@/components/ui/button"
import { Check, Download, X } from "lucide-react"

interface DocumentPreviewProps {
  document: any
}

export function DocumentPreview({ document }: DocumentPreviewProps) {
  if (!document) return null

  return (
    <div className="space-y-6">
      <div className="aspect-[16/9] bg-muted rounded-md flex items-center justify-center">
        <p className="text-muted-foreground">Document preview would appear here</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Document Information</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Document Type:</span>
              <span className="text-sm font-medium">{document.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Upload Date:</span>
              <span className="text-sm font-medium">{document.uploadDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">File Type:</span>
              <span className="text-sm font-medium">{document.fileType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">File Size:</span>
              <span className="text-sm font-medium">{document.fileSize}</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted-foreground">Student Information</h3>
          <div className="mt-2 space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Name:</span>
              <span className="text-sm font-medium">{document.student.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Email:</span>
              <span className="text-sm font-medium">{document.student.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Status:</span>
              <span className="text-sm font-medium">{document.status}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Review Actions</h3>
        <div className="flex flex-wrap gap-2">
          <Button className="bg-green-600 hover:bg-green-700">
            <Check className="mr-2 h-4 w-4" /> Approve Document
          </Button>
          <Button variant="destructive">
            <X className="mr-2 h-4 w-4" /> Request Changes
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" /> Download
          </Button>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-sm font-medium text-muted-foreground mb-2">Add Review Note</h3>
        <textarea
          className="w-full min-h-[100px] p-2 border rounded-md"
          placeholder="Add notes about this document..."
        ></textarea>
        <Button className="mt-2">Save Note</Button>
      </div>
    </div>
  )
}
