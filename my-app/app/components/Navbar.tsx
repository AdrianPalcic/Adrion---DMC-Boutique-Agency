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
  const mobileDestinationsRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const socialsRef = useRef<HTMLUListElement>(null);
  const contactlinksRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll handler ostaje isti
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Inicijalizacija Timeline-a
  useEffect(() => {
    if (
      !menuRef.current ||
      !desktopDestinationsRef.current ||
      !mobileDestinationsRef.current ||
      !linksRef.current ||
      !contactlinksRef.current ||
      !socialsRef.current
    )
      return;

    const desktopDestinations = Array.from(
      desktopDestinationsRef.current.children,
    );
    const mobileDestinations = Array.from(
      mobileDestinationsRef.current.children,
    );
    const socials = Array.from(socialsRef.current.children);
    const links = Array.from(linksRef.current.children);
    const contactLinks = Array.from(contactlinksRef.current.children);

    // Kreiramo timeline koji je inicijalno pauziran
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.inOut" },
    });

    // Redoslijed animacije
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
        desktopDestinations,
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
        mobileDestinations,
        {
          y: 10,
          opacity: 0,
          filter: "blur(10px)",
          duration: 0.3,
          stagger: 0.06,
        },
        "-=1",
      )
      .from(
        links,
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
        contactLinks,
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

  // Reagiraj na promjenu isOpen
  useEffect(() => {
    if (!tlRef.current) return;
    if (isOpen) {
      tlRef.current.play();
    } else {
      tlRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <>
      {/* Glavni navbar */}
      <nav
        className={`absolute top-0 left-0 w-full px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-500 z-50
          ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        {/* Logo sekcija - tvoj originalni stil */}
        <div className="flex flex-col items-center gap-0">
          <div className=" sm:w-fit">
            <img
              src="/images/logo-white-try.png"
              alt="Logo Adrion"
              className="w-[50px] sm:w-[60px]  object-cover"
            />
          </div>
          <div
            className={`flex flex-col gap-0 transition-opacity duration-500`}
          >
            <span className="text-white text-[10px] sm:text-[12px] md:text-[18px] text-center uppercase tracking-[0.2em] mt-1 font-cormorant">
              Adrion Custom
            </span>
            <span className="text-white text-[8px] sm:text-[12px] md:text-[15px] text-center uppercase tracking-[0.2em] mt-1 font-cormorant">
              Travel Agency
            </span>
          </div>
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setIsOpen(true)}
          className="flex flex-col gap-1.5 cursor-pointer group"
        >
          <div className="w-8 h-px bg-white group-hover:w-12 duration-300 transition-all"></div>
          <div className="w-5 h-px bg-white self-end group-hover:w-8 duration-300 transition-all"></div>
          <div className="w-8 h-px bg-white group-hover:w-12 duration-300 transition-all"></div>
        </div>
      </nav>

      {/* Fullscreen Overlay - maknut CSS transition radi GSAP-a */}
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

        {/* Lijeva strana: hero */}
        <div className=" hidden md:block flex-[0.6] relative h-full">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="absolute inset-0">
            <Image
              src={"/images/about.webp"}
              fill
              alt="About"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
            <ul
              ref={desktopDestinationsRef}
              className="flex flex-col font-ovo gap-6 text-4xl lg:text-5xl text-(--shore)"
            >
              {[
                "Dalmacija",
                "Slavonija",
                "Cetina",
                "Lika & Kvarner",
                "Istra",
                "Dubrovnik",
                "Zagreb",
              ].map((tour) => (
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

        {/* Desna strana: menu + contact */}
        <div className="w-full flex-1 md:flex-[0.4] h-full flex flex-col justify-between bg-(--shore) text-(--deep-blue)">
          <div className="flex flex-col justify-center px-8 py-12 gap-12 h-full">
            <div className="flex flex-col gap-4">
              <ul
                ref={mobileDestinationsRef}
                className="flex md:hidden flex-col gap-3 uppercase text-(--deep-blue) text-[18px] font-bold"
              >
                {[
                  "Dalmacija",
                  "Slavonija",
                  "Cetina",
                  "Lika & Kvarner",
                  "Istra",
                  "Dubrovnik",
                  "Zagreb",
                ].map((tour) => (
                  <li
                    key={tour}
                    className="relative group cursor-pointer overflow-hidden w-fit"
                  >
                    {tour}
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-(--deep-blue) transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                  </li>
                ))}
              </ul>
              <ul
                ref={linksRef}
                className="flex flex-col gap-4 uppercase text-[18px] text-(--deep-blue) font-bold"
              >
                {["Our Partners", "Journal", "Contact"].map((item) => (
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
                className="mt-6 text-[14px] flex flex-col gap-1 text-(--deep-blue)"
              >
                <span>Email: info@adriontravel.com</span>
                <span>Phone: +385 99 512 1707</span>
                <span>Address: Zagreb, Croatia</span>
              </div>

              <ul
                ref={socialsRef}
                className="flex gap-4 pt-6 uppercase text-(--deep-blue)"
              >
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
