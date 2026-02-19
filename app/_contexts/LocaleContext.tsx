"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import { Locale, translations } from "../_lib/translations";

type LocaleContextType = {
  locale: Locale;
  setLocale: Dispatch<SetStateAction<Locale>>;
  t: (typeof translations)[Locale];
};

const LocaleContext = createContext<LocaleContextType>({
  locale: "en",
  setLocale: () => { },
  t: translations.en,
});

const EN_DOMAIN = process.env.NEXT_PUBLIC_EN_DOMAIN;
const PT_DOMAIN = process.env.NEXT_PUBLIC_PT_DOMAIN;

const getLocaleFromHost = (host: string): Locale | null => {
  if (PT_DOMAIN && host === PT_DOMAIN) return "pt";
  if (EN_DOMAIN && host === EN_DOMAIN) return "en";
  return null;
};

export const LocaleProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const hostLocale = getLocaleFromHost(window.location.hostname);
    if (hostLocale) {
      setLocaleState(hostLocale);
      localStorage.setItem("locale", hostLocale);
      return;
    }

    const stored = localStorage.getItem("locale") as Locale;
    if (stored === "en" || stored === "pt") setLocaleState(stored);
  }, []);

  const setLocale: Dispatch<SetStateAction<Locale>> = (value) => {
    setLocaleState((prevLocale) => {
      const nextLocale = typeof value === "function" ? value(prevLocale) : value;
      localStorage.setItem("locale", nextLocale);
      return nextLocale;
    });
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
