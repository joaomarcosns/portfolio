"use client";

import Link from "@/app/_components/Link";
import SectionTitle from "@/app/_components/SectionTitle";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { useLocale } from "@/app/_contexts/LocaleContext";

const PageIntroduction = () => {
  const { t } = useLocale();

  return (
    <section className="flex h-[450px] w-full flex-col items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat px-2 lg:h-[630px]">
      <SectionTitle
        subtitle={t.projectsSubtitle}
        title={t.projectsTitle}
        className="items-center text-center [&>h3]:text-4xl"
      />

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.6 }}
      >
        <p className="my-6 max-w-[640px] text-center text-sm text-gray-400 sm:text-base">
          {t.projectsDescription}
        </p>
        <Link href="/">
          <HiArrowNarrowLeft size={20} />
          {t.backToHome}
        </Link>
      </motion.div>
    </section>
  );
};

export default PageIntroduction;
