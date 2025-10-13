import { cn } from "@/lib/utils";
import { Props } from "@/types/common";

type SectionProps = Props & {
    noPadding?: boolean
}
export const Section = (props: SectionProps) => {
    return (
        <div className={cn("", props.className)}>
            <div className="max-w-screen-xl m-auto overflow-hidden">
                <div className={cn({ "px-4 sm:px-8": !props.noPadding })}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export const Content = (props: Props) => {
    return (
        <div className={cn("w-full m-auto", props.className)}>
            {props.children}
        </div>
    )
}