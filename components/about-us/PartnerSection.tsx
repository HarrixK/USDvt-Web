"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs"

interface Category {
  title: string;
  description: string;
  borderColor: string;
}

interface PartnerItem {
  iconComponent: React.ReactNode;
  name: string;
  description: string;
  category: string;
}

interface PartnerSectionProps {
  tagline?: string;
  title: string;
  highlightedText?: string;
  categories: Category[];
  partners: PartnerItem[];
  sectionClassName?: string;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({
  tagline = "OUR PARTNERS",
  title,
  highlightedText,
  categories,
  partners,
  sectionClassName = "",
}) => {
  const defaultTab = categories[0]?.title || "";

  return (
    <section className={`bg-gray-100 py-12 sm:py-20 px-4 sm:px-8 ${sectionClassName}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col mb-10">
          <p className="text-xs sm:text-lg font-medium text-gray-500 uppercase mb-3 sm:mb-2 text-base font-normal text-gray-500 uppercase flex items-end">
            {tagline}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium">
            {title.split(highlightedText || "").map((part, index) =>
              index === 1 && highlightedText ? (
                <span key={index} className="text-blue-600 font-serif">
                  {highlightedText}
                </span>
              ) : (
                part
              )
            )}
          </h2>
        </div>

        <Tabs defaultValue={defaultTab} className="mb-10">
          <TabsList>
            {categories.map((category, index) => (
              <TabsTrigger
                key={index}
                value={category.title}
                borderColor={category.borderColor}
              >
                <span className="text-xs uppercase font-normal mb-2">{category.title}</span>
                <br/>
                <span className="text-sm text-gray-800 max-w-md pb-4">{category.description}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category, index) => (
            <TabsContent key={index} value={category.title} className="mt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ml-0 mt-4">
                {partners
                  .filter((partner) => partner.category === category.title)
                  .map((partner, idx) => (
                    <div key={idx} className="p-4 m-2">
                      {partner.iconComponent}
                      <div className="h-7 w-full mb-4" />
                      <p className="font-medium text-gray-800 text-xl mb-1">{partner.name}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{partner.description}</p>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default PartnerSection;