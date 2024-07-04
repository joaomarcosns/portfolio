"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-lg bg-emerald-900/80 px-3 py-1 text-sm text-emerald-400"
      {...props}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
