"use client"
import React, { useRef } from "react";
import { BtnGreenCenter } from "./utils/Btn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// useGSAP se ne registrira ovdje!
gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const container = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
useGSAP(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current, // Pinamo cijeli container
        start: "top top",           // Počinje kad vrh containera dotakne vrh ekrana
        end: "+=1000",              // Traje 1000px scrolla (podesi po želji)
        pin: true,                  // Drži element u mjestu
        scrub: 1,                   // 1 sekunda "kašnjenja" za glatkoću (može i true)
        markers: false,             // Stavi true dok debugiraš da vidiš linije
      }
    });

    tl.fromTo(sectionRef.current, 
      { 
        opacity: 0, 
        scale: 0.8,
        y: 50 
      }, 
      { 
        opacity: 1, 
        scale: 1, 
        y: 0,
        ease: "power2.out" 
      } 
    );

  }, { scope: container });

  return (  
    <main ref={container} className="w-full h-dvh px-4 sm:px-10">
      <div 
        ref={sectionRef} 
        className="flex flex-col items-center justify-center w-full h-full opacity-0" 
      >
        <h1 className="text-(--deep-blue) mb-3 text-center text-4xl md:text-6xl font-trajan leading-wide max-w-3xl">
          For those who seek adventure & emotion
        </h1>

        <h2 className="text-[16px] md:text-lg text-(--deep-blue) text-center max-w-2xl font-ovo">
          Our journeys are built on selection, responsibility, and trust —
          shaped to support local communities, highlight lesser-known places,
          and present Croatia as it truly is, in every season. Nothing is
          excessive. Nothing is accidental.
        </h2>
        <BtnGreenCenter content="Start your adventure" />
      </div>
    </main>
  );
};

export default CTA;