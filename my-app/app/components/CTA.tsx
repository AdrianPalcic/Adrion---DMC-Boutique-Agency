import React from "react";

const CTA = () => {
  return (
    <main className="w-full h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="main-title text-(--deep-blue) text-center max-w-3xl">
          For those who seek adventure & emotion
        </h1>
        <h2 className="text-lg text-(--deep-blue) text-center max-w-2xl">
          Our journeys are built on selection, responsibility, and trust —
          shaped to support local communities, highlight lesser-known places,
          and present Croatia as it truly is, in every season. Nothing is
          excessive. Nothing is accidental.
        </h2>
        <button className="inner-links mt-10 text-(--green) uppercase tracking-[0.2em] ">
          Start your adventure
        </button>
      </div>
    </main>
  );
};

export default CTA;
