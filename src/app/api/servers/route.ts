import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { v4 as uuid } from "uuid";
import { MemberRole } from "@prisma/client";

export async function POST(req: Request) {
  try {
        const { name, imgUrl } = await req.json();
        const profile = await currentProfile();

        if (!profile) {
            return new Response("UNAUTHORIZED", { status: 401 });
        }

        const server = await db.server.create({
            data: {
                name,
                imgUrl: imgUrl,
                profileId: profile.id,
                inviteCode: uuid(),
                channels: {
                    create: [
                        { name: "general", profileId: profile.id }
                    ]
                },
                members: {
                    create: [
                        { profileId: profile.id, role: MemberRole.ADMIN }
                    ]
                }
            }
        });

        return NextResponse.json(server);
  }
    catch (error) {
        console.log("SERVER ERROR", error);
        return new NextResponse("INTERNAL ERROR", { status: 500});
}
}