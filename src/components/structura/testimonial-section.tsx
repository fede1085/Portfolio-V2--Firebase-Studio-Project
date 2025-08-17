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
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = mockTestimonials;

  return (
    <section id="testimonial" className="py-20 lg:py-32" aria-labelledby="testimonial-title">
      <div className="container mx-auto px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto relative"
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
                      className="rounded-full mx-auto mb-6 shadow-lg object-cover"
                      data-ai-hint={testimonial.aiHint}
                    />
                    <blockquote className="text-2xl lg:text-3xl font-medium italic mb-6 max-w-3xl mx-auto">
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
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between items-center sm:hidden">
            <CarouselPrevious className="static -translate-x-0 -translate-y-0"/>
            <CarouselNext className="static -translate-x-0 -translate-y-0"/>
          </div>
          <div className="hidden sm:flex absolute right-0 -bottom-12 items-center gap-2">
            <CarouselPrevious variant="outline" size="icon" className="static" />
            <CarouselNext variant="outline" size="icon" className="static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
