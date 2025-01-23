import { ChannelList } from "@/components/channel-list"
import { DirectMessageContent } from "@/components/direct-message-content"

export default function DirectMessages() {
  return (
    <>
      <div className="w-60 bg-[#2B2D31] flex flex-col min-h-screen">
        <ChannelList serverId="dm" activeChannelId="dm" />
      </div>
      <DirectMessageContent />
    </>
  )
}

