export default function ServicesSection() {
  const services = [
    {
      title: "What I can do for you",
      items: [
        "Map repetitive processes and prioritize quick-win automations",
        "Ship a working MVP in 7 days (flow or micro-app)",
        "Build copilots & prompt systems for sales, HR, support",
        "Connect Microsoft 365/Google Workspace with CRMs/ERPs",
        "Light compliance & governance; auditable automations",
        "Train your team to maintain and extend what we build",
      ],
      icon: "🎨"
    },
    {
      title: "Applications I'm fluent in",
      items: [
        "ChatGPT, Gemini, DeepSeek",
        "n8n, Make/Zapier",
        "Power Automate/Power Apps, AppSheet",
        "Google Stitch, Firebase, Figma, Vercel",
        "NotebookLM",
      ],
      icon: "💻"
    },
    {
      title: "What you can expect",
      items: [
        "Visible results in 7–14 days",
        "≥30% time saved on repetitive tasks (goal)",
        "Clear handover & enablement so you’re not dependent on me",
        "KPIs and iteration cadence (monthly or sprint-based)",
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
