import { ArrowRight } from "lucide-react";
import { Content, Section } from "../layout/Section";
import { Button } from "components/ui/button";
import Image from "next/image";
import { Notable } from "../common";
import Link from "next/link";

const YourRoleSection = () => {
  return (
    <Section className="bg-bunker">
      <Content>
        <div className="py-12 sm:py-36">
          <div className="flex flex-col sm:flex-row items-stretch justify-start gap-4 sm:gap-16 w-full mb-10 sm:mb-20">
            <div className="self-start">
              <h6 className="text-xl text-normal m-0">GET USDvt</h6>
              <h1 className="text-2xl sm:text-6xl mb-6 text-white font-medium">
                Your role in a trusted digital
                <br className="hidden sm:block"/>
                dollar <Notable text="starts here" />
              </h1>
              <h6 className="text-base sm:text-xl text-disabled font-normal">
                Collaborate with USDvt to unlock new opportunities across
                payments, DeFi, and beyond
              </h6>
            </div>
            <div className="flex-1 content-end  text-right">
              <Link href="/contact">
                <Button className="rounded bg-blue-600 text-white py-3 px-6 font-semibold text-sm rounded hover:bg-blue-700 transition-colors w-full sm:w-auto" size={"lg"}>
                  GET USDvt <ArrowRight />
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src={"/images/your-role-bg2.webp"}
            width={1280}
            height={400}
            alt=""
            className="hidden md:block"
            loading="lazy"
          />
          <div className="md:hidden grid grid-cols-3 h-[400px] overflow-hidden w-full">
            <div className="relative"><Image src={"/images/money-transfer.webp"} alt="Money Transfer" loading="lazy" fill className="object-cover" /></div>
            <div className="relative"><Image src={"/images/trade-confirmed.webp"} alt="Trade Confirmed" loading="lazy" fill className="object-cover" /></div>
            <div className="relative"><Image src={"/images/money-received.webp"} alt="Money Received" loading="lazy" fill className="object-cover" /></div>
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default YourRoleSection;
