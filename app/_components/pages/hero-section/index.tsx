import Image from "next/image";
import TechBadge from "../../TechBadge";

const HeroSection = () => {
  return (
    <section className="flex h-[755px] w-full flex-col justify-end bg-hero-image bg-cover bg-center bg-no-repeat py-32 pb-10 sm:pb-32 lg:pb-[110px]">
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

          <div>Contato</div>
        </div>

        <Image
          width={420}
          height={404}
          src="/images/profile-pic.png"
          alt="Foto de perfil de João Marcos Neves da Silva"
        />
      </div>
    </section>
  );
};

export default HeroSection;
