import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer/inde";

const firaCode = Fira_Code({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={firaCode.variable}>
      <body>
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
