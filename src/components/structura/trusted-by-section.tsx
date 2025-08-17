import Image from 'next/image';

const tools = [
  'ChatGPT', 'Gemini', 'n8n', 'Zapier', 'Make', 'Google Stitch', 
  'Firebase', 'Microsoft 365', 'Google Workspace', 'AppSheet', 
  'Power Automate', 'NotebookLM'
];

export default function TrustedBySection() {
  return (
    <section className="py-[60px] bg-background">
      <div className="container mx-auto px-8">
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
      </div>
    </section>
  );
}
