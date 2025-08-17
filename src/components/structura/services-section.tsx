import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ServiceCardProps = {
  title: string;
  items: string[];
};

function ServiceCard({ title, items }: ServiceCardProps) {
  return (
    <Card className="h-full shadow-sm rounded-xl p-8">
      <CardHeader className="p-0 mb-4">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="space-y-3 list-disc list-inside text-muted-foreground">
          {items.map((item, index) => (
            <li key={index}>
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

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
        "Adobe Creative Suite",
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
    <section id="services" className="py-20 lg:py-32 bg-[#F8F9FA]" aria-labelledby="services-title">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 id="services-title" className="text-3xl lg:text-4xl font-bold mb-4">
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
