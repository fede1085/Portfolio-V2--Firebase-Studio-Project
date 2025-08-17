"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function HeroSection() {
  const trustedByLogos = [
    { name: "Logoipsum 1", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 2", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 3", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 4", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 5", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 6", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
  ];

  return (
    <section id="hero" className="bg-background pt-24">
      <div className="container mx-auto px-8 min-h-[calc(100vh-6rem)] flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero__content text-center lg:text-left">
             <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              I design products <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">that delight</span> and inspire people.
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hi, I'm a Product Designer based in Creativity City. I create user-friendly interfaces for fast-growing startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="font-bold bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground">
                <Link href="#contact">Book a call</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-bold border-primary/50 text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent">
                <Link href="/resume.pdf" download>Download CV</Link>
              </Button>
            </div>
          </div>

          <div className="hero__image-wrapper flex justify-center lg:justify-end">
            <figure className="relative">
              <Image
                src="https://placehold.co/400x400.png"
                alt="Portrait of the designer"
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

        <div className="mt-16 lg:mt-24">
            <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[ Autoplay({ delay: 3000, stopOnInteraction: false }) ]}
                className="w-full"
            >
                <CarouselContent className="-ml-8">
                    {trustedByLogos.map((logo, index) => (
                    <CarouselItem key={index} className="pl-8 basis-1/2 md:basis-1/4 lg:basis-1/6">
                        <div className="flex items-center justify-center h-12">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                width={100}
                                height={40}
                                className="opacity-50 hover:opacity-100 transition-opacity filter grayscale"
                                data-ai-hint={logo.aiHint}
                            />
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
      </div>
    </section>
  );
}
