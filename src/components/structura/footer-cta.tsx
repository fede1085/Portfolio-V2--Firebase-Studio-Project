import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FooterCta() {
  return (
    <section id="contact" className="footer-cta-section bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-20 lg:py-24 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 font-headline">
          Ready to make something kickass?
        </h2>
        <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-primary-foreground/80">
          Let’s get on a call and discuss how I can help you achieve your goals.
        </p>
        <Button asChild size="lg" variant="secondary">
          <Link href="mailto:hello@structura.com">Book a call</Link>
        </Button>
      </div>
    </section>
  );
}
