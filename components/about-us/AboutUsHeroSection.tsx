import Image, { StaticImageData } from 'next/image';
import { Libre_Baskerville } from 'next/font/google'
import styles from '@/styles/about-us.module.css';

const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400'] });

interface HeroSectionProps {
  tagline?: string;
  title: string;
  highlightedText?: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
  sectionClassName?: string;
  buttonClassName?: string;
}

const AboutUsHeroSection: React.FC<HeroSectionProps> = ({
  tagline = '| ABOUT US |',
  title,
  highlightedText,
  description,
  buttonText,
  buttonLink = '#',
  imageSrc,
  imageAlt,
  sectionClassName = '',
  buttonClassName = '',
}) => {
  return (
    <section className={`w-full text-center py-12 sm:py-16 px-4 sm:px-8 ${styles.main} ${sectionClassName}`}>
      <p className="text-xs sm:text-sm text-blue-600 font-medium tracking-wider uppercase mb-4">
        {tagline}
      </p>

      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-snug sm:leading-tight mx-auto max-w-4xl">
        {title.split(highlightedText || '').map((part, index) =>
          index === 1 && highlightedText ? (
            <span key={index} className={`${libreBaskerville.className} text-blue-600 font-light`}>
              {highlightedText}
            </span>
          ) : (
            part
          )
        )}
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8 leading-relaxed">
        {description}
      </p>

      <a
        href={buttonLink}
        className={`bg-gray-900 text-white py-2 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium tracking-wide rounded-sm hover:bg-gray-800 transition-colors ${buttonClassName}`}
      >
        {buttonText}
      </a>

      <div className="mt-10 sm:mt-12 w-full flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-6xl h-auto rounded-lg object-cover"
          placeholder="blur"
          quality={100}
          priority
        />
      </div>
    </section>
  );
};

export default AboutUsHeroSection;