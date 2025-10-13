import { Content, Section } from "../layout/Section";
import { ReactElement } from "react";

type ItemProps = {
  icon: ReactElement;
  heading: string | ReactElement;
  text: string | ReactElement;
};

type FeaturesSectionProps = {
  label?: string | ReactElement;
  title: ReactElement;
  description?: string | ReactElement;
  items?: ItemProps[];
};

const FeaturesSection = ({ label, title, description, items }: FeaturesSectionProps) => {
  return (
    <Section className="bg-[#F9F9F9] sm:bg-gray-100">
      <Content className="py-15 sm:py-15">
        <div className="w-full">
          {label && (
            <h6 className="text-[1.1rem] max-[800px]:text-[0.8rem] font-inter font-[350] text-[#0D0D12] pt-4 sm:pt-6 uppercase text-center sm:text-left">
              {label}
            </h6>
          )}
          <h1 className="text-[3.5rem] max-[800px]:text-[2rem] leading-tight font-inter font-[500] tracking-[0.0001em] text-[#0D0D12] pt-2 sm:pt-4 text-center sm:text-left">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-gray-600">{description}</p>
          )}
          <div className="mt-6 sm:mt-20 flex flex-col justify-between h-full max-[640px]:hidden">
            {items && items.length > 0 && (
              <div>
                {items.map((item, index) => (
                  <div key={index} className="flex items-center border-t last:border-b border-black pt-2 pb-2 max-[640px]:hidden">
                    <div className="w-[10%]">{item.icon}</div>
                    <div className="w-[30%]">
                      <h3 className="text-[1rem] sm:text-[1.1rem] font-medium">
                        {item.heading}
                      </h3>
                    </div>
                    <div className="w-[60%]">
                      <p className="text-[0.9rem] sm:text-[1rem] text-gray-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-20 sm:mt-8 flex flex-col justify-between h-full max-[640px]:block sm:hidden">
            {items && items.length > 0 && (
              <div>
                {items.map((item, index) => (
                  <div key={index} className="flex flex-col border-t last:border-b border-black p-4">
                    <div>{item.icon}</div>
                    <div className="mt-5">
                      <h3 className="text-[1rem] sm:text-[1.1rem] font-medium">
                        {item.heading}
                      </h3>
                    </div>
                    <div>
                      <p className="text-[0.9rem] sm:text-[1rem] text-gray-600 mt-15">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default FeaturesSection;