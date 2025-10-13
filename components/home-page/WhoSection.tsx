import { Content, Section } from "../layout/Section";
import { ReactElement, Dispatch, SetStateAction, ReactNode } from "react";
import Image from "next/image";

type ContentItem = {
  header: string;
  listItems: { icon: string; boldText: ReactNode; lightText: string }[];
  image: string;
};

type WhoSectionProps = {
  title: ReactElement;
  whoIndex: number;
  setWhoIndex: Dispatch<SetStateAction<number>>;
  leftHover: boolean;
  setLeftHover: Dispatch<SetStateAction<boolean>>;
  rightHover: boolean;
  setRightHover: Dispatch<SetStateAction<boolean>>;
  content: ContentItem[];
};

const WhoSection = ({
  title,
  whoIndex,
  setWhoIndex,
  setLeftHover,
  setRightHover,
  content,
}: WhoSectionProps) => {
  // Determine if arrows are disabled based on whoIndex
  const isLeftDisabled = whoIndex === 0;
  const isRightDisabled = whoIndex === content.length - 1;

  return (
    <Section className="bg-[#14171F]">
      <Content className="py-15 sm:py-25">
        <h6 className="text-[1.1rem] max-[800px]:text-[0.8rem] font-inter font-[350] text-[#9FA3A4] uppercase tracking-wider">
          WHO IS IT FOR?
        </h6>
        <h1 className="text-[3.5rem] max-[800px]:text-[2rem] leading-tight font-inter font-[500] tracking-[0.0001em] text-[#FFFFFF] pt-4">
          {title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.9fr] gap-6 mt-8">
          <div>
            <h2 className="text-[2rem] max-[800px]:text-[1.5rem] font-inter font-[450] text-[#FFF]">
              {content[whoIndex].header}
            </h2>
            <ul className="mt-4 space-y-4">
              {content[whoIndex].listItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Image
                    src={item.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 flex-shrink-0 mr-4"
                    loading="lazy"
                  />
                  <p className="text-[1.1rem] font-inter">
                    <span className="text-[#FFFFFF]">{item.boldText}</span>{" "}
                    <span className="text-[#9FA3A4]">{item.lightText}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src={content[whoIndex].image}
              alt={`${content[whoIndex].header} graphic`}
              width={0}
              height={350}
              className="w-full h-[400px] object-stretch bg-white"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex justify-start mt-6">
          <div className="flex rounded-full">
            <button
              onClick={() => setWhoIndex((whoIndex + 2) % 3)}
              onMouseEnter={() => setLeftHover(true)}
              onMouseLeave={() => setLeftHover(false)}
              className="rounded-l-full bg-transparent border-none"
              disabled={isLeftDisabled}
            >
              <Image
                width={32}
                height={32}
                src={isLeftDisabled ? "/leftoff.webp" : "/lefton.webp"}
                alt="Previous"
                className="block w-8 h-8"
                loading="lazy"
              />
            </button>
            <button
              onClick={() => setWhoIndex((whoIndex + 1) % 3)}
              onMouseEnter={() => setRightHover(true)}
              onMouseLeave={() => setRightHover(false)}
              className="rounded-r-full bg-transparent border-none"
              disabled={isRightDisabled}
            >
              <Image
                width={32}
                height={32}
                src={isRightDisabled ? "/rightoff.webp" : "/righton.webp"}
                alt="Next"
                className="block w-8 h-8"
                loading="lazy"
              />
            </button>
          </div>
        </div>
        <div className="flex justify-center space-x-12 max-[800px]:space-x-2 mt-6">
          {content.map((_, index) => (
            <div
              key={index}
              onClick={() => setWhoIndex(index)}
              className={`cursor-pointer border-t-2 pt-2 ${
                whoIndex === index ? "border-[#FFFFFF]" : "border-[#50535A]"
              }`}
            >
              <p
                className={`uppercase text-sm font-inter ${
                  whoIndex === index ? "text-[#A5ACB6]" : "text-[#50535A]"
                }`}
              >
                {index === 0 ? "For individuals" : index === 1 ? "For businesses" : "For institutions"}
              </p>
              <p
                className={`mt-2 text-base font-medium font-inter ${
                  whoIndex === index ? "text-[#FFFFFF]" : "text-[#6B6C70]"
                }`}
              >
                {index === 0
                  ? "Get paid, send funds, and save securely in a stable digital dollar."
                  : index === 1
                  ? "Pay globally, skip high fees, and automate your finances."
                  : "Access regulated digital dollars for liquidity, settlement, and yield."}
              </p>
            </div>
          ))}
        </div>
      </Content>
    </Section>
  );
};

export default WhoSection;