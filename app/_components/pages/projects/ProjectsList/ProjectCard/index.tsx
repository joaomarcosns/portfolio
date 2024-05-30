import Image from "next/image";

const ProjectCard = () => {
  return (
    <div className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-gray-800 bg-gray-800 opacity-70 transition-all hover:border-emerald-500 hover:opacity-100">
      <div className="h-48 w-full overflow-hidden">
        <Image
          width={380}
          height={200}
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
          alt={`Thumbnail do projeto`}
          src="https://media.graphassets.com/qSXcz2JdTMOPKlteRZKY"
          unoptimized
        />
      </div>

      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition-all group-hover:text-emerald-500">
          BookWise
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
          quisquam voluptatibus dignissimos eligendi rem iusto veritatis error
          ducimus dolorem molestias. Tempora voluptate quasi delectus qui,
          molestiae saepe! Sunt, tenetur optio!
        </p>

        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          Reack, Reack, Reack, Reack, Reack
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
