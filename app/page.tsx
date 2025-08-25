import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { KnowledgeTimeline } from "@/components/knowledge-timeline";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 min-h-screen">
      <HeroSection />
      <AboutSection />
      <KnowledgeTimeline />
      <ProjectsSection />

      {/* <section className="mb-16">
        <p className="mb-6 text-base font-semibold">Work Experience</p>

      </section> */}
    </div>
  );
}
