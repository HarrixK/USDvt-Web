"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

import slider1 from '../../../public/about-us/Slider-Images-1.webp';
import slider2 from '../../../public/about-us/Slider-Images-2.webp';
import slider3 from '../../../public/about-us/Slider-Images-3.webp';
import slider4 from '../../../public/about-us/Slider-Images-4.webp';
import slider5 from '../../../public/about-us/Slider-Images-5.webp';

const imagesSet1 = [slider1, slider2, slider3, slider4, slider5];
const imagesSet2 = [...imagesSet1].reverse();

const SliderGallery = () => {
  const sliderRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null)
  ]);

  useEffect(() => {
    sliderRefs.current.forEach((ref, index) => {
      const slider = ref.current;
      if (!slider) return;

      let scrollAmount = index === 1 ? -slider.scrollWidth / 2 : 0;
      let isHovered = false;
      const baseSpeed = 1;
      const slowSpeed = 0.2;
      const isReversed = index === 1;

      slider.innerHTML += slider.innerHTML;

      const scroll = () => {
        const speed = isHovered ? slowSpeed : baseSpeed;
        scrollAmount += isReversed ? speed : -speed;

        const maxScroll = slider.scrollWidth / 2;
        if (!isReversed && Math.abs(scrollAmount) >= maxScroll) scrollAmount = 0;
        if (isReversed && scrollAmount >= 0) scrollAmount = -maxScroll;

        slider.style.transform = `translateX(${scrollAmount}px)`;
        requestAnimationFrame(scroll);
      };

      slider.addEventListener("mouseenter", () => {
        isHovered = true;
      });
      slider.addEventListener("mouseleave", () => {
        isHovered = false;
      });

      scroll();
    });
  }, []);

  return (
    <div className="w-full overflow-hidden bg-gray-100">
      {[imagesSet1, imagesSet2].map((set, i) => (
        <div
          key={i}
          className={`overflow-hidden whitespace-nowrap relative w-full ${i === 1 ? 'reverse' : ''}`}
        >
          <div
            className="flex gap-[4vw] sm:gap-[2vw] will-change-transform py-4 w-fit"
            ref={sliderRefs.current[i]}
          >
            {[...set, ...set].map((img, idx) => (
              <div
                key={idx}
                className="relative w-[60vw] h-[36vw] sm:w-[30vw] sm:h-[18vw] md:w-[20vw] md:h-[12vw] flex-shrink-0 transition-transform duration-400 ease-in-out hover:scale-105"
              >
                <Image
                  src={img}
                  alt={`Carousel Image ${idx}`}
                  fill
                  sizes="(max-width: 640px) 60vw, (max-width: 768px) 30vw, 20vw"
                  className="object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderGallery;