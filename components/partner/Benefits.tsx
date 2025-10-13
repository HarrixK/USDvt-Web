import { Props } from "@/types/common";
import { Content, Section } from "../layout/Section";
import { cn } from "@/lib/utils";
import File from "../icons/File";
import Sdk from "../icons/Sdk";
import Secure from "../icons/Secure";
import Growth from "../icons/Growth";
import { Notable } from "../common";

type BenefitsProps = Props & {
  icons: React.ReactNode;
  title: string;
  desc: string | React.ReactNode;
};
const BenefitsInfo = (props: BenefitsProps) => {
  return (
    <div
      className={cn(
        "px-6 py-6 md:py-0 flexflex-col items-start justify-between border-l border-black last:border-r",
        props.className
      )}
    >
      {props.icons}
      <div className="flex flex-col  justify-between gap-2 mt-6 md:mt-16 items-start">
        <div className="text-xl md:text-2xl text-loud font-medium">{props.title}</div>
        <div className="text-base md:text-lg font-light text-normal">{props.desc}</div>
      </div>
    </div>
  );
};

const Benefits = () => {
  return (
    <Section className="bg-paper">
      <Content>
        <div className="py-12 md:py-36">

          <div className="grid md:gap-x-10 gap-y-2 md:gap-y-6 w-full">

            <h6 className="text-xl text-normal  self-end uppercase mb-2">
              Benefits
            </h6>

            <h2 className="text-3xl md:text-5xl text-loud font-medium">
              Why join the <Notable text="USDvt ecosystem" />
            </h2>

            <div></div>
            <h6 className="text-base md:text-xl text-muted font-normal">
              Join our growing network of banks, platforms, and service providers bringing trusted stablecoin access to users and institutions worldwide.
            </h6>

            <div></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-y-10 mt-6 md:mt-14">
              <BenefitsInfo
                icons={<File className="w-8 h-8 md:w-11 md:h-11" />}
                title="Compliance first"
                desc={
                  <>
                    Issued by a U.S. bank with strong audit and compliance standards
                  </>
                }
              />
              <BenefitsInfo
                icons={<Sdk className="w-8 h-8 md:w-11 md:h-11" />}
                title="API & SDK integrations"
                desc={
                  <>
                    Build on flexible infrastructure that supports major wallets and exchanges
                  </>
                }
              />
              <BenefitsInfo
                icons={<Secure className="w-8 h-8 md:w-11 md:h-11" />}
                title="Secure and transparent"
                desc={
                  <>
                    Backed by independent audits, bank-grade security, and real transparency
                  </>
                }
                className="border-r"
              />
              <BenefitsInfo
                icons={<Growth className="w-8 h-8 md:w-11 md:h-11" />}
                title="Built for scale"
                desc={
                  <>
                    Helping bring USDvt to new global users and use cases
                  </>
                }
                className="border-r"
              />
            </div>

          </div>
        </div>
      </Content>
    </Section>
  );
};

export default Benefits;
