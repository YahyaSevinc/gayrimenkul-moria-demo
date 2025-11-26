// components/Header.tsx

"use client"; // State kullanacağımız için Client Component yaptık

import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menü açık mı kapalı mı?

  return (
    <div className="w-full bg-white shadow-sm border-b border-gray-100 relative z-50">
      <header className="w-full max-w-[1280px] mx-auto h-24 flex items-center justify-between px-4">
        
        {/* LOGO */}
        <Link href="/">
          <h1 className="text-3xl md:text-4xl font-medium text-primary tracking-wide">
            LOGO
          </h1>
        </Link>

        {/* --- MASAÜSTÜ MENÜ (md:flex - Mobilde Gizli) --- */}
        <nav className="hidden md:flex gap-10">
          <Link href="/"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">Anasayfa</h4></Link>
          <Link href="/hakkimizda"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">Hakkımızda</h4></Link>
          <Link href="/gayrimenkuller"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">Gayrimenküller</h4></Link>
          <Link href="/iletisim"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">İletişim</h4></Link>
        </nav>

        {/* --- MASAÜSTÜ BUTON (md:block - Mobilde Gizli) --- */}
        <div className="hidden md:block">
          <Link href="/iletisim" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-orange-200">
            İletişim
          </Link>
        </div>

        {/* --- MOBİL HAMBURGER BUTONU (md:hidden - Masaüstünde Gizli) --- */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-secondary p-2 focus:outline-none"
        >
          {/* İkon: Menü açıksa Çarpı, kapalıysa 3 Çizgi */}
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </header>

      {/* --- MOBİL MENÜ LİSTESİ (Açılır Kapanır Alan) --- */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-4 flex flex-col gap-6 animate-in slide-in-from-top-5">
           <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-secondary">Anasayfa</Link>
           <Link href="/hakkimizda" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-secondary">Hakkımızda</Link>
           <Link href="/gayrimenkuller" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-secondary">Gayrimenküller</Link>
           <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="text-xl font-medium text-secondary">İletişim</Link>
           
           <div className="pt-4 border-t border-gray-100">
            <Link href="/iletisim" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-primary text-white px-6 py-4 rounded-lg font-bold text-lg">
              İletişim Kur
            </Link>
           </div>
        </div>
      )}
    </div>
  );
};

export default Header;