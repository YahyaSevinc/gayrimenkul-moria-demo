"use client";

import React, { useState } from "react";

const projects = [
  {
    id: 0,
    title: "İstanbul, Pendik",
    price: "$2,500,000",
    features: "Okyanus manzarası, emmeli mutfak, akıllı ev entegrasyonu",
    details: "5 Yatak | 3 Banyo",
    image: "/project-1.jpg",
  },
  {
    id: 1,
    title: "İzmir, Çeşme",
    price: "$3,200,000",
    features: "Özel plaj, sonsuzluk havuzu, geniş bahçe, modern mimari",
    details: "6 Yatak | 4 Banyo",
    image: "/project-2.jpg",
  },
  {
    id: 2,
    title: "Muğla, Bodrum",
    price: "$4,100,000",
    features: "Taş mimari, panoramik deniz manzarası, özel iskele",
    details: "8 Yatak | 6 Banyo",
    image: "/project-3.jpg",
  },
];

const ProjectsSection = () => {
  const [activeId, setActiveId] = useState(0);

  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-2xl md:text-4xl font-normal text-[#2D2D2D] max-w-xl leading-tight">
             Müşterilerimiz için Özel Dizayn Edilmiş Birbirinden Eşsiz Projelerimiz
          </h3>
          <h4 className="text-xl md:text-2xl font-thin text-[#2D2D2D]">
            En iyi çözümler için bize ulaşabilirsiniz
          </h4>
        </div>

        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[600px]">
          
          {projects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setActiveId(project.id)}
              className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out bg-gray-200 w-full
                ${activeId === project.id ? "md:flex-[3]" : "md:flex-[1]"}
                h-[450px] md:h-auto 
              `}
            >
              <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              <div 
                className={`absolute bottom-0 left-0 w-full p-6 md:p-8 text-white flex flex-col justify-end transition-all duration-500 delay-200
                  opacity-100 translate-y-0
                  ${activeId === project.id 
                    ? "md:opacity-100 md:translate-y-0" 
                    : "md:opacity-0 md:translate-y-10"
                  }
                `}
              >
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-white/30 pb-4 mb-4">
                  <h3 className="text-2xl md:text-3xl font-normal md:whitespace-nowrap">
                    {project.title}
                  </h3>
                  <h3 className="text-2xl md:text-3xl font-normal">
                    {project.price}
                  </h3>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-2 md:gap-4">
                  <h5 className="text-sm font-normal max-w-md leading-relaxed text-gray-200">
                    {project.features}
                  </h5>
                  <h5 className="text-sm font-normal md:text-right whitespace-nowrap">
                    {project.details}
                  </h5>
                </div>
              </div>

              <div 
                 className={`hidden md:flex absolute inset-0 items-center justify-center transition-opacity duration-500
                   ${activeId !== project.id ? "opacity-100 delay-300" : "opacity-0"}
                 `}
              >
                <h3 className="text-2xl font-normal text-white -rotate-90 whitespace-nowrap tracking-widest uppercase">
                  {project.title.split(",")[0]}
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