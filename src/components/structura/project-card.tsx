import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type ProjectCardProps = {
  title: string;
  tag: string;
  image: string;
  url: string;
  aiHint: string;
};

export default function ProjectCard({ title, tag, image, url, aiHint }: ProjectCardProps) {
  return (
    <Card className="project-card group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link href={url}>
        <CardContent className="p-0">
          <figure className="relative">
            <Image
              src={image}
              alt={`Screenshot of ${title}`}
              width={600}
              height={400}
              className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={aiHint}
            />
            <figcaption className="sr-only">{`Screenshot of ${title}`}</figcaption>
          </figure>
          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <Badge variant="secondary">{tag}</Badge>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
            </div>
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
