"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Bell,
  Inbox,
  Pin,
  MessageCircleQuestionIcon as QuestionMarkCircle,
} from "lucide-react"

export function TopNavigation() {

  return (
    <div className="h-12 flex items-center px-2 border-b border-[#1f2023] bg-[#313338]">
      <div className="flex-1 flex items-center gap-2">
        <Input placeholder="Find or start a conversation" className="h-[30px] bg-[#1e1f22] text-sm border-none" />
      </div>
      <div className="flex items-center gap-4 px-2">
        <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
          <Inbox className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
          <QuestionMarkCircle className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-[#b5bac1] hover:text-white">
          <Pin className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

