import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative flex flex-col overflow-hidden rounded-xl border border-[#2A0E61] bg-[#0c011c] shadow-md transition-transform duration-300 hover:scale-[1.03]"
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover rounded-t-xl"
        />
      </div>

      <div className="flex flex-col justify-between p-4 h-[220px]">
        <h1 className="text-xl font-semibold text-white mb-2">{title}</h1>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </Link>
  );
};
