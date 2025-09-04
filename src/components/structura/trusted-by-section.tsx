import Image from 'next/image';
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

const tools = [
  'ChatGPT', 'Gemini', 'n8n', 'Zapier', 'Make', 'Google Stitch',
  'Firebase', 'Microsoft 365', 'Google Workspace', 'AppSheet',
  'Power Automate', 'NotebookLM'
];

export default function TrustedBySection() {
  return (
    <Section className="py-[60px] lg:py-[60px] bg-background">
      <Container>
        <h2 className="text-center text-base font-normal tracking-[0.5px] text-black mb-10">
          Tools I Use
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {tools.map((tool, index) => (
            <div key={index} className="text-muted-foreground font-medium">
              {tool}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
