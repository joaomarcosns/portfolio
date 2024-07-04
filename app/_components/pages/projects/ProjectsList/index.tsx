"use client";

import Link from "@/app/_components/Link";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/_types/projects";
import { fadeUpAnimation } from "@/app/_lib/animations";
import { motion } from "framer-motion";
type ProjectsListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          {...fadeUpAnimation}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </motion.div>
      ))}
    </section>
  );
};

export default ProjectsList;
