import TermsAndConditions from "@/components/terms-and-conditions/TermsAndConditions";
import Page from "../../components/layout/Page";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function TermsAndConditionsPage() {
  return <>
    {generateMetaTags({
      ...metaConfigs.terms,
      canonicalUrl: "https://usdvt.com/terms-and-conditions"
    })}
    <Page>
      <TermsAndConditions />
    </Page>
  </>;
} 