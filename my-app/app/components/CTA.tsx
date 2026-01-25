import React from "react";

const CTA = () => {
  return (
    <main className="w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-(--deep-blue) mb-3 text-center text-5xl md:text-6xl font-cormorant leading-tight">
          For those who seek adventure & emotion
        </h1>

        <h2 className="text-[16px] md:text-lg text-(--deep-blue) text-center max-w-2xl font-ovo">
          Our journeys are built on selection, responsibility, and trust —
          shaped to support local communities, highlight lesser-known places,
          and present Croatia as it truly is, in every season. Nothing is
          excessive. Nothing is accidental.
        </h2>
        <button className="group flex flex-col items-center gap-2 cursor-pointer mt-12">
          <span className="text-(--green) uppercase tracking-[0.3em] font-bold  font-cormorant">
            Start Your Adventure
          </span>
          <div className="w-24 h-px bg-(--green)/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-(--green) translate-x-full group-hover:translate-x-[0%] transition-transform duration-500" />
          </div>
        </button>
      </div>
    </main>
  );
};

export default CTA;
