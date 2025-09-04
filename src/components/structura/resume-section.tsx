import { resume as mockResume } from "@/lib/data";
import { Briefcase, GraduationCap, ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

interface ResumeItemProps {
  title: string;
  subtitle: string;
  years: string;
  icon: React.ReactNode;
}

function ResumeItem({ title, subtitle, years, icon }: ResumeItemProps) {
  return (
    <Link href="#" className="resume-item group block">
        <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                {icon}
            </div>
            <div className="flex-grow">
                <div className="flex justify-between items-start">
                    <div>
                        <h4 className="font-bold text-xl">{title}</h4>
                        <p className="text-muted-foreground">{subtitle}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
                 <p className="text-sm text-muted-foreground mt-1">{years}</p>
            </div>
        </div>
    </Link>
  );
}

export default function ResumeSection() {
  const { education, work } = mockResume;

  const educationIcons = [
      <GraduationCap key="e1" className="w-6 h-6 text-primary" />,
      <GraduationCap key="e2" className="w-6 h-6 text-primary" />,
  ]
  const workIcons = [
      <Briefcase key="w1" className="w-6 h-6 text-primary" />,
      <Briefcase key="w2" className="w-6 h-6 text-primary" />,
      <Briefcase key="w3" className="w-6 h-6 text-primary" />,
  ]

  return (
    <Section id="resume" aria-labelledby="resume-title">
      <Container>
        <div className="mb-12 max-w-2xl">
             <p className="text-accent font-semibold mb-2">EXPERIENCE</p>
            <h2 id="resume-title" className="text-3xl lg:text-4xl font-bold">
                My Experience
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={item.id}>
                  <ResumeItem title={item.institution} subtitle={item.degree} years={item.years} icon={educationIcons[index]} />
                   {index < education.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Work Experience
            </h3>
            <div className="space-y-8">
              {work.map((item, index) => (
                <div key={item.id}>
                  <ResumeItem title={item.company} subtitle={item.role} years={item.years} icon={workIcons[index]} />
                  {index < work.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
