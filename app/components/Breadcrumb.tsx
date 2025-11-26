// components/PageHeader.tsx

import Link from "next/link";
import React from "react";

interface PageHeaderProps {
  title: string;       // Sayfanın büyük başlığı (Hakkımızda)
  image: string;       // Arkaplan resmi
  breadcrumbTitle: string; // Breadcrumb'daki aktif sayfa ismi
}

const PageHeader = ({ title, image, breadcrumbTitle }: PageHeaderProps) => {
  return (
    // DIŞ KUTU: Max genişlik ve ortalama
    <div className="w-full max-w-[1280px] mx-auto px-4 mt-8 md:mt-12">
      
      {/* HEADER KARTI */}
      {/* REVİZE 1: items-center -> items-end (Yazıyı aşağı ittik) */}
      {/* REVİZE 2: rounded değerlerini azalttık */}
      {/* REVİZE 3: pb-10 md:pb-16 ekledik (En alttan biraz yukarıda dursun diye) */}
      <div 
        className="relative w-full h-[250px] md:h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden flex items-end pb-10 md:pb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        
        {/* --- TURUNCU LINEAR GRADIENT --- */}
        {/* REVİZE 4: Opaklığı azalttım (80 -> 60 ve 20 -> 5) */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/5 z-0"></div>

        {/* İÇERİK */}
        <div className="relative z-10 px-6 md:px-20 w-full flex flex-col gap-1 md:gap-2">
          
          {/* BREADCRUMB (Yol Haritası) */}
          <div className="flex items-center gap-2 text-white">
            {/* Anasayfa: H5 Thin */}
            <Link href="/" className="text-sm md:text-base font-thin hover:underline opacity-90">
              Anasayfa
            </Link>
            
            <span className="text-sm md:text-base font-thin opacity-70">/</span>
            
            {/* Aktif Sayfa: H5 Regular */}
            <span className="text-sm md:text-base font-normal">
              {breadcrumbTitle}
            </span>
          </div>

          {/* ANA BAŞLIK: H1 */}
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-wide">
            {title}
          </h1>

        </div>
      </div>
    </div>
  );
};

export default PageHeader;