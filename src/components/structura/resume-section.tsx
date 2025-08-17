import { resume as mockResume } from "@/lib/data";
import { Briefcase, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ResumeItemProps {
  title: string;
  subtitle: string;
  years: string;
}

function ResumeItem({ title, subtitle, years }: ResumeItemProps) {
  return (
    <div className="resume-item relative pl-8">
       <div className="absolute left-0 top-1.5 h-full">
         <div className="w-3 h-3 rounded-full bg-primary ring-4 ring-primary/20"></div>
         <div className="h-full w-px bg-border ml-[5.5px]"></div>
       </div>
      <p className="text-sm text-muted-foreground mb-1">{years}</p>
      <h4 className="font-semibold text-lg">{title}</h4>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}

export default function ResumeSection() {
  // TODO: Replace mock data with data from Firestore.
  const { education, work } = mockResume;

  return (
    <section id="resume" className="resume-section py-20 lg:py-32" aria-labelledby="resume-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 id="resume-title" className="text-3xl lg:text-4xl font-bold mb-4 font-headline">
                My Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A summary of my professional journey and educational background.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {education.map((item) => (
                  <ResumeItem key={item.id} title={item.degree} subtitle={item.institution} years={item.years} />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <Briefcase className="w-6 h-6 text-primary" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                {work.map((item) => (
                  <ResumeItem key={item.id} title={item.role} subtitle={item.company} years={item.years} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
