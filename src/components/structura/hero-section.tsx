"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="hero" className="bg-background pt-24">
      <div className="container mx-auto px-8 min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero__content text-center lg:text-left">
             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Business Technology Consultant — AI, Automation & Low-Code
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              I help non-technical teams turn manual work into simple, reliable workflows — fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" variant="cta">
                <Link href="#contact">Book a Call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold border-primary/50 text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <Link href="/cv/Federico-Mosqueira.pdf" download>Download CV</Link>
              </Button>
            </div>
            <div className="mt-8 text-center lg:text-left">
              <small className="text-muted-foreground">Based in Antwerp, Belgium. On-site & remote.</small>
            </div>
          </div>

          <div className="hero__image-wrapper flex justify-center lg:justify-end">
            <figure className="relative">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Federico Mosqueira portrait"
                width={400}
                height={400}
                className="rounded-full shadow-2xl object-cover"
                priority
                data-ai-hint="designer portrait"
              />
              <figcaption className="sr-only">A professional portrait of the portfolio owner.</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
