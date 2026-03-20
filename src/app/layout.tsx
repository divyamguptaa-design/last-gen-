import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://gen-5.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Gen-5 Wires & Cables | Reliable Wires for a Safer Tomorrow",
  description:
    "Gen-5 delivers fire resistant, durable, industrial-grade wires and cables for homes, buildings, and factories with trusted consultation and fast quote support.",
  keywords: [
    "Gen-5 wires",
    "fire resistant cables",
    "industrial wires",
    "house wiring cable",
    "electrical cable manufacturer",
  ],
  openGraph: {
    title: "Gen-5 Wires & Cables",
    description:
      "Reliable wires for a safer tomorrow with fire-resistant quality and trusted industrial performance.",
    url: siteUrl,
    siteName: "Gen-5",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Gen-5 industrial wires and cables",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gen-5 Wires & Cables",
    description:
      "Reliable wires for a safer tomorrow with fire-resistant quality and trusted industrial performance.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
