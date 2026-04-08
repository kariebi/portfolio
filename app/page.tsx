import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import OtherWork from "@/components/OtherWork";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-6 py-24 flex flex-col gap-16">
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Skills />
        <WorkExperience />
        <Education />
        <OtherWork />
        <Contact />
      </div>
      <FloatingNav />
    </main>
  );
}