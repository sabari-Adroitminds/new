"use client";
import { FC, Suspense, useEffect, useRef, useState } from "react";
import Robot from "./Robot";
import IconFundamental from "../icons/educationalToy/IconFundamental";
import IconLearnSteam from "../icons/educationalToy/IconLearnSteam";
import IconCreativity from "../icons/educationalToy/IconCreativity";
import IconMesh from "../icons/educationalToy/IconMesh";
import Graphic from "./Graphic";
import Image from "next/image";
import { useScroll, useTransform } from "motion/react";
import IconGalleryButton from "../icons/IconControlButton";
import { Button } from "../ui/button";
import { motion } from "motion/react";





const features = [
  {
    id: 1,
    icon: IconLearnSteam,
    title: "Learn STEAM Concepts",
    description:
      "Explore engineering, gravity, shape, colour & design, plus much more",
  },
  {
    id: 2,
    icon: IconCreativity,
    title: "Encourage Creativity",
    description: "Imagination and learning through play",
  },
  {
    id: 3,
    icon: IconMesh,
    title: "MESH Products",
    description:
      "Promoting essential life skills with Mental, Emotional and Social Health",
  },
  {
    id: 4,
    icon: IconFundamental,
    title: "Fundamental skills",
    description: "Children's resilience and wellbeing at the forefront",
  },
];

const EducationalToy: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;
  const { scrollYProgress } = useScroll();
  const cardRef = useRef<HTMLDivElement>(null);

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (cardRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = cardRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  };

  const container = cardRef.current;
  if (container) {
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }
}, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-25 bg-primary-very-light h-fit lg:h-[940px] rounded-[70px] flex flex-wrap lg:flex-nowrap items-center justify-center px-[21px] py-[71px] lg:px-20 lg:p-[70px]"
    >
      <div className="absolute top-0 right-0 rotate-180 hidden lg:block">
        <Graphic />
      </div>

      <div className="w-full absolute bottom-0 left-0 overflow-hidden">
        <Graphic />
      </div>

      <div className="overflow-hidden z-20 max-w-[720px]">
        <h1 className="font-bold !text-[32px] lg:!text-[50px] text-navy">
          The educational toy bringing imagination to life!
        </h1>

        <div ref={cardRef} className="hide-scrollbar flex lg:grid lg:grid-cols-2 lg:grid-rows-2 overflow-x-auto lg:overflow-hidden gap-10 mt-10 pb-4 lg:pb-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col gap-[10px] lg:gap-4 w-fit lg:min-w-[300px] max-w-[175px] lg:max-w-[300px] flex-shrink-0"
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-[10px] lg:gap-4">
                  <Icon />
                  <span className="font-medium text-base lg:text-xl text-navy leading-6">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm lg:text-base text-navy opacity-80">
                  {feature.description}
                </p>
              </div>
            );
          })}
         
        </div>
        <div className="flex lg:hidden justify-between items-center mt-6 lg:mt-10">
            <div className="flex-1 mx-4">
            <div className="w-full bg-purple-300 h-[1px] relative overflow-visible">
              <div 
              className="bg-purple-600 h-[1px]"
              style={{
                width: `${scrollProgress}%`,
                transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)"
              }}
              ></div>
                <div
                className="absolute top-0 h-[1px] rounded-full bg-gray-200 w-full overflow-hidden"
                style={{ pointerEvents: "none" }}
                >
                <div
                  className="absolute h-[2px] rounded-full bg-purple-600 overflow-hidden"
                  style={{
                  width: `${Math.max(20, scrollProgress)}%`,
                  left: `${scrollProgress}%`,
                  transform: "translateX(-20%)",
                  transition: "left 0.5s cubic-bezier(0.4,0,0.2,1), width 0.5s cubic-bezier(0.4,0,0.2,1)"
                  }}
                />
                </div>
            </div>
            </div>

          <button
            onClick={() => cardRef.current?.scrollBy({ left: 200, behavior: "smooth" })}
            className="cursor-pointer rotate-180"
          >
            <IconGalleryButton color={"var(--primary, #a855f7)"} />
          </button>
        </div>
          <div className="flex justify-center items-center lg:justify-start mt-10 lg:mt-10">
            
          <Button  variant={"primary"} className=" px-6">
          Find your perfect pack
        </Button>
          </div>
      </div>
      <Suspense fallback={<>...</>}>
      <Robot containerRef={containerRef} className="mt-10 lg:mt-0" />
      </Suspense>
      <motion.div
        className="absolute -bottom-12 left-20"
       style={{
         rotate}}
      >
        <Image
          src="/images/tiles/pink.png"
          width={73}
          height={63}
          alt="pink-tile"
        />
      </motion.div>
    </div>
  );
};

export default EducationalToy;
