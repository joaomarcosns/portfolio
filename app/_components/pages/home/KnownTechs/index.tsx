import SectionTitle from "@/app/_components/SectionTitle";
import KnownTech from "./KnownTech";
import { KnownTech as IKnownTech } from "@/app/_types/projects";

type KnownTechsProps = {
  techs: IKnownTech[];
};

const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competência" title="Conhecimentos" />

      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs?.map((tech) => <KnownTech key={tech.name} tech={tech} />)}
      </div>
    </section>
  );
};

export default KnownTechs;
