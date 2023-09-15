import {
  Poppins as FontDisplay,
  Noto_Sans_TC as FontBody,
} from "next/font/google";

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

export const fontBody = FontBody({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-body",
});
