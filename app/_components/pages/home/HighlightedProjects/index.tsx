import HorizontalDivider from "@/app/_components/Divider/Horizontal";
import SectionTitle from "@/app/_components/SectionTitle";
import ProjectCard from "./ProjectCard";
import Link from "@/app/_components/Link";
import { HiArrowNarrowRight } from "react-icons/hi";

const HighlightedProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaques" subtitle="Destaques" />
      <HorizontalDivider />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="/projects" className="inline-flex">
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HighlightedProjects;
