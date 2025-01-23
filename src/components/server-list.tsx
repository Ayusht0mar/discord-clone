"use client"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Plus, Compass, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function ServerList() {
  const pathname = usePathname()
  const servers = [
    { id: "tech-freelancers", name: "Tech Freelancers", defaultChannel: "general" },
    { id: "gaming", name: "Gaming", defaultChannel: "general" },
    { id: "music", name: "Music", defaultChannel: "general" },
    { id: "coding", name: "Coding", defaultChannel: "general" },
  ]

  return (
    <div className="w-[72px] bg-[#1E1F22] flex flex-col items-center py-3 gap-2">
      <Link href="/direct-messages">
        <Button
          variant="secondary"
          size="icon"
          className={`rounded-full ${
            pathname === "/direct-messages"
              ? "bg-[#5865F2] text-white"
              : "bg-[#313338] text-[#dcddde] hover:bg-[#5865F2] hover:text-white"
          } transition-colors`}
        >
          <Image alt="Discord Logo" src="/logo.jpg" width={48} height={48} className="rounded-lg"/>
        </Button>
      </Link>
      <Separator className="h-0.5 w-8 bg-[#35373C] rounded-full my-1" />
      <ScrollArea className="flex-1 w-full">
        <div className="flex flex-col items-center gap-2 px-3">
          {servers.map((server) => (
            <Link key={server.id} href={`/servers/${server.id}/channels/${server.defaultChannel}`}>
              <Button
                variant="ghost"
                size="icon"
                className={`rounded-full ${
                  pathname.startsWith(`/servers/${server.id}`)
                    ? "bg-[#5865F2] text-white"
                    : "bg-[#313338] text-[#dcddde] hover:bg-[#5865F2] hover:text-white"
                } transition-colors`}
              >
                <span className="font-semibold">{server.name[0]}</span>
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <Separator className="h-0.5 w-8 bg-[#35373C] rounded-full my-1" />
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-[#313338] text-[#3ba55c] hover:bg-[#3ba55c] hover:text-white transition-colors"
      >
        <Plus className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-[#313338] text-[#3ba55c] hover:bg-[#3ba55c] hover:text-white transition-colors"
      >
        <Compass className="h-5 w-5" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-[#313338] text-[#3ba55c] hover:bg-[#3ba55c] hover:text-white transition-colors"
      >
        <Download className="h-5 w-5" />
      </Button>
    </div>
  )
}