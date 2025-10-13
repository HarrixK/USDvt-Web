import { Content, Section } from "../layout/Section";
import { ReactElement } from "react";
import Link from "next/link";

type BannerSectionProps = {
  label?: ReactElement;
  title: ReactElement;
  description: string;
  buttonText: string;
  buttonLink: string;
  asideImage: ReactElement;
  cTABannerImage: ReactElement;
};

const BannerSection = ({ label, title, description, buttonText, asideImage, cTABannerImage, buttonLink }: BannerSectionProps) => {
  return (
    <Section className="bg-paper">
      <Content className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-6">
        {/* Desktop View */}
        <div className="flex flex-col justify-between py-8 max-[1180px]:hidden">
          <div>
            {label && (
            <div className="mb-4 inline-flex items-center bg-[#FEECD7] text-[#046330] text-sm font-bold font-inter rounded-full px-3 py-1">
              {cTABannerImage}
              {/* <Twitter className="w-4 h-4 mr-2" /> */}
              {label}
            </div>
          )}
          <h1 className="text-[3.75rem] max-[800px]:text-[2.5rem] leading-tight font-inter font-[525] tracking-[0.0001em] text-[#0D0D12]">
            {title}
          </h1>
          </div>
          <div className="pb-10 flex items-center space-x-6 max-[1180px]:flex-col max-[1180px]:space-x-0 max-[1180px]:space-y-4">
            <Link href={buttonLink}>
              <button className="bg-[#000000] text-[#FFFFFF] border border-[#D8D9DB] rounded px-5 py-2.5 text-[1rem] font-[400] hover:shadow-lg hover:bg-[#335DDE] whitespace-nowrap flex-shrink-0">
                {buttonText}
              </button>
            </Link>
            <p className="text-[1.1rem] font-[350] font-inter text-[#37394A] leading-[1.6em]">
              {description}
            </p>
          </div>
        </div>
        <div className="min-w-0 max-[1180px]:hidden">
          {asideImage}
        </div>

        {/* Mobile View */}
        <div className="flex flex-col items-center py-6 px-4 max-[1180px]:block md:hidden">
          <h1 className="text-[2.5rem] leading-tight font-inter font-[525] tracking-[0.0001em] text-[#0D0D12] text-left">
            {title}
          </h1>
          <div className="pb-6 flex flex-col items-start space-y-4">
            <p className="text-[1rem] font-[350] font-inter text-[#37394A] leading-[1.5em] text-left">
              {description}
            </p>
            <Link href={buttonLink}>
              <button className="bg-[#000000] text-[#FFFFFF] border border-[#D8D9DB] rounded px-6 py-3 text-[1rem] font-[400] hover:shadow-lg hover:bg-[#335DDE] w-full text-left">
                {buttonText}
              </button>
            </Link>
          </div>
          <div className="relative w-full">
            {asideImage}
          </div>
        </div>
      </Content>
    </Section>
  );
};

export default BannerSection;