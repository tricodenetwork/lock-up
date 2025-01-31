import { Lexend, Quicksand } from "next/font/google";

const lexend = Lexend({ subsets: ["latin", "latin-ext", "vietnamese"] });
const sand = Quicksand({ subsets: ["latin", "latin-ext", "vietnamese"] });

export const useFonts = () => {
  return { lexend, sand };
};
