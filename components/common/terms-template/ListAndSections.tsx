import React from "react";
import { Paragraph, TertiaryHeading, getAlphabetLabel } from "./HeadingAndLabel";
import { SectionItem } from "./TermsInterfaces";
export function renderSublist(sublist: SectionItem[]) {
    return (
      <ol className="space-y-4 pl-6">
        {sublist.map((item, idx) => (
          <li key={idx} className="flex flex-col gap-2">
            <div className="flex items-start gap-2">
              <span className="text-base md:text-lg font-normal text-muted">{getAlphabetLabel(idx)}.</span>
              <span className="text-base md:text-lg font-normal text-muted">{item.title}</span>
            </div>
            {item.content.map((para, i) => (
              <Paragraph key={i}>{para}</Paragraph>
            ))}
          </li>
        ))}
      </ol>
    );
}
  
export function renderSubletters(subletters: SectionItem[]) {
  return (
    <ol className="space-y-4 pl-6">
      {subletters.map((letter, idx) => (
        <li key={idx} className="flex flex-col gap-2">
          <div className="flex items-start gap-2">
            <span className="text-xl font-medium text-loud">{getAlphabetLabel(idx)}.</span>
            <span className="text-xl font-medium text-loud">{letter.title}</span>
          </div>
          {letter.content.map((para, i) => (
            <Paragraph key={i}>{para}</Paragraph>
          ))}
          {letter.sublist && renderSublist(letter.sublist)}
        </li>
      ))}
    </ol>
  );
}

export function renderSubsections(subsections: SectionItem[]) {
  return (
    <div className="flex flex-col gap-8">
      {subsections.map((sub, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <TertiaryHeading>{sub.title}</TertiaryHeading>
          {sub.content.map((para, i) => (
            <Paragraph key={i}>{para}</Paragraph>
          ))}
          {sub.subletters && renderSubletters(sub.subletters)}
        </div>
      ))}
    </div>
  );
}

export function buildSections(sections: SectionItem[]) {
  let numberCounter = 1; // Counter for sections before miscellaneous and for value-price
  let miscellaneousCounter = 1; // Counter for miscellaneous and subsequent sections

  return sections.map((section, idx, arr) => {
    // Skip numbering for 'intro', 'user-risks', and 'miscellaneous'
    const shouldSkipNumbering = section.id === "intro" || section.id === "user-risks" || section.id === "miscellaneous";

    // Determine which counter to use and reset for sections following unnumbered sections
    let sectionNumber = null;
    if (!shouldSkipNumbering && idx > 0) {
      // Check if previous section was unnumbered (intro, user-risks, or miscellaneous) to reset counter
      const prevSection = arr[idx - 1];
      const isAfterUnnumbered = prevSection && (prevSection.id === "intro" || prevSection.id === "user-risks" || prevSection.id === "miscellaneous");

      if (section.id === "value-price") {
        numberCounter = 1; // Reset numberCounter for value-price
        sectionNumber = numberCounter++;
      } else if (sections.slice(idx).some(s => s.id === "miscellaneous")) {
        // Sections after value-price but before miscellaneous use numberCounter
        if (isAfterUnnumbered) {
          numberCounter = 1; // Reset for section after intro or user-risks
        }
        sectionNumber = numberCounter++;
      } else {
        // Sections after miscellaneous use miscellaneousCounter
        if (isAfterUnnumbered) {
          miscellaneousCounter = 1; // Reset for section after miscellaneous
        }
        sectionNumber = miscellaneousCounter++;
      }
    }

    return (
      <section key={section.id} id={section.id} className="flex flex-col gap-4 scroll-mt-24">
        <div className="flex items-start gap-2">
          {sectionNumber && (
            <span className="text-large font-semibold text-loud pl-2">{sectionNumber}.</span>
          )}
          <span className="text-large font-semibold text-loud">{section.title}</span>
        </div>
        {section.content.map((para, i) => (
          <Paragraph key={i}>{para}</Paragraph>
        ))}
        {section.subsections && renderSubsections(section.subsections)}
      </section>
    );
  });
}