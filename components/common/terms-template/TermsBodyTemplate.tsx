import { useState } from "react";
import { Section } from "../../layout/Section";
import { DesktopToc, MobileToc } from "./TableOfContents";
import { buildSections } from "./ListAndSections";
import ChevronDown from "../../icons/ChevronDown";
import { PolicyTermsTemplateProps } from "./TermsInterfaces";

export default function PolicyTermsTemplate({ termsMeta, sections }: PolicyTermsTemplateProps) {
  const [activeId, setActiveId] = useState(sections[0].id || "intro");
  const [showMobileToc, setShowMobileToc] = useState(false);

  const handleSelectSection = (id: string) => {
    setActiveId(id);
    setShowMobileToc(false);
  };

  const renderedSections = buildSections(sections);

  return (
    <Section className="bg-paper py-8">
        <div className="flex flex-col md:flex-row gap-16 w-full h-[90vh] overflow-auto hide-scrollbar">
          {/* Desktop TOC */}
          <nav className="hidden md:block w-64 flex-shrink-0 sticky top-0 overflow-auto hide-scrollbar">
            <div className="font-medium text-xl leading-7 mb-8 text-loud">Inside the page</div>
              <ul className="space-y-2 leading-7 border-l border-grey-200">
                <DesktopToc
                  sections={sections}
                  activeId={activeId}
                  handleOnClick={handleSelectSection}
                />
              </ul>
          </nav>

          <main className="flex-1">
            <div className="w-full flex flex-col gap-4">
          <p className="text-primary text-sm leading-7 tracking-wide font-medium">{termsMeta.pageTitle}</p>
          <div>
            <div className="text-4xl md:text-6xl font-medium text-loud">{termsMeta.title}</div>
            <div className="text-4xl md:text-6xl font-light text-primary mt-0">{termsMeta.subtitle}</div>
          </div>
          <p className="text-base md:text-xl text-muted leading-7 font-normal">{termsMeta.updated}</p>
        </div>
            <div className="flex flex-col gap-6">{renderedSections}</div>
          </main>
        </div>

        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex flex-col-reverse items-center">
          <div className="w-full px-4 pb-4">
            <button
              className={`w-full bg-white border border-gray-200 ${
                showMobileToc ? "rounded-b-xl" : "rounded-xl"
              } shadow-lg py-3 px-4 flex items-center justify-between text-base font-medium text-loud`}
              onClick={() => setShowMobileToc(!showMobileToc)}
              aria-expanded={showMobileToc}
              aria-controls="mobile-toc"
            >
              <span>Inside the page</span>
              <ChevronDown
                className={`w-5 h-5 ml-2 transition-transform ${showMobileToc ? "rotate-180" : "rotate-0"}`}
              />
            </button>
          </div>

          {showMobileToc && (
            <div className="w-full px-4 mb-0" id="mobile-toc">
              <div className="bg-white border-x border-b-0 border-gray-200 rounded-t-xl shadow-lg w-full max-h-80 overflow-y-auto">
                <ul className="py-2">
                  <MobileToc
                    sections={sections}
                    activeId={activeId}
                    handleOnClick={handleSelectSection}
                  />
                </ul>
              </div>
            </div>
          )}
        </div>
    </Section>
  );
}
