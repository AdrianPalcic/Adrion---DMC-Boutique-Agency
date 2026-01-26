import Image from "next/image";
import React from "react";

const About = () => {
  const text = `AAt Adrion, we believe travel should have purpose, not volume.
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
                to accommodations—reflects care, authenticity, and character.`;

  // Razdvajanje prvog slova od ostatka teksta
  const firstLetter = text.trim().charAt(0);
  const restOfText = text.trim().slice(1);

  return (
    <section className="w-full h-auto lg:h-dvh overflow-y-visible lg:overflow-y-hidden bg-white">
      <div className="flex gap-5 flex-col-reverse lg:flex-row h-full">
        {/* TEXT CONTENT */}
        <div className="flex-1 flex flex-col justify-center items-center h-full py-12 lg:py-3 px-6 sm:px-10">
          <div className="max-w-xl">
            <p className="paragraph-one text-[16px] sm:text-lg text-(--deep-blue) font-ovo leading-relaxed">
              {/* DROP CAP - Fix za iPhone */}
              <span className="float-left  font-pinyon text-(--green) mr-2 mt-1 leading-[0.7]">
                {/* {firstLetter} */}
              </span>
              {restOfText}
            </p>

            <a
              href="/under-development"
              className="group flex flex-col items-start gap-2 cursor-pointer mt-12"
            >
              <span className="text-(--green) uppercase tracking-[0.3em] font-bold font-cormorant text-sm sm:text-[16px]">
                Our Philosophy
              </span>
              <div className="w-24 h-px bg-(--green)/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-(--green) -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </div>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="flex-1 min-h-100 lg:h-full w-full relative">
          <Image
            src="/images/about.webp"
            alt="About Adrion Custom Travel agency"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
