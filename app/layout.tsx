// app/layout.tsx

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header"; 
import Footer from "./components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gayrimenkul Demo",
  description: "Gayrimenkul sitesi projesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={rubik.className}>
        <Header />
        
        {/* Sayfa içeriği burada, minimum yükseklik verelim ki footer aşağı itsin */}
        <main className="min-h-screen">
            {children}
        </main>
        
        <Footer /> {/* <-- 2. Footer'ı en alta ekle */}
      </body>
    </html>
  );
}