"use client"
import React, { useRef } from "react";
import { BtnGreenCenter } from "./utils/Btn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const container = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !container.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "+=100%", // Koristi postotak umjesto fiksnih 1000px za bolji odaziv
        pin: true,
        scrub: 1,
        anticipatePin: 1, // Smanjuje "jitter" pri pinanju na mobitelima
        fastScrollEnd: true, // Sprječava skokove pri naglom skrolanju
        invalidateOnRefresh: true, // Ponovno računa pozicije ako se ekran promijeni
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
        ease: "power2.out",
        // Kad animacija završi, očisti stilove da ne "propadne" tekst
        onComplete: () => {
           gsap.set(sectionRef.current, { clearProps: "all" });
        }
      } 
    );

  }, { scope: container });

  return (  
    /* min-h-screen je stabilniji na mobitelima od h-dvh za pinanje */
    <main ref={container} className="w-full min-h-screen flex items-center justify-center px-4 sm:px-10 overflow-hidden ">
      <div 
        ref={sectionRef} 
        className="flex flex-col items-center justify-center w-full max-w-5xl opacity-0" 
      >
        <h1 className="text-(--deep-blue) mb-3 text-center text-4xl md:text-6xl font-trajan leading-tight">
          For those who seek adventure & emotion
        </h1>

        <h2 className="text-[16px] md:text-lg text-(--deep-blue) text-center max-w-2xl font-ovo mb-8">
          Our journeys are built on selection, responsibility, and trust —
          shaped to support local communities, highlight lesser-known places,
          and present Croatia as it truly is, in every season.
        </h2>
        <BtnGreenCenter content="Start your adventure" />
      </div>
    </main>
  );
};

export default CTA;