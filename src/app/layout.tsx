import type { Metadata } from "next";
import "./globals.css";
import { specialElite } from "./font";
import { cn } from "./utils";

export const metadata: Metadata = {
  title: "Hagai & Putri Wedding Invitation",
  description: "An Invitation for our beloved guests to the beginning of Hagai & Putri lifetime journey",
  metadataBase: new URL('https://eunikeputri.hagairaja.tech'),
  openGraph: {
    title: 'Hagai & Putri Wedding Invitation',
    description: 'An Invitation for our beloved guests to the beginning of Hagai & Putri lifetime journey',
    url: 'https://eunikeputri.hagairaja.tech',
    siteName: 'eunikeputri.hagairaja.tech',
    images: [
      {
        url: '/images/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
        alt: 'Hagai & Putri',
      },
      {
        url: '/images/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Hagai & Putri',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          specialElite.className,
          "flex items-center justify-center w-screen min-h-screen"
        )}
      >
        {children}
      </body>
      <link rel="shortcut icon" href="/favicon.ico" />
    </html>
  );
}
