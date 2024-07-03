import { ProjectSection } from "@/app/_types/projects";
import Image from "next/image";

type ProjectSectionsProps = {
  sections: ProjectSection[];
};

const ProjectSections = ({ sections }: ProjectSectionsProps) => {
  return (
    <section className="container my-12 flex flex-col gap-8 md:my-32 md:gap-32">
      {sections.map((section) => (
        <div
          key={section.title}
          className="flex flex-col items-center gap-6 md:gap-12"
        >
          <h2 className="text-2xl font-medium text-gray-300 md:text-3xl">
            {section.title}
          </h2>
          <Image
            width={1080}
            height={672}
            className="aspect-auto w-full rounded-lg object-cover"
            alt={`Imagem da sessão ${section.title}`}
            src={section.image.url}
            unoptimized
          />
        </div>
      ))}
    </section>
  );
};

export default ProjectSections;
