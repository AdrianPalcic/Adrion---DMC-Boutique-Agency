"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { BtnGreen } from "./utils/Btn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const revealOverlayRef = useRef(null);
  const imageRef = useRef(null);

  const fullText = `At Adrion, we believe travel should have purpose, not volume. Every journey is meticulously designed, combining the rich landscapes of Croatia—from the Biokovo mountains, the Cetina canyon, and the Makarska Riviera, to its islands and cities—with thoughtfully chosen partners and activities. Our approach is selective and uncompromising: we focus on the highest quality experiences, blending adventure and comfort, local gastronomy and wine, cultural heritage, and the serenity of nature. Guests are guided through a journey that feels personal and effortless, while having the freedom to shape aspects of their itinerary. Adrion is not about luxury as a show. It is about luxury through curation, trust, and meaningful moments, where every choice—from activities to accommodations—reflects care, authenticity, and character.`;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageContainerRef.current,
          start: "top 85%", 
          toggleActions: "play none none none",
          markers: false, 
        },
      });

      tl.fromTo(
        revealOverlayRef.current,
        { xPercent: 0 }, 
        { 
          xPercent: -100, 
          ease: "power2.inOut", 
          duration: 1.5 
        }
      );



    });

    // Ponekad Next.js slike na mobitelu kasne sa zauzimanjem prostora
    // Ovo prisiljava ScrollTrigger da ponovno izračuna sve pozicije nakon pola sekunde
    const timeout = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      ctx.revert();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="w-full h-[1200px] lg:h-screen "
    >
      <div className="flex gap-1 lg:gap-5 flex-col-reverse lg:flex-row h-full">
        
        {/* TEXT CONTENT */}
        <div className="flex-1 flex flex-col justify-center items-center h-full py-12 lg:py-3 px-6 sm:px-10">
          <div className="max-w-xl">
            <p className="text-[16px] sm:text-lg text-[#0f172a] font-serif leading-relaxed mb-8">
              {fullText}
            </p>
            <BtnGreen content={"Our philosophy"} />
          </div>
        </div>

        {/* IMAGE CONTAINER */}
        <div 
          ref={imageContainerRef} 
          className="flex-1 h-full w-full relative overflow-hidden"
        >
          {/* Slika */}
          <div ref={imageRef} className="w-full h-full relative origin-center">
            <Image
              src="/images/about.webp"
              alt="About Adrion Custom Travel agency"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Bijeli Overlay */}
          <div 
            ref={revealOverlayRef}
            className="absolute inset-0 w-full h-full bg-(--shore) z-20 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
};

export default About;