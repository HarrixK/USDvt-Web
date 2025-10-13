import Image, { StaticImageData } from 'next/image';
import { Libre_Baskerville } from 'next/font/google';
import BulletPoint from '../icons/BulletPoint';

const libreBaskerville = Libre_Baskerville({
    weight: ['400', '700'],
    subsets: ['latin'],
});

interface ValueItem {
  title: string;
  description: string;
}

interface ValuesSectionProps {
  tagline?: string;
  title: string;
  highlightedText?: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  values: ValueItem[];
  sectionClassName?: string;
}

const ValuesSection: React.FC<ValuesSectionProps> = ({
  tagline = 'OUR VALUES',
  title,
  highlightedText,
  imageSrc,
  imageAlt,
  values,
  sectionClassName = '',
}) => {
  const renderTitle = () => {
    if (!highlightedText) {
      return title.split('<br />').map((part, index) => (
        <span key={index}>
          {part}
          {index < title.split('<br />').length - 1 && <br className="hidden sm:block" />}
        </span>
      ));
    }

    const parts = title.replace('<br />', '|||').split(highlightedText);
    return parts.map((part, index) => (
      <span key={index}>
        {part.split('|||').map((subPart, subIndex) => (
          <span key={subIndex} className='font-medium'>
            {subPart}
            {subPart && part.includes('|||') && subIndex < part.split('|||').length - 1 && (
              <br className="hidden sm:block" />
            )}
          </span>
        ))}
        {index < parts.length - 1 && (
          <span className={`${libreBaskerville.className} text-blue-600 font-light`}>
            {highlightedText}
          </span>
        )}
      </span>
    ));
  };

  return (
    <section className={`bg-gray-100 py-12 sm:py-20 px-4 sm:px-8 ${sectionClassName}`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-12 sm:gap-32">
        {/* Left Column */}
        <div className="flex-1 min-w-[280px] text-left sm:text-left">
          <p className="text-xs sm:text-lg font-medium text-gray-500 uppercase mb-3">{tagline}</p>
          <h2 className="text-[1.6rem] sm:text-[2.1rem] font-medium leading-snug sm:leading-tight mb-10 sm:mb-20">
            {renderTitle()}
          </h2>
          <div className="relative w-full max-w-auto h-[160px] mx-auto sm:mx-0 rounded-lg overflow-hidden cursor-pointer">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
              placeholder="blur"
              quality={100}
              loading="lazy"
              fill
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white rounded-full text-xl p-2">
              ▶
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-6">
          {values.map((value, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-xl text-blue-600 mt-1 shrink-0">
                <BulletPoint />
              </span>
              <div>
                <p className="font-semibold mb-1">{value.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;