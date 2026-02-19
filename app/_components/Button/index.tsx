import { cn } from "@/app/_lib/utils";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-gray-900 transition-all hover:bg-gray-200 disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
