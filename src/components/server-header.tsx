"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Settings, UserPlus, Users, X } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export function ServerHeader({ name }: { name: string }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button
          variant="ghost"
          className="w-full h-12 px-4 font-semibold text-white hover:bg-[#35373C] rounded-none flex items-center justify-between border-b border-[#1f2023]"
        >
          {name}
          <ChevronDown className="h-5 w-5 text-[#b5bac1]" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[220px] bg-[#111214] rounded-md p-2 shadow-xl" sideOffset={5}>
          <DropdownMenu.Item className="text-[#949BA4] text-sm px-2 py-1.5 cursor-pointer flex items-center hover:bg-[#4752c4] hover:text-white rounded-sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Invite People
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-[#2b2d31] my-2" />
          <DropdownMenu.Item className="text-[#949BA4] text-sm px-2 py-1.5 cursor-pointer flex items-center hover:bg-[#4752c4] hover:text-white rounded-sm">
            <Settings className="mr-2 h-4 w-4" />
            Server Settings
          </DropdownMenu.Item>
          <DropdownMenu.Item className="text-[#949BA4] text-sm px-2 py-1.5 cursor-pointer flex items-center hover:bg-[#4752c4] hover:text-white rounded-sm">
            <Users className="mr-2 h-4 w-4" />
            Manage Members
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="h-px bg-[#2b2d31] my-2" />
          <DropdownMenu.Item className="text-[#ed4245] text-sm px-2 py-1.5 cursor-pointer flex items-center hover:bg-[#ed4245] hover:text-white rounded-sm">
            <X className="mr-2 h-4 w-4" />
            Leave Server
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

