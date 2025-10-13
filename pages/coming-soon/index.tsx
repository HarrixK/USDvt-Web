import ComingSoonBanner from "@/components/coming-soon/ComingSoonBanner";
import ComingSoonFooter from "@/components/layout/ComingSoonFooter";
import ComingSoonHeader from "@/components/layout/ComingSoonHeader";
import USDvtIcon from '@/public/comming-soon/USDvtIcon.webp';
import { generateMetaTags, metaConfigs } from "@/lib/meta";

const CommingSoonPage = () => {
return (
    <>
        {generateMetaTags({
            ...metaConfigs.comingSoon,
            canonicalUrl: "https://usdvt.com/coming-soon"
        })}
        <ComingSoonHeader />
            <main className="w-full h-full">
                {/* Hero Section */}
                <ComingSoonBanner
                    title="USDvt Stablecoin"
                    highlightedText="Stablecoin"
                    description="A digital stablecoin designed for stability and reliability in the modern financial ecosystem."
                    buttonText="Learn about USDvt →"
                    buttonLink="/terms-and-conditions-usdvt"
                    secondButtonText="Learn about iUSDvt →"
                    secondButtonLink="/terms-and-conditions-iusdvt"
                    imageSrc={USDvtIcon}
                    imageAlt="USDvt Stable Coin"
                />
            </main>
        <ComingSoonFooter />
    </>
  );
};

export default CommingSoonPage;