"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-5 md:px-12 flex justify-between items-center backdrop-blur-sm bg-black/10 border-b border-white/5">
      {/* LOGO DIO */}
      <div className="flex flex-col">
        <span className="text-white font-pinyon text-3xl tracking-wider leading-none">
          Adrion
        </span>
        <span className="text-white/40 text-[8px] uppercase tracking-[0.4em] mt-1 ml-0.5">
          Custom Travel Agency
        </span>
      </div>

      {/* STATUS PORUKA - UNDER DEVELOPMENT */}
      <div className="flex items-center gap-4">
        {/* Vizualni indikator rada */}
        <div className="flex items-center gap-2 px-4 py-1.5 border border-(--yellow)/30 rounded-full">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-(--yellow) opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-(--yellow)"></span>
          </span>
          <span className="text-(--yellow) text-[5px] md:text-[9px] uppercase tracking-[0.2em] font-medium">
            Project under development
          </span>
        </div>

        {/* Hamburger ili Menu placeholder (za vizualni balans) */}
        <div className="hidden md:flex flex-col gap-1.5 cursor-not-allowed opacity-40">
          <div className="w-8 h-px bg-white"></div>
          <div className="w-5 h-px bg-white self-end"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
