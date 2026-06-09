import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aphrodite International Hotel | Luxury Hotel in Addis Ababa",
  description:
    "Aphrodite International Hotel - A four-star luxury hotel in the heart of Addis Ababa, Ethiopia. Walking distance from UNECA & African Union. Serving for Extraordinary Expectations.",
  keywords: [
    "Aphrodite Hotel",
    "Addis Ababa Hotel",
    "Ethiopia Luxury Hotel",
    "UNECA Hotel",
    "Conference Hotel Addis",
  ],
  icons: {
    icon: "/images/hotel-exterior.png",
  },
  openGraph: {
    title: "Aphrodite International Hotel",
    description:
      "Serving for Extraordinary Expectations - Four-star luxury hotel in Addis Ababa",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
