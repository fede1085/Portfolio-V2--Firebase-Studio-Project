import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function FooterCta() {
  return (
    <Section id="contact" className="bg-background">
      <Container className="text-center">
        <p className="text-accent font-semibold mb-4">Ready to make something kickass?</p>
        <h2 className="text-4xl lg:text-6xl font-bold mb-8">
          Let's get on a call.
        </h2>
        <Button asChild size="lg" className="font-bold bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-full px-10 py-7 text-lg">
          <Link href="mailto:hello@structura.com">Book a call</Link>
        </Button>
      </Container>
    </Section>
  );
}
