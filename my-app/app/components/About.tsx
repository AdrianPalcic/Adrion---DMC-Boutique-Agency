import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="w-full h-screen overflow-y-hidden">
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center items-center  h-full">
          <div>
            <p className="paragraph-one max-w-xl text-(--deep-blue)">
              At Adrion, we believe travel should have purpose, not volume.
              Every journey is meticulously designed, combining the rich
              landscapes of Croatia—from the Biokovo mountains, the Cetina
              canyon, and the Makarska Riviera, to its islands and cities—with
              thoughtfully chosen partners and activities. Our approach is
              selective and uncompromising: we focus on the highest quality
              experiences, blending adventure and comfort, local gastronomy and
              wine, cultural heritage, and the serenity of nature. Guests are
              guided through a journey that feels personal and effortless, while
              having the freedom to shape aspects of their itinerary. Adrion is
              not about luxury as a show. It is about luxury through curation,
              trust, and meaningful moments, where every choice—from activities
              to accommodations—reflects care, authenticity, and character.
            </p>
            <button className="inner-links mt-10 text-(--green) uppercase tracking-[0.2em]  self-start">
              Our Philosophy
            </button>
          </div>
        </div>
        <div className="flex-1 h-full w-full relative">
          <Image
            src={"/images/about.webp"}
            alt="About Adrion Custom Travel agency"
            fill
            className="object-cover object-center"
            sizes="50vw"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
