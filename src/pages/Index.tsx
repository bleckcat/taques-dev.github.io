import Contact from "@/components/Contact"
import Hero from "@/components/Hero"
import Navigation from "@/components/Navigation"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
};

export default Index;
