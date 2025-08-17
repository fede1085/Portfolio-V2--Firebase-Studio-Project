"use client"
import Link from "next/link";
import { projects as mockProjects } from "@/lib/data";
import ProjectCard from "./project-card";
import { Button } from "../ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsSection() {
  const projects = mockProjects;

  return (
    <section id="projects" className="py-20 lg:py-32 bg-background relative z-10" aria-labelledby="projects-title">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 id="projects-title" className="text-3xl lg:text-5xl font-bold leading-tight text-primary">
                I bring results. <br /> My clients are proof.
            </h2>
          <Button asChild size="lg" className="mt-4 md:mt-0 bg-black text-white font-bold rounded-md px-6 py-4 text-base hover-gradient-border">
              <Link href="#">
                View all projects
                <span className="gradient-underline"></span>
              </Link>
          </Button>
        </div>
      </div>
        
      <div className="pl-8 lg:pl-0 lg:container lg:mx-auto lg:px-8 relative">
        <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
        >
            <CarouselContent className="-ml-4">
            {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <ProjectCard
                        title={project.title}
                        tag={project.tag}
                        image={project.image}
                        url={project.url}
                        aiHint={project.aiHint}
                    />
                </CarouselItem>
            ))}
            </CarouselContent>
            <div className="flex items-center gap-2 mt-8 justify-start lg:container lg:mx-auto lg:px-8">
                <CarouselPrevious className="static w-10 h-10 rounded-none bg-white border-black text-black hover:bg-gray-200" />
                <CarouselNext className="static w-10 h-10 rounded-none bg-white border-black text-black hover:bg-gray-200" />
            </div>
        </Carousel>
      </div>
    </section>
  );
}
