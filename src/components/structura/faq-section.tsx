"use client";

import { faqs as mockFaqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function FaqSection() {
  const faqs = mockFaqs;
  const midIndex = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, midIndex);
  const secondHalf = faqs.slice(midIndex);

  const FaqColumn = ({ items }: { items: typeof mockFaqs }) => (
    <Accordion type="single" collapsible className="w-full flex flex-col">
      {items.map((faq) => (
        <AccordionItem 
          key={faq.id} 
          value={faq.id} 
          className="border-b border-white/10 last:border-b-0"
        >
          <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-[26px] text-gray-100 hover:text-white">
            <span>{faq.question}</span>
            {/* The default chevron is now part of the trigger, so no need to add another one here */}
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-400 pb-6 pr-8">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <Section id="faq" className="bg-[#111111] text-white" aria-labelledby="faq-title">
      <Container className="max-w-6xl">
        <div className="mb-16 text-center">
            <p className="font-semibold text-sm uppercase tracking-[1.5px] mb-4" style={{
                background: 'linear-gradient(90deg, #ff7a18, #af002d 70%, #319197)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
              FAQ
            </p>
          <h2 id="faq-title" className="text-4xl lg:text-5xl font-bold">
            Frequently asked questions
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-0">
          <FaqColumn items={firstHalf} />
          <FaqColumn items={secondHalf} />
        </div>
      </Container>
    </Section>
  );
}
