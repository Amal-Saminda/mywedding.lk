import type { Metadata } from "next";
import { fontDisplay, fontBody, fontSinhala } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyWedding.Lk — එන්න, වේදින්න ජීවිතය",
  description:
    "Sri Lanka's trusted matrimonial platform — verified profiles, respectful search, real families.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="si" className={`${fontDisplay.variable} ${fontBody.variable} ${fontSinhala.variable}`}>
      <body>{children}</body>
    </html>
  );
}
