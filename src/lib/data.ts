import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import type {
  Project,
  Post,
  Testimonial,
  FAQ,
  Resume,
  EducationEntry,
  WorkEntry,
} from "./types";

export async function getProjects(): Promise<Project[]> {
  const snapshot = await getDocs(collection(db, "projects"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Project));
}

export async function getPosts(): Promise<Post[]> {
  const snapshot = await getDocs(collection(db, "posts"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Post));
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const snapshot = await getDocs(collection(db, "testimonials"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Testimonial));
}

export async function getFaqs(): Promise<FAQ[]> {
  const snapshot = await getDocs(collection(db, "faqs"));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as FAQ));
}

export async function getResume(): Promise<Resume> {
  const educationSnapshot = await getDocs(collection(db, "education"));
  const workSnapshot = await getDocs(collection(db, "workExperience"));

  const education: EducationEntry[] = educationSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as EducationEntry[];

  const work: WorkEntry[] = workSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as WorkEntry[];

  return { education, work };
}
