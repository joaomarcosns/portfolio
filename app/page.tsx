import HeroSection from "./_components/pages/home/HeroSection";
import HighlightedProjects from "./_components/pages/home/HighlightedProjects";
import KnownTechs from "./_components/pages/home/KnownTechs";
import WorkExperience from "./_components/pages/home/WorkExperience";

const Home = () => {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProjects />
      <WorkExperience />
    </>
  );
};

export default Home;
