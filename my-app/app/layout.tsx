import type { Metadata } from "next";
import { cormorantGaramond, ovo } from "./fonts.js";
import "./globals.css";

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
        className={`${cormorantGaramond.variable} ${ovo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
