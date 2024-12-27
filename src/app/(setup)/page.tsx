import InitailModal from "@/components/modals/InitailModal";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
        const profile = await initialProfile();

        if (!profile || !(profile instanceof Object && 'id' in profile)) {
            return <div>Error: Profile not found</div>;
        }

        const server = await db.server.findFirst({
            where: {
                members: {
                    some: {
                        profileId: profile.id
                    }
                }
            }
        });

        if (server) {
            return redirect(`/server/${server.id}`);
        }

    return ( 
        <InitailModal />
     );
}
 
export default SetupPage;