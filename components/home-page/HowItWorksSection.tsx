import { ReactElement } from "react";
import { Content, Section } from "../layout/Section";

type InfoCardData = {
  icon: ReactElement;
  heading: string;
  subheading: string | ReactElement;
  image: ReactElement;
  flipClass?: string;
};

const InfoCard = ({ icon, heading, subheading, image, flipClass }: InfoCardData) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-5 sm:gap-30 sm:items-center ${flipClass || ""}`}>
      <div className="w-full sm:w-1/2 text-white text-left">
        <div className="flex flex-col justify-between h-full pe-10 ps-0 py-4">
          <div>
            {icon}
            <div className="mt-5">
              <h5 className="text-xl font-medium text-[#696969] uppercase">{heading}</h5>
              <h3 className="text-[2rem] max-[800px]:text-[1.7rem] font-[400] mt-10 sm:mt-20">{subheading}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full sm:h-140 rounded-full sm:w-1/2">
        {image}
      </div>
    </div>
  );
};

type HowItWorksSectionProps = {
  title: ReactElement;
  subTitle: string;
  infoCards: InfoCardData[];
};

const HowItWorksSection = ({ subTitle, title, infoCards }: HowItWorksSectionProps) => {
  return (
    <Section className="bg-[#14171F]">
      <Content className="sm:py-30 py-20">
        <div className="w-full text-center sm:text-left">
          <h6 className="text-[1.1rem] font-medium text-[#A0A0A0] uppercase">{subTitle}</h6>
          <h1 className="text-[2rem] sm:text-[3.5rem] leading-tight text-white pt-2 sm:pt-4">
            {title}
          </h1>
          <div className="mt-10 sm:mt-20 space-y-12">
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                heading={card.heading}
                subheading={card.subheading}
                image={card.image}
                flipClass={card.flipClass}
              />
            ))}
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default HowItWorksSection;