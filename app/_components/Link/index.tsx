import { cn } from "@/app/_lib/utils";
import NextLink from "next/link";
import { ComponentProps } from "react";

type ILinkProps = ComponentProps<typeof NextLink>;

const Link = ({ className, children, ...props }: ILinkProps) => {
  return (
    <NextLink
      className={cn(
        "flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-emerald-500",
        className,
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
