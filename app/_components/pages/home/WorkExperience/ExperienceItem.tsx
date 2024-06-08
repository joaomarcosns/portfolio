import { RichText } from "@/app/_components/RichText";
import TechBadge from "@/app/_components/TechBadge";
import { WorkExperience } from "@/app/_types/work-experience";
import Image from "next/image";
import { differenceInMonths, differenceInYears, format } from "date-fns";
import { ptBR } from "date-fns/locale";

type ExperienceItemProps = {
  experience: WorkExperience;
};

const ExperienceItem = ({ experience }: ExperienceItemProps) => {
  const {
    endDate,
    companyName,
    companyLogo,
    companyUrl,
    description,
    role,
    technologies,
  } = experience;

  const startDate = new Date(experience.startDate);

  const formattedStartDate = format(startDate, "MMM yyyy", { locale: ptBR });
  const formattedEndDate = endDate
    ? format(new Date(endDate), "MMM yyyy", { locale: ptBR })
    : "O momento";

  const end = endDate ? new Date(endDate) : new Date();

  const months = differenceInMonths(end, startDate);
  const years = differenceInYears(end, startDate);
  const monthsRemaining = months % 12;

  const formattedDuration =
    years > 0
      ? `${years} ano${years > 1 ? "s" : ""}${
          monthsRemaining > 0
            ? ` e ${monthsRemaining} mes${monthsRemaining > 1 ? "es" : ""}`
            : ""
        }`
      : `${months} mes${months > 1 ? "es" : ""}`;

  return (
    <div className="grid grid-cols-[40px,1fr] gap-4 md:gap-10">
      {/* Icons and line */}
      <div className="flex flex-col items-center gap-4">
        <div className="rounded-full border border-gray-500 p-0.5">
          <Image
            width={40}
            height={40}
            src={companyLogo.url}
            alt={`Logo da empresa ${companyName}`}
            className="rounded-full"
          />
        </div>
        <div className="h-full w-[1px] bg-gray-800" />
      </div>
      {/* Content */}
      <div>
        <div className="flex flex-col gap-2 text-sm sm:text-base">
          <a
            href={companyUrl}
            target="_blank"
            className="text-gray-500 transition-colors hover:text-emerald-500"
          >
            @ {companyName}
          </a>
          <h4 className="text-gray-300">{role}</h4>

          <span className="text-gray-500">
            {formattedStartDate} • {formattedEndDate} • ({formattedDuration})
          </span>

          <div className="text-gray-400">
            <RichText content={description.raw} />
          </div>
        </div>
        <p className="mb-3 mt-6 text-sm font-semibold text-gray-400">
          Competências
        </p>
        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          {technologies.map((tech) => (
            <TechBadge
              key={`experience-${companyName}-tech-${tech.name}`}
              name={tech.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
