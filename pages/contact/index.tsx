import Page from "@/components/layout/Page";
import { Content, Section } from "components/layout/Section";
import { cn } from "@/lib/utils";
import styles from "styles/contact-us.module.css";
import ContactUsForm from "@/components/contact-us/ContactUsForm";
import ContactUsInfo from "@/components/contact-us/ContactUsInfo";
import YourRoleSection from "@/components/contact-us/YourRoleSection";
import { generateMetaTags, metaConfigs } from "@/lib/meta";

export default function Contact() {
  return (
    <>
      {generateMetaTags({
        ...metaConfigs.contact,
        canonicalUrl: "https://usdvt.com/contact"
      })}
      <Page>
      <Section className="bg-paper">
        <Content className="flex flex-col md:flex-row items-stretch justify-between">
          <ContactUsInfo />
          <div className={cn("p-4 sm:py-20 sm:px-16 -mx-4 sm:mx-0", styles.formCard)}>
            <ContactUsForm />
          </div>
        </Content>
      </Section>
      <YourRoleSection />
      </Page>
    </>
  );
}
