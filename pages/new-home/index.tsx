import React from "react";
import FileIcon from "components/icons/File";
import CTABanner from "@/components/home-page/CTABanner";
import WhyUSDvtSection from "@/components/home-page/WhyUSDvtSection";
import GetUSDvtSection from "@/components/home-page/GetUSDvtSection";
import FeaturesSection from "@/components/home-page/FeaturesSection";
import ReserveBackend from "@/components/icons/ReserveBackend";
import RegularAttestations from "@/components/icons/RegularAttestations";
import BlockchainTechnology from "@/components/icons/BlockchainTechnology";
import SmartContractSecurity from "@/components/icons/SmartContractSecurity";
import ComplianceFramework from "@/components/icons/ComplianceFramework";
import ConvertBackToUSD from "@/components/icons/ConvertBackToUSD";
import Image from "next/image";
import BlogsSection from "@/components/home-page/BlogsSection";
import Page from "@/components/layout/Page";
import HeroSection from "@/components/home-page/HeroSection";
import GlobeIcon from "@/components/icons/GlobeIcon";
import ChecklistIcon from "@/components/icons/ChecklistIcon";
import ProgramCodeIcon from "@/components/icons/ProgramCodeIcon";
import SettingsGearIcon from "@/components/icons/SettingsGearIcon";
import WhoIsItForSection from "@/components/home-page/WhoIsItForSection";
import PersionIcon from "@/components/icons/PersonIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import InstitutionIcon from "@/components/icons/InstitutionIcon";
import CircleCheckIcon from "@/components/icons/CircleCheckIcon";
import MultiChainSection from "@/components/home-page/MultiChainSection";
import EtheriumIcon from "@/components/icons/EtheriumIcon";
import SolanaIcon from "@/components/icons/SolanaIcon";
import BaseIcon from "@/components/icons/BaseIcon";
import ArbitrumIcon from "@/components/icons/ArbitrumIcon";
import ClockStatusIcon from "@/components/icons/ClockIcon";
import LiveSignalIcon from "@/components/icons/LiveSignalIcon";
import HowItWorksSection from "@/components/home-page/HowItWorksSection";
import CreateAccountIcon from "@/components/icons/CreateAccountIcon";
import { ArrowLeftRight } from "lucide-react";
import TransferInstantlyIcon from "@/components/icons/TransferInstantlyIcon";
import CircleDollarIcon from "@/components/icons/CircleDollarIcon";

