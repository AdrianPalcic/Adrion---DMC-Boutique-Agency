"use client";

import { destinacije } from "@/constants";
import Image from "next/image";
import { motion, useMotionValue, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Destinations = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // MotionValue za X (translateX)
  const x = useMotionValue(0);

  // onDragEnd logika
  const onDragEnd = (_e: any, info: any) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const threshold = containerWidth * 0.2;

    let newIndex = index;

    if (offset < -threshold || velocity < -500) {
      newIndex = Math.min(index + 1, destinacije.length - 1);
    } else if (offset > threshold || velocity > 500) {
      newIndex = Math.max(index - 1, 0);
    }

    if (newIndex !== index) setIndex(newIndex);

    // Snap na novi index
    const target = -newIndex * containerWidth;
    animate(x, target, { type: "spring", stiffness: 200, damping: 25 });
  };

  // Kad se index promijeni izvan draga (klik, arrow), animiramo x
  useEffect(() => {
    if (!containerRef.current) return;
    const containerWidth = containerRef.current.clientWidth;
    const target = -index * containerWidth;
    animate(x, target, { type: "spring", stiffness: 200, damping: 25 });
  }, [index]);

  return (
    <section className="w-full overflow-hidden relative h-dvh">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={onDragEnd}
        style={{ translateX: x }}
        className="flex w-full h-full cursor-grab active:cursor-grabbing"
      >
        {destinacije.map((dest, i) => (
          <div
            key={dest.id}
            className="relative w-full h-[80vh] md:h-full flex-shrink-0 overflow-hidden"
          >
            {/* BACKGROUND */}
            <Image
              src={dest.backgroundImage}
              alt="BG"
              fill
              className="object-cover pointer-events-none select-none"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* CONTENT */}
            <div className="relative z-20 w-full h-full flex flex-col items-center justify-center pointer-events-none select-none">
              <div className="px-4">
                <h1 className="font-pinyon tracking-widest text-3xl lg:text-5xl text-white text-center">
                  Where our journeys take place
                </h1>
              </div>

              <div className="flex-1 flex items-start justify-center w-full">
                <div className="relative">
                  <div className="opacity-100">
                    <Image
                      src={dest.frontImage}
                      width={400}
                      height={500}
                      alt={dest.name}
                      className="object-cover w-[220px] sm:w-[300px] md:w-[400px] h-[300px] sm:h-[350px] md:h-[500px]"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  <div className="absolute inset-0 top-1/2 flex flex-col items-center justify-center p-6 text-center">
                    <h2 className="text-white text-5xl sm:text-6xl lg:text-9xl font-trajan font-medium italic tracking-wider">
                      {dest.name}
                    </h2>
                    <p className="text-white font-ovo text-[16px] md:text-[18px] mt-6 max-w-xs leading-relaxed opacity-80">
                      {dest.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Destinations;
