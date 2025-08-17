import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects as mockProjects } from "@/lib/data";
import ProjectCard from "./project-card";

export default function ProjectsSection() {
  // TODO: Replace mock data with data from Firestore.
  // This is a Server Component, so you can fetch data directly here.
  const projects = mockProjects;

  return (
    <section id="projects" className="projects-section py-20 lg:py-32" aria-labelledby="projects-title">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 id="projects-title" className="text-3xl lg:text-4xl font-bold font-headline">
            My Projects
          </h2>
          <Link href="#" className="text-primary hover:underline inline-flex items-center gap-2 group">
            View all projects
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
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
      </div>
    </section>
  );
}
