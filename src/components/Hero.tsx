import heroBg from "@/assets/hero-bg.jpg"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Mail } from "lucide-react"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />

      <div className="absolute top-20 left-20 w-4 h-4 bg-primary rounded-full animate-float opacity-60" />
      <div
        className="absolute top-40 right-32 w-6 h-6 bg-secondary rounded-full animate-float opacity-40"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-32 left-32 w-3 h-3 bg-accent rounded-full animate-float opacity-50"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Software</span>{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Developer
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building modern web applications with cutting-edge technologies.
            Passionate about clean code, user experience, and innovative
            solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="mailto:juanvitor16@hotmail.com" className="inline-block">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 px-8 py-3"
              >
                <span>
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </span>
              </Button>
            </a>

            <a
              href="/resume_juan_taques.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border hover:text-white hover:bg-card-hover hover:shadow-glow-secondary transition-all duration-300 px-8 py-3"
              >
                <span>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </span>
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/bleckcat"
              target="_blank"
              className="p-3 rounded-full bg-card hover:bg-card-hover hover:shadow-glow-primary transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/taques-dev"
              target="_blank"
              className="p-3 rounded-full bg-card hover:bg-card-hover hover:shadow-glow-secondary transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-secondary" />
            </a>
            <a
              href="mailto:juanvitor16@hotmail.com"
              target="_blank"
              className="p-3 rounded-full bg-card hover:bg-card-hover hover:shadow-glow-accent transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-muted-foreground group-hover:text-accent" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
