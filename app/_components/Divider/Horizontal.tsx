import { cn } from "@/app/_lib/utils";

interface IHorizontalDividerProps {
  className?: string;
}

const HorizontalDivider = ({ className }: IHorizontalDividerProps) => {
  return (
    <div className={cn("my-8 w-full border-b border-b-gray-800", className)} />
  );
};

export default HorizontalDivider;
