import { ServerHeader } from "@/components/server-header";
import { ChannelList } from "@/components/channel-list";
import { ChannelContent } from "@/components/channel-content";

type paramsType = Promise<{serverId: string; channelId: string}>;

export default async function ContentPage(props: { params: paramsType }) {
  const { serverId, channelId } = await props.params;

  return (
    <>
      <div className="w-60 bg-[#2B2D31] flex flex-col min-h-screen">
        <ServerHeader name="Tech Freelancers" />
        <ChannelList serverId={serverId} activeChannelId={channelId} />
      </div>
      <ChannelContent serverId={serverId} channelId={channelId} />
    </>
  );
}
