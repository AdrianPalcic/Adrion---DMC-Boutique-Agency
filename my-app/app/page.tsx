import Image from "next/image";
import LogoVariantOne from "./components/LogoVariantOne";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";
import MultiDays from "./components/MultiDays";
import DayTrips from "./components/DayTrips";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Destinations />
      <CTA />
      <MultiDays />
      <DayTrips />
      <ContactForm />
    </main>
  );
}
