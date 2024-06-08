import SectionTitle from "@/app/_components/SectionTitle";
import ExperienceItem from "./ExperienceItem";
import { WorkExperience as IWorkExperience } from "@/app/_types/work-experience";

type WorkExperienceProps = {
  experiences: IWorkExperience[];
};

const WorkExperience = ({ experiences }: WorkExperienceProps) => {
  return (
    <section className="container flex flex-col gap-10 py-16 md:flex-row md:gap-4 lg:gap-16">
      <div className="mx-w-[420px]">
        <SectionTitle
          title="Experiência profissional"
          subtitle="experiências"
        />

        <p className="mt-6 text-gray-400">
          Estou sempre em busca de novos desafios e projetos emocionantes. Vamos
          trabalhar juntos para criar soluções inovadoras e impactantes para o
          sucesso da sua empresa!
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.companyName}
            experience={experience}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
