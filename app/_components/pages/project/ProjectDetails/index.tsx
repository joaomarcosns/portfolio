import Button from "@/app/_components/Button";
import Link from "@/app/_components/Link";
import SectionTitle from "@/app/_components/SectionTitle";
import TechBadge from "@/app/_components/TechBadge";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";

const ProjectDetails = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(https://media.graphassets.com/qSXcz2JdTMOPKlteRZKY) no-repeat center/cover`,
        }}
      />

      <SectionTitle
        subtitle="projetos"
        title="BookWise"
        className="items-center text-center sm:[&>h3]:text-4xl"
      />

      <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit porro
        aliquam illum asperiores eos necessitatibus minima mollitia odio
        eligendi, ipsum saepe eius beatae. Ab cum quibusdam harum dolorem
        recusandae!
      </p>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
        <TechBadge name="React" />
      </div>

      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        <a target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <TbBrandGithub size={20} />
            Repositório
          </Button>
        </a>

        <a target="_blank" rel="noreferrer">
          <Button className="min-w-[180px]">
            <FiGlobe size={20} />
            Projeto Online
          </Button>
        </a>
      </div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  );
};

export default ProjectDetails;
