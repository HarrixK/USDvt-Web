import { ReactElement } from "react";

type BannerSectionProps = {
  label?: ReactElement;
  cTABannerImage: ReactElement;
};

const CTABanner = ({ label, cTABannerImage }: BannerSectionProps) => {
  return (
    <div className="flex shadow items-center justify-center inline-flex bg-[#2A18F21A] text-[#000000] text-[11px] sm:text-sm font-medium font-inter p-2 w-[100%] relative z-[100]">
        {cTABannerImage}
        {label}
    </div>
  );
};

export default CTABanner;