"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <>
      
      <div 
        className={`fixed top-0 left-0 right-0 w-full bg-white shadow-sm border-b border-gray-100 z-50 transition-transform duration-300 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <header className="w-full max-w-[1280px] mx-auto h-24 flex items-center justify-between px-4">
          
          <Link href="/">
            <h1 className="text-3xl md:text-4xl font-medium text-primary tracking-wide">
              LOGO
            </h1>
          </Link>

          <nav className="hidden md:flex gap-10">
            <Link href="/"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">Anasayfa</h4></Link>
            <Link href="/hakkimizda"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">Hakkımızda</h4></Link>
            <Link href="/gayrimenkuller"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">Gayrimenküller</h4></Link>
            <Link href="/iletisim"><h4 className="text-secondary hover:text-primary transition-colors font-normal text-lg">İletişim</h4></Link>
          </nav>

          <div className="hidden md:block">
            <Link href="/iletisim" className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-orange-200">
              İletişim
            </Link>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary p-2 focus:outline-none"
          >
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
    </>
  );
};

export default Header;