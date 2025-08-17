import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const trustedByLogos = [
    { name: "Logoipsum 1", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 2", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 3", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 4", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
    { name: "Logoipsum 5", src: "https://placehold.co/100x40.png", aiHint: "company logo" },
  ];

  return (
    <section id="hero" className="hero-section bg-background">
      <div className="container mx-auto px-4 min-h-screen flex items-center pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero__content text-center lg:text-left">
            <h1 className="hero__title text-4xl lg:text-6xl font-extrabold mb-6 leading-tight font-headline">
              I design products that delight and inspire people.
            </h1>
            <p className="hero__subtitle text-xl text-muted-foreground mb-8">
              Hi, I'm a Product Designer based in Creativity City. I create user-friendly interfaces for fast-growing startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg">
                <Link href="#contact">Book a call</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resume.pdf" download>Download CV</Link>
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-sm text-muted-foreground mb-4">Trusted by:</p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 items-center justify-center lg:justify-start">
                {trustedByLogos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.src}
                    alt={logo.name}
                    width={100}
                    height={40}
                    className="opacity-50 hover:opacity-100 transition-opacity"
                    data-ai-hint={logo.aiHint}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero__image-wrapper flex justify-center">
            <figure className="relative">
              <Image
                src="https://placehold.co/500x600.png"
                alt="Portrait of the designer"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
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
