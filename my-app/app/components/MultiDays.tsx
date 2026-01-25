"use client";

import React from "react";
import { multidays } from "@/constants";
import Image from "next/image";

const MultiDays = () => {
  return (
    <main className="min-h-screen w-full overflow-hidden flex flex-col">
      {/* Container koji omogućuje horizontalni scroll na desktopu */}
      <div className="flex w-full h-full flex-col md:flex-row flex-1 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {multidays.map((d) => (
          <div
            key={d.id}
            className="group relative flex-none md:flex-1 w-full md:w-[33.33vw] h-screen md:h-auto overflow-hidden transition-all duration-1000 ease-in-out md:hover:flex-[1.1] border-b md:border-b-0 md:border-r border-white/10 snap-center"
          >
            <Image
              src={d.image}
              alt={d.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/60" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-20">
              <p className="text-(--yellow) text-[12px] uppercase tracking-[0.5em] mb-3">
                {d.destination}
              </p>

              <h3 className="text-white text-3xl lg:text-4xl font-cormorant mb-4 drop-shadow-2xl">
                {d.title}
              </h3>

              <p className="text-white/80 font-ovo text-base leading-relaxed max-w-70 mx-auto mb-8">
                {d.description}
              </p>

              <div className="font-cormorant inline-block py-2 px-6 border border-(--yellow)/40 text-(--yellow) text-[14px] uppercase tracking-widest hover:bg-(--yellow) hover:text-black transition-all duration-300 cursor-pointer">
                Explore Journey
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="py-10 flex justify-center ">
        <button className="group flex flex-col items-center gap-2 cursor-pointer">
          <span className="text-(--green) uppercase tracking-[0.3em] font-bold  font-cormorant">
            Discover All Experiences
          </span>
          <div className="w-24 h-px bg-(--green)/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-(--green) translate-x-full group-hover:translate-x-[0%] transition-transform duration-500" />
          </div>
        </button>
      </div>
    </main>
  );
};

export default MultiDays;
