import Asana from "../icons/Asana";
import Gumroad from "../icons/Gumroad";
import Shopify from "../icons/Shopify";
import TreeHouse from "../icons/Treehouse";
import Monday from "../icons/Monday";
import Monzo from "../icons/Monzo";
import Outreach from "../icons/Outreach";
import PartnerSection from "../about-us/PartnerSection";
import PaypalIcon from "../icons/PaypalIcon";
import RazorpayIcon from "../icons/RazorpayIcon";

const OurPartners = () => {
  return (
    <>
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
    </>
  );
};

export default OurPartners;
