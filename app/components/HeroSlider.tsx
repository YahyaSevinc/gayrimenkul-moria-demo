// components/HeroSlider.tsx

"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

// --- SLIDE VERİLERİ ---
const slides = [
  {
    id: 1,
    image: "/slider-1.jpg",
    title: "Hayatınız İçin En İyi Deneyimleri, En Büyük Heyecanları Sizin İçin Yaratıyoruz!",
    description: "Daha detaylı bilgi için sitemizi gezebilir sektörümüzle ilgili gelişmeleri takip edebilir firmamız ile ilgili daha fazla bilgi alıp bizi daha iyi tanıyabilirsiniz.",
    buttonText: "Daha Fazla Bilgi Al!",
    buttonLink: "/hakkimizda",
  },
  {
    id: 2,
    image: "/slider-1.jpg", // Resmi değiştirmeyi unutma
    title: "Hayallerinizdeki Eve Ulaşmak Artık Çok Daha Kolay ve Güvenilir.",
    description: "Uzman ekibimizle size en uygun gayrimenkulü bulmak için buradayız. Hemen keşfetmeye başlayın.",
    buttonText: "Portföyü İncele",
    buttonLink: "/gayrimenkuller",
  },
];

const SLIDE_DURATION = 5000;

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, nextSlide]);

  const slide = slides[currentSlide];

  return (
    // --- ANA KAPTEYNER ---
    <section 
      className="relative w-full h-[calc(100vh-6rem)] bg-cover bg-center flex items-center transition-all duration-700 ease-in-out"
      style={{ backgroundImage: `url('${slide.image}')` }}
    >
      {/* Karartma Katmanı */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* --- İÇERİK KUTUSU (Container) --- */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 h-full flex flex-col justify-center">
        
        {/* YAZI ALANI AYARLARI:
           - pt-10 md:pt-0: Mobilde üstten biraz boşluk, masaüstünde gerek yok.
           - w-full md:max-w-5xl: Masaüstünde genişlik sınırı.
        */}
        <div className="w-full md:max-w-5xl pt-10 md:pt-0">
          
          {/* Başlık: Mobilde 3xl, Masaüstünde 6xl */}
          <h1 className="text-3xl md:text-6xl font-medium text-white leading-tight mb-4 md:mb-6">
            {slide.title}
          </h1>
          
          {/* Açıklama: Mobilde base (küçük), Masaüstünde xl (büyük) */}
          <p className="text-base md:text-xl text-[#F1FDFF] leading-relaxed mb-8 md:mb-10 font-normal">
            {slide.description}
          </p>
          
          {/* Buton: Mobilde daha küçük padding */}
          <Link 
            href={slide.buttonLink} 
            className="inline-block bg-primary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg text-sm md:text-base"
          >
            {slide.buttonText}
          </Link>
        </div>

        {/* OKLAR (Butonlar):
           - Mobilde w-10 h-10 (daha küçük)
           - Masaüstünde w-14 h-14 (büyük)
        */}
        <div className="absolute bottom-8 left-4 md:left-0 flex items-center gap-4 z-20">
          
          {/* Sol Ok */}
          <button onClick={prevSlide} className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>

          {/* Sağ Ok + Animasyon */}
          <button onClick={nextSlide} className="relative w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/30 flex items-center justify-center text-white group">
            
            {/* SVG Animasyonu */}
            <svg className="absolute inset-0 -rotate-90 transform" width="100%" height="100%" viewBox="0 0 56 56" key={currentSlide}>
              <circle cx="28" cy="28" r="27" fill="transparent" stroke="white" strokeWidth="2" className="opacity-20" />
              <circle cx="28" cy="28" r="27" fill="transparent" stroke="white" strokeWidth="2" className="animate-progress opacity-100" strokeDasharray="170" strokeDashoffset="170" />
            </svg>
            
            {/* İkon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 relative z-10 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSlider;