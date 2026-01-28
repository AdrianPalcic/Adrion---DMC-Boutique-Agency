"use client";

import { destinacije } from "@/constants";
import Image from "next/image";
import { useState, useEffect } from "react";

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

  // State za praćenje učitavanja
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const [isFrontLoaded, setIsFrontLoaded] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Kada se sve slike učitaju, gasimo "changing" state
  useEffect(() => {
    if (isBgLoaded && isFrontLoaded) {
      setIsChanging(false);
    }
  }, [isBgLoaded, isFrontLoaded]);

  const triggerChange = (nextDest: Destination) => {
    setIsChanging(true);
    setIsBgLoaded(false);
    setIsFrontLoaded(false);
    setCurrentDestination(nextDest);
  };

  const handleNext = () => {
    const currentIndex = destinacije.findIndex(
      (d) => d.id === currentDestination.id,
    );
    const nextIndex = (currentIndex + 1) % destinacije.length;
    triggerChange(destinacije[nextIndex]);
  };

  const handlePrev = () => {
    const currentIndex = destinacije.findIndex(
      (d) => d.id === currentDestination.id,
    );
    const prevIndex =
      (currentIndex - 1 + destinacije.length) % destinacije.length;
    triggerChange(destinacije[prevIndex]);
  };

  return (
    <>
      <section className="w-full h-dvh relative overflow-hidden bg-black">
        {/* LOADER UNUTAR SEKCIJE */}
        <div
          className={`absolute inset-0 z-[60] flex items-center justify-center bg-black/40 backdrop-blur-md transition-opacity duration-700 ${isChanging ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-2 border-(--yellow)/20 border-t-(--yellow) rounded-full animate-spin mb-4" />
            <p className="text-(--yellow) font-pinyon text-2xl animate-pulse">
              Adrion
            </p>
          </div>
        </div>

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <Image
            key={currentDestination.backgroundImage}
            src={currentDestination.backgroundImage}
            sizes="100vw"
            alt="Background"
            fill
            quality={75}
            priority
            onLoad={() => setIsBgLoaded(true)}
            className={`object-cover object-center transition-all duration-1000 ${isChanging ? "scale-110 blur-sm" : "scale-100 blur-0"}`}
          />
        </div>

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* CONTENT */}
        <div
          id="content"
          className="z-20 w-full h-full relative flex flex-col items-center"
        >
          <div className="my-6 mx-1">
            <h1 className="font-cormorant text-3xl lg:text-5xl text-white text-center">
              Where our journeys take place
            </h1>
          </div>

          <div className="relative flex flex-col items-center justify-center flex-1 w-full">
            <div className="relative group shadow-2xl">
              <Image
                key={currentDestination.frontImage}
                src={currentDestination.frontImage}
                width={400}
                height={500}
                alt={currentDestination.name}
                onLoad={() => setIsFrontLoaded(true)}
                className={`object-cover w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] transition-all duration-700 ${isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center   group ${isFrontLoaded ? "bg-black/40" : ""}`}
              >
                <h2 className="text-white text-center text-6xl lg:text-9xl font-cormorant font-medium italic tracking-wider drop-shadow-lg">
                  {currentDestination.name}
                </h2>
                <p className="text-white font-ovo text-[18px] text-center opacity-80 mt-6 max-w-xs px-4">
                  {currentDestination.description}
                </p>

                <button className="group flex flex-col items-center gap-2 cursor-pointer mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <span className="text-(--yellow) uppercase tracking-[0.3em] font-bold font-cormorant text-sm sm:text-[16px]">
                    Explore Destination
                  </span>
                  <div className="w-24 h-px bg-(--yellow)/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-(--yellow) -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="absolute bottom-12 right-12 z-40 flex items-center gap-8">
            <div className="flex flex-col items-start text-white">
              <span className="text-4xl font-light">
                0
                {destinacije.findIndex((d) => d.id === currentDestination.id) +
                  1}
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

            <div className="flex gap-4">
              <button
                onClick={handlePrev}
                disabled={isChanging}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-(--green) transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ←
              </button>
              <button
                onClick={handleNext}
                disabled={isChanging}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-(--green) transition-all disabled:opacity-30 disabled:cursor-not-allowed"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destinations;
