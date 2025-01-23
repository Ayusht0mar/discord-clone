"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Hash, Pin, MessageCircleQuestionIcon as QuestionMarkCircle, Users, Inbox } from "lucide-react"
import { ChatArea } from "@/components/chat-area"

type Message = {
  id: string
  content: string
  sender: string
  timestamp: string
  avatar: string
}

export function ChannelContent({ serverId, channelId }: { serverId: string; channelId: string }) {
  const [messages, setMessages] = useState<Message[]>([])
  const [channelName, setChannelName] = useState("")

  useEffect(() => {
    // In a real application, you would fetch messages and channel info from an API
    setMessages([
      {
        id: "1",
        content: `Welcome to the #${channelId} channel in ${serverId} server!`,
        sender: "Bot",
        timestamp: new Date().toISOString(),
        avatar: "/placeholder.jpg",
      },
    ])
    setChannelName(channelId)
  }, [channelId, serverId])

  return (
    <div className="flex-1 flex flex-col bg-[#313338]">
      <div className="h-12 flex items-center px-4 border-b border-[#1f2023] justify-between">
        <div className="flex items-center">
          <Hash className="h-5 w-5 text-[#949BA4] mr-2" />
          <span className="font-semibold text-white">{channelName}</span>
        </div>
        <div className="flex items-center gap-4">
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

      <ChatArea chatName={channelName} chatType="channel" messages={messages} />
    </div>
  )
}

