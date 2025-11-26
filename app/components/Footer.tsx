import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer 
      className="w-full relative bg-cover bg-center bg-no-repeat min-h-screen flex flex-col"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/60 z-0"></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 py-8 flex flex-col h-screen">
        
        <div className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-7xl font-medium text-white mb-6 md:mb-8">
  Harika Eviniz <br className="hidden md:block" /> Şimdiden Hazır!
</h1>
          
<h4 className="text-base md:text-2xl font-medium text-[#F1FDFF] max-w-2xl mb-8 md:mb-12 leading-relaxed px-4">
  Tek yapmanız gereken en kısa sürede bize ulaşmak ve istediklerinizi bize aktarmanız.
</h4>
          <Link 
            href="/iletisim" 
            className="bg-white text-[#2D2D2D] px-12 py-5 rounded-full font-medium text-lg flex items-center gap-3 hover:bg-gray-100 transition-colors shadow-2xl"
          >
            Bize Ulaşın <span className="text-xl">→</span>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row items-center border-t border-white/20 pt-8 gap-8 md:gap-0 mt-auto">
          
          <nav className="flex gap-6 md:flex-1 md:justify-start">
            <Link href="/iletisim" className="text-white text-sm font-bold hover:text-primary transition-colors">
              <h5>İletişim</h5>
            </Link>
            <Link href="/gizlilik" className="text-white text-sm font-bold hover:text-primary transition-colors">
              <h5>Gizlilik Politikası</h5>
            </Link>
            <Link href="/cerez" className="text-white text-sm font-bold hover:text-primary transition-colors">
              <h5>Çerez Politikası</h5>
            </Link>
          </nav>

          <div className="shrink-0">
            <Link href="/">
              <h1 className="text-4xl font-medium text-primary tracking-wide">
                LOGO
              </h1>
            </Link>
          </div>

          <div className="text-white text-sm font-bold opacity-80 md:flex-1 md:flex md:justify-end">
            <h5>Copyright © Tüm Hakları Saklıdır.</h5>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;