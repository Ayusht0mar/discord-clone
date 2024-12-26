import { Menu } from "lucide-react";
import { Button } from "./button";
import { Sheet, SheetContent, SheetTrigger } from "./sheet";
import NavigationSidebar from "../navigation/NavigationSidebar";
import ServerSidebar from "../servers/ServerSidebar";

const MobileToggle = ({
    serverId
}: {
    serverId: string; 
}) => {
    return ( 
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="w-[72px]">
                    <NavigationSidebar/>
                </div>
                <ServerSidebar serverId={serverId}/> 
            </SheetContent>
        </Sheet>
     );
}
 
export default MobileToggle;