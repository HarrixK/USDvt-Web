import React from "react";
import { Props } from "@/types/common";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex items-start py-4 border-b border-gray-800">
    <div className="mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="text-lg font-medium text-gray-900">{title}</h4>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const LegalSection: React.FC<Props> = () => {
  const features = [
    {
      icon: <span role="img" aria-label="Reserve box">📦</span>,
      title: "100% reserve backed",
      description: "Each USDvt is backed 1:1 by US dollars in regulated banks.",
    },
    {
      icon: <span role="img" aria-label="Attestation document">📜</span>,
      title: "Regular attestations",
      description: "Transparent reporting of reserves by independent accounting firms.",
    },
    {
      icon: <span role="img" aria-label="Blockchain node">🔗</span>,
      title: "Blockchain technology",
      description: "Built on secure and reliable blockchain infrastructure.",
    },
    {
      icon: <span role="img" aria-label="Smart contract">🤖</span>,
      title: "Smart contract security",
      description: "Rigorous auditing and security protocols.",
    },
    {
      icon: <span role="img" aria-label="Shield">🛡️</span>,
      title: "Compliance framework",
      description: "AML/KYC integration and regulatory compliance.",
    },
    {
      icon: <span role="img" aria-label="Dollar conversion">💱</span>,
      title: "Convert back to USD",
      description: "Easily convert USDvt to USD and withdraw to your bank anytime.",
    },
  ];

  return (
    <section className="flex items-stretch w-full bg-[#F5F5F5]">
      <div className="w-1/5 flex flex-col justify-between py-8 px-[5%]">
        <h1 className="text-sm max-[800px]:text-xs font-inter font-light text-[#0D0D12] pt-[150%]">
          LEGAL
        </h1>
      </div>
      <div className="w-4/5 px-[5%] py-8">
        <h1 className="text-4xl sm:text-5xl max-[800px]:text-2xl leading-tight font-inter font-medium tracking-[0.0001em] text-[#0D0D12] mb-6">
          Built for <span className="font-libre text-[#335DDE]">trust</span>. Audited for<br className="hidden sm:block"/> peace of mind.
        </h1>
        <div className="space-y-4 mt-5 border-t border-black">
          {features.map((feature, index) => (
            <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalSection;