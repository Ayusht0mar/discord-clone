"use client"

import { cn } from "@/lib/utils";
import ActionToolTip from "../ui/action-tooltip";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";


interface NavigationActionProps {
    id: string;
    name: string;
    imgUrl?: string;
};

const NavigationItem = ({
    id,
    name,
    imgUrl
}: NavigationActionProps) => {

    const params = useParams();
    const router = useRouter();

    const onClick = () => {
      router.push(`/server/${id}`)  
    }

    return ( 
        <ActionToolTip
            side="right"
            align="center"
            label={name}
        >
            <button
                onClick={onClick}
                className="group relative flex items-center"
            >
                <div className={cn("absolute left-0 bg-primary rounded-r-full transition-all w-1",
                    params?.serverId !== id && "group-hover:h-5",
                    params?.serverId == id ? "h-9" : "h-2"
                )}/>
                <div className={cn("relative group flex mx-3 h-12 w-12 rounded-3xl group-hover:rounded-2xl transition-all overflow-hidden",
                    params?.serverId == id && "bg-primary/10 text-primary rounded-2xl"
                )}>
                    {imgUrl ?

                        <Image
                            fill
                            src={imgUrl}
                            alt="Channel"
                            
                        />

                        :
                        <></>
  
                    }
                </div>


    
            </button>
        </ActionToolTip>
     );
}
 
export default NavigationItem;