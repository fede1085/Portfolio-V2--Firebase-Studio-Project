import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  tag: string;
  image: string;
  url: string;
  aiHint: string;
};

export default function ProjectCard({ title, tag, image, url, aiHint }: ProjectCardProps) {
  return (
    <Link href={url} className="group block">
      <div className="project-card overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1">
        <figure className="relative">
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover aspect-[4/3] rounded-t-xl"
            data-ai-hint={aiHint}
          />
          <figcaption className="sr-only">{`Screenshot of ${title}`}</figcaption>
        </figure>
        <div className="p-5 bg-white text-black rounded-b-xl shadow-lg relative transition-shadow duration-300 group-hover:shadow-primary/20 group-hover:shadow-xl -mt-12 mx-4">
            <Badge variant="secondary" className="bg-gray-200 text-gray-700">{tag}</Badge>
            <h3 className="text-xl font-bold mt-2 text-primary group-hover:text-accent transition-colors">
                {title}
            </h3>
        </div>
      </div>
    </Link>
  );
}
