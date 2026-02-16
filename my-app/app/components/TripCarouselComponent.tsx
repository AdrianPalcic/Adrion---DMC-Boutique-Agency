"use client";

import { useEffect, useRef } from "react";
import { multidays } from "@/constants";
import Image from "next/image";
import { BtnGreenCenter } from "./utils/Btn";
import { gsap } from "gsap";
import { Trip } from "../types";

const TripCarouselComponent = ({trips, tag, title, description}: {trips: Trip[], tag:string, title: string, description:string}) => {
  const scrollContainerRef = useRef<HTMLAnchorElement>(null);
  const sectionRef= useRef(null)
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
  

     // Animacija lijevog teksta 
             gsap.from(leftTextRef.current, {
                  x: -50,
                  opacity: 0,
                  duration: 1.5,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                  },
                });
          
                // Animacija desnog teksta 
                gsap.from(rightTextRef.current, {
                  x: 50,
                  opacity: 0,
                  duration: 1.5,
                  delay: 0.3,
                  ease: "power4.out",
                  scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                  },
                });
    
  }, []);

  return (
    <section ref={sectionRef} className="w-full text-white py-24  overflow-hidden">
      {/* Heading */}
      <div className="mx-auto mb-4 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 sm:px-10">
        <div ref={leftTextRef}>

          <h2 className="text-black text-4xl md:text-5xl font-trajan font-bold leading-tight text-center md:text-left">
            {title}
          </h2>
        </div>
        <p ref={rightTextRef} className="text-black/60 font-ovo max-w-sm text-sm leading-relaxed hidden md:block">
          {description}
        </p>
      </div>


      {/* Carousel Container */}
      <a 
      href="/under-development"
        ref={scrollContainerRef}
        className="flex gap-6 md:gap-10 px-6 md:px-12 pb-12 overflow-x-auto snap-x snap-mandatory no-scrollbar cursor-pointer"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {trips.map((t) => (
          <div
            key={t.id}
            className="
              card
              flex-shrink-0 
              snap-center
              w-[80vw] 
              md:w-[40vw] 
              lg:w-[30vw]
            "
          >
            {/* Editorial Aspect Ratio: 3/4 */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6 group bg-neutral-900">
              <Image
                src={t.image}
                alt={t.title}
                fill
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="px-1">
              <p className="text-(--yellow) font-trajan text-sm uppercase tracking-widest mb-2">
                {t.destination}
              </p>
              <p className="text-black font-trajan text-lg sm:text-xl uppercase tracking-widest mb-2">
                {t.title}
              </p>

              <p className="text-black font-ovo leading-relaxed text-sm line-clamp-3">
                {t.description}
              </p>
            </div>
          </div>
        ))}
      </a>

      <div className="mt-8">
        <BtnGreenCenter content="Explore all" />
      </div>

      {/* CSS za sakrivanje scrollbara bez style-jsx */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default TripCarouselComponent;