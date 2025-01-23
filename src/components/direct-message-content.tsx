"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Pin,
  MessageCircleQuestionIcon as QuestionMarkCircle,
  Users,
  Inbox,
  PhoneCall,
  Video,
} from "lucide-react"
import { ChatArea } from "@/components/chat-area"

const dummyMessages = [
  {
    id: "1",
    content: "Hey there! How's it going?",
    sender: "John",
    timestamp: "2023-06-10 14:00",
    avatar: "/placeholder.jpg",
  },
  {
    id: "2",
    content: "Hi John! I'm doing well, thanks for asking. How about you?",
    sender: "CurrentUser",
    timestamp: "2023-06-10 14:05",
    avatar: "/placeholder.jpg",
  },
  {
    id: "3",
    content: "I'm great! Just working on some new projects. Anything exciting on your end?",
    sender: "John",
    timestamp: "2023-06-10 14:10",
    avatar: "/placeholder.jpg",
  },
]

export function DirectMessageContent() {
  const [currentDM] = useState("John")

  return (
    <div className="flex-1 flex flex-col bg-[#313338]">
      <div className="h-12 flex items-center px-4 border-b border-[#1f2023] justify-between">
        <div className="flex items-center">
          <span className="font-semibold text-white">@{currentDM}</span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <PhoneCall className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
            <Video className="h-5 w-5" />
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

      <ChatArea chatName={currentDM} chatType="dm" messages={dummyMessages} />
    </div>
  )
}

