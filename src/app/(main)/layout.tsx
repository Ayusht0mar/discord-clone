import NavigationSidebar from "@/components/navigation/NavigationSidebar";
import { ModalProvider } from "@/components/providers/modal-provider";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (            
            <div className="h-full">
                <div className="invisible md:visible md:flex h-full z-30 flex-col fixed inset-y-0">
                    <NavigationSidebar/>
                </div>
                <main className="md:pl-[72px] h-full">
                    {children}
                </main>
            </div>
     );
}
 
export default MainLayout;