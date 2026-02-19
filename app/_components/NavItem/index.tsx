"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../_lib/utils";

interface INavItem {
  label: string;
  href: string;
}

const NavItem = ({ label, href }: INavItem) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 font-sans font-medium text-gray-400 transition-colors hover:text-gray-200",
        isActive && "text-gray-50",
      )}
    >
      <span className="text-gray-600">$</span>
      {label}
    </Link>
  );
};

export default NavItem;
