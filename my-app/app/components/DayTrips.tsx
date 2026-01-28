"use client";

import Image from "next/image";

export const dayTrips = [
  {
    id: 1,
    title: "Cetina Canyon Bike Adventures",
    category: "Biking",
    image: "/images/bike.webp",
    duration: "4 Hours",
    price: "From €120",
    description:
      "Pedal through ancient olive groves and hidden coastal trails of central Dalmatian islands.",
  },
  {
    id: 2,
    title: "Plitvice Waterways",
    category: "Nature & Hiking",
    image: "/images/plitvice-slapovi-next.webp",
    duration: "8 Hours",
    price: "From €95",
    description:
      "A private, curated tour through Croatia’s most iconic cascades and forest reserves.",
  },
  {
    id: 3,
    title: "Istrian Truffle Hunt & Medieval Hilltops",
    category: "Heritage & Gourmet",
    image: "/images/istra-back.webp",
    duration: "6 Hours",
    price: "From €150",
    description:
      "An exclusive deep-dive into Motovun forests with professional hunters, followed by a private tasting in a family-owned estate.",
  },
];

const DayTrips = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12">
      {/* Header sekcije */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="text-(--green) text-xs uppercase tracking-[0.4em] mb-4">
            Short on time?
          </p>
          <h2 className="text-black text-5xl md:text-6xl font-cormorant leading-tight">
            Curated day experiences
          </h2>
        </div>
        <p className="text-black/60 font-ovo max-w-sm text-sm leading-relaxed">
          Carefully planned single-day escapes for those who want to experience
          the essence of Croatia in a heartbeat.
        </p>
      </div>

      {/* Grid sa izletima */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {dayTrips.map((trip) => (
          <div key={trip.id} className="group cursor-pointer">
            {/* Okvir slike */}
            <div className="relative h-112.5 w-full overflow-hidden mb-6">
              <Image
                src={trip.image}
                alt={trip.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Overlay na hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </div>

            {/* Tekstualni dio */}
            <div className="flex flex-col items-center text-center">
              <span className="text-(--yellow) text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">
                {trip.category}
              </span>
              <h4 className="text-black text-2xl font-cormorant  mb-3 group-hover:text-(--green) transition-colors">
                {trip.title}
              </h4>
              <div className="w-8 h-px bg-black/20 mb-3" />
              <p className="text-black/40 text-[11px] uppercase tracking-[0.2em]">
                Duration: {trip.duration}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Donji gumb u tvom stilu */}
      <div className="mt-20 flex justify-center">
        <a
          href="/under-development"
          className="group flex flex-col items-center gap-2 cursor-pointer"
        >
          <span className="text-(--green) uppercase tracking-[0.3em] font-bold  font-cormorant text-sm sm:text-[16px]">
            View All Day Trips
          </span>
          <div className="w-24 h-px bg-(--green)/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-(--green) translate-x-full group-hover:translate-x-[0%] transition-transform duration-500" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default DayTrips;
