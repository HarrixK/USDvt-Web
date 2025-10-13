import { Section} from "../layout/Section";
import Link from 'next/link';
import { useState } from "react";

const Subheading = ({ children }: { children: React.ReactNode }) => (
  <div className="text-2xl md:text-2xl font-semibold text-loud">{children}</div>
);

const SmallHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xl md:text-xl font-medium text-loud">{children}</div>
);

const Paragraph = ({ children }: { children: React.ReactNode }) => (
  <p className="text-base md:text-lg text-muted leading-7 font-normal">{children}</p>
);

const sections = [
  {
    title: "What information do we collect?",
    id: "what-we-collect",
    content: [
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
      "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.",
      "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    ],
  },
  {
    title: "How do we use your information?",
    id: "how-we-use",
    content: [
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
      "Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.",
      "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.",
    ],
  },
  {
    title: "Do we use cookies and other tracking technologies?",
    id: "cookies",
    small: true,
    content: [
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
    ],
  },
  {
    title: "How long do we keep your information?",
    id: "how-long",
    small: true,
    content: [
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
    ],
  },
  {
    title: "How do we keep your information safe?",
    id: "how-safe",
    small: true,
    content: [
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
    ],
  },
  {
    title: "What are your privacy rights?",
    id: "privacy-rights",
    content: [
      "Pharetra morbi libero id aliquam elit massa integer tellus. Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in ac pellentesque ac.",
    ],
  },
  {
    title: "How can you contact us about this policy?",
    id: "contact-us",
    small: true,
    content: [
      "Sagittis et eu at elementum, quis in. Proin praesent volutpat egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate consectetur ac ultrices at diam dui eget fringilla tincidunt. Arcu sit dignissim massa erat cursus vulputate gravida id. Sed quis auctor vulputate hac elementum gravida cursus dis.",
    ],
    list: [
      "Luctus id duis vitae porttitor enim gravida morbi.",
      "Eu turpis posuere semper feugiat volutpat elit, ultrices suspendisse. Auctor vel in vitae placerat.",
      "Suspendisse maecenas ac donec scelerisque diam sed est duis purus.",
    ],
  },
];

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const [showMobileToc, setShowMobileToc] = useState(false);
  const handleSelectSection = (id: string) => {
    setActiveId(id);
    setShowMobileToc(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Section className="bg-paper py-8">
      <div className="flex flex-col md:flex-row gap-0 md:gap-16 w-full h-[90vh] overflow-auto hide-scrollbar">
        <aside className="hidden md:block w-64 flex-shrink-0 sticky top-0 h-screen">
          <div className="font-medium text-xl leading-7 mb-8 text-loud">Inside the page</div>
            <ul className="space-y-2 leading-7 border-l border-grey-200">
              {sections.map((section, idx) => (
                <li
                  key={idx}
                  className={`pl-4 py-1 text-base ${
                    activeId === section.id ? "text-primary border-l-2 border-primary -ml-px" : "text-subdued"
                  }`}
                >
                  <Link
                    href={`#${section.id}`}
                    onClick={() => handleSelectSection(section.id)}
                    className="hover:underline focus:underline font-medium"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
        </aside>

        <div className="flex-1">
          <div className="w-full mb-8 md:mb-12 px-4 md:px-0">
            <p className="text-primary text-xs md:text-sm leading-7 mb-2 md:mb-4 tracking-wide font-medium">
              | PRIVACY POLICY |
            </p>
            <div className="text-3xl md:text-6xl font-medium text-loud mb-0">Your privacy. Our</div>
            <div className="text-3xl md:text-6xl font-light text-primary mb-4 md:mb-6 mt-0">main priority</div>
            <p className="text-base md:text-xl text-muted leading-7 font-normal mb-8 md:mb-12 mr-0 lg:mr-80">
              We&apos;re committed to protecting your personal data and keeping your information secure, transparent, and in your control.
            </p>
          </div>
          <div className="flex flex-col gap-10 px-4 md:px-0">
            <div className="flex flex-col gap-4">
              <Paragraph>
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.
              </Paragraph>
              <Paragraph>
                Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat
              </Paragraph>
            </div>
            {sections.map((section, idx) => (
              <section key={idx} id={section.id} className="flex flex-col gap-4 scroll-mt-24">
                {section.small ? <SmallHeading>{section.title}</SmallHeading> : <Subheading>{section.title}</Subheading>}
                <div className="flex flex-col gap-4">
                  {section.content.map((para, i) => (
                    <Paragraph key={i}>{para}</Paragraph>
                  ))}
                  {section.list && (
                    <ol className="list-decimal pl-6 text-muted text-base leading-7 space-y-1">
                      {section.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile TOC - unchanged as requested */}
      <div className="fixed bottom-0 left-0 w-full z-50 md:hidden flex flex-col-reverse items-center">
        <div className="w-full px-4 pb-4">
          <button
            className={`w-full bg-white border border-gray-200 ${
              showMobileToc ? "rounded-b-xl rounded-b-none" : "rounded-xl"
            } shadow-lg py-3 px-4 flex items-center justify-between text-base font-medium text-loud`}
            onClick={() => setShowMobileToc(!showMobileToc)}
          >
            <span>{sections.find((s) => s.id === activeId)?.title || "Inside the page"}</span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${showMobileToc ? "rotate-180" : "rotate-0"}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        {showMobileToc && (
          <div className="w-full px-4 mb-0">
            <div className="bg-white border-x border-b-0 border-gray-200 rounded-t-xl shadow-lg w-full max-h-80 overflow-y-auto">
              <ul className="py-2">
                {sections.map((section, idx) => (
                  <li key={idx}>
                    <button
                      className={`w-full text-left px-4 py-3 text-base font-medium ${
                        activeId === section.id ? "text-primary" : "text-subdued"
                      }`}
                      onClick={() => handleSelectSection(section.id)}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}