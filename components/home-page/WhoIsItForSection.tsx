import { ReactElement } from "react";
import { Content, Section } from "../layout/Section";
import CircleCheckIcon from "../icons/CircleCheckIcon";

type InfoCardData = {
  icon: ReactElement;
  heading: string;
  subheading: string | ReactElement;
  description: string | ReactElement;
  list: { lightText: string | ReactElement }[];
  image: ReactElement;
  flipClass?: string;
};

const InfoCard = ({ icon, heading, subheading, description, list, image, flipClass }: InfoCardData) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-5 sm:gap-30 sm:items-center ${flipClass || ""}`}>
      <div className="w-full sm:w-1/2 text-white text-left">
        <div className="flex flex-col justify-between h-full pe-10 ps-0 py-4">
          <div>
            {icon}
            <div className="mt-5">
              <h5 className="text-xl font-medium text-[#696969]">{heading}</h5>
              <h3 className="text-[2rem] max-[800px]:text-[1.7rem] font-[400]">{subheading}</h3>
            </div>
          </div>
          <div className="mt-20">
            <p className="text-white sm:text-lg font-light text-normal">{description}</p>
            <ul className="list-none space-y-2 mt-5">
              {list.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#2A18F2] mr-2">
                    <CircleCheckIcon />
                  </span>
                  <span className="text-gray-400">
                    {item.lightText}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-full sm:h-140 rounded-full sm:w-1/2">
        {image}
      </div>
    </div>
  );
};

type WhoIsItForSectionProps = {
  title: ReactElement;
  subTitle: string;
  infoCards: InfoCardData[];
};

const WhoIsItForSection = ({ subTitle, title, infoCards }: WhoIsItForSectionProps) => {
  return (
    <Section className="bg-[#0D0D12]">
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
                description={card.description}
                list={card.list}
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

export default WhoIsItForSection;