import Image from "next/image";
import LogoVariantOne from "./components/LogoVariantOne";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";

import ContactForm from "./components/ContactForm";
import TripCarouselComponent from "./components/TripCarouselComponent";
import { dayTrips, multidays } from "@/constants";
import ImageCTA from "./components/ImageCTA";
import TransferCTA from "./components/TransfersCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Destinations />
      {/* <SwipeCarousel /> */}
      <CTA />
      <TransferCTA />
      <TripCarouselComponent tag="Something" title="Multi-day adventures" description="Carefully planned single-day escapes for those who want to experience the essence of Croatia in a heartbeat." trips={multidays} />
      <TripCarouselComponent tag="Something" title="Curated day adventures" description="Carefully planned single-day escapes for those who want to experience the essence of Croatia in a heartbeat." trips={dayTrips} />
      {/* <ContactForm /> */}
      <ImageCTA />
    </main>
  );
}   
