"use client";

import React from "react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-(--green) px-6 md:px-12 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Lijeva strana: Tekstualni poziv */}
        <div className="flex flex-col justify-center">
          <p className="text-(--yellow) text-xs uppercase tracking-[0.5em] mb-6">
            Contact Us
          </p>
          <h2 className="text-white text-6xl md:text-7xl font-cormorant mb-8 leading-tight">
            Let’s craft your <br /> next story.
          </h2>
          <p className="text-white/60 font-ovo text-lg leading-relaxed max-w-sm">
            Whether you have a specific itinerary in mind or just a desire to
            travel, our experts are here to help.
          </p>

          {/* <div className="mt-12 space-y-4">
            <p className="text-white/40 text-xs uppercase tracking-widest">
              Office Address
            </p>
            <p className="text-white font-cormorant text-xl italic">
              Ulica Kralja Tomislava 1, 21000 Split, Croatia
            </p>
          </div> */}
        </div>

        {/* Desna strana: Forma */}
        <div className="bg-white/5 p-8 md:p-12 backdrop-blur-sm border border-white/10">
          <form className="flex flex-col gap-8">
            <div className="group relative">
              <label className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block group-focus-within:text-(--yellow) transition-colors">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white font-cormorant text-lg focus:outline-none focus:border-(--yellow) transition-all"
                placeholder="John Doe"
              />
            </div>

            <div className="group relative">
              <label className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block group-focus-within:text-(--yellow) transition-colors">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white font-cormorant text-lg focus:outline-none focus:border-(--yellow) transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div className="group relative">
              <label className="text-white/40 text-[10px] uppercase tracking-widest mb-2 block group-focus-within:text-(--yellow) transition-colors">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-2 text-white font-cormorant text-lg focus:outline-none focus:border-(--yellow) transition-all resize-none"
                placeholder="Tell us about your dream journey..."
              />
            </div>

            <button
              type="submit"
              className="mt-4 py-4 w-full   text-(--yellow) text-[12px] uppercase tracking-[0.3em] font-bold  hover:text-white transition-all duration-500 cursor-pointer"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
