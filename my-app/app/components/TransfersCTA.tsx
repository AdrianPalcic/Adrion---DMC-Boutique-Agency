"use client";

import Image from "next/image";
import React from "react";
import { BtnFullWhite, BtnGreen } from "./utils/Btn";

const TransferSection = () => {
  const fullText = `Seamless transfers, professionally coordinated from start to finish.
With precise planning, real-time monitoring, and experienced chauffeurs, we ensure every movement runs smoothly, efficiently, and without compromise.`;

  return (
    <section className="w-full h-screen lg:h-screen overflow-hidden relative mb-20">
      <div className="flex flex-col lg:flex-row h-full w-full">
        
        <div className="absolute inset-0 lg:relative lg:flex-1 h-full w-full overflow-hidden">
          <Image
            src="/images/transfers-cta.webp"
            alt="Luxury Chauffeur Service Croatia"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/40 lg:hidden" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center h-full px-6 sm:px-10 ">
          <div className="max-w-xl text-center lg:text-left">
   
            
            <h2 className="text-white lg:text-(--deep-blue) text-4xl md:text-6xl font-trajan leading-[1.1] mb-8 uppercase">
              Private Transfers
            </h2>

            <p className="text-[16px] sm:text-lg text-white/90 lg:text-[#0f172a] font-ovo leading-relaxed mb-10">
              {fullText}
            </p>

            <div className="hidden justify-center lg:justify-start lg:flex">
              <BtnGreen content={"Explore fleet"} />
            </div>
            <div className="flex justify-center lg:justify-start lg:hidden">
              <BtnFullWhite content={"Explore fleet"} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TransferSection;