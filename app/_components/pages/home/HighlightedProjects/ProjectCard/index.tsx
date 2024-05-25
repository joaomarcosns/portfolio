import Link from "@/app/_components/Link";
import TechBadge from "@/app/_components/TechBadge";
import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:gap-12">
      <div className="h-full w-full">
        <Image
          width={420}
          height={304}
          src="https://media.graphassets.com/qSXcz2JdTMOPKlteRZKY"
          alt="teste"
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 text-lg font-medium text-gray-50">
          <Image
            width={20}
            height={20}
            alt=""
            src="/images/icons/project-title-icon.svg"
          />
          BookWise
        </h3>

        <p className="my-6 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          debitis mollitia error, eum saepe expedita voluptatibus nobis iure sed
          culpa voluptatem voluptas dignissimos necessitatibus explicabo nulla
          adipisci dolore quisquam! Neque.
        </p>

        <div className="mb-8 flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[350px]">
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
          <TechBadge name="React" />
        </div>

        <Link href="/projects/book-wise">
          Ver projeto
          <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
