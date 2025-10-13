import { Content, Section } from "../layout/Section";
import { ReactElement } from "react";
import { Props } from "@/types/common";
import { cn } from "@/lib/utils";

type WhyUSDvtSectionProps = {
  title: ReactElement;
  description?: string;
  buttonText?: string;
  infoCards: {
    icon: ReactElement;
    title: string;
    desc: ReactElement;
  }[];
};

type InfoCardProps = Props & {
icons: React.ReactNode;
title: string;
desc: React.ReactNode | string;
};

const InfoCard: React.FC<InfoCardProps> = ({ icons, title, desc, className }) => {
  return (
  <div className={cn( "flex flex-col items-start justify-between border-l border-[#2A18F2] px-6" , className )}>
    {icons}
    <div className="mt-5 sm:mt-16 flex flex-col gap-2 items-start justify-between">
      <h3 className="text-xl sm:text-2xl font-medium text-loud">{title}</h3>
      <p className="text-base sm:text-lg font-light text-normal">{desc}</p>
    </div>
  </div>
  );
};

const InfoCardMobile: React.FC<InfoCardProps> = ({ icons, title, desc, className }) => {
  return (
  <div className={cn( "flex flex-col items-center justify-between px-6" , className )}>
    <span className="bg-white p-4 rounded-xl">
      {icons}
    </span>
    <div className="mt-5 sm:mt-16 flex flex-col gap-2 items-center justify-between">
      <h3 className="text-xl sm:text-2xl font-medium text-loud">{title}</h3>
      <p className="text-base sm:text-lg font-light text-normal text-center">{desc}</p>
    </div>
  </div>
  );
};

const WhyUSDvtSection = ({ title, description, buttonText, infoCards }: WhyUSDvtSectionProps) => {
  return (
    <Section className="bg-[#EDF1FF] sm:bg-[#F5F5F5]">
      <Content className="py-8">
        <div className="w-full text-center sm:text-left">
          <h6 className="text-[1.1rem] max-[800px]:text-[0.8rem] font-inter font-[350] text-[#0D0D12] pt-4 sm:pt-6">
            WHY USDVT
          </h6>
          <h1 className="text-[3.5rem] max-[800px]:text-[1.7rem] leading-tight font-inter font-[500] tracking-[0.0001em] text-[#0D0D12] pt-2 sm:pt-4">
            {title}
          </h1>
          {description && (
            <p className="text-[1.1rem] font-[350] font-inter text-[#37394A] leading-[1.6em] pt-4 sm:pt-6">
              {description}
            </p>
          )}
          {buttonText && (
            <button className="bg-[#000000] text-[#FFFFFF] border border-[#D8D9DB] rounded px-5 py-2.5 text-[1rem] font-[400] hover:shadow-lg hover:bg-[#335DDE] whitespace-nowrap mt-6 sm:mt-8">
              {buttonText}
            </button>
          )}

          {/* Desktop and Tablet View */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 mt-10 sm:mt-20 pb-10 sm:pb-20 max-[640px]:hidden">
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                icons={card.icon}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>

          {/* Mobile View */}
          <div className="flex flex-col space-y-8 mt-10 pb-10 max-[640px]:block sm:hidden">
            {infoCards.map((card, index) => (
              <InfoCardMobile
                key={index}
                icons={card.icon}
                title={card.title}
                desc={card.desc}
              />
            ))}
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default WhyUSDvtSection;