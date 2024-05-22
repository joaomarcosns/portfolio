import Image from "next/image";
import TechBadge from "../../../TechBadge";
import Button from "../../../Button";
import { HiArrowNarrowRight } from "react-icons/hi";
import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

const CONST_CONTACTS = [
  {
    url: "https://github.com/joaomarcosns",
    icon: <TbBrandGithub />,
  },
  {
    url: "https://www.linkedin.com/in/joaomarcosns/",
    icon: <TbBrandLinkedin />,
  },
];

const HeroSection = () => {
  return (
    <section className="flex w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:h-[755px] lg:pb-[110px]">
      <div className="container flex flex-col-reverse items-start justify-between lg:flex-row">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-sans text-emerald-400">Olá, meu nome é</p>
          <h2 className="mt-2 text-4xl font-semibold">
            João Marcos Neves da Silva
          </h2>

          <p className="my-6 text-sm text-gray-400 sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            possimus ratione quasi vero labore, ut magnam quis quibusdam totam
            expedita libero neque sapiente quas ipsa minus consequatur dicta
            recusandae pariatur.
          </p>

          <div className="flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]">
            {Array.from({ length: 7 }).map((_, index) => (
              <TechBadge name="NEXT JS" key={index} />
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-5 lg:mt-10">
            <Button className="w-max shadow-button">
              Entre em contato
              <HiArrowNarrowRight size={18} />
            </Button>

            <div className="flex h-20 items-center gap-3 text-2xl text-gray-600">
              {CONST_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="transition-colors hover:text-gray-100"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil de João Marcos Neves da Silva"
          className="mb-6 h-[300px] w-[300px] rounded-lg object-cover shadow-2xl lg:mb-0 lg:h-[404px] lg:w-[420px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
