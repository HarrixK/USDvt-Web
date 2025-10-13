import teamPhoto from '@/public/about-us/Main-Banner.webp';
import thirdSection from '@/public//about-us/Your-Role-Section-3.webp';
import SliderGallery from '../components/SliderGallery';
import Page from '@/components/layout/Page';
import AboutUsHeroSection from '@/components/about-us/AboutUsHeroSection';
import StorySection from '@/components/about-us/StorySection';
import TrustedSection from '@/components/about-us/TrustedSection';
import ValuesSection from '@/components/about-us/ValuesSection';
import PaypalIcon from '@/components/icons/PaypalIcon';
import RazorpayIcon from '@/components/icons/RazorpayIcon';
import Asana from '@/components/icons/Asana';
import Gumroad from '@/components/icons/Gumroad';
import Shopify from '@/components/icons/Shopify';
import TreeHouse from '@/components/icons/Treehouse';
import Monday from '@/components/icons/Monday';
import Monzo from '@/components/icons/Monzo';
import Outreach from '@/components/icons/Outreach';
import PartnerSection from '@/components/about-us/PartnerSection';
import { generateMetaTags, metaConfigs } from "@/lib/meta";

const AboutUsPage = () => {
return (
  <>
    {generateMetaTags({
      ...metaConfigs.about,
      canonicalUrl: "https://usdvt.com/about"
    })}
    <Page>
      <div className="min-h-screen bg-white">
      <main>
        {/* Hero Section */}
        <AboutUsHeroSection
          tagline="| ABOUT US |"
          title="About USDvt—how a trusted digital dollar is built for today’s economy"
          highlightedText="trusted digital dollar"
          description="We’re rethinking what money can do by combining the strength of banking with the flexibility of blockchain"
          buttonText="JOIN OUR TEAM →"
          buttonLink="/contact"
          imageSrc={teamPhoto}
          imageAlt="Team Photo"
        />

        {/* Our Story Section */}
        <StorySection
          tagline="OUR STORY"
          title="How we’re building a better foundation for global value transfer"
          highlightedText="global value transfer"
          paragraphs={[
            "At USDvt, we believe stable, secure, and transparent money should be available to everyone. That’s why we partnered with a U.S.-regulated bank to issue a dollar-backed stablecoin that meets the highest standards of trust, usability, and compliance.",
            "Unlike other stablecoins, USDvt is issued under direct regulatory oversight and backed by reserves held in U.S. banks.",
            "Our team brings deep experience across finance, crypto, compliance, and infrastructure. Together, we’re creating products that allow individuals, businesses, and institutions to move money without borders—with trust at the core.",
          ]}
        />

        {/* Story Slider Section */}
        <section className='pt-2 pb-15 bg-gray-100'>
          <SliderGallery />
        </section>


        {/* Trusted Section */}
        <TrustedSection
          tagline="GET USDVT"
          title="Your role in a trusted digital <br /> dollar starts here"
          description="Collaborate with USDvt to unlock new opportunities across <br /> payments, DeFi, and beyond"
          buttonText="GET USDVT →"
          buttonLink="/contact"
        />

        {/* Our Values Section */}
        <ValuesSection
          tagline="OUR VALUES"
          title="The core values guide how <br /> we build and operate"
          highlightedText="core values"
          imageSrc={thirdSection}
          imageAlt="Core values video thumbnail"
          values={[
            {
              title: 'Trust, by design',
              description: 'We’re backed 1:1 by dollars in a U.S. bank and built for regulatory oversight',
            },
            {
              title: 'Built for real use',
              description: 'We focus on utility & bring stable, accessible digital dollars to individuals, businesses, and institutions worldwide.',
            },
            {
              title: 'Always compliant',
              description: 'USDvt meets high standards for regulation and security. That means stronger protections for everyone who uses it.',
            },
            {
              title: 'Made for movement',
              description: 'From wallets to exchanges to APIs, USDvt is designed to move across platforms and not stayed locked in one place.',
            },
            {
              title: 'Proven, not promised',
              description: 'We hold ourselves to high standards of transparency with independent audits and public reserve reports.',
            },
          ]}
        />

        {/* Partner Section */}
        <PartnerSection
          tagline="OUR PARTNERS"
          title="The partners helping us scale trust, reach, and utility"
          highlightedText="scale trust, reach, and utility"
          categories={[
            {
              title: "INFRASTRUCTURE & PLATFORM PROVIDERS",
              description: "Audits and zero-knowledge tech drive secure, compliant stablecoin use.",
              borderColor: "border-blue-600",
            },
            {
              title: "STRATEGIC PARTNERS",
              description: "We work with leading institutions to ensure security, compliance, and scalability.",
              borderColor: "border-gray-300",
            },
          ]}
          partners={[
            {
              iconComponent: <PaypalIcon />,
              name: "Paypal",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <RazorpayIcon />,
              name: "Razorpay",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <Asana />,
              name: "Asana",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <Gumroad />,
              name: "Gumroad",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <Shopify />,
              name: "Shopify",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <TreeHouse />,
              name: "TreeHouse",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <Monday />,
              name: "Monday",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <Monzo />,
              name: "Monzo",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <Outreach />,
              name: "Outreach",
              description: "Short description about the title will be placed right over here",
              category: "INFRASTRUCTURE & PLATFORM PROVIDERS",
            },
            {
              iconComponent: <RazorpayIcon />,
              name: "Razorpay",
              description: "Short description about the title will be placed right over here",
              category: "STRATEGIC PARTNERS",
            },
            {
              iconComponent: <Gumroad />,
              name: "Gumroad",
              description: "Short description about the title will be placed right over here",
              category: "STRATEGIC PARTNERS",
            },
            {
              iconComponent: <Shopify />,
              name: "Shopify",
              description: "Short description about the title will be placed right over here",
              category: "STRATEGIC PARTNERS",
            },
            {
              iconComponent: <TreeHouse />,
              name: "TreeHouse",
              description: "Short description about the title will be placed right over here",
              category: "STRATEGIC PARTNERS",
            }
          ]}
        />
      </main>
      </div>
    </Page>
  </>
  );
};

export default AboutUsPage;