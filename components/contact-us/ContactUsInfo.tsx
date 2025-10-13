import { cn } from "@/lib/utils";
import { Props } from "@/types/common";
import { Notable } from "../common";

type StatProps = Props & {
  stat: string;
  desc: string;
};
const Stat = (props: StatProps) => {
  return (
    <div
      className={cn(
        "px-6 flex flex-col items-start justify-end border-l border-primary pt-12",
        props.className
      )}
    >
      <div className="text-2xl text-loud font-medium mb-1">{props.stat}</div>
      <div className="text-lg font-light text-normal">{props.desc}</div>
    </div>
  );
};

const ContactUsInfo = () => {
  return (
    <div className="flex flex-col gap-4 justify-between py-12 sm:py-20 pr-0 sm:pr-16">
      <div className="flex flex-col gap-4">
        <span className=" text-primary font-medium text-sm">
          <span className="!font-extralight">|</span> CONTACT US{" "}
          <span className="!font-extralight">|</span>
        </span>
        <div className="font-medium text-loud text-4xl sm:text-6xl">
          Have questions? <br className="hidden sm:block"/>{" "}
          <Notable text="Let&apos;s connect." />
        </div>
        <div className="text-muted font-light text-base sm:text-xl leading-8">
          Whether you&apos;re looking to get USDvt, share ideas, or just have a question, we&apos;re here to help.
        </div>
      </div>

      <div className="hidden sm:flex flex-row items-center justify-between">
        <Stat stat="$60.68 B" desc="USDvt in circulation" />
        <Stat stat="78%" desc="Yearly growth" />
        <Stat stat="2018" desc="Minting since" className="border-r-0 pr-0" />
      </div>
    </div>
  );
};

export default ContactUsInfo;
