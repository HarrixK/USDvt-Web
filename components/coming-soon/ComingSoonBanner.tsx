import styles from '@/styles/about-us.module.css';
import Image, { StaticImageData } from 'next/image';

interface HeroSectionProps {
  title: string;
  highlightedText?: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  secondButtonText?: string;
  secondButtonLink?: string;
  imageSrc: StaticImageData | string;
  imageAlt: string;
}

const ComingSoonBanner: React.FC<HeroSectionProps> = ({
  title,
  highlightedText,
  description,
  buttonText,
  buttonLink = '#',
  secondButtonText,
  secondButtonLink = '#',
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className={`w-full text-center py-12 sm:py-16 px-4 sm:px-8 ${styles.heroBanner}`}>
      
      <div className="mt-10 sm:mt-12 w-full flex justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-60 max-w-6xl h-60 rounded-lg object-cover"
          placeholder="blur"
          quality={100}
          priority
        />
      </div>

      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-inter font-[600] leading-snug sm:leading-tight mx-auto max-w-4xl">
        {title.split(highlightedText || '').map((part, index) =>
          index === 1 && highlightedText ? (
            <span key={index} className={`text-[#2A18F2] font-[600]`}>
              {highlightedText}
            </span>
          ) : (
            part
          )
        )}
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-[#37394A] max-w-xl mx-auto mt-6 sm:mt-8 mb-6 sm:mb-8 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
        <a
        href={buttonLink}
        className={`bg-[#2A18F2] rounded-full text-white py-2 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium tracking-wide`}
        >
          {buttonText}
        </a>
        <a
          href={secondButtonLink}
          className={`border border-[#2A18F2] rounded-full text-[#2A18F2] py-2 sm:py-3 px-5 sm:px-6 text-sm sm:text-base font-medium tracking-wide`}
        >
          {secondButtonText}
        </a>
      </div>
    </section>
  );
};

export default ComingSoonBanner;