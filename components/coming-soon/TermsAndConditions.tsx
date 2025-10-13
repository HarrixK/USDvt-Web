import { ReactNode } from "react";

interface TermsAndConditionsProps {
  title: string;
  sections: { title: string; description: ReactNode[] }[];
  disclaimer: string;
  footerNote: string;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  title,
  sections,
  disclaimer,
  footerNote
}) => {
  return (
    <section className="w-full text-center py-12 sm:py-16 px-4 sm:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-inter font-[600] leading-snug sm:leading-tight mx-auto max-w-4xl mt-8">
        {title}
      </h1>

      <div className="max-w-xl mx-auto py-10 sm:py-10 text-justify text-sm sm:text-base md:text-lg text-[#37394A] leading-relaxed">
        {sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="font-semibold text-lg sm:text-xl text-[#37394A]">{section.title}</h2>
            <div className="mt-2">
              {section.description.map((item, i) => {
                const isString = typeof item === "string";
                const needsIndent = isString && item.match(/^(?:\d+|[ivx]+)\./i);
                return (
                  <p key={i} className="mb-2 last:mb-0" style={{ marginLeft: needsIndent ? 20 : 0 }}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
        ))}
        <div className="bg-[#FFF6E9] p-3 rounded-md mt-4">
          <p className="text-[#945801] font-medium">{disclaimer}</p>
        </div>
        <p className="mt-10 text-sm sm:text-base">{footerNote}</p>
      </div>
    </section>
  );
};

export default TermsAndConditions;