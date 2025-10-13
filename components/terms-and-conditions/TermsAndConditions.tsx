import PolicyTermsTemplate from "../common/terms-template/TermsBodyTemplate";
import { termsMeta, sections } from "./TermsData";

export default function TermsAndConditions() {
  return <PolicyTermsTemplate termsMeta={termsMeta} sections={sections} />;
}