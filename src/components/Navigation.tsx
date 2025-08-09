import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <nav
      aria-label="Primary"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="Scroll to top (Taques-dev home)"
        >
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            Taques-dev
          </span>
        </button>

        <ul className="hidden md:flex items-center space-x-8" aria-label="Section navigation">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                aria-label={`Jump to ${item.name} section`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </li>
          ))}
          <li>
            <Button
              onClick={() => scrollToSection("contact")}
              size="sm"
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
              aria-label="Jump to contact section"
            >
              Hire Me
            </Button>
          </li>
        </ul>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen((o) => !o)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden px-6 pb-4 border-t border-border"
          aria-label="Mobile navigation menu"
        >
          <ul className="flex flex-col space-y-4 pt-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-medium py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  aria-label={`Jump to ${item.name} section`}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <Button
                onClick={() => scrollToSection("contact")}
                size="sm"
                className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 mt-2"
                aria-label="Jump to contact section"
              >
                Hire Me
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navigation
