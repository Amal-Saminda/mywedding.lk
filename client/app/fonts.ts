import { Bodoni_Moda, Karla, Noto_Sans_Sinhala } from "next/font/google";

// Display — high-contrast editorial serif for headlines, invitation-card feel
export const fontDisplay = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

// Body / UI — clean grotesque for controls, labels, paragraphs
export const fontBody = Karla({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Sinhala headline / copy support
export const fontSinhala = Noto_Sans_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sinhala",
  display: "swap",
});
