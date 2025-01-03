import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NavigationAction } from "./NavigationAction";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavigationItem from "./NavigationItem";
import { ModeToggle } from "../ModeToggle";
import { UserButton } from "@clerk/nextjs";

const NavigationSidebar = async () => {
    const profile = await currentProfile();

    if (!profile) {
        return redirect('/');
    }

    const servers = await db.server.findMany({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    return ( 
        <div className="flex flex-col items-center space-y-4 h-full text-primary w-full dark:bg-[#1e1f22] bg-[#e3e5e8] py-3">
            <NavigationAction/>
            <Separator className="h-0.5 mx-auto bg-zinc-300 dark:bg-zinc-700 rounded-md w-10"/>
            <ScrollArea className="flex-1 w-full">
                {servers.map(server => (
                    <div key={server.id} className="mb-4">
                            <NavigationItem
                                id={server.id}
                                name={server.name ?? 'Unknown Server'}
                                imgUrl={server.imgUrl}
                            />
                    </div>
                    ))}
            </ScrollArea>
            <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
                <ModeToggle/>
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "h-12 w-12"
                        }
                    }}
                />
            </div>
        </div>
    );
}
 
export default NavigationSidebar;