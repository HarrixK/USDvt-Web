import React from "react";
import { SectionItem } from "./TermsInterfaces";
import Link from "next/link";

interface TocProps {
  sections: SectionItem[];
  activeId: string;
  handleOnClick: (id: string) => void;
}

export const DesktopToc: React.FC<TocProps> = ({ sections, activeId, handleOnClick }) => {
  return (
    <ul>
      {sections.map((item, idx) => (
        <li
          key={idx}
          className={`pl-4 py-1 text-base ${
            activeId === (item.id || "intro")
              ? "text-primary border-l-2 border-primary -ml-px"
              : "text-subdued"
          }`}
        >
          <button
            onClick={() => handleOnClick(item.id || "intro")}
            className="font-medium w-full text-left"
          >
            <Link href={`#${item.id}`}>{item.title}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
};

export const MobileToc: React.FC<TocProps> = ({ sections, activeId, handleOnClick }) => {
  return (
    <ul>
      {sections.map((section, idx) => (
        <li key={idx}>
          <button
            className={`w-full text-left px-4 py-3 text-base font-medium ${
              activeId === section.id ? "text-primary" : "text-subdued"
            }`}
            onClick={() => handleOnClick(section.id!)}
          >
            <Link href={`#${section.id}`}>{section.title}</Link>
          </button>
        </li>
      ))}
    </ul>
  );
};
