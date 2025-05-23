"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, User } from "lucide-react"

export function AdvisorMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "advisor",
      text: "Hi Sarah, how are you doing? Let's discuss your university applications this week.",
      timestamp: "May 10, 2025, 9:00 AM",
    },
    {
      id: 2,
      sender: "student",
      text: "Hi John, I'm doing well. Yes, I'm ready to discuss my applications. When are you available?",
      timestamp: "May 10, 2025, 9:05 AM",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1
      const now = new Date()
      const timestamp =
        now.toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }) +
        ", " +
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })

      setMessages([...messages, { id: newId, sender: "student", text: newMessage, timestamp: timestamp }])
      setNewMessage("")
    }
  }

  return (
    <Card className="h-[400px] flex flex-col">
      <CardContent className="flex-1 overflow-y-auto space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex flex-col ${message.sender === "advisor" ? "items-start" : "items-end"}`}
          >
            <div className="flex items-center space-x-2">
              {message.sender === "advisor" && (
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg?key=advisor" alt="Advisor" />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
              )}
              <div className="rounded-lg border px-3 py-2 w-fit max-w-[70%]">
                <p className="text-sm">{message.text}</p>
                <p className="text-xs text-muted-foreground mt-1">{message.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <div className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded-md py-2 px-3 text-sm"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
          />
          <Button onClick={handleSendMessage} className="bg-[#1C2235] hover:bg-[#2A3147]" size="sm">
            <Send className="h-4 w-4 mr-2" /> Send
          </Button>
        </div>
      </div>
    </Card>
  )
}
