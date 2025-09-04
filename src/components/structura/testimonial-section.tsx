"use client";

import Image from "next/image";
import { testimonials as mockTestimonials } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function TestimonialSection() {
  const testimonials = mockTestimonials;

  return (
    <Section id="testimonial" aria-labelledby="testimonial-title">
      <Container>
        <div className="mb-12 max-w-2xl">
            <p className="text-accent font-semibold mb-2">TESTIMONIALS</p>
            <h2 id="testimonial-title" className="text-3xl lg:text-4xl font-bold">
                Word on the street
            </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="testimonial-item grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <figure>
                     <Image
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.authorName}`}
                      width={400}
                      height={400}
                      className="rounded-lg shadow-lg object-cover w-full aspect-square filter grayscale"
                      data-ai-hint={testimonial.aiHint}
                    />
                    <figcaption className="sr-only">Portrait of {testimonial.authorName}</figcaption>
                  </figure>
                  <blockquote className="relative">
                      <p className="text-6xl text-muted-foreground/30 absolute -top-12 left-0">“</p>
                      <p className="text-2xl lg:text-3xl font-medium italic mb-6">
                        {testimonial.quote}
                      </p>
                      <cite>
                        <div className="font-bold text-lg">{testimonial.authorName}</div>
                        <div className="text-muted-foreground">{testimonial.authorRole}</div>
                      </cite>
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
           <div className="flex md:absolute md:right-0 md:-top-4 items-center gap-2 mt-8 md:mt-0">
            <CarouselPrevious variant="outline" size="icon" className="static" />
            <CarouselNext variant="outline" size="icon" className="static" />
          </div>
        </Carousel>
      </Container>
    </Section>
  );
}
