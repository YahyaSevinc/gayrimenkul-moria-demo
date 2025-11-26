import HeroSlider from "./components/HeroSlider";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <AboutSection />
      <ProjectsSection /> 
      
      <div className="h-20"></div> 
    </main>
  );
}