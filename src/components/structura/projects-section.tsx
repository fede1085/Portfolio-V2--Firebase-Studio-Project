import Link from "next/link";
import { projects as mockProjects } from "@/lib/data";
import ProjectCard from "./project-card";
import { Button } from "../ui/button";

export default function ProjectsSection() {
  const projects = mockProjects;

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#111111] text-white" aria-labelledby="projects-title">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
          <h2 id="projects-title" className="text-3xl lg:text-4xl font-bold">
            My Projects
          </h2>
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
        <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-primary hover:text-white hover:border-primary font-bold">
                <Link href="#">View all projects</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
