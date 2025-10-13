import Image from "next/image";
import Page from "@/components/layout/Page";
import WhyUsSection from "@/components/page-sections/WhyUsSection";
import GetUSDVTSection from "@/components/page-sections/GetUSDVTSection";
import IntroSection from "@/components/page-sections/IntroSection";
import { Notable } from "@/components/common";
import UseCaseSectionInstitution from "@/components/page-sections/UseCaseSectionInstitution";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function Institution() {
    return (
        <>
            {generateMetaTags({
                ...metaConfigs.institution,
                canonicalUrl: "https://usdvt.com/institution"
            })}
            <Page>
            <IntroSection
                label="for institution"
                title={
                    <>
                        <div className="text-primary block">Powering institutions</div>
                        in the future of stable <br className="hidden sm:block"/> digital finance
                    </>
                }
                desc={`USDvt provides the compliance, speed, and transparency today’s financial platforms need to scale securely in the digital asset economy`}
                asideImage={
                    <Image
                        src={"/images/institution.webp"}
                        alt=""
                        width={719}
                        height={1078}
                        priority
                    />
                }
            />
            <WhyUsSection
                title={
                    <>
                        Trusted by institutions that <br className="hidden sm:block"/> demand <Notable text="scale, speed, and security" />
                    </>
                }
                description="Experience instant settlements, reduced fees, and a fully compliant platform designed for your business needs"
            />
            <UseCaseSectionInstitution title={
                <>
                    Built to <Notable text="integrate" /> with your <br className="hidden sm:block"/> own financial infrastructure
                </>
            } />
            <GetUSDVTSection
                title={"Ready to take control of your digital money?"}
                desc={"Join the growing community using USDvt for fast, safe, and borderless finance."}
            />
            </Page>
        </>
    );
}
