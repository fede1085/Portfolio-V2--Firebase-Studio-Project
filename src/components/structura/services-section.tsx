import ServiceCard from "./service-card";

export default function ServicesSection() {
  const services = [
    {
      title: "What I can do for you",
      items: [
        "Branding and identity design",
        "UI/UX design for web and mobile",
        "Interactive prototyping",
        "Design system creation",
      ],
    },
    {
      title: "Applications I'm fluent in",
      items: [
        "Figma for collaborative design",
        "Sketch for UI and vector work",
        "Adobe Creative Suite (Photoshop, Illustrator)",
        "Webflow for no-code development",
      ],
    },
    {
      title: "What you can expect",
      items: [
        "Pixel-perfect, clean designs",
        "User-centered design approach",
        "Clear and consistent communication",
        "Timely delivery of high-quality work",
      ],
    },
  ];

  return (
    <section id="services" className="services-section py-20 lg:py-32 bg-secondary/30" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 id="services-title" className="text-3xl lg:text-4xl font-bold mb-4 font-headline">
            Design that solves problems, one product at a time.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} items={service.items} />
          ))}
        </div>
      </div>
    </section>
  );
}
