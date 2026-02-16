"use client";

import { destinacije } from "@/constants";
import Image from "next/image";
import { motion, useMotionValue, animate, cubicBezier } from "framer-motion";
import { useState, useRef } from "react";

const contentVariants = {
  active: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.8, ease: cubicBezier(0.16, 1, 0.3, 1), staggerChildren: 0.1, delayChildren: 0.2 }
  },
  inactive: {
    opacity: 0, scale: 0.8, y: 40,
    transition: { duration: 0.4 }
  }
};

const itemVariants = {
  active: { opacity: 1, y: 0, scale: 1 },
  inactive: { opacity: 0, y: 40, scale: 0.8 }
};

const Destinations = () => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  const onDragEnd = (_e: any, info: any) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.clientWidth;
    const { offset, velocity } = info;
    const threshold = containerWidth * 0.2;

    let newIndex = index;

    // 1. Određujemo kamo idemo na temelju pomaka ILI brzine
    if (offset.x < -threshold || velocity.x < -500) {
      newIndex = Math.min(index + 1, destinacije.length - 1);
    } else if (offset.x > threshold || velocity.x > 500) {
      newIndex = Math.max(index - 1, 0);
    }

    const target = -newIndex * containerWidth;

    // 2. INERTIA ANIMACIJA
    animate(x, target, {
      type: "inertia",
      velocity: velocity.x, // Hvata brzinu tvog zamaha
      bounceStiffness: 0,    // OVO eliminira "feder" efekt
      bounceDamping: 0,      // OVO eliminira "feder" efekt
      power: 0.2,            // Koliko "daleko" zamah ide
      timeConstant: 200,     // Kako brzo usporava prema cilju
      restDelta: 0.001,
      // modifyTarget pomaže da se "zaključa" na točan pixel
      modifyTarget: () => target, 
    });
    
    setIndex(newIndex);
  };

  return (
    <section className="w-full overflow-hidden relative h-dvh bg-black">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.4} // Smanjen elasticity da se ne bi previše rastezalo
        onDragEnd={onDragEnd}
        style={{ translateX: x, willChange: "transform" }}
        className="flex w-full h-full cursor-grab active:cursor-grabbing"
      >
        {destinacije.map((dest, i) => (
          <div key={dest.id} className="relative w-full h-full flex-shrink-0 overflow-hidden">
            <Image
              src={dest.backgroundImage}
              alt="BG"
              fill
              className="object-cover pointer-events-none select-none opacity-60"
              priority={i === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40 z-10" />

            <motion.div 
              className="relative z-20 w-full h-full flex flex-col items-center pointer-events-none select-none"
              initial="inactive"
              animate={i === index ? "active" : "inactive"}
              variants={contentVariants}
            >
              {/* Sadržaj ostaje isti kao prije */}
              <div className="mt-12 px-4 text-center">
                <motion.h1 variants={itemVariants} className="font-pinyon text-3xl lg:text-5xl text-white opacity-80">
                  Where our journeys take place
                </motion.h1>
              </div>

              <div className="flex-1 flex items-center justify-center w-full">
                <div className="relative">
                  <motion.div variants={itemVariants} className="relative shadow-2xl">
                    <Image
                      src={dest.frontImage}
                      width={400}
                      height={500}
                      alt={dest.name}
                      className="object-cover w-[220px] sm:w-[300px] md:w-[400px] h-[320px] sm:h-[420px] md:h-[500px]"
                    />
                  </motion.div>

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                    <motion.h2 variants={itemVariants} className="text-5xl md:text-8xl font-trajan italic drop-shadow-lg">
                      {dest.name}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="font-ovo mt-6 max-w-xs opacity-90">
                      {dest.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Destinations;