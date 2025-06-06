"use client";

import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface SliderProps extends PropsWithChildren {
  buttonColors: string[];
  buttonBorderColors: string[];
  autoPlayInterval?: number;
}

const Slider: FC<SliderProps> = ({
  children,
  buttonColors,
  buttonBorderColors,
  autoPlayInterval = 2000,
}) => {
  const autoplayRef = useRef(
    Autoplay({ delay: autoPlayInterval, stopOnInteraction: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplayRef.current]
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const handleMouseEnter = () => {
    autoplayRef.current.stop();
  };

  const handleMouseLeave = () => {
    autoplayRef.current.play();
  };

  return (
    <div
      className="w-full h-full relative  overflow-hidden "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>

      {/* Navigation Dots */}
      <div className="flex relative  my-2 justify-center  ">
        <div className="relative  bottom-5  md:left-15 lg:left-10   transform 3xl:w-[1600px] 2xl:w-[1280px] xl:w-[1080px] lg:w-[980px] md:w-[600px] flex items-center justify-start">
     
          {buttonBorderColors.map((_, index) => (
            <button
              aria-label="switch slide"
              key={`navigation-dot-${index}`}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-[18px] h-[18px] rounded-[3px] rotate-45 mx-2 transition-all duration-300 cursor-pointer",
                buttonColors[index] || "",
                activeIndex === index ? buttonBorderColors[index] || "" : ""
              )}
            />
          ))}
     
        </div>
      </div>
    </div>
  );
};

export default Slider;
