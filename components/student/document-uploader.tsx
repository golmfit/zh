"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { FileUp, Upload, X } from "lucide-react"

export function DocumentUploader() {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)

  // Mock document requirements - would come from backend in real implementation
  const requiredDocuments = [
    {
      id: "passport",
      name: "Passport",
      description: "Clear scan of your passport identification page",
      status: "pending",
    },
    {
      id: "transcript",
      name: "Academic Transcript",
      description: "Official transcript from your current/previous institution",
      status: "pending",
    },
    {
      id: "financial",
      name: "Financial Documents",
      description: "Bank statements or sponsorship letters showing sufficient funds",
      status: "pending",
    },
    {
      id: "cv",
      name: "Resume/CV",
      description: "Your current resume or curriculum vitae",
      status: "uploaded",
    },
    {
      id: "statement",
      name: "Personal Statement",
      description: "Your personal statement or statement of purpose",
      status: "uploaded",
    },
    {
      id: "recommendations",
      name: "Letters of Recommendation",
      description: "At least two letters of recommendation",
      status: "pending",
    },
    {
      id: "test-scores",
      name: "Test Scores",
      description: "TOEFL/IELTS and other standardized test scores",
      status: "pending",
    },
    {
      id: "photo",
      name: "Passport-sized Photo",
      description: "Recent passport-sized photograph with white background",
      status: "pending",
    },
  ]

  const handleUpload = (documentId: string) => {
    setUploading(true)
    setProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 300)
  }

  return (
    <div className="space-y-4">
      {requiredDocuments.map((document) => (
        <div
          key={document.id}
          className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg"
        >
          <div className="space-y-1 mb-4 md:mb-0">
            <div className="font-medium flex items-center">
              <FileUp className="mr-2 h-4 w-4 text-[#1C2235]" />
              {document.name}
              {document.status === "uploaded" && (
                <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Uploaded</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{document.description}</p>
            {uploading && document.status === "pending" && (
              <div className="mt-2">
                <Progress value={progress} className="h-2 w-full" />
                <p className="text-xs text-muted-foreground mt-1">Uploading... {progress}%</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {document.status === "uploaded" ? (
              <>
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button variant="outline" size="sm" className="text-red-500">
                  <X className="mr-1 h-4 w-4" /> Remove
                </Button>
              </>
            ) : (
              <Button
                className="bg-[#1C2235] hover:bg-[#2A3147]"
                size="sm"
                onClick={() => handleUpload(document.id)}
                disabled={uploading}
              >
                <Upload className="mr-2 h-4 w-4" /> Upload
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
