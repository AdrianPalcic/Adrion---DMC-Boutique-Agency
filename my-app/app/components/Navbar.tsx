"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Scroll handler za navbar background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Glavni navbar */}
      <nav
        className={`absolute top-0 left-0 w-full px-6 py-5 md:px-12 flex justify-between items-center transition-all duration-500 z-50
          ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        {/* Logo */}
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
          className="flex flex-col gap-1.5 cursor-pointer"
        >
          <div className="w-8 h-px bg-white"></div>
          <div className="w-5 h-px bg-white self-end"></div>
        </div>
      </nav>

      <div
        className={`fixed left-0 top-0 w-full h-full min-h-full z-50 flex transform transition-transform duration-500 origin-bottom
    ${isOpen ? "translate-y-0" : "translate-y-full"}
  `}
      >
        <div
          className="absolute top-6 right-6 cursor-pointer w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {" "}
          <div className="absolute w-12 h-[3px] bg-(--deep-blue) rotate-45"></div>{" "}
          <div className="absolute w-12 h-[3px] bg-(--deep-blue) -rotate-45"></div>{" "}
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

          {/* Hero content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 z-20">
            <ul className="flex flex-col font-ovo gap-6 text-4xl lg:text-5xl text-white">
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
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desna strana: menu + contact */}
        <div className="w-full flex-1 md:flex-[0.4] h-full flex flex-col justify-between bg-[#FAF9F6] text-[var(--shore)]">
          <div className="flex flex-col justify-center px-8 py-12 gap-12 h-full">
            {/* Menu + Contact info */}
            <div className="flex flex-col gap-4">
              <ul className="flex md:hidden flex-col gap-3 uppercase text-(--deep-blue) text-[18px] font-bold">
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
              <ul className="flex flex-col gap-4 uppercase text-[18px] text-(--deep-blue) font-bold">
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

              {/* Contact info */}
              <div className="mt-6 text-[14px] flex flex-col gap-1 text-(--deep-blue)">
                <span>Email: info@adriontravel.com</span>
                <span>Phone: +385 99 512 1707</span>
                <span>Address: Zagreb, Croatia</span>
              </div>

              {/* Social */}
              <ul className="flex gap-4 pt-6 uppercase text-(--deep-blue)">
                {["Facebook", "Instagram", "LinkedIn"].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-gray-300 transition-colors"
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
