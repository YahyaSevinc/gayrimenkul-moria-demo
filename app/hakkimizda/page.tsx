// app/hakkimizda/page.tsx

import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutContent from "../components/AboutContent"
import MissionVision from "../components/MissionVision";

export const metadata = {
  title: "Hakkımızda | Emlak Projesi",
};

export default function HakkimizdaPage() {
  return (
    <main className="w-full bg-white min-h-screen pb-20">
      
      <Breadcrumb 
        title="Hakkımızda" 
        breadcrumbTitle="Hakkımızda"
        image="/breadcrumb.jpg" 
      />

      <AboutContent /> 
      
      {/* Misyon & Vizyon Bölümü */}
      <MissionVision />

    </main>
  );
}