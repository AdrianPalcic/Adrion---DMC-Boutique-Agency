"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BtnFullWhite } from "./utils/Btn";

gsap.registerPlugin(ScrollTrigger);

const ImageCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // PARALLAX OPTIMIZACIJA
      // Koristimo fiksne vrijednosti i invalidateOnRefresh za stabilnost na mobitelima
      gsap.fromTo(
        bgImageRef.current,
        { 
          y: -100 // Početni "višak" slike iznad vrha
        },
        {
          y: 100, // Završni pomak prema dolje
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, // Ključno za mobilne preglednike (URL bar resize)
          },
        }
      );

      // ANIMACIJA TEKSTA (Lijevo)
      gsap.from(leftTextRef.current, {
        x: -40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse", // Resetira se kad skrolaš natrag gore
        },
      });

      // ANIMACIJA TEKSTA (Desno)
      gsap.from(rightTextRef.current, {
        x: 40,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[70vh] md:h-[60vh] flex items-center overflow-hidden bg-black"
    >
      {/* BACKGROUND WRAPPER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Visina h-[calc(100%+200px)] i negativni top osiguravaju da slika 
          uvijek ima "mesa" iznad i ispod, bez obzira na micanje URL bara.
        */}
        <div 
          ref={bgImageRef} 
          className="absolute left-0 w-full h-[calc(100%+200px)] -top-[100px]"
        >
          <Image
            src="/images/cetina-back.webp"
            alt="Cetina Background"
            fill
            className="object-cover opacity-60 scale-105" // scale-105 je dodatni osigurač za rubove
            priority
          />
          {/* Tamni overlay */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center md:items-end">
          
          {/* Lijeva strana */}
          <div ref={leftTextRef} className="md:col-span-7">
            <p className="text-(--yellow) text-[10px] md:text-xs uppercase tracking-[0.5em] mb-4 md:mb-6 font-medium">
              Send an Inquiry
            </p>
            <h2 className="text-white text-3xl md:text-5xl lg:text-7xl font-trajan leading-[1.1] tracking-tight">
              Didn&apos;t find what <br className="hidden md:block" /> 
              you&apos;re seeking?
            </h2>
          </div>

          {/* Desna strana */}
          <div ref={rightTextRef} className="md:col-span-5 md:pb-2">
            <div className="max-w-xs md:ml-auto">
              <p className="text-white/80 font-ovo text-base md:text-lg mb-8 leading-relaxed">
                Our experts specialize in crafting itineraries as unique as your own story.
              </p>
              <BtnFullWhite content="Inquire now" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ImageCTA;