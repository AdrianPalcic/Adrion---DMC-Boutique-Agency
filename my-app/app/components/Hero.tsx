"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Btn from "./utils/Btn";
import { gsap } from "gsap";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.fromTo(imageRef.current, 
        { scale: 1.05 }, 
        { scale: 1, duration: 4, ease: "power2.out" }
      );


      if (contentRef.current) {
        gsap.fromTo(contentRef.current.children,
          { opacity: 0, y: 15 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.5, 
            stagger: 0.3, 
            ease: "power3.out",
            delay: 0.5 
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-dvh overflow-hidden ">
      <div className="absolute inset-0 w-full h-full">
        <div ref={imageRef} className="relative w-full h-full">
          <Image
            src="/images/hero.webp"
            alt="Boutique Agency Experience"
            fill
            priority
            quality={100}
            sizes="100vw"
            className="object-cover object-center pointer-events-none"
          />
        </div>
        {/* Blagi overlay za bolji kontrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* CONTENT */}
      <div 
        ref={contentRef}
        className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 mt-10"
      >
        <h1 className="font-trajan text-4xl sm:text-6xl lg:text-7xl text-white max-w-5xl leading-[1.1] uppercase tracking-wide">
          Curated Croatian <br /> Journeys
        </h1>

        <p className="font-pinyon text-white/90 mt-6 max-w-2xl text-2xl md:text-3xl">
          For those who appreciate quality, adventure and authentic experiences
        </p>

        <div className="mt-12">
          <Btn content={"Start your adventure"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;