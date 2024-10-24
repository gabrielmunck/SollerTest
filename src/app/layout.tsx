import type { Metadata } from "next";
import { Roboto } from 'next/font/google';
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Soller - Get the Sun to Power Your Home",
  description: "Buzzvel Front End Test - Gabriel Munck",
  keywords: 'Soller, Energy Saving, Solar Panel, Solar Energy',
  openGraph: {
    title: 'Soller - Get the Sun to Power Your Home',
    description: 'Buzzvel Front End Test - Gabriel Munck',
    type: 'website',
    locale: 'pt_BR',
    images: ['@/assets/opengraphImage.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-lt-installed="true">
      <body
        className={`${roboto.variable} font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
