import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about-me" className="py-20 lg:py-32" aria-labelledby="about-me-title">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="about__content-left">
            <p className="font-semibold text-sm uppercase tracking-[1.5px] mb-4" style={{
                background: 'linear-gradient(90deg, #ff7a18, #af002d 70%, #319197)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}>
              Product Designer
            </p>
            <h2 id="about-me-title" className="text-4xl md:text-5xl font-bold" style={{lineHeight: 1.2}}>
              That's me!
            </h2>
          </div>
          <div className="about__content-right">
            <p className="text-lg text-[#444] max-w-[520px]" style={{lineHeight: 1.6}}>
              Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow.
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
                    data-ai-hint="mobile wallet app"
                />
            </div>
             <div className="flex flex-col gap-5 row-span-2">
                <Image
                    src="https://placehold.co/600x620.png"
                    alt="A designer working at a dual monitor setup"
                    width={600}
                    height={620}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="designer workspace"
                />
            </div>
            <div className="grid grid-rows-2 gap-5">
                 <Image
                    src="https://placehold.co/300x300.png"
                    alt="A workspace with a laptop"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="laptop workspace"
                />
                 <Image
                    src="https://placehold.co/300x300.png"
                    alt="Two people collaborating over a laptop"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    data-ai-hint="team collaboration"
                />
            </div>
        </div>

        {/* Responsive Image Grid for Tablet and Mobile */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-5">
            <Image
                src="https://placehold.co/300x620.png"
                alt="A tall phone screen showing a wallet app"
                width={300}
                height={620}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="mobile wallet app"
            />
            <Image
                src="https://placehold.co/600x620.png"
                alt="A designer working at a dual monitor setup"
                width={600}
                height={620}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="designer workspace"
            />
            <Image
                src="https://placehold.co/300x300.png"
                alt="A workspace with a laptop"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="laptop workspace"
            />
            <Image
                src="https://placehold.co/300x300.png"
                alt="Two people collaborating over a laptop"
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                data-ai-hint="team collaboration"
            />
        </div>
      </div>
    </section>
  );
}
