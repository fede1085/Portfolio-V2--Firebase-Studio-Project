import { resume as mockResume } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface ResumeItemProps {
  title: string;
  subtitle: string;
  years: string;
}

function ResumeItem({ title, subtitle, years }: ResumeItemProps) {
  return (
    <div className="resume-item">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-sm text-muted-foreground sm:text-right">{years}</p>
      </div>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default function ResumeSection() {
  const { education, work } = mockResume;

  return (
    <section id="resume" className="py-20 lg:py-32" aria-labelledby="resume-title">
      <div className="container mx-auto px-8">
        <div className="text-center mb-12">
            <h2 id="resume-title" className="text-3xl lg:text-4xl font-bold mb-4">
                My Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A summary of my professional journey and educational background.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={item.id}>
                  <ResumeItem title={item.degree} subtitle={item.institution} years={item.years} />
                   {index < education.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="flex items-center gap-3 text-2xl font-bold mb-6">
              <Briefcase className="w-6 h-6 text-primary" />
              Work Experience
            </h3>
            <div className="space-y-8">
              {work.map((item, index) => (
                <div key={item.id}>
                  <ResumeItem title={item.role} subtitle={item.company} years={item.years} />
                  {index < work.length - 1 && <Separator className="mt-8" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
