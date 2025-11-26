// components/AboutSection.tsx

"use client";

import React, { useState, useEffect, useRef } from "react";

// --- 1. GARANTİLİ GÖRÜNÜRLÜK KONTROLÜ ---
function useOnScreen(ref: React.RefObject<HTMLElement | null>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Ekrana %10'u girdiği an tetikle
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // Bir kere görünce işlemi bitir
        }
      },
      { threshold: 0.1 } 
    );

    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
}

// --- 2. SAYAÇ BİLEŞENİ (requestAnimationFrame ile) ---
const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useOnScreen(ref); // Özel hook'u çağırıyoruz

  useEffect(() => {
    if (!isVisible) return; // Görünür değilse başlama

    let startTimestamp: number | null = null;
    
    // Tarayıcının kendi animasyon döngüsünü kullanıyoruz
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Sayıyı hesapla
      setCount(Math.floor(progress * end));
      
      // Süre bitmediyse döngüye devam et
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);

  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="text-primary font-bold text-4xl md:text-5xl block mb-2 min-h-[48px]">
      {count}{suffix}
    </span>
  );
};

// --- 3. YAZI EFEKTİ (Daha Belirgin Geçiş) ---
const RevealText = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useOnScreen(ref);
  
    return (
      <h3 // Semantik olarak da h3 yaptık (SEO için iyi olur)
        ref={ref}
        // DEĞİŞİKLİKLER:
        // font-light -> font-normal (Regular istedin)
        // text-xl -> text-2xl md:text-3xl (H3 boyutu istedin)
        className={`transition-all duration-1000 ease-in-out text-2xl md:text-3xl font-normal leading-relaxed
          ${isVisible 
            ? "text-[#2D2D2D] opacity-100 blur-0 translate-y-0" 
            : "text-gray-400 opacity-30 blur-[1px] translate-y-4"} 
        `}
      >
        {children}
      </h3>
    );
  };
// --- 4. ANA BİLEŞEN ---
const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20"> {/* overflow-hidden kaldırdım, bazen observer'ı bozar */}
      <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col gap-12 md:gap-24">
        
        {/* BÖLÜM 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 order-2 md:order-1">
            <RevealText>
              Daha detaylı bilgi için sitemizi gezebilir 
              sektörümüzle ilgili gelişmeleri takip edebilir 
              firmamız ile ilgili daha fazla bilgi alıp bizi daha 
              iyi tanıyabilirsiniz.
            </RevealText>
          </div>
          <div className="flex-1 order-1 md:order-2 w-full h-[250px] md:h-[400px] relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl group">
             <img 
               src="/about-1.jpg" 
               alt="Bina Detayı" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
             />
          </div>
        </div>

        {/* BÖLÜM 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <div className="flex-1 w-full h-[300px] md:h-[400px] relative rounded-[3rem] overflow-hidden shadow-2xl group">
             <img 
               src="/about-2.jpg" 
               alt="Plaza Detayı" 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
             />
          </div>

          <div className="flex-1 flex flex-col gap-12">
            <RevealText>
              Daha detaylı bilgi için sitemizi gezebilir 
              sektörümüzle ilgili gelişmeleri takip edebilir 
              firmamız ile ilgili daha fazla bilgi alıp bizi 
              daha iyi tanıyabilirsiniz.
            </RevealText>

            <div className="flex items-center justify-between ">
              {/* İstatistik 1 */}
              <div className="text-center md:text-left">
                <AnimatedNumber end={100} suffix=" %" />
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider font-medium">Müşteri Güvencesi</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-300"></div>

              {/* İstatistik 2 */}
              <div className="text-center md:text-left">
                <AnimatedNumber end={24} suffix=" +" />
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider font-medium">Farklı Hizmet</span>
              </div>
              <div className="w-[1px] h-12 bg-gray-300"></div>

              {/* İstatistik 3 */}
              <div className="text-center md:text-left">
                <AnimatedNumber end={18} suffix=" +" />
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-wider font-medium">'den Fazla Şube</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;