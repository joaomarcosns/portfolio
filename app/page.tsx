import HeroSection from "./_components/pages/home/HeroSection";
import HighlightedProjects from "./_components/pages/home/HighlightedProjects";
import KnownTechs from "./_components/pages/home/KnownTechs";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
    </>
  );
};

export default Home;
