import Image from "next/image";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

export default function AboutSection() {
  return (
    <Section id="about-me" aria-labelledby="about-me-title">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="about__content-left">
            <p className="font-semibold text-sm uppercase tracking-[1.5px] mb-4" style={{
                background: 'linear-gradient(90deg, #ff7a18, #af002d 70%, #319197)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
              Business Technology Consultant
            </p>
            <h2 id="about-me-title" className="text-4xl md:text-5xl font-bold" style={{lineHeight: 1.2}}>
              That's me!
            </h2>
          </div>
          <div className="about__content-right">
            <p className="text-lg text-[#444] max-w-[520px]" style={{lineHeight: 1.6}}>
              I’m a hybrid consultant who translates everyday work into AI-powered, low-code workflows. I don’t build heavy software; I connect what you already pay for and make it work together. I implement, connect, train, and stay long enough to ensure your team is confident. Based in Antwerp; Spanish/English; working across Belgium and remote.
            </p>
          </div>
        </div>
        
        <div className="hidden lg:grid grid-cols-[1fr_2fr_1fr] gap-5">
            <div className="flex flex-col gap-5 row-span-2">
                 <Image
                    src="https://placehold.co/300x620.png"
                    alt="A tall phone screen showing a wallet app"
                    width={300}
                    height={620}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="building automations"
                />
            </div>
             <div className="flex flex-col gap-5 row-span-2">
                <Image
                    src="https://placehold.co/600x620.png"
                    alt="A designer working at a dual monitor setup"
                    width={600}
                    height={620}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="workspace setup"
                />
            </div>
            <div className="grid grid-rows-2 gap-5">
                 <Image
                    src="https://placehold.co/300x310.png"
                    alt="A workspace with a laptop"
                    width={300}
                    height={310}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="training session"
                />
                 <Image
                    src="https://placehold.co/300x310.png"
                    alt="Two people collaborating over a laptop"
                    width={300}
                    height={310}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="team collaboration"
                />
            </div>
        </div>

        {/* Responsive Image Grid for Tablet and Mobile */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-5">
            <Image
                src="https://placehold.co/300x620.png"
                alt="building automations"
                width={300}
                height={620}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="mobile wallet app"
            />
            <Image
                src="https://placehold.co/600x620.png"
                alt="workspace setup"
                width={600}
                height={620}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="designer workspace"
            />
            <Image
                src="https://placehold.co/300x300.png"
                alt="training session"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="laptop workspace"
            />
            <Image
                src="https://placehold.co/300x300.png"
                alt="team collaboration"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="team collaboration"
            />
        </div>
      </Container>
    </Section>
  );
}
