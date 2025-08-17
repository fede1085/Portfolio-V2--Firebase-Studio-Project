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

  return (
    <section id="faq" className="py-20 lg:py-32" aria-labelledby="faq-title">
      <div className="container mx-auto px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 id="faq-title" className="text-3xl lg:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Have questions? I've got answers.
          </p>
        </div>
        <Card className="shadow-sm">
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="px-6 border-b last:border-b-0">
                  <AccordionTrigger className="text-left text-lg font-bold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
