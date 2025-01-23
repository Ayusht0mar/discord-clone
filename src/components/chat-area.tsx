"use client"

import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusCircle, Smile, Gift, GiftIcon as GIF } from "lucide-react"
import Image from "next/image"

type Message = {
  id: string
  content: string
  sender: string
  timestamp: string
  avatar: string
}

type ChatAreaProps = {
  chatName: string
  chatType: "channel" | "dm"
  messages?: Message[]
}

export function ChatArea({ chatName, chatType, messages = [] }: ChatAreaProps) {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the message to your backend
    console.log("Sending message:", inputValue)
    setInputValue("")
  }

  return (
    <div className="flex-1 flex flex-col bg-[#313338]">
      <ScrollArea className="flex-1 p-4">
        {messages && messages.length > 0 ? (
          messages.map((message) => (
            <div key={message.id} className="flex items-start mb-4 group">
              <Image
                src={message.avatar || "/placeholder.svg"}
                alt={message.sender}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="font-semibold text-white mr-2">{message.sender}</span>
                  <span className="text-xs text-[#949BA4]">{message.timestamp}</span>
                </div>
                <p className="text-[#dcddde]">{message.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-[#949BA4]">No messages yet.</p>
        )}
      </ScrollArea>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center bg-[#383A40] rounded-lg">
          <Button type="button" variant="ghost" size="icon" className="text-[#b5bac1]">
            <PlusCircle className="h-5 w-5" />
          </Button>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`Message ${chatType === "channel" ? "#" : ""}${chatName}`}
            className="flex-1 bg-transparent border-none focus:ring-0 text-white placeholder-[#6A6F78]"
          />
          <Button type="button" variant="ghost" size="icon" className="text-[#b5bac1]">
            <Gift className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="text-[#b5bac1]">
            <GIF className="h-5 w-5" />
          </Button>
          <Button type="button" variant="ghost" size="icon" className="text-[#b5bac1]">
            <Smile className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </div>
  )
}

