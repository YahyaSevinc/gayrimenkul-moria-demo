"use client";

import React, { useState } from "react";
import Image from "next/image";

const MissionVision = () => {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const content = {
    mission: {
      image: "/mission.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque aliquet a praesent viverra magnis nullam etiam in. Molestie odio dui ipsum ipsum neque mattis est. Et viverra ut sit lectus aliquam egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque aliquet a praesent viverra magnis nullam etiam in. Molestie odio dui ipsum ipsum neque mattis est. Et viverra ut sit lectus aliquam egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque aliquet a praesent viverra magnis nullam etiam in. Molestie odio dui ipsum ipsum neque mattis est. Et viverra ut sit lectus aliquam egestas vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Natoque aliquet a praesent viverra magnis nullam etiam in. Molestie odio dui ipsum ipsum neque mattis est. Et viverra ut sit lectus aliquam egestas vel.",
    },
    vision: {
      image: "/vision.jpg",
      text: "Geleceği şekillendiren vizyonumuzla, sektörde öncü, yenilikçi ve sürdürülebilir çözümler sunarak dünya çapında tanınan bir marka olmayı hedefliyoruz. Teknolojiyi ve insan odaklı yaklaşımı birleştirerek, sadece bugünün değil yarının ihtiyaçlarına da cevap veren projeler üretiyoruz.",
    },
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        
        <div className="w-full rounded-[2rem] bg-gradient-to-br from-primary to-orange-500 p-4 md:p-5 flex flex-col md:flex-row gap-5 items-stretch shadow-xl">
          
          <div className="w-full md:w-[35%] relative h-[250px] md:h-auto rounded-[1.5rem] overflow-hidden bg-gray-100">
             <Image
               key={activeTab}
               src={content[activeTab].image}
               alt={activeTab}
               fill
               className="object-cover transition-opacity duration-500 animate-in fade-in"
             />
          </div>

          <div className="w-full md:w-[65%] bg-white rounded-[1.5rem] p-4 py-8 md:p-14 flex flex-col items-center justify-center text-center">

            <div className="flex items-center justify-center gap-2 md:gap-6 mb-6 md:mb-12 select-none w-full max-w-full overflow-hidden">
              
              <h4 
                onClick={() => setActiveTab("mission")}
                className={`text-sm md:text-2xl cursor-pointer transition-colors duration-300 whitespace-nowrap ${activeTab === "mission" ? "font-normal text-[#2D2D2D]" : "font-normal text-gray-300"}`}
              >
                Misyonumuz
              </h4>

              <div 
                onClick={() => setActiveTab(activeTab === "mission" ? "vision" : "mission")}
                className="w-12 md:w-16 h-6 md:h-7 rounded-full border border-gray-300 bg-white relative cursor-pointer flex items-center px-1 shadow-inner shrink-0"
              >
                <div 
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full shadow-md transform transition-all duration-300 ease-in-out
                    ${activeTab === "vision" ? "translate-x-6 md:translate-x-9 bg-primary" : "translate-x-0 bg-gray-300"}
                  `}
                ></div>
              </div>

              <h4 
                onClick={() => setActiveTab("vision")}
                className={`text-sm md:text-2xl cursor-pointer transition-colors duration-300 whitespace-nowrap ${activeTab === "vision" ? "font-normal text-[#2D2D2D]" : "font-normal text-gray-300"}`}
              >
                Vizyonumuz
              </h4>

            </div>

            <div key={activeTab} className="animate-in fade-in slide-in-from-bottom-2 duration-500 w-full px-2">
              <p className="text-[#555] font-normal leading-relaxed text-sm md:text-base text-justify md:text-center">
                {content[activeTab].text}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;