import Page from "@/components/layout/Page";
import { Content, Section } from "components/layout/Section";
import YourRoleSection from "@/components/contact-us/YourRoleSection";
import BecomeAPartner from "@/components/partner/BecomeAPartner";
import Image from "next/image";
import Benefits from "@/components/partner/Benefits";
import OurPartners from "@/components/partner/OurPartners";
import Badge from "@/components/partner/Badge";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function Partner() {
  return (
    <>
      {generateMetaTags({
        ...metaConfigs.partner,
        canonicalUrl: "https://usdvt.com/partner"
      })}
      <Page>
      <Section className="bg-paper">
        <Content className="flex flex-col md:flex-row items-stretch justify-between w-full relative">
          <BecomeAPartner />
          <div className="relative w-full flex justify-center items-center md:mx-auto">
            <Image
              src={"/images/partner.webp"}
              alt=""
              width={719}
              height={1078}
              objectFit="cover"
              layout={"responsive"}
              priority
            />
            <Badge className="absolute -bottom-1/5 left-4 right-4 md:right-auto md:-left-[10%] md:bottom-20 md:min-w-3xs" />
          </div>
        </Content>
      </Section>
      <Benefits />
      <OurPartners />
      <YourRoleSection />
      </Page>
    </>
  );
}
