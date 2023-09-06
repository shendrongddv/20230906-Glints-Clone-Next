import "./globals.css";
import type { Metadata } from "next";
import {
  Poppins as FontDisplay,
  Noto_Sans_TC as FontBody,
} from "next/font/google";

import { cn } from "@/lib/utils";

const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const fontBody = FontBody({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Glints: Situs Lowongan Kerja Terbaik di Indonesia",
  description:
    "Temukan lowongan kerja dan karir impianmu di Glints. Bersama jutaan talenta terbaik dari berbagai negara di Asia Tenggara. Ayo cek sekarang juga!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen", fontDisplay.variable, fontBody.variable)}
      >
        {children}
      </body>
    </html>
  );
}
