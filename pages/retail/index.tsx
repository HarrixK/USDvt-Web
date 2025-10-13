import Page from "@/components/layout/Page";
import Image from "next/image";
import WhyUsSection from "@/components/page-sections/WhyUsSection";
import GetUSDVTSection from "@/components/page-sections/GetUSDVTSection";
import { Notable } from "@/components/common";
import IntroSection from "@/components/page-sections/IntroSection";
import UseCaseSectionRetail from "@/components/page-sections/UseCaseSectionRetail";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function Retail() {
  return (
    <>
      {generateMetaTags({
        ...metaConfigs.retail,
        canonicalUrl: "https://usdvt.com/retail"
      })}
      <Page>
      <IntroSection
        label="for retail"
        title={
          <>
            Take <Notable text="control" /> of your <br className="hidden sm:block"/> digital dollars anytime <br className="hidden sm:block"/> and anywhere
          </>
        }
        desc="Send, save, and get paid with a digital dollar that’s stable, simple, and always available—no banks needed"
        asideImage={
          <Image
            src={"/images/business-aside.webp"}
            alt=""
            width={680}
            height={810}
            priority
          />
        }
      />
      <WhyUsSection
        title={
          <>
            Send,receive, and save <br className="hidden sm:block" />
            <Notable text=" without limit"/> or bank fees
          </>
        }
        description="Experience instant settlements, reduced fees, and a fully compliant platform designed for your business needs"
      />
      <UseCaseSectionRetail
        title={<>Everything you need in one <br className="hidden sm:block" /> stable wallet</>}
      />
      <GetUSDVTSection
        title={"Ready to take control of your digital money?"}
        desc="Join the growing community using USDvt for fast, safe, and borderless finance."
      />
      </Page>
    </>
  );
}
