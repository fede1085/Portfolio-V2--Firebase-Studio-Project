import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <div className="project-card overflow-visible transition-transform duration-300 ease-in-out hover:-translate-y-2">
        <figure className="relative">
          <Image
            src={image}
            alt={`Screenshot of ${title}`}
            width={600}
            height={400}
            className="w-full h-auto object-cover aspect-[3/2] rounded-xl"
            data-ai-hint={aiHint}
          />
          <figcaption className="sr-only">{`Screenshot of ${title}`}</figcaption>
        </figure>
        <div className="p-6 bg-white text-black rounded-xl shadow-lg relative -mt-8 mx-4 transition-shadow duration-300 group-hover:shadow-primary/20 group-hover:shadow-2xl">
          <div className="flex justify-between items-center mb-2">
            <Badge variant="secondary">{tag}</Badge>
            <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:rotate-45 group-hover:text-primary" />
          </div>
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}
