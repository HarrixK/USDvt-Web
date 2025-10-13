import { Content, Section } from "../layout/Section";
import { ReactElement } from "react";
import Link from "next/link";

type HeroSectionProps = {
  title: ReactElement;
  description: string;
  buttonText: string;
  buttonLink: string;
  asideImage: ReactElement;
};

const HeroSection = ({ title, description, buttonText, buttonLink, asideImage }: HeroSectionProps) => {
  return (
    <>
        <div className="md:hidden lg:hidden">
          {asideImage}
        </div>
        <Section className="bg-white sm:bg-gray-100 pb-10">
            <Content className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                <div className="flex flex-col space-y-6 pt-4 md:pt-0 lg:pt-0 sm:mr-20">
                <h1 className="text-[2.2rem] md:text-[2.75rem] font-medium md:font-bold text-black leading-tight">
                    {title}
                </h1>
                <p className="text-[1rem] md:text-[1.1rem] text-black font-light leading-[1.6em]">
                    {description}
                </p>
                <Link href={buttonLink}>
                    <button className="bg-[#2A18F2] text-white rounded-full px-5 py-2.5 text-[1rem] hover:bg-[#2849b6]">
                    {buttonText}
                    </button>
                </Link>
                </div>
                <div className="hidden md:flex justify-end">
                {asideImage}
                </div>
            </Content>
        </Section>
    </>
    
  );
};

export default HeroSection;