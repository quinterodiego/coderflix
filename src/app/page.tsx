import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemsSection />
        <ServicesSection />
        <ProcessSection />
        <ProjectsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
