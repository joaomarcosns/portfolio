import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Locale } from "./translations";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function getLocalizedContent<T>(
  locale: Locale,
  enValue: T,
  ptValue: T | null | undefined,
): T {
  return locale === "pt" && ptValue != null ? ptValue : enValue;
}
