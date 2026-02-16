"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BtnFullWhite } from "./utils/Btn";

gsap.registerPlugin(ScrollTrigger);

const ImageCTA = () => {
  const sectionRef = useRef(null);
  const bgImageRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax na pozadinu
      gsap.fromTo(bgImageRef.current,
        { yPercent: -50 },
        {
          yPercent: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[80vh] md:h-[70vh] flex items-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 z-0">
        <div ref={bgImageRef} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src="/images/cetina-back.webp"
            alt="Cetina Background"
            fill
            className="object-cover h-[800px] opacity-60" 
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          
          <div ref={leftTextRef} className="md:col-span-7">
            <p className="text-(--yellow) text-xs uppercase tracking-[0.5em] mb-6">
              Send an Inquiry
            </p>
            <h2 className="text-white text-3xl md:text-5xl lg:text-7xl font-trajan leading-[1.1]">
              Didn&apos;t find what <br /> 
              you&apos;re seeking?
            </h2>
          </div>

          <div ref={rightTextRef} className="md:col-span-5 md:pb-4">
            <div className="max-w-xs md:ml-auto">
              <p className="text-white/80 font-ovo text-lg mb-8 leading-relaxed">
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