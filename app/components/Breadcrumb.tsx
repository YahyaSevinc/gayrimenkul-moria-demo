import Link from "next/link";
import React from "react";

interface PageHeaderProps {
  title: string;       
  image: string;       
  breadcrumbTitle: string; 
}

const PageHeader = ({ title, image, breadcrumbTitle }: PageHeaderProps) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 mt-8 md:mt-12">
      
      <div 
        className="relative w-full h-[250px] md:h-[400px] rounded-2xl md:rounded-[2rem] overflow-hidden flex items-end pb-10 md:pb-16 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      >
        
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-primary/5 z-0"></div>

        <div className="relative z-10 px-6 md:px-20 w-full flex flex-col gap-1 md:gap-2">
          
          <div className="flex items-center gap-2 text-white">
            <Link href="/" className="text-sm md:text-base font-thin hover:underline opacity-90">
              Anasayfa
            </Link>
            
            <span className="text-sm md:text-base font-thin opacity-70">/</span>
            
            <span className="text-sm md:text-base font-normal">
              {breadcrumbTitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-wide">
            {title}
          </h1>

        </div>
      </div>
    </div>
  );
};

export default PageHeader;