"use client";

import { motion } from "framer-motion";
import { ComponentProps } from "react";

type TechBadgeProps = ComponentProps<typeof motion.span> & {
  name: string;
};

const TechBadge = ({ name, ...props }: TechBadgeProps) => {
  return (
    <motion.span
      className="rounded-lg border border-gray-700 bg-gray-800/80 px-3 py-1 text-sm text-gray-300"
      {...props}
    >
      {name}
    </motion.span>
  );
};

export default TechBadge;
