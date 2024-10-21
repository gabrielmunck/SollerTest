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
  description: "Buzzvel Front End Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
