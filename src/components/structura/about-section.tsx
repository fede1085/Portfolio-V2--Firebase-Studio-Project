import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const images = [
    { src: "https://placehold.co/400x400.png", alt: "A picture of me working", aiHint: "designer working" },
    { src: "https://placehold.co/400x400.png", alt: "My workspace", aiHint: "modern workspace" },
    { src: "https://placehold.co/400x400.png", alt: "Inspiration board", aiHint: "inspiration moodboard" },
    { src: "https://placehold.co/400x400.png", alt: "A hobby of mine", aiHint: "painting canvas" },
  ];

  return (
    <section id="about-me" className="about-section py-20 lg:py-32" aria-labelledby="about-me-title">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="about__content">
            <h2 id="about-me-title" className="text-3xl lg:text-4xl font-bold mb-6 font-headline">
              That's me!
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              I'm a passionate product designer with a knack for creating intuitive and beautiful user experiences. I believe that great design is not just about aesthetics, but about solving real-world problems and making technology accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not pushing pixels, you can find me exploring nature, experimenting with new recipes, or getting lost in a good book.
            </p>
          </div>
          <div className="about__gallery">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-0">
                    <figure>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover aspect-square"
                        data-ai-hint={image.aiHint}
                      />
                       <figcaption className="sr-only">{image.alt}</figcaption>
                    </figure>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
