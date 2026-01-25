"use client";
import React, { useEffect, useState } from "react";

const Preloader = ({ isReady }: { isReady: boolean }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isReady) {
      // Dajemo malom fade-outu vremena da odradi svoje prije micanja iz DOM-a
      const timer = setTimeout(() => setShouldRender(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [isReady]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
        isReady ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center">
        {/* Logo animacija */}
        <h1 className="text-white font-pinyon text-6xl md:text-8xl mb-4 animate-pulse">
          Adrion
        </h1>

        {/* Suptilna linija koja se puni */}
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-(--yellow) transition-transform duration-[2000ms] ease-in-out ${
              isReady ? "translate-x-0" : "-translate-x-full"
            }`}
          />
        </div>

        <p className="mt-6 text-white/30 text-[10px] uppercase tracking-[0.5em] font-light">
          Crafting your journey
        </p>
      </div>
    </div>
  );
};

export default Preloader;
