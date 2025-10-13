import { Content, Section } from "../layout/Section";
import { Props } from "@/types/common";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ReactElement } from "react";
import Link from "next/link";

type FeaturesSectionProps = {
  label?: string | ReactElement;
  title: ReactElement;
  description?: string | ReactElement;
};

type BlogProps = Props & {
  imgUrl: string;
  title: string;
  author: string;
  date: string;
};

const BlogSection = (props: BlogProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-start overflow-hidden pb-4 sm:h-100",
        props.className
      )}
    >
      <div className="relative h-48 sm:h-50 w-full">
        <Link href="/blog">
          <Image src={props.imgUrl} alt={props.title} fill loading="lazy" className="object-cover rounded-lg bg-white" />
        </Link>
      </div>
      <div className="flex flex-col justify-start items-start gap-2 pt-2 sm:pt-10">
        <h5 className="text-white text-xl sm:text-2xl font-medium m-0 leading-tight">{props.title}</h5>
        <span className="text-gray-500 text-xs sm:text-sm m-0 mt-2">
            <span className="mr-3">
                {props.author}
            </span>
           {props.date}
        </span>
      </div>
    </div>
  );
};

const BlogsSection = ({ label, title, description }: FeaturesSectionProps) => {
  return (
    <Section className="bg-[#14171F]">
      <Content className="py-15 sm:py-25">
        <div className="w-full">
          {label && (
            <h6 className="text-[1.1rem] font-medium text-[#A0A0A0] uppercase">
              {label}
            </h6>
          )}
          <h1 className="text-[2rem] sm:text-[3.5rem] leading-tight text-white pt-2 sm:pt-4">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-gray-600">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-20">
            <BlogSection
              title="Why Vermont-Regulated Digital Dollars Matter for Global Finance"
              imgUrl="/blog/Blog-1.webp"
              author="Natalie S"
              date="April 30, 2025"
            />
          <BlogSection
            title="From Cross-Border Payments to Treasury Management"
            imgUrl="/blog/Blog-2.webp"
            author="Natalie S"
            date="April 30, 2025"
          />
          <BlogSection
            title="From Cross-Border Payments to Treasury Management"
            imgUrl="/blog/Blog-3.webp"
            author="Natalie S"
            date="April 30, 2025"
          />
          <BlogSection
            title="Understanding the Difference: USDvt vs. iUSDvt for Your Financial Needs"
            imgUrl="/blog/Blog-4.webp"
            author="Natalie S"
            date="April 30, 2025"
          />
        </div>
      </Content>
    </Section>
  );
};

export default BlogsSection;