"use client";

import React, { useState, useEffect } from "react";
import LogoVariantOne from "./LogoVariantOne";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white/85 backdrop-blur-md  border-b border-gray-100"
          : "bg-transparent "
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <LogoVariantOne />

        <button className="group flex flex-col items-end gap-1.5 p-2">
          <span
            className={`h-0.5 bg-black transition-all duration-300 ${
              isScrolled ? "w-5 group-hover:w-8" : "w-6 group-hover:w-8"
            }`}
          />
          <span className="w-8 h-0.5 bg-black" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
