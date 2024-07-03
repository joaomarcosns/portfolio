import Link from "@/app/_components/Link";
import ProjectCard from "./ProjectCard";
import { Project } from "@/app/_types/projects";

type ProjectsListProps = {
  projects: Project[];
};

const ProjectsList = ({ projects }: ProjectsListProps) => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      {projects.map((project, i) => (
        <div key={i}>
          <Link href={`/projects/${project.slug}`}>
            <ProjectCard project={project} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProjectsList;
