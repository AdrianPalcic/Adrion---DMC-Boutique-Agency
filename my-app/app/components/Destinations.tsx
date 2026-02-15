"use client";

import { destinacije } from "@/constants";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { gsap } from "gsap";

const Destinations = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Koristimo dragX za vizualni feedback dok korisnik vuče
  const dragX = useMotionValue(0);

  // GSAP animacija
 useEffect(() => {
  if (!isInView) {
    const slides = containerRef.current?.querySelectorAll(".slide-content");
    slides?.forEach((slide) => {
      const el = slide.querySelectorAll(".dest-title, .dest-image, .dest-desc");
      gsap.set(el, { opacity: 0, scale: 0.2, y: 40 });
    });
    return;
  }

  const slides = containerRef.current?.querySelectorAll(".slide-content");
  if (!slides) return;

  slides.forEach((slide, i) => {
    const title = slide.querySelector(".dest-title");
    const image = slide.querySelector(".dest-image");
    const description = slide.querySelector(".dest-desc");

    if (i === index) {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.to(image, { opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" })
        .to(title, { opacity: 1, scale: 1, y: 0, duration: 1, ease: "expo.out" }, "-=0.9")
        .to(description, { opacity: 1, y: 0, scale: 1, duration: 1, ease: "expo.out" }, "-=0.8");
    } else {
      gsap.set([title, image, description], { 
        opacity: 0, 
        scale: 0.2, 
        delay:0.3,
        y: 40,
        overwrite: true 
      });
    }
  });
}, [index, isInView]); // Dodali smo isInView ovdje

  const onDragEnd = (e: any, info: any) => {
    const threshold = 30; 
    const velocity = info.velocity.x;
    const offset = info.offset.x;


    if (offset < -threshold || velocity < -500) {
      if (index < destinacije.length - 1) {
        setIndex(index + 1);
      }
    } else if (offset > threshold || velocity > 500) {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
    
    dragX.set(0);
  };

  return (
    <section className="w-full h-[dvh] bg-black overflow-hidden relative h-dvh touch-none">
      <motion.div
        ref={containerRef}
        drag="x"
        // Constraints sprječavaju da se cijeli div odvuče, ali dragElastic dopušta "peek" efekt
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1} 
        onDragEnd={onDragEnd}
        animate={{
          // Postotni pomak temeljen na indexu je najsigurnija metoda protiv skippinga
          translateX: `-${index * 100}%`,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 180,
          mass: 1
        }}
        className="flex h-full w-full cursor-grab active:cursor-grabbing"
      >
        {destinacije.map((dest) => (
          <a
            key={dest.id}
            className="relative w-full h-full flex-shrink-0 overflow-hidden"
          >
            {/* BACKGROUND */}
            <Image
              src={dest.backgroundImage}
              alt="BG"
              fill
              priority
              className="object-cover pointer-events-none select-none"
            />
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* CONTENT */}
            <div className="slide-content relative z-20 w-full h-full flex flex-col items-center pointer-events-none select-none">
              <div className="mt-12 px-4">
                <h1 className="font-pinyon tracking-widest text-3xl lg:text-5xl text-white text-center">
                  Where our journeys take place
                </h1>
              </div>

              <div className="flex-1 flex items-start justify-center w-full">
                <div className="relative">
                  <div className="dest-image opacity-0">
                    <Image
                      src={dest.frontImage}
                      width={400}
                      height={500}
                      alt={dest.name}
                      className="object-cover w-[280px] h-[380px] sm:w-[300px] sm:h-[350px] md:w-[400px] md:h-[500px]"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="dest-title opacity-0 text-white text-5xl sm:text-6xl lg:text-9xl font-trajan font-medium italic tracking-wider">
                      {dest.name}
                    </h2>
                    <p className="dest-desc opacity-0 text-white font-ovo text-[16px] md:text-[18px] opacity-80 mt-6 max-w-xs leading-relaxed">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </motion.div>


    </section>
  );
};

export default Destinations;