// components/AboutContent.tsx

import React from "react";
import { Building2, Package, Users, Award } from "lucide-react"; // İkonlar

const AboutContent = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col gap-16">
        
        {/* --- ÜST KISIM (BAŞLIKLAR VE YAZI) --- */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-20">
          
          {/* SOL TARAF: Badge ve Başlık */}
          <div className="flex-1">
            {/* Badge (Hap şeklinde) */}
            <span className="inline-block border border-gray-300 rounded-full px-4 py-1 text-sm text-gray-500 mb-4">
              Gayrimenkül v1
            </span>
            {/* Başlık: H2 Regular */}
            <h2 className="text-3xl md:text-5xl font-normal text-[#2D2D2D] leading-tight">
              Gayrimenkül V1 Hakkında
            </h2>
          </div>

          {/* SAĞ TARAF: Açıklama Yazısı */}
          <div className="flex-1 ">
             {/* H6 Regular - Renk #747474 */}
            <p className="text-sm md:text-base text-[#747474] font-normal leading-relaxed md:max-w-xl md:ml-auto">
              Gayrimenkül V1 2016 yılında kurulmuş olup bulunduğu sektör için sayısız çözüm sayısız hizmet sunmuştur. 
              Her zaman müşteri memnuniyetini ön planda tutarak olabildiğince kullanıcı odaklı çözümler sunmuştur. 
              Gelecekte de aynı seviyede devam etmeyi hatta üstüne koymayı vizyon edinmiş bir firmayız.
            </p>
          </div>
        </div>

        {/* --- ALT KISIM (GRID KARTLAR) --- */}
        {/* CSS Grid: Mobilde 1 sütun, Masaüstünde 3 sütun */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* --- 1. SATIR SOL (GENİŞ) --- */}
          {/* col-span-2: 3 parçalık yerin 2'sini kapla */}
          <div className="group md:col-span-2 h-[350px] rounded-[2rem] bg-gradient-to-b from-[#FFCUA6] to-primary p-10 flex flex-col justify-between relative overflow-hidden transition-transform hover:scale-[1.01] duration-500">
             {/* Arkaplan Gradient Ayarı (Resimdeki gibi üstten aşağı hafif turuncudan koyuya) */}
             <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-primary"></div>
             
             {/* İkon (Siyah ve Büyük) */}
             <div className="relative z-10 flex justify-center pt-4">
                <Building2 className="w-24 h-24 text-black opacity-90 group-hover:-translate-y-2 transition-transform duration-500" />
             </div>

             {/* Yazılar */}
             <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-normal mb-3">Yolculuğumuz</h3>
                <h6 className="text-sm font-normal opacity-90 leading-relaxed max-w-2xl">
                   Gayrimenkül V1 2016 yılında kurulmuş olup bulunduğu sektör için sayısız çözüm sayısız hizmet sunmuştur. 
                   Her zaman müşteri memnuniyetini ön planda tutarak çözümler sunmuştur.
                </h6>
             </div>
          </div>

          {/* --- 1. SATIR SAĞ (DAR) --- */}
          {/* col-span-1: 3 parçalık yerin 1'ini kapla */}
          <div className="group md:col-span-1 h-[350px] rounded-[2rem] relative overflow-hidden p-10 flex flex-col justify-between transition-transform hover:scale-[1.01] duration-500">
             <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-primary"></div>
             
             <div className="relative z-10 flex justify-center pt-4">
                <Package className="w-24 h-24 text-black opacity-90 group-hover:-translate-y-2 transition-transform duration-500" />
             </div>

             <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-normal mb-3 leading-tight">Yüzlerce Proje Geliştirdik</h3>
                <h6 className="text-sm font-normal opacity-90 leading-relaxed">
                   Sektör için sayısız çözüm ve hizmet sunarak büyümeye devam ediyoruz.
                </h6>
             </div>
          </div>

          {/* --- 2. SATIR SOL (DAR) --- */}
          {/* Tam tersi: Önce dar olan */}
          <div className="group md:col-span-1 h-[350px] rounded-[2rem] relative overflow-hidden p-10 flex flex-col justify-between transition-transform hover:scale-[1.01] duration-500">
             <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-primary"></div>
             
             <div className="relative z-10 flex justify-center pt-4">
                <Award className="w-24 h-24 text-black opacity-90 group-hover:-translate-y-2 transition-transform duration-500" />
             </div>

             <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-normal mb-3 leading-tight">Yüzlerce Proje Geliştirdik</h3>
                 <h6 className="text-sm font-normal opacity-90 leading-relaxed">
                   Gelecekte de aynı seviyede devam etmeyi vizyon edindik.
                </h6>
             </div>
          </div>

          {/* --- 2. SATIR SAĞ (GENİŞ) --- */}
          {/* Sonra geniş olan */}
          <div className="group md:col-span-2 h-[350px] rounded-[2rem] relative overflow-hidden p-10 flex flex-col justify-between transition-transform hover:scale-[1.01] duration-500">
             <div className="absolute inset-0 bg-gradient-to-b from-orange-200 to-primary"></div>
             
             <div className="relative z-10 flex justify-center pt-4">
                <Users className="w-24 h-24 text-black opacity-90 group-hover:-translate-y-2 transition-transform duration-500" />
             </div>

             <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-normal mb-3">Yolculuğumuz</h3>
                <h6 className="text-sm font-normal opacity-90 leading-relaxed max-w-2xl">
                   Gayrimenkül V1 2016 yılında kurulmuş olup bulunduğu sektör için sayısız çözüm sayısız hizmet sunmuştur. 
                   Kullanıcı odaklı çözümlerimizle yanınızdayız.
                </h6>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutContent;