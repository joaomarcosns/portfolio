import SectionTitle from "@/app/_components/SectionTitle";
import { TbBrandNextjs } from "react-icons/tb";
import KnownTech from "./KnownTech";

const KnownTechs = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competência" title="Conhecimentos" />

      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <KnownTech
            key={index}
            tech={{
              icon: <TbBrandNextjs />,
              name: "Nextjs",
              starDate: "2024-01-01",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
