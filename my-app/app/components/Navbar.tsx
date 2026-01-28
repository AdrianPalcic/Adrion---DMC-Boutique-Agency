"use client";

import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-[100] px-6 py-5 md:px-12 flex justify-between items-center ">
      {/* LOGO DIO */}
      <div className="flex flex-col  items-center gap-0">
        <div className="w-[60px] sm:w-fit">
          <img
            src="/images/logo-white-try.png"
            alt="Logo Adrion"
            className="w-[60px] sm:w-[70px] object-cover"
          />
        </div>
        <div className="flex flex-col  gap-0 ">
          <span className="text-white text-[10px] text-center sm:text-[12px] md:text-[18px] uppercase tracking-[0.2em] mt-1 ml-0.5 font-cormorant">
            Adrion Custom
          </span>
          <span className="text-white text-[8px] text-center sm:text-[12px] md:text-[15px] uppercase tracking-[0.2em] mt-1 ml-0.5 font-cormorant">
            Travel Agency
          </span>
        </div>
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
        <div className="hidden  gap-1.5 cursor-not-allowed opacity-40">
          <div className="w-8 h-px bg-white"></div>
          <div className="w-5 h-px bg-white self-end"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
