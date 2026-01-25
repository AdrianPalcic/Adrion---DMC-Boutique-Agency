import Image from "next/image";
import LogoVariantOne from "./components/LogoVariantOne";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Destinations from "./components/Destinations";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Destinations />
      <CTA />
    </main>
  );
}
