import React, { useState } from "react";
import FileIcon from "components/icons/File";
import SdkIcon from "components/icons/Sdk";
import SecureIcon from "components/icons/Secure";
import GrowthIcon from "components/icons/Growth";
import BannerSection from "@/components/home-page/BannerSection";
import CTABanner from "@/components/home-page/CTABanner";
import WhyUSDvtSection from "@/components/home-page/WhyUSDvtSection";
import GetUSDvtSection from "@/components/home-page/GetUSDvtSection";
import RetailBusiness from "@/components/icons/RetailBusiness";
import KYC from "@/components/icons/KYC";
import MultiUser from "@/components/icons/MultUser";
import FeaturesSection from "@/components/home-page/FeaturesSection";
import ReserveBackend from "@/components/icons/ReserveBackend";
import RegularAttestations from "@/components/icons/RegularAttestations";
import BlockchainTechnology from "@/components/icons/BlockchainTechnology";
import SmartContractSecurity from "@/components/icons/SmartContractSecurity";
import ComplianceFramework from "@/components/icons/ComplianceFramework";
import ConvertBackToUSD from "@/components/icons/ConvertBackToUSD";
import Image from "next/image";
import WhoSection from "@/components/home-page/WhoSection";
import HowItWorks from "@/components/home-page/HowItWorks";
import BlogsSection from "@/components/home-page/BlogsSection";
import Page from "@/components/layout/Page";
import DollarSignIcon from "@/components/icons/DollarSignIcon";

