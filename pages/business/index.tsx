import Page from "@/components/layout/Page";
import Image from "next/image";
import WhyUsSection from "@/components/page-sections/WhyUsSection";
import UseCaseSection from "@/components/page-sections/UseCaseSection";
import GetUSDVTSection from "@/components/page-sections/GetUSDVTSection";
import { Notable } from "@/components/common";
import IntroSection from "@/components/page-sections/IntroSection";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function Business() {
    return (
        <>
            {generateMetaTags({
                ...metaConfigs.business,
                canonicalUrl: "https://usdvt.com/business"
            })}
            <Page>
            <IntroSection
                label="for business"
                title={
                    <>
                        Power your business with{" "}
                        <Notable text="faster and cheaper" /> payments
                    </>
                }
                desc="Use USDvt to send global payouts, automate vendor flows, and save on fees—all without bank delays"
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
                        Cut costs and{" "}
                        <Notable text="simplify" /> <br className="hidden sm:block"/> <Notable text="payments" /> today
                    </>
                }
                description="Experience instant settlements, reduced fees, and a fully compliant platform designed for your business needs"
            />
            <UseCaseSection
                title={
                    <>
                        <Notable text="Plug into payments" /> built for scale
                    </>
                }
            />
            <GetUSDVTSection
                title={"Ready to take control of your digital money?"}
                desc="Join the growing community using USDvt for fast, safe, and borderless finance." />
            </Page>
        </>
    );
}
