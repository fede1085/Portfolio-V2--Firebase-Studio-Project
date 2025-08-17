"use client"
import Link from "next/link";
import { projects as mockProjects } from "@/lib/data";
import ProjectCard from "./project-card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function ProjectsSection() {
  const projects = mockProjects;

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#111111] text-white" aria-labelledby="projects-title">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 id="projects-title" className="text-3xl lg:text-5xl font-bold leading-tight">
                I bring results. <br /> My clients are proof.
            </h2>
          <Button asChild size="lg" className="mt-4 md:mt-0 bg-black text-white font-bold rounded-md px-6 py-4 text-base hover-gradient-border">
              <Link href="#">
                View all projects
                <span className="gradient-underline"></span>
              </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    tag={project.tag}
                    image={project.image}
                    url={project.url}
                    aiHint={project.aiHint}
                />
            ))}
        </div>

        <div className="text-center mt-12 md:hidden">
            <Button asChild size="lg" className="bg-black text-white font-bold rounded-md px-6 py-4 text-base hover-gradient-border">
                <Link href="#">
                  View all projects
                  <span className="gradient-underline"></span>
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
