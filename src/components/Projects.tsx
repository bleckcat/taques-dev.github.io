import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ExternalLink, Github, Star } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  stars: number
}

const projects: Project[] = [
  // Featured
  {
    id: 1,
    title: "eWorldes Platform",
    description:
      "Key project for eWorldes with focus on user experience and reliability",
    longDescription:
      "Led/Contributed to a core platform for eWorldes. Work spanned UI development, API integration, and quality improvements to support business goals.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
    githubUrl: "",
    liveUrl: "https://sunbucks.dhs.hawaii.gov",
    featured: true,
    stars: 4095,
  },
  {
    id: 2,
    title: "Inetum Enterprise Project",
    description:
      "Professional project delivered at Inetum (summary at a high level)",
    longDescription:
      "Enterprise-grade solution contributed while at Inetum. Responsibilities included full-stack development, performance tuning, and delivering features collaboratively across teams.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://www.gov.pt",
    featured: true,
    stars: 3495,
  },
  {
    id: 3,
    title: "Interview Cheater AI",
    description:
      "C# app using OCR and Gemini to generate code for interview prompts",
    longDescription:
      "A C# AI utility that performs image-to-text recognition and leverages Gemini to generate code solutions for coding interview questions.",
    technologies: ["C#", "Gemini", "OCR"],
    githubUrl: "https://github.com/bleckcat/CSharp_LLM_Jarvis",
    liveUrl: "",
    featured: false,
    stars: 854,
  },
  {
    id: 4,
    title: "Golden Fedora",
    description: "Japanese curriculum creator built with React, Vite and i18n",
    longDescription:
      "A front-end app to generate Japanese CVs, featuring internationalization, a fast Vite setup, and a clean React UI.",
    technologies: ["React", "Vite", "i18n", "TypeScript"],
    githubUrl: "https://github.com/bleckcat/Golden-fedora",
    liveUrl: "",
    featured: false,
    stars: 324,
  },
  {
    id: 9,
    title: "Golden Carrot",
    description: "Python backend for Golden Fedora with APIs and persistence",
    longDescription:
      "Back-end service powering Golden Fedora, implemented in Python with RESTful endpoints and data storage.",
    technologies: ["Python", "FastAPI", "PostgreSQL"],
    githubUrl: "https://github.com/bleckcat/golden-carrot",
    liveUrl: "",
    featured: false,
    stars: 364,
  },
]

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my skills in modern web
            development, from full-stack applications to specialized tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:bg-card-hover transition-all duration-300 hover:shadow-glow-accent border-border animate-fade-in"
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-foreground mb-4">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">More Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Card
                key={project.id}
                className="group hover:bg-card-hover transition-all duration-300 hover:shadow-glow-primary border-border"
              >
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <Star className="h-3 w-3" />
                      <span className="text-xs">{project.stars}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    {project.githubUrl.length > 0 && (
                      <a
                        href={project.githubUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
