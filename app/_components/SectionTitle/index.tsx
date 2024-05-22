import { cn } from "@/app/_lib/utils";

interface ISectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: ISectionTitleProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span className="font-sans text-sm font-semibold text-emerald-400">{`../${subtitle}`}</span>
      <h3 className="text-3xl font-medium">{title}</h3>
    </div>
  );
};

export default SectionTitle;
