import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/Footer";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gayrimenkul Demo",
  description: "Moria Yazılım Gayrimenkul Demo",
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
        
        <main className="min-h-screen pt-24">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}