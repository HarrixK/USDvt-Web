import ImageGallerySection from "./ImageGallerySection";
import firstSection from '@/public//about-us/Your-Role-Section-1.webp';
import secondSection from '@/public//about-us/Your-Role-Section-2.webp';
import thirdSection from '@/public//about-us/Your-Role-Section-3.webp';
import CafeUsage from '@/components/icons/CafeUsage';
import LaptopTrade from '@/components/icons/LaptopTrade';
import PhoneTransactions from '@/components/icons/PhoneTransactions';

interface TrustedSectionProps {
  tagline?: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  sectionClassName?: string;
  buttonClassName?: string;
}

const images = [
  {
    src: firstSection,
    alt: 'Phone Transaction',
    overlay: {
      iconComponent: <PhoneTransactions />,
      title: 'Money to Raline',
      subtitle: 'USDvt Sent',
      amount: '–$2,500.00',
      amountColor: 'text-red-600',
      details: [
        { label: 'Recipient', value: 'Raline Shah' },
        { label: 'Bank', value: 'HSBC' },
        { label: 'Account no.', value: '99990101' },
      ],
      position: { bottom: '-1rem', left: '-4rem' },
    },
  },
  {
    src: secondSection,
    alt: 'Laptop Trade',
    overlay: {
      iconComponent: <LaptopTrade />,
      title: 'USDvt ➔ BTC',
      subtitle: 'Trade Confirmed',
      amount: '$500.00',
      amountColor: 'text-green-600',
      position: { bottom: '15px', left: '50%', transform: 'translateX(-50%)' },
    },
  },
  {
    src: thirdSection,
    alt: 'Cafe Usage',
    overlay: {
      iconComponent: <CafeUsage />,
      title: 'Eating out',
      subtitle: 'USDvt Sent',
      amount: '–$89.00',
      amountColor: 'text-red-600',
      position: { top: '-2rem', right: '-1.9rem' },
    },
  },
];

const TrustedSection: React.FC<TrustedSectionProps> = ({
  tagline = 'GET USDVT',
  title,
  description,
  buttonText,
  buttonLink = '#',
  sectionClassName = '',
  buttonClassName = '',
}) => {
  return (
    <section className={`bg-gray-900 text-white py-12 sm:py-16 px-4 sm:px-8 pt-15 sm:pt-25 ${sectionClassName}`}>
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto gap-6 mb-10">
        <div className="flex-1 min-w-full sm:min-w-[300px] sm:flex-[4]">
          <p className="text-xs sm:text-lg text-gray-400 flex-1 min-w-[100px] text-left sm:text-left">{tagline}</p>
          <h2 className="text-2xl sm:text-4xl font-medium leading-snug sm:leading-tight mb-4 text-left sm:text-left">
            {title.split('<br />').map((part, index) => (
              <span key={index}>
                {part}
                <br className="hidden sm:block" />
              </span>
            ))}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed text-left sm:text-left">
            {description.split('<br />').map((part, index) => (
              <span key={index}>
                {part}
                <br className="hidden sm:block" />
              </span>
            ))}
          </p>
        </div>

        <div className="flex justify-center sm:justify-end flex-1 sm:w-100">
          <a
            href={buttonLink}
            className={`bg-blue-600 text-white py-3 px-6 font-semibold text-sm rounded hover:bg-blue-700 transition-colors w-full sm:w-auto ${buttonClassName}`}
          >
            {buttonText}
          </a>
        </div>
      </div>
      <ImageGallerySection images={images}/>
    </section>
  );
};

export default TrustedSection;