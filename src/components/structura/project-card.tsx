import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  tag: string;
  image: string;
  url: string;
  aiHint: string;
};

export default function ProjectCard({ title, tag, image, url, aiHint }: ProjectCardProps) {
  return (
    <div className="project-card group">
        <div className="relative mb-[-40px]">
            <figure className="relative block h-[300px] w-full">
                <Image
                    src={image}
                    alt={`Screenshot of ${title}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-cover"
                    data-ai-hint={aiHint}
                />
                 <figcaption className="sr-only">{`Screenshot of ${title}`}</figcaption>
            </figure>
            <div className="p-6 bg-white text-black relative z-10">
                <p className="font-bold text-sm uppercase tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] via-[#FF00B8] to-[#5F00FF]">
                    {tag}
                </p>
                <h3 className="text-2xl font-bold text-primary mb-3">
                    {title}
                </h3>
                <Link href={url} className="inline-flex items-center font-semibold text-black group-hover:underline">
                    View Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </div>
        </div>
    </div>
  );
}
