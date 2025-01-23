"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Hash,
  Volume2,
  ChevronRight,
  Lock,
  Bell,
  Trash2,
  UserPlus,
  Edit,
  Users,
  Zap,
  Mail,
  Store,
} from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { TooltipProvider, TooltipRoot, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"

type Category = {
  name: string
  isExpanded?: boolean
  channels: {
    id: string
    name: string
    type: "text" | "voice"
    notifications?: string
    isLocked?: boolean
  }[]
}

type ChannelListProps = {
  serverId: string
  activeChannelId?: string
}

export function ChannelList({ serverId, activeChannelId }: ChannelListProps) {
  const [categories, setCategories] = useState<Category[]>([
    {
      name: "INFORMATION",
      isExpanded: true,
      channels: [
        { id: "rules", name: "rules", type: "text", isLocked: true },
        { id: "welcome", name: "welcome", type: "text", isLocked: true },
        { id: "announcements", name: "announcements", type: "text", isLocked: true },
      ],
    },
    {
      name: "GENERAL",
      isExpanded: true,
      channels: [
        { id: "tips-and-tricks", name: "tips-and-tricks", type: "text" },
        { id: "general", name: "general", type: "text" },
        { id: "helpful-tools", name: "helpful-tools", type: "text" },
        { id: "showcase", name: "showcase", type: "text", notifications: "7 New" },
        { id: "job-ops", name: "job-ops", type: "text", notifications: "8 New" },
        { id: "emote-sticker-suggestions", name: "emote-sticker-suggestions", type: "text" },
      ],
    },
    {
      name: "DESIGNING",
      isExpanded: true,
      channels: [{ id: "feedback", name: "feedback", type: "text" }],
    },
  ])

  const [directMessages] = useState([
    { id: "john-doe", name: "John Doe", status: "online" },
    { id: "jane-smith", name: "Jane Smith", status: "idle" },
    { id: "bob-johnson", name: "Bob Johnson", status: "offline" },
  ])

  const toggleCategory = (categoryName: string) => {
    setCategories(
      categories.map((category) =>
        category.name === categoryName ? { ...category, isExpanded: !category.isExpanded } : category,
      ),
    )
  }

  if (serverId === "dm") {
    return (
      <ScrollArea className="flex-1">
        <div className="p-3">
          <Input
            placeholder="Find or start a conversation"
            className="h-[30px] bg-[#1e1f22] text-sm border-none mb-4"
          />
          <div className="space-y-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 h-[42px] text-[#dbdee1] hover:text-white hover:bg-[#35373C]"
            >
              <Users className="h-5 w-5" />
              Friends
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 h-[42px] text-[#dbdee1] hover:text-white hover:bg-[#35373C]"
            >
              <Zap className="h-5 w-5" />
              Nitro
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 h-[42px] text-[#dbdee1] hover:text-white hover:bg-[#35373C]"
            >
              <Mail className="h-5 w-5" />
              Message Requests
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2 h-[42px] text-[#dbdee1] hover:text-white hover:bg-[#35373C]"
            >
              <Store className="h-5 w-5" />
              Shop
              <span className="ml-auto text-xs bg-red-500 px-1 rounded">NEW</span>
            </Button>
          </div>
          <div className="mt-4">
            <h3 className="text-xs font-semibold text-[#949BA4] px-2 mb-2 flex items-center justify-between">
              DIRECT MESSAGES
              <Button variant="ghost" size="icon" className="h-4 w-4 text-[#b5bac1]">
                +
              </Button>
            </h3>
            {directMessages.map((dm) => (
              <Link key={dm.id} href={`/direct-messages/${dm.id}`}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 h-[42px] text-[#949BA4] hover:text-white hover:bg-[#35373C] ${
                    activeChannelId === dm.id ? "bg-[#35373C] text-white" : ""
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      dm.status === "online" ? "bg-green-500" : dm.status === "idle" ? "bg-yellow-500" : "bg-gray-500"
                    }`}
                  />
                  {dm.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </ScrollArea>
    )
  }

  return (
    <ScrollArea className="flex-1">
      <div className="p-2">
        <div className="mb-4">
          <div className="flex items-center px-2 py-1">
            <div className="h-1 bg-[#5865F2] w-12"></div>
            <span className="text-xs text-[#b5bac1] ml-2">GOAL: LVL 2</span>
            <span className="text-xs text-[#b5bac1] ml-auto">2/7 Boosts</span>
          </div>
        </div>

        <TooltipProvider>
          <TooltipRoot>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start px-2 py-1.5 text-[#b5bac1] hover:text-white hover:bg-[#35373C] font-semibold"
              >
                <ChevronRight className="h-3 w-3 mr-1" />
                Channels & Roles
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">Browse all channels and roles</TooltipContent>
          </TooltipRoot>
        </TooltipProvider>

        {categories.map((category) => (
          <div key={category.name} className="mb-4">
            <button
              onClick={() => toggleCategory(category.name)}
              className="w-full text-xs font-semibold text-[#949BA4] px-2 mb-1 flex items-center hover:text-white"
            >
              <ChevronRight className={`h-3 w-3 mr-1 transition-transform ${category.isExpanded ? "rotate-90" : ""}`} />
              {category.name}
            </button>
            {category.isExpanded &&
              category.channels.map((channel) => (
                <ContextMenu key={channel.id}>
                  <ContextMenuTrigger asChild>
                    <Link href={`/servers/${serverId}/channels/${channel.id}`}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start px-2 py-1 text-[#949BA4] hover:text-white hover:bg-[#35373C] group relative ${
                          activeChannelId === channel.id ? "bg-[#35373C] text-white" : ""
                        }`}
                      >
                        {channel.isLocked ? (
                          <Lock className="h-5 w-5 mr-2 text-[#949BA4] group-hover:text-white" />
                        ) : channel.type === "text" ? (
                          <Hash className="h-5 w-5 mr-2 text-[#949BA4] group-hover:text-white" />
                        ) : (
                          <Volume2 className="h-5 w-5 mr-2 text-[#949BA4] group-hover:text-white" />
                        )}
                        {channel.name}
                        {channel.notifications && (
                          <span className="ml-auto text-xs text-white">{channel.notifications}</span>
                        )}
                      </Button>
                    </Link>
                  </ContextMenuTrigger>
                  <ContextMenuContent className="w-56">
                    <ContextMenuItem className="text-[#949BA4]">
                      <Bell className="mr-2 h-4 w-4" />
                      Notification Settings
                    </ContextMenuItem>
                    {!channel.isLocked && (
                      <>
                        <ContextMenuItem className="text-[#949BA4]">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Channel
                        </ContextMenuItem>
                        <ContextMenuItem className="text-[#949BA4]">
                          <UserPlus className="mr-2 h-4 w-4" />
                          Invite People
                        </ContextMenuItem>
                        <ContextMenuSeparator />
                        <ContextMenuItem className="text-[#ed4245]">
                          <Trash2 className="mr-2 h-4 w-4" />
                          Delete Channel
                        </ContextMenuItem>
                      </>
                    )}
                  </ContextMenuContent>
                </ContextMenu>
              ))}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

