
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";

import TripCarouselComponent from "./components/TripCarouselComponent";
import { dayTrips, multidays } from "@/constants";
import ImageCTA from "./components/ImageCTA";
import TransferSection from "./components/TransfersCTA";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Destinations />
      <CTA />
      <TransferSection />
      <TripCarouselComponent trips={multidays} tag="something"  description="Our multi-day expeditions take you deep into local communities and untouched landscapes, highlighting the lesser-known paths where tradition still breathes and every season tells a different story." title="Multi - day adventures" />
      <TripCarouselComponent trips={dayTrips} tag="something" description="Carefully planned single-day escapes for those who want to experience the essence of Croatia in a heartbeat." title="Curated day adventures" />
      <ImageCTA />
    </main>
  );
}
