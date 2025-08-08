import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  stars: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern full-stack e-commerce solution with real-time features",
    longDescription: "A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory updates, payment processing, admin dashboard, and responsive design.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    stars: 124
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative project management tool with team features",
    longDescription: "A React-based task management application with drag-and-drop functionality, real-time collaboration, and team management features. Built with TypeScript and Supabase.",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
    stars: 89
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description: "Modern chat interface with AI integration and real-time messaging",
    longDescription: "A sophisticated chat application with AI integration, featuring real-time messaging, file sharing, and smart responses. Built with modern web technologies.",
    technologies: ["Next.js", "OpenAI API", "WebSocket", "MongoDB"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stars: 67
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Data visualization platform with interactive charts and insights",
    longDescription: "A comprehensive analytics dashboard for business intelligence, featuring interactive charts, real-time data updates, and customizable views.",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stars: 43
  },
  {
    id: 5,
    title: "DevOps Automation Tool",
    description: "CI/CD pipeline management and deployment automation",
    longDescription: "A DevOps tool for managing CI/CD pipelines, automating deployments, and monitoring application health across multiple environments.",
    technologies: ["React", "Docker", "AWS", "Terraform"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stars: 156
  },
  {
    id: 6,
    title: "Mobile Weather App",
    description: "Cross-platform weather application with location services",
    longDescription: "A React Native weather application with location-based forecasts, interactive maps, and weather alerts. Features offline support and push notifications.",
    technologies: ["React Native", "TypeScript", "Weather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    stars: 32
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
            A selection of projects showcasing my skills in modern web development, 
            from full-stack applications to specialized tools.
          </p>
        </div>

        {/* Featured Projects */}
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
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-gradient-accent hover:shadow-glow-accent transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">
            More Projects
          </h3>
          
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
                    <Button size="sm" variant="ghost" className="p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
