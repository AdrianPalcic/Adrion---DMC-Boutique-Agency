"use client";

import React, { useLayoutEffect, useRef } from "react";
import { BtnGreenCenter } from "./utils/Btn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const elements = elementsRef.current?.children;

      if (elements) {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 2, 
            stagger: 0.15, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="w-full h-dvh px-4 sm:px-10 flex flex-col items-center justify-center ">
      <div 
        ref={elementsRef}
        className="max-w-4xl w-full flex flex-col items-center"
      >
        <h1 className="text-(--deep-blue) mb-6 text-center text-3xl md:text-5xl font-trajan font-bold tracking-tight uppercase opacity-0">
          For those who seek adventure & emotion
        </h1>

        <h2 className="text-[16px] md:text-lg text-(--deep-blue)/80 text-center max-w-2xl font-ovo mb-10 leading-relaxed opacity-0">
          Our journeys are built on selection, responsibility, and trust —
          shaped to support local communities, highlight lesser-known places,
          and present Croatia as it truly is, in every season. Nothing is
          excessive. Nothing is accidental.
        </h2>
        
        <div className="opacity-0">
          <BtnGreenCenter content={"Start your adventure"} />
        </div>
      </div>
    </main>
  );
};

export default CTA;