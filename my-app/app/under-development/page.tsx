"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  return (
    <div
      className={`fixed inset-0  bg-[#0a0a0a] flex flex-col items-center justify-center `}
    >
      <div className="flex flex-col items-center">
        {/* Logo animacija */}
        <h1 className="text-white font-pinyon text-6xl md:text-8xl mb-4 ">
          Adrion
        </h1>

        {/* Suptilna linija koja se puni */}
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <div
            className={`absolute inset-0 bg-(--yellow) transition-transform duration-[2000ms] ease-in-out translate-x-full`}
          />
        </div>

        <p className="mt-6 text-white/60  uppercase tracking-[0.5em] font-light">
          Currently under development
        </p>
        <p className="mt-6 text-white/60 text-sm uppercase tracking-[0.2em] font-light">
          Stay Tuned for the Adrion experience!
        </p>
        <a
          href="/"
          className="group flex flex-col items-center gap-2 cursor-pointer mt-12"
        >
          <span className="text-white uppercase tracking-[0.3em] font-bold  font-cormorant text-sm sm:text-[16px]">
            Back to the homepage
          </span>
          <div className="w-24 h-px bg-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-[0%] transition-transform duration-500" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Page;
