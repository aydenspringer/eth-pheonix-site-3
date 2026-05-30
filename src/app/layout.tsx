import "@/styles/globals.css";

import { type Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";

export const metadata: Metadata = {
  title: "ETH Phoenix — Ethereum, AI & Film Festival | Phoenix, AZ 2026",
  description:
    "Ethereum hackathon, AI film festival, and startup pitch competition — Phoenix, AZ, Sept 25–27, 2026. Get early access to ETH Phoenix.",
  openGraph: {
    title: "ETH Phoenix: Where Ethereum, AI & Film Converge",
    description:
      "Three days in Phoenix. One hackathon, one film festival, one pitch competition. Builders, creators, and investors — September 25–27, 2026.",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto-serif",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`dark ${notoSans.variable} ${notoSerif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
