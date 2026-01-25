"use client";

import { destinacije } from "@/constants";
import Image from "next/image";
import { useState } from "react";

interface Destination {
  id: number;
  name: string;
  description: string;
  backgroundImage: string;
  frontImage: string;
}

const Destinations = () => {
  const [currentDestination, setCurrentDestination] = useState<Destination>(
    destinacije[0],
  );

  // Funkcija za navigaciju koja radi u krug (loop)
  const handleNext = () => {
    const currentIndex = destinacije.findIndex(
      (d) => d.id === currentDestination.id,
    );
    const nextIndex = (currentIndex + 1) % destinacije.length;
    setCurrentDestination(destinacije[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = destinacije.findIndex(
      (d) => d.id === currentDestination.id,
    );
    const prevIndex =
      (currentIndex - 1 + destinacije.length) % destinacije.length;
    setCurrentDestination(destinacije[prevIndex]);
  };

  return (
    <main className="w-full h-screen relative overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src={currentDestination.backgroundImage}
        sizes="100vw"
        alt="Adrion travel agency destinations"
        fill
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* CONTENT */}
      <div
        id="content"
        className="z-20 w-full h-full relative flex flex-col items-center"
      >
        <div className="my-6">
          <h1 className="font-pinyon text-6xl text-white text-center">
            Where our journeys take place
          </h1>
        </div>

        <div className="relative flex flex-col items-center justify-center flex-1 w-full">
          <div className="relative group shadow-2xl">
            <Image
              src={currentDestination.frontImage}
              width={400}
              height={500}
              alt={currentDestination.name}
              className="object-cover w-100 h-125 "
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20  ">
              <h2 className="text-white text-center text-9xl font-cormorant font-medium italic tracking-wider drop-shadow-lg ">
                {currentDestination.name}
              </h2>

              <p className="text-white font-ovo text-[18px] text-center opacity-80 mt-6 max-w-xs px-4">
                {currentDestination.description}
              </p>

              <p className="text-white/80 text-xs uppercase tracking-[0.3em] mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore Destination
              </p>
            </div>
          </div>
        </div>

        {/* BOUTIQUE NAVIGATION */}
        <div className="absolute bottom-12 right-12 z-40 flex items-center gap-8">
          {/* Brojač */}
          <div className="flex flex-col items-start">
            <span className="text-white text-4xl font-light">
              0
              {destinacije.findIndex((d) => d.id === currentDestination.id) + 1}
            </span>
            <div className="w-12 h-px bg-white/30 mt-1 relative">
              <div
                className="absolute top-0 left-0 h-full bg-white transition-all duration-500"
                style={{
                  width: `${((destinacije.findIndex((d) => d.id === currentDestination.id) + 1) / destinacije.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Gumbi */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 cursor-pointer h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-(--green)  transition-colors duration-200"
            >
              <span className="text-xl">←</span>
            </button>
            <button
              onClick={handleNext}
              className="w-12 cursor-pointer h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-(--green)  transition-colors duration-200"
            >
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destinations;
