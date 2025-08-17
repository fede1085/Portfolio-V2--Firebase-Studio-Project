import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FooterCta() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-8 py-20 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          Ready to make something kickass?
        </h2>
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
          Let’s get on a call and discuss how I can help you achieve your goals.
        </p>
        <Button asChild size="lg" className="font-bold">
          <Link href="mailto:hello@structura.com">Book a call</Link>
        </Button>
      </div>
    </section>
  );
}
