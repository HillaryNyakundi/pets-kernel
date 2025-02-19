import { Poppins, Redressed } from "next/font/google";
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const redressed = Redressed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
