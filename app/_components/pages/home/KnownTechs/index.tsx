"use client";

import SectionTitle from "@/app/_components/SectionTitle";
import KnownTech from "./KnownTech";
import { KnownTech as IKnownTech } from "@/app/_types/projects";
import { motion } from "framer-motion";

type KnownTechsProps = {
  techs: IKnownTech[];
};

const KnownTechs = ({ techs }: KnownTechsProps) => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="competências" title="Conhecimentos" />
      <div className="mt-[60px] grid w-full grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3">
        {techs?.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <KnownTech tech={tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KnownTechs;
