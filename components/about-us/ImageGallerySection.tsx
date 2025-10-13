import Image, { StaticImageData } from 'next/image';

interface OverlayData {
  iconComponent: React.ReactNode;
  title: string;
  subtitle: string;
  amount: string;
  amountColor: string;
  details?: { label: string; value: string }[];
  position: { bottom?: string; left?: string; right?: string; top?: string; transform?: string }; // Positioning styles
}

interface ImageData {
  src: StaticImageData | string;
  alt: string;
  overlay: OverlayData;
}

interface ImageGallerySectionProps {
  images: ImageData[];
  sectionClassName?: string;
}

const ImageGallerySection: React.FC<ImageGallerySectionProps> = ({ images, sectionClassName = '' }) => {
  return (
    <section className={`bg-gray-900 flex flex-wrap justify-center max-w-6xl mx-auto ${sectionClassName}`}>
      {images.map((image, index) => (
        <div key={index} className="relative w-full flex-1">
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-[400px] object-cover"
            placeholder="blur"
            quality={100}
            loading="lazy"
          />
          <div
            className="hidden sm:block absolute bg-white text-black p-4 rounded-lg shadow-lg text-sm w-[295px]"
            style={image.overlay.position}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xl">{image.overlay.iconComponent}</span>
              <div>
                <p className="font-semibold m-0">{image.overlay.title}</p>
                <p className="text-[0.7rem] text-gray-600 m-0">{image.overlay.subtitle}</p>
              </div>
              <span className={`font-semibold ${image.overlay.amountColor}`}>{image.overlay.amount}</span>
            </div>
            {image.overlay.details && (
              <div className="mt-4 text-xs text-gray-500 leading-relaxed border-t border-gray-200 pt-4 grid grid-cols-2 gap-y-2">
                {image.overlay.details.map((detail, idx) => (
                  <div key={idx} className="contents">
                    <span>{detail.label}</span>
                    <span className="text-gray-800 font-medium text-end">{detail.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageGallerySection;