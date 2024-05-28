import TechBadge from "@/app/_components/TechBadge";
import Image from "next/image";

const ExperienceItem = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      {/* Icons and line */}
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            src="https://media.graphassets.com/qSXcz2JdTMOPKlteRZKY"
            alt="Logo da empresa"
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      {/* Content */}
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href="https://www.linkedin.com/company/fluxxer"
            target="_blank"
            className="text-gray-500 transition-colors hover:text-emerald-500"
          >
            @ Fluxxer
          </a>
          <h4 className="text-gray-300">Desenvolvedor Full-Stack</h4>

          <span className="text-gray-500">
            out 2022 • O momento • (1 ano e 7 meses)
          </span>

          <p className="text-gray-400">
            Desenvolvimento e manutenção de interfaces utilizando React, Next,
            Tailwind, Typescript e Figma. Para o planejamento dos sprints, é
            utilizado o Jira.
          </p>
        </div>
        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competências
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
