import TermsAndConditions from "@/components/coming-soon/TermsAndConditions";
import ComingSoonFooter from "@/components/layout/ComingSoonFooter";
import ComingSoonHeader from "@/components/layout/ComingSoonHeader";
import { termsMeta, sections as termsSections } from "@/components/terms-and-conditions/TermsData";
import { SectionItem } from "@/components/common/terms-template/TermsInterfaces";
import { ReactNode } from "react";

const flattenContent = (content: (string | ReactNode)[]): ReactNode[] => {
  return content
    .map(item => {
      if (typeof item === "string") {
        return item;
      } else if (item && typeof item === "object" && "props" in item) {
        if (item.type === "strong" || item.type === "b") {
          return <strong key={item.key}>{flattenContent([item.props.children])[0]}</strong>;
        }
        if (item.props.children) {
          if (Array.isArray(item.props.children)) {
            return item.props.children
              .map((child: ReactNode) =>
                typeof child === "string" ? child : flattenContent([child])[0] || ""
              )
              .filter((child: string) => child)
              .join(" ");
          } else if (typeof item.props.children === "string") {
            return item.props.children;
          } else if (item.props.children && typeof item.props.children === "object") {
            return flattenContent([item.props.children])[0] || "";
          }
        }
      }
      return "";
    })
    .filter(item => item);
};

const buildSectionsWithNumbering = (sections: SectionItem[]) => {
  let numberCounter = 1;
  let miscellaneousCounter = 1;

  return sections.map((section, idx, arr) => {
    const shouldSkipNumbering =
      section.id === "intro" ||
      section.id === "user-risks" ||
      section.id === "miscellaneous";

    let sectionNumber = null;
    if (!shouldSkipNumbering && idx > 0) {
      const prevSection = arr[idx - 1];
      const isAfterUnnumbered =
        prevSection &&
        (prevSection.id === "intro" ||
          prevSection.id === "user-risks" ||
          prevSection.id === "miscellaneous");

      if (section.id === "value-price") {
        numberCounter = 1;
        sectionNumber = numberCounter++;
      } else if (sections.slice(idx).some(s => s.id === "miscellaneous")) {
        if (isAfterUnnumbered) {
          numberCounter = 1;
        }
        sectionNumber = numberCounter++;
      } else {
        if (isAfterUnnumbered) {
          miscellaneousCounter = 1;
        }
        sectionNumber = miscellaneousCounter++;
      }
    }

    const title = sectionNumber ? `${sectionNumber}. ${section.title}` : section.title;

    return {
      title,
      description: flattenContent(section.content),
    };
  });
};

const TermsAndConditionsUSDvt = () => {
  const transformedSections = buildSectionsWithNumbering(termsSections);

  return (
    <>
      <ComingSoonHeader />
      <main className="w-full h-full">
        <TermsAndConditions
          title={termsMeta.title}
          sections={transformedSections}
          disclaimer="Important Disclaimer: USDVT is not FDIC insured; not insured by any federal government agency; is not a deposit or other obligation of, or guaranteed by, Vermont State Bank, or any of its affiliates."
          footerNote={termsMeta.updated}
        />
      </main>
      <ComingSoonFooter />
    </>
  );
};

export default TermsAndConditionsUSDvt;