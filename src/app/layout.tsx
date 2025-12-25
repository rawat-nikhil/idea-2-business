import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikhil Rawat | Software Engineer",
  description:
    "Turning Ideas into Businesses - Full-Stack Software Engineers specializing in high-performance microservices and cloud architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        <BackgroundEffects />
        {children}
      </body>
    </html>
  );
}
