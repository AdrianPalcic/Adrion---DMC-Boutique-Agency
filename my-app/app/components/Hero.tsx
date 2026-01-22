import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <Image
        src="/images/hero.webp"
        alt="Boutique Agency Experience"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center pointer-events-none hero-image-sharp"
        // placeholder="blur" // Ako imaš generiran blurDataURL, ovo je vrhunski
      />

      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <h1 className="main-title text-white max-w-5xl leading-[1.1]">
          Adrion Luxury <br />
          <span className="italic">Experience</span>
        </h1>

        <p className="paragraph-one text-white/90 mt-6 max-w-2xl">
          Elegance redefined through boutique travel management. Tailored
          journeys for the most discerning travelers.
        </p>

        <button className="inner-links mt-10 text-white uppercase tracking-[0.2em] text-sm">
          Discover more
        </button>
      </div>
    </section>
  );
};

export default Hero;
