import { cn } from "@/lib/utils";
import { Props } from "@/types/common";
import { Button } from "components/ui/button";
import { ArrowRight } from "lucide-react";
import { Notable } from "../common";

const AboutUSDvt = (props: Props) => {
  return (
    <div className={cn("flex flex-row items-center justify-between", props.className)}>
      <h6 className="text-base md:text-xl text-muted font-normal">
        Join banks, fintech platforms, and compliance innovators supporting USDvt’s mission to bring secure digital dollars to the world.
      </h6>
    </div>
  )
}

const BecomeAPartner = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 justify-between py-12 md:py-20 pr-0 md:pr-16",
        props.className
      )}
    >
      <div className="flex flex-col gap-4">
        <span className=" text-primary font-medium text-sm">
          <span className="!font-extralight">|</span> USDvt Partnership{" "}
          <span className="!font-extralight">|</span>
        </span>
        <div className="font-medium text-loud text-4xl md:text-6xl mg-6 md:mb-14">
          Partnering with <Notable text="global leaders" />{" "}
          build <br className="hidden sm:block"/> a trusted digital dollar
        </div>
        <AboutUSDvt className="md:hidden" />
        <div className="">
          <Button className="bg-bunker w-full md:w-auto uppercase" size={"lg"}>
            Become a partner
            <ArrowRight />
          </Button>
        </div>
      </div>
      <AboutUSDvt className="hidden md:flex" />
    </div>
  );
};

export default BecomeAPartner;
