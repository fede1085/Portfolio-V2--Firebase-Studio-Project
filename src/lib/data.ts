// TODO: This is mock data. Replace with data from a CMS or Firestore.

export const projects = [
  { id: "p1", title: "Sales Inbox Triage Copilot", tag: "AI Copilot", description: "n8n + OpenAI · routes emails, drafts replies, updates CRM", image: "https://placehold.co/600x450.png", url: "#", aiHint: "abstract design" },
  { id: "p2", title: "HR Assistant for New Hires", tag: "Onboarding", description: "AppSheet/Power Apps · collects docs, answers policy FAQs", image: "https://placehold.co/600x450.png", url: "#", aiHint: "modern website" },
  { id: "p3", title: "Order Status Tracker", tag: "Logistics", description: "Sheets/ERP + n8n · status updates + WhatsApp notifications", image: "https://placehold.co/600x450.png", url: "#", aiHint: "mobile application" },
  { id: "p4", title: "Corporate Identity for Startup", tag: "Branding", description: "A fresh new look for a startup.", image: "https://placehold.co/600x450.png", url: "#", aiHint: "corporate branding" },
  { id: "p5", title: "Interactive Data Visualization", tag: "Web App", description: "Visualizing complex data in an interactive way.", image: "https://placehold.co/600x450.png", url: "#", aiHint: "data visualization" },
  { id: "p6", title: "Futuristic UI Kit", tag: "UI Design", description: "A UI kit for the future.", image: "https://placehold.co/600x450.png", url: "#", aiHint: "futuristic ui" },
];

export const posts = [
  { id: "b1", title: "Your First 3 Automations for SMEs (No Developers Needed)", dateISO: "2023-04-16T00:00:00.000Z", readMins: 5, url: "#" },
  { id: "b2", title: "Prompt Systems Teams Actually Use (Templates Inside)", dateISO: "2023-03-22T00:00:00.000Z", readMins: 7, url: "#" },
  { id: "b3", title: "Connecting Microsoft 365 & Google Workspace the Practical Way", dateISO: "2023-02-10T00:00:00.000Z", readMins: 9, url: "#" },
  { id: "b4", title: "MVP in 7 Days: A Low-Risk Pilot Playbook", dateISO: "2023-01-15T00:00:00.000Z", readMins: 4, url: "#" },
  { id: "b5", title: "Compliance-Light Automation: GDPR Basics that Matter", dateISO: "2023-01-01T00:00:00.000Z", readMins: 6, url: "#" },
];

export const testimonials = [
  { id: "t1", authorName: "Jane Doe", authorRole: "Founder, Beta Inc.", avatar: "https://placehold.co/400x400.png", quote: "Clear explanations, fast delivery, and solutions our non-technical team can actually use. Federico didn’t just build a tool, he built our confidence.", aiHint: "woman portrait" },
  { id: "t2", authorName: "John Smith", authorRole: "CEO, Innovate LLC", avatar: "https://placehold.co/400x400.png", quote: "The final product exceeded all our expectations. The design is not only beautiful but also incredibly intuitive for our users. Highly recommended!", aiHint: "man portrait" },
  { id: "t3", authorName: "Emily White", authorRole: "Marketing Director, ScaleUp", avatar: "https://placehold.co/400x400.png", quote: "A true professional. They delivered on time, communicated clearly, and produced outstanding work. We've seen a significant increase in engagement since the redesign.", aiHint: "person smiling" },
];

export const faqs = [
  { id: "f1", question: "What is your hourly rate?", answer: "My hourly rate varies depending on the scope and complexity of the project. For a precise quote, please book a call to discuss your specific needs." },
  { id: "f2", question: "What services do you offer?", answer: "I offer a range of design services including UI/UX design for web and mobile apps, branding and identity design, and web design. Check the 'Services' section for more details." },
  { id: "f3", question: "How long will it take to complete my project?", answer: "Project timelines vary based on the project's scope. After our initial consultation, I will provide a detailed project plan with key milestones and a final delivery date." },
  { id: "f4", question: "What is your design process?", answer: "My process is collaborative and iterative. It typically involves discovery and research, wireframing and prototyping, visual design, and user testing to ensure the final product meets your goals." },
  { id: "f5", question: "Do you provide a warranty for the final product?", answer: "Absolutely. I offer a 30-day warranty period after project completion to address any bugs or issues that may arise. Your satisfaction is my priority." },
  { id: "f6", question: "How can I get started?", answer: "The first step is to book a free consultation call with me. We'll discuss your project, goals, and how I can help. From there, I'll prepare a detailed proposal for your review." },
];

export const resume = {
  education: [
    { id: 'e1', institution: 'Self-directed specialization — AI, Automation & Low-Code (Power Platform, AppSheet, n8n, Prompt Engineering). Ongoing labs and prototypes.', degree: '', years: '' },
  ],
  work: [
    { id: 'w1', company: 'Business Technology Consultant (Freelance)', role: 'AI workflows, copilots, low-code integrations for SMEs.', years: '2025-Present' },
    { id: 'w2', company: 'Colruyt Group — Operations (2 yrs) · McDonald’s — Crew/Training (2 yrs).', role: 'Process discipline and team enablement informing my consulting style.', years: '' },
  ]
};
