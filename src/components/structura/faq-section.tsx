"use client";

import { faqs as mockFaqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqSection() {
  // TODO: Replace mock data with data from Firestore.
  // In a client component, you'd fetch data in a `useEffect` hook or use a data fetching library like SWR or React Query.
  const faqs = mockFaqs;

  return (
    <section id="faq" className="faq-section py-20 lg:py-32" aria-labelledby="faq-title">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 id="faq-title" className="text-3xl lg:text-4xl font-bold mb-4 font-headline">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? I've got answers.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="faq-item">
              <AccordionTrigger className="text-left text-lg hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
