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

const InfoCard: React.FC<InfoCardProps> = ({ icons, title, desc, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start justify-between border-l border-r border-black px-6",
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

const WhyUsSection: React.FC = () => {
  return (
    <Section className="bg-paper">
      <Content>
        <div className="py-12 sm:py-36">
          <div className="w-full grid grid-cols-1 sm:grid-cols-[0.2fr_1fr] gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-6">

            <h6 className="uppercase text-sm sm:text-xl text-normal self-end">why us</h6>
            <h2 className="text-3xl sm:text-5xl font-medium text-loud">
              Trusted by institutions that
              <span className="text-primary"> move at scale</span>
            </h2>

            <div className="hidden sm:flex self-center">
            </div>

            <div>
              <h6 className="text-base sm:text-xl font-normal text-muted">
                From compliance to real-time settlement, USDvt delivers
                everything your organization needs to operate securely and
                efficiently with digital dollars
              </h6>
            </div>

            <div className="hidden sm:block"></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 mt-10 sm:mt-20">
              <InfoCard
                icons={<FileIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Compliance framework"
                desc={
                  <>
                    Compliant by design to align with
                    <br />
                    evolving financial regulations
                  </>
                }
              />
              <InfoCard
                icons={<SdkIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Real-time settlement"
                desc={
                  <>
                    Move funds anytime — without
                    <br />
                    banking-hour constraints
                  </>
                }
              />
              <InfoCard
                icons={<SecureIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Trusted reserves & audits"
                desc={
                  <>
                    Every token is backed 1:1 and
                    <br />
                    regularly audited for transparency
                  </>
                }
              />
              <InfoCard
                icons={<GrowthIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Plug-and-play systems"
                desc={
                  <>
                    Use our robust APIs and SDKs to
                    <br />
                    integrate quickly and securely
                  </>
                }
              />
              <InfoCard
                icons={<GrowthIcon className="w-8 h-8 sm:w-auto sm:h-auto" />}
                title="Global B2B payments"
                desc={
                  <>
                    Enable global transfers and automate
                    <br />
                    treasury with ease
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