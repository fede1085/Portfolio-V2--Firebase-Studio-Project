import Header from '@/components/structura/header';
import HeroSection from '@/components/structura/hero-section';
import TrustedBySection from '@/components/structura/trusted-by-section';
import ServicesSection from '@/components/structura/services-section';
import ProjectsSection from '@/components/structura/projects-section';
import BlogSection from '@/components/structura/blog-section';
import AboutSection from '@/components/structura/about-section';
import ResumeSection from '@/components/structura/resume-section';
import TestimonialSection from '@/components/structura/testimonial-section';
import FaqSection from '@/components/structura/faq-section';
import FooterCta from '@/components/structura/footer-cta';
import Footer from '@/components/structura/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustedBySection />
        <ServicesSection />
        <ProjectsSection />
        <BlogSection />
        <AboutSection />
        <ResumeSection />
        <TestimonialSection />
        <FaqSection />
        <FooterCta />
      </main>
      <Footer />
    </div>
  );
}
