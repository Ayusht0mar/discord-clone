"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Hash, Pin, MessageCircleQuestionIcon as QuestionMarkCircle, Users, Inbox } from "lucide-react"
import { ChatArea } from "@/components/chat-area"

const dummyMessages = [
  {
    id: "1",
    content: "Hey everyone! Welcome to the Tech Freelancers server!",
    sender: "Admin",
    timestamp: "2023-06-10 12:00",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    content: "Thanks for having us! Excited to be here.",
    sender: "NewMember",
    timestamp: "2023-06-10 12:05",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    content: "Don't forget to read the rules in the #rules channel!",
    sender: "Moderator",
    timestamp: "2023-06-10 12:10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function ServerContent() {
  const [currentChannel] = useState("general")

  return (
    <div className="flex-1 flex flex-col bg-[#313338]">
      <div className="h-12 flex items-center px-4 border-b border-[#1f2023] justify-between">
        <div className="flex items-center">
          <Hash className="h-5 w-5 text-[#949BA4] mr-2" />
          <span className="font-semibold text-white">{currentChannel}</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <Hash className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <Pin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <Users className="h-5 w-5" />
          </Button>
          <Input placeholder="Search" className="h-6 w-36 bg-[#1e1f22] text-sm border-none" />
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <Inbox className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <QuestionMarkCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <ChatArea chatName={currentChannel} chatType="channel" messages={dummyMessages} />
    </div>
  )
}

