import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "./_components/Header";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer/inde";
import { Toaster } from "./_components/Toast";
import { BackToTop } from "./_components/BackToTop";
import { LocaleProvider } from "./_contexts/LocaleContext";

const firaCode = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | JMNS Dev",
  },
  icons: [
    {
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={firaCode.variable}>
      <body>
        <LocaleProvider>
          <Toaster />
          <BackToTop />
          <Header />
          {children}
          <ContactForm />
          <Footer />
          <Analytics />
        </LocaleProvider>
      </body>
    </html>
  );
}
