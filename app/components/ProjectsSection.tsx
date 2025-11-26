// components/ProjectsSection.tsx

"use client";

import React, { useState } from "react";

// Proje Verileri (Burayı dilediğin gibi çoğaltıp değiştirebilirsin)
const projects = [
  {
    id: 0,
    title: "İstanbul, Pendik",
    price: "$2,500,000",
    features: "Okyanus manzarası, emmeli mutfak, akıllı ev entegrasyonu, İtalyan mermer iç mekanlar",
    details: "5 Yatak Odası | 3 Banyo",
    image: "/project-1.jpg",
  },
  {
    id: 1,
    title: "İzmir, Çeşme",
    price: "$3,200,000",
    features: "Özel plaj, sonsuzluk havuzu, geniş bahçe, modern mimari",
    details: "6 Yatak Odası | 4 Banyo",
    image: "/project-2.jpg",
  },
  {
    id: 2,
    title: "Muğla, Bodrum",
    price: "$4,100,000",
    features: "Taş mimari, panoramik deniz manzarası, özel iskele",
    details: "8 Yatak Odası | 6 Banyo",
    image: "/project-3.jpg",
  },
];

const ProjectsSection = () => {
  // Varsayılan olarak ilk proje (0. index) açık gelir
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col gap-12">
        
        {/* --- BAŞLIK ALANI --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Sol Üst Başlık: H3 Regular */}
          <h3 className="text-2xl md:text-4xl font-normal text-[#2D2D2D] max-w-xl leading-tight">
  Müşterilerimiz için Özel Dizayn Edilmiş Birbirinden Eşsiz Projelerimiz
</h3>

          {/* Sağ Üst Alt Başlık: H4 Thin */}
          <h4 className="text-xl md:text-2xl font-thin text-[#2D2D2D]">
            En iyi çözümler için bize ulaşabilirsiniz
          </h4>
        </div>

        {/* --- GALERİ ALANI (ACCORDION) --- */}
        {/* Mobile'da alt alta (h-auto), Masaüstünde yan yana ve sabit yükseklik (h-[600px]) */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
          
          {projects.map((project) => (
            <div
              key={project.id}
              // Mouse üzerine gelince activeId'yi değiştiriyoruz
              onMouseEnter={() => setActiveId(project.id)}
              // --- ANİMASYON MANTIĞI ---
              // Eğer bu kart aktifse: flex-[3] (Geniş yer kapla)
              // Değilse: flex-[1] (Dar yer kapla)
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out bg-gray-200
                ${activeId === project.id ? "flex-[10] md:flex-[3]" : "flex-[2] md:flex-[1]"}
                h-[400px] md:h-auto
              `}
            >
              {/* Arkaplan Resmi */}
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                {/* Karartma (Sadece yazının okunması için alttan gradient) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* --- İÇERİK YAZILARI --- */}
              {/* Sadece kart aktifse (genişse) görünür */}
              <div 
                className={`absolute bottom-0 left-0 w-full p-8 text-white flex flex-col justify-end transition-opacity duration-500 delay-200
                  ${activeId === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 hidden md:flex"}
                `}
              >
                
                {/* Üst Satır: Yer ve Fiyat */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/30 pb-4 mb-4">
                  {/* H3 Regular */}
                  <h3 className="text-2xl md:text-3xl font-normal md:whitespace-nowrap">
  {project.title}
</h3>
                  {/* H3 Regular (Fiyat için de aynısını kullandım uyumlu olsun diye) */}
                  <h3 className="text-3xl font-normal">
                    {project.price}
                  </h3>
                </div>

                {/* Alt Satır: Özellikler ve Detaylar */}
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  {/* H5 Regular */}
                  <h5 className="text-sm font-normal max-w-md leading-relaxed text-gray-200">
                    {project.features}
                  </h5>
                  {/* H5 Regular */}
                  <h5 className="text-sm font-normal text-right whitespace-nowrap">
                    {project.details}
                  </h5>
                </div>

              </div>

              {/* KAPALI KART İÇİN DİKEY YAZI (Opsiyonel Şıklık) */}
              {/* Kart kapalıyken sadece başlığı dikey gösterir */}
              <div 
                 className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
                   ${activeId !== project.id ? "opacity-100 delay-300" : "opacity-0"}
                 `}
              >
                <h3 className="hidden md:block text-2xl font-normal text-white -rotate-90 whitespace-nowrap tracking-widest uppercase">
                  {project.title.split(",")[0]} {/* Sadece Şehir ismini göster */}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;