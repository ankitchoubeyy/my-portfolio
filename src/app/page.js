import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import AchivementsSection from "./components/AchivementsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen py-6 px-12 bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AchivementsSection />
        <AboutSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
