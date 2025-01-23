import { redirect } from "next/navigation"



type paramsType = Promise<{serverId: string}>;

export default async function ServerPage(props: { params: paramsType }) {
  const { serverId } = await props.params;

  redirect(`/servers/${serverId}/channels/general`)
}

