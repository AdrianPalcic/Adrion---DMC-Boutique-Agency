import localFont from "next/font/local";

export const cormorantGaramond = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Bold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-BoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/CormorantGaramond-MediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/CormorantGaramond-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-SemiBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-SemiBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
});

export const ovo = localFont({
  src: [
    {
      path: "../public/fonts/Ovo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ovo",
});

export const pinyon = localFont({
  src: [
    {
      path: "../public/fonts/PinyonScript-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-pinyon",
});
