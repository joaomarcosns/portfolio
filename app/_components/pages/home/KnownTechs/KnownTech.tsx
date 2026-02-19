"use client";

import { CMSIcon } from "@/app/_components/CmsIcon";
import { KnownTech as IKnownTech } from "@/app/_types/projects";
import { getRelativeTimeString } from "@/app/_utils/get-relative-time";
import { useLocale } from "@/app/_contexts/LocaleContext";

interface IKnownTechProps {
  tech: IKnownTech;
}

const KnownTech = ({ tech }: IKnownTechProps) => {
  const { locale, t } = useLocale();
  const language = locale === "pt" ? "pt-BR" : "en-US";

  const relativeTime = getRelativeTimeString(new Date(tech.startDate), language)
    .replace("há", "")
    .replace("ago", "")
    .trim();

  return (
    <div className="flex flex-col gap-2 rounded-lg border border-gray-700/50 bg-gray-800/40 p-6 text-gray-400 transition-all hover:border-gray-500 hover:bg-gray-800/60 hover:text-white">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <span>{relativeTime} {t.yearsOfExperience}</span>
    </div>
  );
};

export default KnownTech;
