// components/Header.tsx

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    // DIŞ KUTU: Arkaplan rengini ve gölgeyi tutar, boydan boya uzanır.
    <div className="w-full bg-white shadow-sm border-b border-gray-100">
      
      {/* İÇ KUTU (CONTAINER): İçeriği sınırlar ve ortalar */}
      <header className="w-full max-w-[1280px] mx-auto h-24 flex items-center justify-between px-4">
        
        {/* SOL TARAF - LOGO */}
        <Link href="/">
          <h1 className="text-4xl font-medium text-primary tracking-wide">
            LOGO
          </h1>
        </Link>

        {/* ORTA KISIM - NAVİGASYON */}
        <nav className="hidden md:flex gap-10">
          <Link href="/">
            <h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">
              Anasayfa
            </h4>
          </Link>
          <Link href="/hakkimizda">
            <h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">
              Hakkımızda
            </h4>
          </Link>
          <Link href="/gayrimenkuller">
            <h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">
              Gayrimenküller
            </h4>
          </Link>
          <Link href="/iletisim">
            <h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">
              İletişim
            </h4>
          </Link>
        </nav>

        {/* SAĞ TARAF - BUTON */}
        <div>
          <Link 
            href="/iletisim" 
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-orange-200"
          >
            İletişim
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;