"use client";

import React, { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { destinacije } from "@/constants";
import Image from "next/image";

const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring" as const,
  mass: 1,
  stiffness: 150,
  damping: 25,
  restDelta: 0.001,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  
  // dragX koristimo ISKLJUČIVO za logiku u onDragEnd, NE za style
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < destinacije.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-neutral-950">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        // KLJUČ: dragX se puni preko info.offset-a, ali ne utječe na style direktno
        onDrag={(e, info) => dragX.set(info.offset.x)}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        // dragElastic dopušta da se slika malo miče dok vučeš (feedback)
        // ali bez onog hard-kodiranog x-a koji uzrokuje jump
        dragElastic={0.1} 
        className="flex h-full cursor-grab items-center active:cursor-grabbing touch-none"
      >
        <Images />
      </motion.div>
    </div>
  );
};

const Images = () => {
  return (
    <>
      {destinacije.map((dest, idx) => (
        <div
          key={dest.id || idx}
          className="relative w-screen h-full flex-shrink-0 overflow-hidden"
        >
          {/* BACKGROUND */}
          <Image
            src={dest.backgroundImage}
            alt="BG"
            fill
            priority={idx === 0}
            className="object-cover pointer-events-none select-none"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* CONTENT - Omotan u motion div za lagani ulazni efekt */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="slide-content relative z-20 w-full h-full flex flex-col items-center pointer-events-none select-none"
          >
            {/* GORNJI NASLOV */}
            <div className="mt-12 px-4">
              <h1 className="font-pinyon tracking-widest text-3xl lg:text-5xl text-white text-center">
                Where our journeys take place
              </h1>
            </div>

            {/* SREDIŠNJI DIO (Slike i glavni tekst) */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="relative">
                {/* FRONT IMAGE (Mala slika) */}
                <div className="dest-image relative">
                  <Image
                    src={dest.frontImage}
                    width={400}
                    height={500}
                    alt={dest.name}
                    className="object-cover w-[280px] h-[380px] sm:w-[400px] sm:h-[500px]"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>

                {/* TEKST PREKO MALE SLIKE */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <h2 className="text-white text-4xl lg:text-7xl font-trajan font-medium italic tracking-wider">
                    {dest.name}
                  </h2>
                  <p className="text-white font-ovo text-[16px] md:text-[18px] opacity-80 mt-6 max-w-xs leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </>
  );
};