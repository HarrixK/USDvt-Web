import { cn } from "@/lib/utils";
import { Props } from "@/types/common";
import { ArrowRight } from "lucide-react";
import { Button } from "components/ui/button";

const Description = (props: Props) => {
  return (
    <div className={cn("flex flex-row items-center justify-between", props.className)}>
      <h6 className="text-base sm:text-xl font-normal text-muted">
        USDvt gives your financial platform the compliance,
        speed, and transparency needed to stay ahead in today’s
        digital economy
      </h6>
    </div>
  )
}

const ForInstitution = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 justify-between py-12 sm:py-20 pr-0 sm:pr-6",
        props.className
      )}
    >
      <div className="flex flex-col gap-4">
        <div className=" text-primary font-medium text-sm uppercase">
          <span className="!font-extralight">|</span> for institution{" "}
          <span className="!font-extralight">|</span>
        </div>
        <div className="font-medium text-loud text-3xl sm:text-6xl sm:mb-14">
          <div className="text-primary block">Empowering</div>
          institutions in the<br className="hidden sm:block"/> stablecoin economy
        </div>
        <Description className="flex sm:hidden" />
        <div className="">
          <Button className="bg-bunker w-full sm:w-auto" size={"lg"}>
            GET USDvt
            <ArrowRight />
          </Button>
        </div>
      </div>
      <Description className="hidden sm:block" />
    </div>
  );
};

export default ForInstitution;
