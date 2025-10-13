import { Libre_Baskerville } from 'next/font/google';

const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400'] });

interface StorySectionProps {
  tagline?: string;
  title: string;
  highlightedText?: string;
  paragraphs: string[];
  sectionClassName?: string;
}

const StorySection: React.FC<StorySectionProps> = ({
  tagline = 'OUR STORY',
  title,
  highlightedText,
  paragraphs,
  sectionClassName = '',
}) => {
  return (
    <section className={`bg-gray-100 py-12 sm:py-20 px-4 sm:px-8 pb-0 ${sectionClassName}`}>
      <div className="flex flex-wrap gap-10 lg:gap-16 max-w-6xl mx-auto mb-0">
        {/* Left Column */}
        <div className="flex-1 min-w-full sm:min-w-[280px]">
          <p className="text-sm sm:text-lg font-medium text-gray-500 mb-3 tracking-wider uppercase">
            {tagline}
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-snug sm:leading-tight text-gray-900 max-w-xl">
            {title.split(highlightedText || '').map((part, index) =>
              index === 1 && highlightedText ? (
                <span key={index} className={`${libreBaskerville.className} text-blue-600 font-light`}>
                  {highlightedText}
                </span>
              ) : (
                part
              )
            )}
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-full sm:min-w-[300px] mt-0 sm:mt-16 text-gray-700 text-sm sm:text-base leading-relaxed flex flex-col gap-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;