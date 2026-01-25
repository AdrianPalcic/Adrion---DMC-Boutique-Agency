import type { Metadata } from "next";
import { cormorantGaramond, ovo, pinyon } from "./fonts.js";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Adrion - DMC Boutique agency",
  description: "Currently under development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${cormorantGaramond.variable} ${ovo.variable} ${pinyon.variable} antialiased`}
      >
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
