import {
  Nunito,
  Roboto,
  Playfair_Display,
  Kanit,
  Bebas_Neue,
  Caveat,
  Comfortaa,
  Fugaz_One,
  Knewave,
} from "next/font/google";

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

export const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--bebas",
});

export const caveat = Caveat({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--caveat",
});

export const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--comfortaa",
});

export const fugaz_one = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--fugaz",
});

export const knewave = Knewave({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--knewave",
});
