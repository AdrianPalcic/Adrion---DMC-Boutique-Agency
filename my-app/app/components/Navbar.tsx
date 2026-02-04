"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { X } from "lucide-react";

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const closeRef = useRef(null);
  const desktopDestinationsRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const socialsRef = useRef<HTMLUListElement>(null);
  const contactlinksRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const destinations = [
    "Dalmacija",
    "Slavonija",
    "Cetina",
    "Lika & Kvarner",
    "Istra",
    "Dubrovnik",
    "Zagreb",
  ];
  const otherLinks = ["Our Partners", "Journal", "Contact"];

  // Inicijalizacija Timeline-a
  useEffect(() => {
    if (
      !menuRef.current ||
      !desktopDestinationsRef.current ||
      !linksRef.current ||
      !contactlinksRef.current ||
      !socialsRef.current
    )
      return;

    const desktopDest = Array.from(desktopDestinationsRef.current.children);
    const mainLinks = Array.from(linksRef.current.children);
    const socials = Array.from(socialsRef.current.children);
    const contactInfo = Array.from(contactlinksRef.current.children);

    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.inOut" },
    });

    tl.to(menuRef.current, {
      y: "0%",
      duration: 0.6,
    })
      .from(
        closeRef.current,
        {
          y: -60,
          opacity: 0,
          rotate: 90,
          duration: 0.5,
        },
        "-=0.2",
      )
      .from(
        desktopDest,
        {
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.3,
          stagger: 0.06,
        },
        "-=0.4",
      )
      .from(
        mainLinks,
        {
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.3,
          stagger: 0.06,
        },
        "-=0.6",
      )
      .from(
        contactInfo,
        {
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.3,
          stagger: 0.06,
        },
        "-=0.5",
      )
      .from(
        socials,
        {
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.3,
          stagger: 0.06,
        },
        "-=0.5",
      );

    tlRef.current = tl;
  }, []);

  useEffect(() => {
    if (!tlRef.current) return;
    isOpen ? tlRef.current.play() : tlRef.current.reverse();
  }, [isOpen]);

  return (
    <>
      <nav
        className={`absolute top-0 left-0 w-full px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-500 z-50
          ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        <div className="flex flex-col items-center gap-0">
          <img
            src="/images/logo-white-try.png"
            alt="Logo"
            className="w-[50px] sm:w-[60px] object-cover"
          />
          <div className="flex flex-col gap-0 transition-opacity duration-500 font-cormorant text-center uppercase tracking-[0.2em] mt-1 text-white">
            <span className="text-[10px] sm:text-[12px] md:text-[18px]">
              Adrion Custom
            </span>
            <span className="text-[8px] sm:text-[12px] md:text-[15px]">
              Travel Agency
            </span>
          </div>
        </div>

        <div
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1.5 cursor-pointer group"
        >
          <div className="w-8 h-px bg-white group-hover:w-12 duration-300 transition-all"></div>
          <div className="w-5 h-px bg-white self-end group-hover:w-8 duration-300 transition-all"></div>
          <div className="w-8 h-px bg-white group-hover:w-12 duration-300 transition-all"></div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed left-0 top-0 w-full h-full min-h-full z-50 flex transform -translate-y-full"
      >
        <div
          className="absolute top-6 right-6 cursor-pointer w-8 h-8 flex items-center justify-center translate-x-1.5 z-[60]"
          onClick={() => setIsOpen(false)}
        >
          <X ref={closeRef} className="scale-[2] text-(--deep-blue)" />
        </div>

        {/* Desktop Image Section */}
        <div className="hidden md:block flex-[0.6] relative h-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <Image
            src="/images/about.webp"
            fill
            alt="About"
            className="object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
            <ul
              ref={desktopDestinationsRef}
              className="flex flex-col font-ovo gap-6 text-4xl lg:text-5xl text-(--shore)"
            >
              {destinations.map((tour) => (
                <li
                  key={tour}
                  className="relative group cursor-pointer overflow-hidden w-fit"
                >
                  {tour}
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-(--shore) transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full flex-1 md:flex-[0.4] h-full flex flex-col justify-between bg-(--shore) text-(--deep-blue)">
          <div className="flex flex-col justify-center px-8 py-12 gap-12 h-full">
            <div className="flex flex-col gap-4">
              {/* Ova lista sada sadrži i destinacije na mobilnim uređajima */}
              <ul
                ref={linksRef}
                className="flex flex-col gap-4 uppercase text-[18px] text-(--deep-blue) font-bold"
              >
                {/* Destinacije vidljive samo na mobitelu */}
                {destinations.map((tour) => (
                  <li
                    key={tour}
                    className="md:hidden relative group cursor-pointer overflow-hidden w-fit"
                  >
                    {tour}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-(--deep-blue) transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  </li>
                ))}

                {/* Standardni linkovi vidljivi svugdje */}
                {otherLinks.map((item) => (
                  <li
                    key={item}
                    className="relative group cursor-pointer overflow-hidden w-fit"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-(--deep-blue) transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  </li>
                ))}
              </ul>

              <div
                ref={contactlinksRef}
                className="mt-6 text-[14px] flex flex-col gap-1"
              >
                <span>Email: info@adriontravel.com</span>
                <span>Phone: +385 99 512 1707</span>
                <span>Address: Zagreb, Croatia</span>
              </div>

              <ul ref={socialsRef} className="flex gap-4 pt-6 uppercase">
                {["Facebook", "Instagram", "LinkedIn"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-gray-400 transition-colors"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
