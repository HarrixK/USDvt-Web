import Page from "@/components/layout/Page";
import PrivacyPolicy from "@/components/privacy-policy/PrivacyPolicy";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function PrivacyPolicyPage() {
  return (
    <>
      {generateMetaTags({
        ...metaConfigs.privacy,
        canonicalUrl: "https://usdvt.com/privacy"
      })}
      <Page>
        <PrivacyPolicy />
      </Page>
    </>
  );
} 