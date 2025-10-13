import { Content, Section } from "../layout/Section";
import { ReactElement, Dispatch, SetStateAction } from "react";

type ItemProps = {
  heading: string | ReactElement;
  text: string | ReactElement;
};

type FeaturesSectionProps = {
  label?: string | ReactElement;
  title: ReactElement;
  description?: string | ReactElement;
  items?: ItemProps[];
  image: ReactElement;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
};

const HowItWorks = ({ label, title, description, items, image, activeIndex, setActiveIndex }: FeaturesSectionProps) => {
  return (
    <Section className="bg-[#14171F]">
      <Content className="py-15 sm:py-25">
        <div className="w-full">
          {label && (
            <h6 className="text-[1.1rem] max-[800px]:text-[0.8rem] font-inter font-[350] text-gray-500 uppercase">
              {label}
            </h6>
          )}
          <h1 className="text-[3.5rem] max-[800px]:text-[2rem] leading-tight font-inter font-[500] tracking-[0.0001em] text-white pt-2 sm:pt-4">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-gray-500">{description}</p>
          )}
          <div className="mt-6 sm:mt-[50px] flex flex-col sm:flex-row sm:items-start h-full">
            <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:pr-15">
              {items && items.length > 0 && (
                <div>
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-start border-t last:border-b border-gray-500 pt-5 pb-5 cursor-pointer ${
                        activeIndex === index ? "" : ""
                      }`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <span
                        className={`flex flex-row align-center text-[1rem] sm:text-[1.4rem] ${
                          activeIndex === index ? "text-[#FFFFFF]" : "text-gray-600"
                        }`}
                      >
                        {index + 1}.
                        <h3 className="ms-4">{item.heading}</h3>
                      </span>
                      <p
                        className={`text-[0.9rem] sm:text-[1.1rem] mt-2 ${
                          activeIndex === index ? "text-[#A3ACB9]" : "text-gray-600"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
              {image}
            </div>
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default HowItWorks;