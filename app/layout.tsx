import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });
export const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Foodie land: The Only Website You'll Ever Need",
  description: "The Only Website You'll Ever Need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
