import Link from "@/app/_components/Link";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <section className="container grid grid-cols-1 gap-x-4 gap-y-6 py-32 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
      <Link href="/projects/book-wise">
        <ProjectCard />
      </Link>
    </section>
  );
};

export default ProjectsList;
