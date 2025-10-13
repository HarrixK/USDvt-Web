import { ReactElement } from "react";

export type SectionItem = {
  id ? : string;
  title: string;
  content: (string | ReactElement)[];
  subsections ? : SectionItem[];
  subletters ? : SectionItem[];
  sublist ? : SectionItem[];
};

export type TermsMeta = {
  pageTitle: string;
  title: string;
  subtitle: string;
  updated: string;
};

export type PolicyTermsTemplateProps = {
  termsMeta: TermsMeta;
  sections: SectionItem[];
};