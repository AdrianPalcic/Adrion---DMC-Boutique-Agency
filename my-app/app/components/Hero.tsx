import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="relative w-full h-dvh overflow-hidden bg-black">
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

        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 mt">
          <h1 className="main-title text-3xl sm:text-5xl md:text-[70px] text-white max-w-5xl leading-[1.1]">
            Curated Croatian <br />
            Journeys
          </h1>

          <p className="main-subtitle font-pinyon text-white/90 mt-6 max-w-2xl text-xl md:text-3xl">
            For those who appreciate quality, adventure and authentic
            experiences
          </p>

          <a
            href="/under-development"
            className="group flex flex-col items-center gap-2 cursor-pointer mt-12"
          >
            <span className="text-white uppercase tracking-[0.3em] font-bold  font-cormorant text-sm sm:text-[16px]">
              Start Your Adventure
            </span>
            <div className="w-24 h-px bg-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-white translate-x-full group-hover:translate-x-[0%] transition-transform duration-500" />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
