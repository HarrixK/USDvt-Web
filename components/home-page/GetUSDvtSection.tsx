import Link from "next/link";
import { Content, Section } from "../layout/Section";
import { ReactElement } from "react";

type ItemProps = {
  icon: ReactElement;
  text: string | ReactElement;
};

type GetUSDvtSectionProps = {
  label?: string | ReactElement;
  title: ReactElement;
  description?: string | ReactElement;
  buttonLink: string;
  items?: ItemProps[];
  buttonText?: string;
  image: ReactElement;
  footnote?: string | ReactElement;
};

const GetUSDvtSection = ({ label, title, description, items, buttonText, image, footnote, buttonLink }: GetUSDvtSectionProps) => {
  return (
    <Section className="bg-white sm:bg-paper">
      <Content className="py-15 sm:py-25">
        <div className="w-full max-w-7xl mx-auto">
          {label && (
            <h6 className="text-[1.1rem] max-[800px]:text-[0.8rem] font-[350] text-[#0D0D12] pt-4 sm:pt-6 text-center sm:text-start">
              {label}
            </h6>
          )}
          <h1 className="text-[3.5rem] max-[800px]:text-[2rem] leading-tight font-[500] tracking-[0.0001em] text-[#0D0D12] pt-2 sm:pt-4 text-center sm:text-start">
            {title}
          </h1>
          <div className="mt-6 sm:mt-[50px] flex flex-col sm:flex-row items-center justify-between">
            <div className="w-full sm:w-1/2 pr-0 sm:pr-10">
              {description && (
                <p className="text-[1.5rem] font-[600] text-[#0D0D12] mb-4 sm:mb-6">{description}</p>
              )}
              {items && items.length > 0 && (
                <div className="space-y-3 sm:space-y-4">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-start">
                      {item.icon}
                      <span className="text-[1rem] sm:text-[1.1rem] text-[#0D0D12B2] ml-2">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <div className="mt-10 sm:mt-16 flex flex-col items-start space-y-4">
                <Link href={buttonLink}>
                  {buttonText && (
                    <button className="bg-[#000000] text-[#FFFFFF] border border-[#D8D9DB] rounded-full px-6 py-3 text-[1rem] font-[400] hover:shadow-lg hover:bg-[#335DDE] whitespace-nowrap">
                      {buttonText}
                    </button>
                  )}
                </Link>
                {footnote && (
                  <p className="text-[0.9rem] text-[#37394A]">{footnote}</p>
                )}
              </div>
            </div>
            <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
              <div className="rounded-lg overflow-hidden">
                {image}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default GetUSDvtSection;