"use client";
import Button from "@/app/_components/Button";
import Link from "@/app/_components/Link";
import { RichText } from "@/app/_components/RichText";
import SectionTitle from "@/app/_components/SectionTitle";
import TechBadge from "@/app/_components/TechBadge";
import { Project } from "@/app/_types/projects";
import { FiGlobe } from "react-icons/fi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { TbBrandGithub } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "@/app/_lib/animations";
import { useLocale } from "@/app/_contexts/LocaleContext";
import { getLocalizedContent } from "@/app/_lib/utils";

type ProjectDetailsProps = {
  project: Project;
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { locale, t } = useLocale();
  const localizedDescription = getLocalizedContent(
    locale,
    project.description,
    project.descriptionPt,
  );

  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-6 py-24 pb-10 sm:min-h-[750px] sm:pb-24">
      <motion.div
        className="absolute inset-0 z-[-1]"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${project.pageThumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <SectionTitle
        subtitle={t.projectsSubtitle}
        title={project.title}
        className="items-center text-center sm:[&>h3]:text-4xl"
      />

      <motion.div
        className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base"
        {...fadeUpAnimation}
      >
        <RichText content={localizedDescription.raw} />
      </motion.div>

      <div className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {project.technologies.map((tech, i) => (
          <TechBadge
            name={tech.name}
            key={tech.name}
            {...techBadgeAnimation}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          />
        ))}
      </div>

      <motion.div
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4"
        {...fadeUpAnimation}
      >
        {project?.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <TbBrandGithub size={20} />
              {t.repository}
            </Button>
          </a>
        )}
        {project?.liveProjectUrl && (
          <a href={project.liveProjectUrl} target="_blank" rel="noreferrer">
            <Button className="min-w-[180px]">
              <FiGlobe size={20} />
              {t.liveProject}
            </Button>
          </a>
        )}
      </motion.div>

      <Link href="/projects">
        <HiArrowNarrowLeft size={20} />
        {t.backToProjects}
      </Link>
    </section>
  );
};

export default ProjectDetails;
