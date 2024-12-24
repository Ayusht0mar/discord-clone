import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";


interface ActionToolTipProps {
    label: string;
    children: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
}

const ActionToolTip = ({
    label,
    children,
    side = 'top',
    align = 'center'
}: ActionToolTipProps) => {
    return ( 
        <TooltipProvider>
            <Tooltip delayDuration={50}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent side={side} align={align} className="dark:bg-neutral-700 dark:text-white dark:border-white/50 border">
                    <p className="text-sm capitalize">
                        {label.toLowerCase()}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
     );
}
 
export default ActionToolTip;