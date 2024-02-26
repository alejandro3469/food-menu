import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["100", "300", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cocina La Antigua",
  description: "Mariscos y gastronomia mexicana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
