import { CMSIcon } from "@/app/_components/CmsIcon";
import { KnownTech as IKnownTech } from "@/app/_types/projects";
import { getRelativeTimeString } from "@/app/_utils/get-relative-time";

interface IKnownTechProps {
  tech: IKnownTech;
}

const KnownTech = ({ tech }: IKnownTechProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    "pt-BR",
  ).replace("há", "");
  return (
    <div className="rounded-lg, flex flex-col gap-2 bg-gray-600/20 p-6 text-gray-500 transition-all hover:bg-gray-600/30 hover:text-emerald-500">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        <CMSIcon icon={tech.iconSvg} />
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  );
};

export default KnownTech;
