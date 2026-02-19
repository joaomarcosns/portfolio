"use client";

import HorizontalDivider from "@/app/_components/Divider/Horizontal";
import SectionTitle from "@/app/_components/SectionTitle";
import ProjectCard from "./ProjectCard";
import Link from "@/app/_components/Link";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Project } from "@/app/_types/projects";
import { useLocale } from "@/app/_contexts/LocaleContext";

type HighlightedProjectsProps = {
  projects: Project[];
};

const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  const { t } = useLocale();

  return (
    <section className="container py-16">
      <SectionTitle
        title={t.highlightedProjectsTitle}
        subtitle={t.highlightedProjectsSubtitle}
      />
      <HorizontalDivider />

      <div>
        {projects?.map((project) => (
          <div key={project.slug}>
            <ProjectCard project={project} />
            <HorizontalDivider className="my-16" />
          </div>
        ))}
        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">{t.interested}</span>
          <Link href="/projects" className="inline-flex">
            {t.seeAll}
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HighlightedProjects;
