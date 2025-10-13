import { ReactElement } from "react";
import { Content, Section } from "../layout/Section";

type InfoCardData = {
  icon: ReactElement;
  statusIcon: ReactElement;
  name: string;
  subName: string;
  status: string;
  fees: string;
  speed: string;
  description: string;
};

type MultiChainSectionProps = {
  title: ReactElement;
  subTitle: string;
  infoCards: InfoCardData[];
};

const InfoCard = ({ icon, name, subName, statusIcon, status, fees, speed, description }: InfoCardData) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full flex flex-col justify-between h-full">
      <div className="flex flex-row items-center justify-between border-b pb-2 mb-2">
        <div className="flex items-center text-start">
          {icon}
          <div>
            <h3 className="text-lg font-medium ml-2">{name}</h3>
            <h6 className="text-sm font-light ml-2">{subName}</h6>
          </div>
        </div>
        <span className={`flex flex-row px-2 py-1 text-sm font-semibold ${status === "Live" ? "bg-[#D3F8E7] text-[#1BA86C]" : "bg-[#F2F5F8] text-[#A3ACB9]"} rounded-full flex justify-center items-center`}>
          <span className="mr-2">{statusIcon}</span>
          <span>{status}</span>
        </span>
      </div>
      <div className="space-y-1 text-sm flex justify-between">
        <p className="text-gray-400">Fees:</p>
        <p className="font-normal">{fees}</p>
      </div>
      <div className="space-y-1 text-sm text-gray-600 flex justify-between">
        <p className="text-gray-400">Speed:</p>
        <p className="font-normal">{speed}</p>
      </div>
      <p className="mt-5 text-sm bg-[#E5EAFB] text-[#335DDE] rounded-lg p-2 text-start">{description}</p>
    </div>
  );
};

const MultiChainSection = ({ title, subTitle, infoCards }: MultiChainSectionProps) => {
  return (
    <Section className="bg-white sm:bg-paper">
      <Content className="py-15 sm:py-25">
        <div className="w-full text-center sm:text-left">
          <h6 className="text-[1.1rem] font-medium text-gray-500 uppercase">{subTitle}</h6>
          <h1 className="text-[2rem] sm:text-[3.5rem] leading-tight text-black pt-2 sm:pt-4">
            {title}
          </h1>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoCards.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                name={card.name}
                subName={card.subName}
                statusIcon={card.statusIcon}
                status={card.status}
                fees={card.fees}
                speed={card.speed}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default MultiChainSection;