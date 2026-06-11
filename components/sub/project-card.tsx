import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tech?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tech,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="skill-card-wrapper block"
    >
      <div className="skill-card-inner !p-0 flex flex-col h-full">
        <div className="relative overflow-hidden rounded-t-[15px]">
          <Image
            src={src}
            alt={title}
            width={600}
            height={300}
            className="w-full h-[180px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Gradient overlay at bottom of image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,0,20,0.95)] via-transparent to-transparent" />
        </div>

        <div className="relative p-4 flex flex-col flex-1 z-10">
          <h3 className="text-[15px] font-semibold text-white leading-tight mb-2">
            {title}
          </h3>
          <p className="text-gray-400 text-[12.5px] leading-[1.7] mb-3 flex-1 line-clamp-3">
            {description}
          </p>
          {tech && (
            <div className="pt-2.5 border-t border-[rgba(112,66,248,0.12)]">
              <span className="text-[11px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Tech:{" "}
              </span>
              <span className="text-[11px] text-gray-500">{tech}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
