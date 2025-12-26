import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsCarousel from "@/components/SkillsCarousel";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SkillsCarousel />
      <Projects />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}
