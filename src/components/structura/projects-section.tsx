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
    <section id="projects" className="py-20 lg:py-32 bg-[#111111] text-white" aria-labelledby="projects-title">
      <div className="container mx-auto px-8">
        <div className="flex justify-between items-center mb-12">
            <div>
                <p className="text-accent font-semibold mb-2">PROJECTS</p>
                <h2 id="projects-title" className="text-3xl lg:text-4xl font-bold">
                    I bring results. <br /> My clients are proof.
                </h2>
            </div>
          <Button asChild variant="outline" size="lg" className="hidden md:inline-flex text-white border-white hover:bg-accent hover:text-white hover:border-accent font-bold">
              <Link href="#">View all projects</Link>
          </Button>
        </div>
        
        <Carousel 
            opts={{ align: "start", loop: true }}
            className="w-full"
        >
            <CarouselContent className="-ml-4">
                {projects.map((project) => (
                    <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                         <div className="py-12">
                            <ProjectCard
                                title={project.title}
                                tag={project.tag}
                                image={project.image}
                                url={project.url}
                                aiHint={project.aiHint}
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
             <div className="hidden md:flex absolute -top-4 right-0 items-center gap-2">
                <CarouselPrevious variant="outline" size="icon" className="static text-white bg-transparent border-white hover:bg-accent hover:text-white hover:border-accent" />
                <CarouselNext variant="outline" size="icon" className="static text-white bg-transparent border-white hover:bg-accent hover:text-white hover:border-accent" />
            </div>
        </Carousel>

        <div className="text-center mt-8 md:hidden">
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-accent hover:text-white hover:border-primary font-bold">
                <Link href="#">View all projects</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
