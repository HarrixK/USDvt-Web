import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});
const libre = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-libre"
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("inter loader:", inter);
    console.log("libre loader:", libre);
    if (typeof window !== "undefined") {
      console.log("--font-inter var:", getComputedStyle(document.documentElement).getPropertyValue("--font-inter"));
      console.log("--font-libre var:", getComputedStyle(document.documentElement).getPropertyValue("--font-libre"));
      document.fonts.ready
        .then(fonts => {
          console.log("Loaded FontFaces:", fonts);
          return fonts;
        })
        .catch(err => {
          console.error("Font loading failed:", err);
        });
    }
  }, []);
  return (
    <main className={`${inter.variable} ${libre.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;