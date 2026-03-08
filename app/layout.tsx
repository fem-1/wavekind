import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Wavekind — Breathwork & Conscious Living",
  description:
    "Breathwork, movement, and intentional practices for those seeking deeper connection. Wavekind guides you home to yourself.",
  keywords: ["breathwork", "wellness", "conscious living", "meditation", "breathwork studio"],
  openGraph: {
    title: "Wavekind — Breathwork & Conscious Living",
    description:
      "Breathwork, movement, and intentional practices for those seeking deeper connection.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} ${dmMono.variable} font-sans antialiased bg-cream text-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
