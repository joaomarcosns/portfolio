"use client";

import NavItem from "../NavItem";
import { motion } from "framer-motion";
import { useLocale } from "@/app/_contexts/LocaleContext";
import { cn } from "@/app/_lib/utils";

const EN_DOMAIN = process.env.NEXT_PUBLIC_EN_DOMAIN;
const PT_DOMAIN = process.env.NEXT_PUBLIC_PT_DOMAIN;

const Header = () => {
  const { locale, setLocale, t } = useLocale();

  const handleLocaleChange = (newLocale: "en" | "pt") => {
    setLocale(newLocale);

    const targetDomain = newLocale === "pt" ? PT_DOMAIN : EN_DOMAIN;
    if (!targetDomain || typeof window === "undefined") return;

    if (window.location.hostname !== targetDomain) {
      const url = new URL(window.location.href);
      url.hostname = targetDomain;
      window.location.href = url.toString();
    }
  };

  const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: t.navProjects, href: "/projects" },
  ];

  return (
    <motion.header
      className="fixed top-0 z-10 flex h-24 w-full items-center justify-center border-b border-gray-800/60 bg-gray-900/75 backdrop-blur-md"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.href} />
          ))}
        </nav>

        <div className="flex items-center gap-1 text-sm font-medium">
          <button
            onClick={() => handleLocaleChange("en")}
            className={cn(
              "transition-colors",
              locale === "en" ? "text-white" : "text-gray-600 hover:text-gray-400",
            )}
          >
            EN
          </button>
          <span className="text-gray-700">/</span>
          <button
            onClick={() => handleLocaleChange("pt")}
            className={cn(
              "transition-colors",
              locale === "pt" ? "text-white" : "text-gray-600 hover:text-gray-400",
            )}
          >
            PT
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
