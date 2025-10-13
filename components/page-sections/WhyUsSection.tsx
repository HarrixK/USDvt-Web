import { Props } from "@/types/common";
import { Content, Section } from "../layout/Section";
import { cn } from "@/lib/utils";
import FileIcon from "../icons/File";
import SdkIcon from "../icons/Sdk";
import SecureIcon from "../icons/Secure";
import GrowthIcon from "../icons/Growth";

type InfoCardProps = Props & {
  icons: React.ReactNode;
  title: string;
  desc: React.ReactNode | string;
};

type WhyUsSectionProps = Props & {
  title: React.ReactNode;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icons, title, desc, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between border-l border-black px-6 last:border-r",
        className
      )}
    >
      {icons}
      <div className="mt-5 sm:mt-16 flex flex-col gap-2 items-start justify-between">
        <h3 className="text-xl sm:text-2xl font-medium text-loud">{title}</h3>
        <p className="text-base sm:text-lg font-light text-normal">{desc}</p>
      </div>
    </div>
  );
};

const WhyUsSection: React.FC<WhyUsSectionProps> = (props) => {
  return (
    <Section className="bg-paper">
      <Content>
        <div className="py-12 sm:py-15">
          <div className="w-ful grid md:gap-x-10 gap-y-2 md:gap-y-6">

            <h6 className="uppercase text-sm sm:text-xl text-normal self-end">why us</h6>
            <h2 className="text-3xl sm:text-5xl font-medium text-loud">
              {props.title}
            </h2>

            <div className="hidden sm:flex self-center">
            </div>

            <div>
              <h6 className="text-base sm:text-xl font-normal text-muted">
                {props.description}
              </h6>
            </div>

            <div className="hidden sm:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 mt-10 sm:mt-20">
              <InfoCard
                icons={<FileIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Compliance framework"
                desc={
                  <>
                    Compliant by design to align with evolving financial regulations
                  </>
                }
              />
              <InfoCard
                icons={<SdkIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Real-time settlement"
                desc={
                  <>
                    Move funds anytime — without banking-hour constraints
                  </>
                }
              />
              <InfoCard
                icons={<SecureIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Trusted reserves & audits"
                desc={
                  <>
                    Every token is backed 1:1 and regularly audited for transparency
                  </>
                }
              />
              <InfoCard
                icons={<GrowthIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Plug-and-play systems"
                desc={
                  <>
                    Use our robust APIs and SDKs to integrate quickly and securely
                  </>
                }
              />
              <InfoCard
                icons={<GrowthIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Global B2B payments"
                desc={
                  <>
                    Enable global transfers and automate treasury with ease
                  </>
                }
              />
            </div>
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default WhyUsSection;