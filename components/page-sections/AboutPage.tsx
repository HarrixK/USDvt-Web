import { cn } from "@/lib/utils";
import { Props } from "@/types/common";
import { ArrowRight } from "lucide-react";
import { Button } from "components/ui/button";

//#region helper components
const ClosingParagraph = (props: Props & { desc: string }) => {
    return (
        <div className={cn("flex flex-row items-center justify-between", props.className)}>
            <h6 className="text-base sm:text-xl font-normal text-muted">
                {props.desc}
            </h6>
        </div>
    )
}
//#endregion

export type AboutPageProps = Props & {
    label: string
    title?: React.ReactNode
    desc?: string
    actionBtnText?: React.ReactNode
    onActionBtnClick?: () => void
}

const AboutPage = (props: AboutPageProps) => {
    const { actionBtnText = "GET USDvt" } = props;
    return (
        <div
            className={cn(
                "flex flex-col gap-4 justify-between py-12 sm:py-20 pr-0 sm:pr-6",
                props.className
            )}
        >
            <div className="flex flex-col gap-4">
                <div className=" text-primary font-medium text-sm uppercase">
                    <span className="!font-extralight mr-2">|</span>
                    {props.label}{" "}
                    <span className="!font-extralight ml-2">|</span>
                </div>
                <div className="font-medium text-loud text-3xl sm:text-6xl sm:mb-14">
                    {props.title}
                </div>
                <ClosingParagraph desc={props.desc || ""} className="flex sm:hidden" />
                <div className="">
                    <Button className="bg-bunker w-full sm:w-auto" size={"lg"} onClick={props.onActionBtnClick}>
                        {actionBtnText}
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <ClosingParagraph desc={props.desc || ""} className="hidden sm:block" />
        </div>
    );
};

export default AboutPage;
