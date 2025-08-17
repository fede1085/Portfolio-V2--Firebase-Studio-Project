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
      icon: "🎨"
    },
    {
      title: "Applications I'm fluent in",
      items: [
        "Figma for collaborative design",
        "Sketch for UI and vector work",
        "Adobe Creative Suite",
        "Webflow for no-code development",
      ],
      icon: "💻"
    },
    {
      title: "What you can expect",
      items: [
        "Pixel-perfect, clean designs",
        "User-centered design approach",
        "Clear and consistent communication",
        "Timely delivery of high-quality work",
      ],
      icon: "✨"
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-32" aria-labelledby="services-title">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-accent font-semibold mb-2">SERVICES</p>
          <h2 id="services-title" className="text-3xl lg:text-4xl font-bold mb-4">
            Design that solves problems, one product at a time.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                    {item}
                    </li>
                ))}
                </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
