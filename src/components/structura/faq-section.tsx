"use client";

import { faqs as mockFaqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "../ui/card";

export default function FaqSection() {
  const faqs = mockFaqs;
  const midIndex = Math.ceil(faqs.length / 2);
  const firstHalf = faqs.slice(0, midIndex);
  const secondHalf = faqs.slice(midIndex);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-[#111111] text-white" aria-labelledby="faq-title">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="mb-12">
          <p className="text-accent font-semibold mb-2 text-center lg:text-left">FAQ</p>
          <h2 id="faq-title" className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
            Frequently asked questions
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {firstHalf.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="px-6 py-2 border border-gray-700 rounded-lg bg-gray-800/20">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {secondHalf.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="px-6 py-2 border border-gray-700 rounded-lg bg-gray-800/20">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
