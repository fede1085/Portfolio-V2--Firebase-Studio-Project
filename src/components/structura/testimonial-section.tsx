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

export default function TestimonialSection() {
  // TODO: Replace mock data with data from Firestore.
  // In a client component, you'd fetch data in a `useEffect` hook or use a data fetching library.
  const testimonials = mockTestimonials;

  return (
    <section id="testimonial" className="testimonial-section py-20 lg:py-32 bg-secondary/30" aria-labelledby="testimonial-title">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id}>
                <div className="testimonial-item text-center">
                  <figure>
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar of ${testimonial.authorName}`}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-6 shadow-lg"
                      data-ai-hint={testimonial.aiHint}
                    />
                    <blockquote className="text-2xl lg:text-3xl font-medium mb-6 max-w-3xl mx-auto">
                      <p>“{testimonial.quote}”</p>
                    </blockquote>
                    <figcaption>
                      <div className="font-bold text-lg">{testimonial.authorName}</div>
                      <div className="text-muted-foreground">{testimonial.authorRole}</div>
                    </figcaption>
                  </figure>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:inline-flex" />
          <CarouselNext className="hidden sm:inline-flex" />
        </Carousel>
      </div>
    </section>
  );
}