export default function Home() {
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

        <HeroSection
          title={
            <>
              A{" "}
              <span className="text-[#2A18F2] font-medium md:font-bold">
                regulated digital dollar
              </span>{" "}
              for a better internet economy
            </>
          }
          description="Stable, compliant, and always on—USDvt is a dollar-backed stablecoin for global payments and digital finance"
          buttonText="GET USDvt →"
          buttonLink="/contact"
          asideImage={
            <Image
              src="/home-page/Regulated-Digital-Dollar-Banner.webp"
              alt="Monthly wages"
              width={1024}
              height={300}
              className="w-full h-85 sm:h-full object-cover"
              priority
            />
          }
        />

        <WhyUSDvtSection
          title={
            <>
              Reasons why thousands are
              <br className="hidden sm:block" /> switching to USDvt
            </>
          }
          infoCards={[
            {
              icon: (
                <FileIcon className="w-8 h-8 sm:w-auto sm:h-auto text-[#2A18F2]" />
              ),
              title: "Fully backed",
              desc: (
                <>
                  Each USDvt is backed 1:1 with U.S. dollars or cash equivalents
                </>
              ),
            },
            {
              icon: (
                <GlobeIcon className="w-8 h-8 sm:w-auto sm:h-auto text-[#2A18F2]" />
              ),
              title: "Borderless",
              desc: <>Instantly send or receive money globally, anytime</>,
            },
            {
              icon: (
                <ChecklistIcon className="w-8 h-8 sm:w-auto sm:h-auto text-[#2A18F2]" />
              ),
              title: "Compliant ready",
              desc: <>Built with strong regulatory and audit foundations</>,
            },
            {
              icon: (
                <ProgramCodeIcon className="w-8 h-8 sm:w-auto sm:h-auto text-[#2A18F2]" />
              ),
              title: "Programmable",
              desc: <>Integrate into apps, automate payments, and more</>,
            },
            {
              icon: (
                <SettingsGearIcon className="w-8 h-8 sm:w-auto sm:h-auto text-[#2A18F2]" />
              ),
              title: "Ecosystem ready",
              desc: (
                <>
                  Available via trusted <br /> fintech platforms
                </>
              ),
            },
          ]}
        />

        <WhoIsItForSection
          subTitle="WHO IS IT FOR?"
          title={
            <>
              Use USDvt <span className="text-[#2A18F2]">your way</span>
              —personal,
              <br className="hidden sm:block" /> business, or institutional
            </>
          }
          infoCards={[
            {
              icon: <PersionIcon className="w-10 h-10 text-[#2A18F2]" />,
              heading: "FOR INDIVIDUALS",
              subheading: (
                <>
                  Get paid, send funds, and save securely in a stable digital
                  dollar.
                </>
              ),
              description:
                "Easily receive, send, and store money using a stable digital dollar that protects your savings from volatility.",
              list: [
                {
                  lightText:
                    "Fully-backed digital dollar accessible to everyone",
                },
                {
                  lightText: "1:1 USD reserve backingwith regular attestations",
                },
                { lightText: "Instant transfers 24/7/365" },
                {
                  lightText: (
                    <>
                      As low as 10% of competitor &{" "}
                      <a href="#noFees" className="cursor-pointer">
                        no fees*{" "}
                      </a>
                      on certain transactions
                    </>
                  ),
                },
                { lightText: "Compatible with leading wallets and exchanges" },
              ],
              image: (
                <Image
                  src="/home-page/For-Individuals-Banner.webp"
                  alt="Monthly wages"
                  width={1024}
                  height={300}
                  className="w-full h-75 sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse",
            },
            {
              icon: <BuildingIcon className="w-10 h-10 text-[#2A18F2]" />,
              heading: "FOR BUSINESSES",
              subheading: (
                <>Pay globally, skip high fees, and automate your finances.</>
              ),
              description:
                "Send payments worldwide, reduce costs, and streamline your payment operations.",
              list: [
                {
                  lightText:
                    "Enhanced compliance with digital business regulations",
                },
                { lightText: "Instant settlement for faster transactions" },
                { lightText: "Programmable payments for automation" },
                { lightText: "Institutional-grade security and audit trails" },
              ],
              image: (
                <Image
                  src="/home-page/For-Businesses-Banner.webp"
                  alt="Business payments"
                  width={1024}
                  height={300}
                  className="w-full h-75 sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse sm:flex-row-reverse",
            },
            {
              icon: <InstitutionIcon className="w-10 h-10 text-[#2A18F2]" />,
              heading: "FOR INSTITUTIONS",
              subheading: (
                <>
                  Access regulated digital dollars for liquidity, settlement,
                  and yield.
                </>
              ),
              description:
                "Secure top-tier regulated digital dollars to manage liquidity, settle transactions, and earn yield.",
              list: [
                { lightText: "Access to treasury and yield opportunities" },
                { lightText: "Meet audit and compliance requirements" },
                {
                  lightText: "First-design access with institutional partners",
                },
              ],
              image: (
                <Image
                  src="/home-page/For-Institutions-Banner.webp"
                  alt="Institutional yield"
                  width={1024}
                  height={300}
                  className="w-full h-75 sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse",
            },
          ]}
        />

        <FeaturesSection
          label="LEGALITY"
          title={
            <>
              <span className="text-[#2A18F2]">Built for trust.</span> Audited
              for <br className="hidden sm:block" /> peace of mind.
            </>
          }
          items={[
            {
              icon: <ReserveBackend className="w-15 h-15" />,
              heading: "100% reserve backed",
              text: "Each USDvT is backed 1:1 by US dollars in regulated banks",
            },
            {
              icon: <RegularAttestations className="w-15 h-15" />,
              heading: "Regular attestations",
              text: "Transparent reporting of reserves by independent accounting firms",
            },
            {
              icon: <BlockchainTechnology className="w-15 h-15" />,
              heading: "Blockchain technology",
              text: "Built on secure and reliable blockchain infrastructure",
            },
            {
              icon: <SmartContractSecurity className="w-15 h-15" />,
              heading: "Smart contract security",
              text: "Rigorous auditing and security protocols",
            },
            {
              icon: <ComplianceFramework className="w-15 h-15" />,
              heading: "Compliance framework",
              text: "AML/KYC integration and regulatory compliance",
            },
            {
              icon: <ConvertBackToUSD className="w-15 h-15" />,
              heading: "Convert back to USD",
              text: "Easily convert USDvT to USD and withdraw to your bank anytime",
            },
          ]}
        />

        <GetUSDvtSection
          label="GET USDVT"
          title={
            <>
              Access USDvt through <br className="hidden sm:block" />
              <span className="text-[#2A18F2]">trusted partners</span>
            </>
          }
          description="USDvt is available through trusted financial platforms worldwide"
          items={[
            {
              icon: <CircleCheckIcon className="mr-3 sm:mr-4 text-[#2A18F2]" />,
              text: "Retail & business onboarding",
            },
            {
              icon: <CircleCheckIcon className="mr-3 sm:mr-4 text-[#2A18F2]" />,
              text: "KYC + Bank linking for USD ↔ USDvt",
            },
            {
              icon: <CircleCheckIcon className="mr-3 sm:mr-4 text-[#2A18F2]" />,
              text: "Multi-user access, APIs, and enterprise dashboards",
            },
          ]}
          buttonText="GET USDvt →"
          buttonLink="/contact"
          image={
            <Image
              width={1024}
              height={300}
              src="/home-page/trusted-partners.webp"
              alt="Phone graphic"
              className="w-full h-55 sm:h-130 object-cover object-center rounded-xl"
              loading="lazy"
            />
          }
          footnote="*More platforms will join as USDvt adoption grows"
        />

        <MultiChainSection
          subTitle="MULTICHAIN"
          title={
            <>
              Multi-chain by <span className="text-[#2A18F2]">design</span>
            </>
          }
          infoCards={[
            {
              icon: <EtheriumIcon className="" />,
              name: "Ethereum",
              subName: "ETH",
              statusIcon: <ClockStatusIcon className="" />,
              status: "Soon!",
              fees: "~$150 / transaction (varies)",
              speed: "~10 minutes (avg. block time)",
              description:
                "Robust ecosystem with strong DeFi and smart contract support.",
            },
            {
              icon: <SolanaIcon className="w-6 h-6" />,
              name: "Solana",
              subName: "SOL",
              statusIcon: <LiveSignalIcon className="" />,
              status: "Live",
              fees: "~$0.00025 / transaction",
              speed: "Finality in ~400ms",
              description:
                "Ultra-fast and cost-efficient — perfect for daily transfers and microtransactions.",
            },
            {
              icon: <BaseIcon className="w-6 h-6" />,
              name: "Base",
              subName: "BASE",
              statusIcon: <ClockStatusIcon className="" />,
              status: "Soon!",
              fees: "~$0.05 / transaction",
              speed: "~1-2 seconds",
              description:
                "Built by Coinbase — combines low cost with high trust and EVM compatibility.",
            },
            {
              icon: <ArbitrumIcon className="w-6 h-6" />,
              name: "Arbitrum",
              subName: "ARB",
              statusIcon: <ClockStatusIcon className="" />,
              status: "Soon!",
              fees: "~$0.10 / transaction",
              speed: "~2-4 seconds",
              description:
                "Scalable and secure Layer 2 with growing dApp adoption.",
            },
          ]}
        />

        <HowItWorksSection
          subTitle="HOW IT WORKS"
          title={
            <>
              <span className="text-[#2A18F2]">Simple and straightforward</span> steps <br className="hidden sm:block" /> to acquire USDvt.
            </>
          }
          infoCards={[
            {
              icon: <CreateAccountIcon className="w-10 h-10 text-[#2A18F2]" />,
              heading: "Create Your Account",
              subheading: (
                <>
                  Register with a trusted partner to access USDvt services. Complete a simple verification process to get started.
                </>
              ),
              image: (
                <Image
                  src="/home-page/Create-Your-Account.webp"
                  alt="Monthly wages"
                  width={1024}
                  height={300}
                  className="w-full sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse",
            },
            {
              icon: <CircleDollarIcon className="w-10 h-10 text-[#2A18F2]" />,
              heading: "Deposit Funds",
              subheading: (
                <>Connect your bank account or deposit USD to receive USDvt at a 1:1 ratio. Every USDvt is fully backed by USD in secure reserves.</>
              ),
              image: (
                <Image
                  src="/home-page/Deposit-Funds.webp"
                  alt="Business payments"
                  width={1024}
                  height={300}
                  className="w-full sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse sm:flex-row-reverse",
            },
            {
              icon: <ArrowLeftRight className="w-10 h-10 text-[#2A18F2]" />,
              heading: "Convert Back to USD",
              subheading: (
                <>Easily convert USDvt back to USD and withdraw to your bank account whenever you need it.</>
              ),
              image: (
                <Image
                  src="/home-page/Create-Your-Account.webp"
                  alt="Institutional yield"
                  width={1024}
                  height={300}
                  className="w-full sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse",
            },
            {
              icon: <TransferInstantlyIcon className="w-10 h-10 text-[#2A18F2]" />,
              heading: "Transfer Instantly",
              subheading: (
                <>Send USDvt anywhere in the world within seconds. No more waiting for banks or payment processors to clear funds.</>
              ),
              image: (
                <Image
                  src="/home-page/Transfer-Instantly.webp"
                  alt="Institutional yield"
                  width={1024}
                  height={300}
                  className="w-full sm:h-full object-cover rounded-xl"
                  loading="lazy"
                />
              ),
              flipClass: "flex-col-reverse sm:flex-row-reverse",
            },
          ]}
        />

        <BlogsSection
          label="ARTICLES"
          title={
            <>
              Explore the USDvt
              ecosystem <br className="hidden sm:block" /> in greater detail
            </>
          }
        />
      </Page>
    </>
  );
}