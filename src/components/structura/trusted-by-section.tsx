import Image from 'next/image';

const logos = [
  { name: 'Logoipsum 1', src: 'https://placehold.co/120x40.png', aiHint: 'company logo' },
  { name: 'Logoipsum 2', src: 'https://placehold.co/120x40.png', aiHint: 'tech logo' },
  { name: 'Logoipsum 3', src: 'https://placehold.co/120x40.png', aiHint: 'startup logo' },
  { name: 'Logoipsum 4', src: 'https://placehold.co/120x40.png', aiHint: 'brand logo' },
  { name: 'Logoipsum 5', src: 'https://placehold.co/120x40.png', aiHint: 'design firm' },
  { name: 'Logoipsum 6', src: 'https://placehold.co/120x40.png', aiHint: 'abstract mark' },
];

export default function TrustedBySection() {
  return (
    <section className="py-[60px] bg-background">
      <div className="container mx-auto px-8">
        <h2 className="text-center text-base font-normal tracking-[0.5px] text-black mb-10">
          Trusted by
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-x-[60px] gap-y-8">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center basis-1/3 md:basis-1/6 lg:basis-auto">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="w-[120px] h-auto object-contain filter grayscale opacity-80 transition-all duration-300 ease-in-out hover:opacity-100 hover:grayscale-0"
                data-ai-hint={logo.aiHint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
