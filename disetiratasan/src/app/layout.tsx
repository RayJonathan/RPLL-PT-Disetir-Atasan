import Navbar from '@/components/Utilities/Navbar';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Utilities/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Disetir Atasan",
  description: "Customize Your Car With Different Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
