"use client";

import React from "react";
import { BtnGreenCenter } from "./utils/Btn"; 

const GeneralCTA = () => {
  return (
    <section
      className="w-full py-32 bg-(--green) px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        {/* Lijeva strana: Glavni tekst */}
        <div className="flex flex-col justify-center">
          <p className="text-(--yellow) text-xs uppercase tracking-[0.5em] mb-8">
            Bespoke Journeys
          </p>
          <h2 className="text-white text-5xl md:text-7xl font-cormorant mb-10 leading-[1.1]">
            Didn’t find what <br /> you were looking for?
          </h2>
        </div>

        {/* Desna strana: Sub-text i Button */}
        <div className="flex flex-col justify-center items-start border-l border-white/10 md:pl-16">
          <p className="text-white/70 font-ovo text-lg md:text-xl leading-relaxed mb-12 max-w-md">
            Every traveler is unique, and so is every itinerary. 
            Tell us about your preferences, and we will curate a 
            journey that reflects your personal story.
          </p>
          
          <div className="w-full md:w-auto">
             {/* Ovdje može ići tvoj gumb ili obični stilizirani anchor */}
             <a 
               href="#contact" 
               className="inline-block py-5 px-12 border border-(--yellow) text-(--yellow) text-xs uppercase tracking-[0.3em] font-bold hover:bg-(--yellow) hover:text-(--green) transition-all duration-500"
             >
               Plan Your Private Trip
             </a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 w-full">
            <p className="text-white/30 text-[10px] uppercase tracking-[0.2em]">
              Direct Inquiry
            </p>
            <p className="text-white font-cormorant text-xl mt-2 italic">
              hello@adrion-travel.com
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GeneralCTA;