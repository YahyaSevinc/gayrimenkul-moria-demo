// app/gayrimenkuller/page.tsx

import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // Dropdown ikonu için

export const metadata = {
  title: "Gayrimenkuller | Emlak Projesi",
  description: "Öne çıkan projelerimiz ve portföyümüz.",
};

// Örnek Veri (Bunu ileride veritabanından çekeceksin)
const properties = [
  {
    id: 1,
    location: "İstanbul / Maltepe",
    title: "Maltepe Konakları Müstakil Ev",
    image: "/prop-1.jpg",
  },
  {
    id: 2,
    location: "İzmir / Çeşme",
    title: "Ege Mavisi Villaları",
    image: "/prop-1.jpg",
  },
  {
    id: 3,
    location: "Muğla / Bodrum",
    title: "Yalıkavak Taş Evler",
    image: "/prop-1.jpg",
  },
  {
    id: 4,
    location: "İstanbul / Beykoz",
    title: "Orman Manzaralı Lüks Daire",
    image: "/prop-1.jpg",
  },
  {
    id: 5,
    location: "Antalya / Kaş",
    title: "Akdeniz Sonsuzluk Projesi",
    image: "/prop-1.jpg",
  },
  {
    id: 6,
    location: "Bursa / Nilüfer",
    title: "Modern Şehir Rezidans",
    image: "/prop-1.jpg",
  },
];

export default function GayrimenkullerPage() {
  return (
    <main className="w-full bg-white min-h-screen pb-20">
      
      {/* 1. HEADER BÖLÜMÜ */}
      <Breadcrumb 
        title="Gayrimenküller" 
        breadcrumbTitle="Gayrimenküller"
        image="/breadcrumb.jpg" // Aynı header görselini kullanabilirsin
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 mt-16 md:mt-24">
        
        {/* 2. FİLTRELEME VE BAŞLIK ALANI */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 border-b border-gray-200 pb-8">
          
          {/* Sol: Başlık */}
          <h1 className="text-3xl md:text-4xl font-normal text-[#2D2D2D]">
            Öne Çıkan Projeler
          </h1>

          {/* Sağ: Filtreler */}
          <div className="flex flex-col gap-2">
            <span className="text-sm text-gray-500 font-medium ml-1">Filtreler:</span>
            
            <div className="flex flex-wrap gap-4">
              {/* İl Seçimi */}
              <div className="relative group min-w-[160px]">
                <button className="w-full bg-[#EAEAEA] text-[#2D2D2D] px-4 py-3 rounded-lg text-sm flex items-center justify-between hover:bg-gray-200 transition-colors">
                  İl Seçiniz
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* İlçe Seçimi */}
              <div className="relative group min-w-[160px]">
                <button className="w-full bg-[#EAEAEA] text-[#2D2D2D] px-4 py-3 rounded-lg text-sm flex items-center justify-between hover:bg-gray-200 transition-colors">
                  İlçe Seçiniz
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>

              {/* Proje Tipi */}
              <div className="relative group min-w-[160px]">
                <button className="w-full bg-[#EAEAEA] text-[#2D2D2D] px-4 py-3 rounded-lg text-sm flex items-center justify-between hover:bg-gray-200 transition-colors">
                  Proje Tipi
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* 3. GAYRİMENKUL KARTLARI (GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          
          {properties.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col gap-4">
              
              {/* RESİM ALANI */}
              {/* aspect-square: Kare olmasını sağlar. */}
              <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* --- KARARTMA EFEKTİ --- */}
                {/* Normalde var (bg-black/20), Hover yapınca yok olur (group-hover:bg-transparent) */}
                <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-transparent"></div>
              </div>

              {/* YAZI ALANI */}
              <div className="flex flex-col gap-1">
                {/* Lokasyon: İnce ve Gri */}
                <span className="text-[#747474] font-light text-sm md:text-base">
                  {item.location}
                </span>
                
                {/* Başlık: Orta Kalınlık ve Koyu */}
                <h3 className="text-[#2D2D2D] font-medium text-lg md:text-xl group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </main>
  );
}