export default function HomePage() {
  const [whoIndex, setWhoIndex] = useState(0);
  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const content = [
    {
      header:
        "Easily receive, send, and store money using a stable digital dollar that protects your savings from volatility.",
      listItems: [
        { icon: "/ibp1.webp", boldText: "Fully‑backed digital dollar", lightText: "accessible to everyone" },
        { icon: "/ibp2.webp", boldText: "1:1 USD reserve backing", lightText: "with regular attestations" },
        { icon: "/ibp3.webp", boldText: "Instant transfers", lightText: "24/7/365" },
        { icon: "/ibp4.webp", boldText: (<>As low as 10% of competitor & <a href="#noFees" className="cursor-pointer">no fees* </a></>), lightText: "on certain transactions" },
        { icon: "/ibp5.webp", boldText: "Compatible", lightText: "with leading wallets and exchanges" },
      ],
      image: "/ind.svg",
    },
    {
      header: "Send payments worldwide, reduce costs, and streamline your financial processes.",
      listItems: [
        { icon: "/bbp1.webp", boldText: "Permissioned digital dollar", lightText: "for business and institutions" },
        { icon: "/bbp2.webp", boldText: "Enhanced compliance features", lightText: "meeting regulatory requirements" },
        { icon: "/bbp3.webp", boldText: "API integration", lightText: "for enterprise systems" },
        { icon: "/bbp4.webp", boldText: "Programmable money", lightText: "capabilities for automatic workflows" },
        { icon: "/bbp5.webp", boldText: "Institutional-grade security", lightText: "and audit trails" },
      ],
      image: "/bus.svg",
    },
    {
      header: "Securely tap into regulated digital dollars to manage liquidity, settle transactions, and earn yield.",
      listItems: [
        { icon: "/sbp1.webp", boldText: "Mint/redeem iUSDvt", lightText: "for treasury or liquidity purposes" },
        { icon: "/sbp2.webp", boldText: "Meet audit and custody", lightText: "requirements with compliance-first design" },
        { icon: "/sbp3.webp", boldText: "Enable DeFi liquidity", lightText: "or settle trades with regulated on-chain assets" },
      ],
      image: "/inst.svg",
    },
  ];

  return (
  <>
    <Page>
      <CTABanner 
        label={<>Built on USDvt, a stablecoin by Vermont State Bank</>}
        cTABannerImage={
              <Image
                src="/VSB-Icon.svg"
                alt="VSB Icon"
                width={18}
                height={18}
                className="w-[18px] h-[18px] object-contain me-2"
                loading="lazy"
              />
            }
        />

      <BannerSection
        label={<>Built on USDvt, a stablecoin by Vermont State Bank</>}
        title={
          <>
            A <span className="font-libre text-[#335DDE]">regulated</span> digital dollar{" "}
            <span className="inline-flex items-center">
              <DollarSignIcon className="w-20 sm:w-25 h-auto relative bottom-[-5px] sm:bottom-0" />
            </span>{" "}
            for a better internet economy
          </>
        }
        description="Stable, compliant, and always on—USDvt is a dollar-backed stablecoin for global payments and digital finance"
        buttonText="GET USDvt →"
        buttonLink="/contact"
        asideImage={
          <Image
            src="/wages.svg"
            alt="Monthly wages"
            width={18}
            height={18}
            className="w-full h-auto object-contain"
            priority
          />
        }
        cTABannerImage={
          <Image
            src="/VSB-Icon.svg"
            alt="VSB Icon"
            width={18}
            height={18}
            className="w-[18px] h-[18px] object-contain me-2"
            loading="lazy"
          />
        }
      />
        
      <WhyUSDvtSection
          title={
            <>
              Reasons why <span className="font-libre text-[#335DDE]">thousands</span> are<br className="hidden sm:block" /> switching to USDvt
            </>
          }
          infoCards={[
            {
              icon: <FileIcon className="w-8 h-8 sm:w-auto sm:h-auto" />,
              title: "Linked to real USD",
              desc: <>Held 1:1 in reserves by a regulated U.S. bank—always redeemable</>,
            },
            {
              icon: <SdkIcon className="w-8 h-8 sm:w-auto sm:h-auto" />,
              title: "Instant and global",
              desc: <>Send or receive funds across borders in seconds, without banking hours</>,
            },
            {
              icon: <SecureIcon className="w-8 h-8 sm:w-auto sm:h-auto" />,
              title: "Safe by design",
              desc: <>Issued by a U.S. bank, with rigorous audit, transparency, and oversight</>,
            },
            {
              icon: <GrowthIcon className="w-8 h-8 sm:w-auto sm:h-auto" />,
              title: "Works how you work",
              desc: <>Easily configure into apps, payment flows, and systems</>,
            },
            {
              icon: <GrowthIcon className="w-8 h-8 sm:w-auto sm:h-auto" />,
              title: "Backed by partners",
              desc: <>Access an ecosystem of exchanges, wallets, and financial partners</>,
            },
          ]}
        />

        <WhoSection
          title={
            <>
              Use USDvt <span className="font-libre text-[#335DDE]">your way</span>— personal,<br className="hidden sm:block" /> business, or
              institutional
            </>
          }
          whoIndex={whoIndex}
          setWhoIndex={setWhoIndex}
          leftHover={leftHover}
          setLeftHover={setLeftHover}
          rightHover={rightHover}
          setRightHover={setRightHover}
          content={content}
        />

      <FeaturesSection
        label="LEGALITY"
        title={
          <>
            Built for <span className="font-libre text-[#335DDE]">trust.</span> Audited for <br className="hidden sm:block"/> peace of mind.
          </>
        }
        items={[
          { icon: <ReserveBackend className="w-15 h-15" />, heading: "100% reserve backed", text: "Each USDvT is backed 1:1 by US dollars in regulated banks" },
          { icon: <RegularAttestations className="w-15 h-15" />, heading: "Regular attestations", text: "Transparent reporting of reserves by independent accounting firms" },
          { icon: <BlockchainTechnology className="w-15 h-15" />, heading: "Blockchain technology", text: "Built on secure and reliable blockchain infrastructure" },
          { icon: <SmartContractSecurity className="w-15 h-15" />, heading: "Smart contract security", text: "Rigorous auditing and security protocols" },
          { icon: <ComplianceFramework className="w-15 h-15" />, heading: "Compliance framework", text: "AML/KYC integration and regulatory compliance" },
          { icon: <ConvertBackToUSD className="w-15 h-15" />, heading: "Convert back to USD", text: "Easily convert USDvT to USD and withdraw to your bank anytime" },
        ]}
      />

      <GetUSDvtSection
          label="GET USDVT"
          title={
            <>
              Access USDvt through <br className="hidden sm:block"/><span className="font-libre text-[#335DDE]">trusted</span> partners
            </>
          }
          description="USDvt is available through trusted financial platforms worldwide"
          items={[
            { icon: <RetailBusiness className="w-5 h-5 mr-3 sm:mr-4 text-[#335DDE]" />, text: "Retail & business onboarding" },
            { icon: <KYC className="w-5 h-5 mr-3 sm:mr-4 text-[#335DDE]" />, text: "KYC + Bank linking for USD ↔ USDvt" },
            { icon: <MultiUser className="w-5 h-5 mr-3 sm:mr-4 text-[#335DDE]" />, text: "Multi-user access, APIs, and enterprise dashboards" },
          ]}
          buttonText="GET USDvt →"
          buttonLink="/contact"
          image={
            <Image width={32} height={32} src="/phone.svg" alt="Phone graphic" className="w-full h-[450px] object-stretch" loading="lazy" />
          }
          footnote="*More platforms will join as USDvt adoption grows"
        />

        <HowItWorks
          label="How It Works"
          title={
            <>
              Simple and <span className="font-libre text-[#335DDE]">straightforward</span> <br className="hidden sm:block"/> steps to acquire USDvt.
            </>
          }
          items={[
            { heading: "Create Your Account", text: "Register with a trusted partner to access USDvt services. Complete a simple verification process to get started." },
            { heading: "Deposit Funds", text: "Connect your bank account or deposit USD to receive USDvt at a 1:1 ratio. Every USDvt is fully backed by USD in secure reserves." },
            { heading: "Convert Back to USD", text: "Easily convert USDvt back to USD and withdraw to your bank account whenever you need it." },
            { heading: "Transfer Instantly", text: "Send USDvt anywhere in the world within seconds. No more waiting for banks or payment processors to clear funds." },
          ]}
          image={
            <Image width={32} height={32} src="/firelabsphone.svg" alt="USDvt Mobile App" className="w-full sm:h-[545px] h-full object-stretch" loading="lazy" />
          }
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <BlogsSection 
          label="ARTICLES"
          title={
            <>
              <span className="font-libre text-[#335DDE]">Explore</span> the USDvt <br className="hidden sm:block"/>ecosystem in greater detail
            </>
          }
        />
    </Page>
  </>
  );
}