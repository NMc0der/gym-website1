import { Nunito, Roboto, Playfair_Display, Kanit } from "next/font/google";

export const nunito = Nunito({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
  variable: "--nunito-font",
});

export const roboto_init = Roboto({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-roboto",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--play",
});

export const kanit = Kanit({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--kanit",
});
