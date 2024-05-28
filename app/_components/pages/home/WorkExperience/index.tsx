import SectionTitle from "@/app/_components/SectionTitle";
import ExperienceItem from "./ExperienceItem";

const WorkExperience = () => {
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
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
};

export default WorkExperience;
