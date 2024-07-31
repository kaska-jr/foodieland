import type { Metadata } from "next";
import { Inter, Lobster } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";
import UiProvider from "./components/UiProvider";

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
        <UiProvider>
          <Navbar />
          {children}
          <Footer />
        </UiProvider>
      </body>
    </html>
  );
}
