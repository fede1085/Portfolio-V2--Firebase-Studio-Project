export interface Project {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  url: string;
  aiHint: string;
}

export interface Post {
  id: string;
  title: string;
  dateISO: string;
  readMins: number;
  url: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  authorRole: string;
  avatar: string;
  quote: string;
  aiHint: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  years: string;
}

export interface WorkEntry {
  id: string;
  company: string;
  role: string;
  years: string;
}

export interface Resume {
  education: EducationEntry[];
  work: WorkEntry[];
}
