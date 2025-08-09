import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "cloud" | "testing" | "tooling"
  icon: string
  details?: string
}

// Helper to get the correct devicon path for each skill
function getDeviconPath(name: string): string {
  switch (name) {
    case "React":
      return "react/react-original.svg"
    case "TypeScript":
      return "typescript/typescript-plain.svg"
    case "JavaScript":
      return "javascript/javascript-plain.svg"
    case "Next.js":
      return "nextjs/nextjs-original.svg"
    case "Angular":
      return "angularjs/angularjs-plain.svg"
    case "Material UI":
      return "materialui/materialui-original.svg"
    case "Redux":
      return "redux/redux-original.svg"
    case "HTML":
      return "html5/html5-plain.svg"
    case "CSS":
      return "css3/css3-plain.svg"
    case "Node.js":
      return "nodejs/nodejs-plain.svg"
    case "Python":
      return "python/python-plain.svg"
    case "Flask":
      return "flask/flask-original.svg"
    case "Ruby":
      return "ruby/ruby-plain.svg"
    case "Ruby on Rails":
      return "rails/rails-plain.svg"
    case "Git":
      return "git/git-plain.svg"
    case "Azure":
      return "azure/azure-original.svg"
    case "AWS Lambda":
      return "amazonwebservices/amazonwebservices-original.svg"
    case "Jenkins":
      return "jenkins/jenkins-original.svg"
    case "New Relic":
      return "newrelic/newrelic-original.svg"
    case "Storybook":
      return "storybook/storybook-original.svg"
    case "Jest":
      return "jest/jest-plain.svg"
    case "Cypress":
      return "cypressio/cypressio-plain.svg"
    case "RSpec":
      return "ruby/ruby-plain.svg"
    default:
      return ""
  }
}

const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    level: 95,
    category: "frontend",
    icon: "devicon-react-original colored",
    details:
      "SSR • CSR • pre-render • Hooks • Module Federation • Accessibility (W3C) • Performance • Styled Components • EC6 Import Maps • Module Federation • Accessibility (W3C)",
  },
  {
    name: "Next.js",
    level: 90,
    category: "frontend",
    icon: "devicon-nextjs-original colored",
    details: "SSR/SSG • App Router • API Routes • Image Opt",
  },
  {
    name: "Angular",
    level: 75,
    category: "frontend",
    icon: "devicon-angularjs-plain colored",
    details: "components • RxJS • forms • routing",
  },
  {
    name: "Material UI",
    level: 85,
    category: "frontend",
    icon: "devicon-materialui-original colored",
    details: "design system • theming • responsive UI",
  },
  {
    name: "Redux",
    level: 88,
    category: "frontend",
    icon: "devicon-redux-original colored",
    details: "RTK • middleware • devtools • feature flags",
  },
  {
    name: "TypeScript",
    level: 90,
    category: "frontend",
    icon: "devicon-typescript-plain colored",
    details: "strict mode • generics • DX • API contracts",
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    icon: "devicon-javascript-plain colored",
    details: "ES6+ • async/await • modules • patterns",
  },
  {
    name: "HTML",
    level: 100,
    category: "frontend",
    icon: "devicon-html5-plain colored",
    details: "semantic • accessibility • SEO",
  },
  {
    name: "CSS",
    level: 90,
    category: "frontend",
    icon: "devicon-css3-plain colored",
    details: "layouts • animations • responsive • Accessibility (W3C)",
  },

  // Backend
  {
    name: "Flask",
    level: 80,
    category: "backend",
    icon: "devicon-flask-original colored",
    details: "microservices • blueprints • Jinja",
  },
  {
    name: "Python",
    level: 80,
    category: "backend",
    icon: "devicon-python-plain colored",
    details: "asyncio • data scripts • automation",
  },
  {
    name: "Ruby",
    level: 40,
    category: "backend",
    icon: "devicon-ruby-plain colored",
    details: "OOP • scripts • services",
  },
  {
    name: "Ruby on Rails",
    level: 40,
    category: "backend",
    icon: "devicon-rails-plain colored",
    details: "REST • ActiveRecord • migrations",
  },
  {
    name: "Node.js",
    level: 30,
    category: "backend",
    icon: "devicon-nodejs-plain colored",
    details: "REST APIs • tooling • build scripts",
  },

  // Cloud / DevOps
  {
    name: "Azure",
    level: 78,
    category: "cloud",
    icon: "devicon-azure-original colored",
    details: "Functions • VMs • SQL • DevOps • Containers",
  },
  {
    name: "AWS Lambda",
    level: 70,
    category: "cloud",
    icon: "devicon-amazonwebservices-original colored",
    details: "serverless • events • integrations",
  },
  {
    name: "Jenkins",
    level: 75,
    category: "cloud",
    icon: "devicon-jenkins-original colored",
    details: "CI/CD pipelines • automation • quality gates",
  },
  {
    name: "New Relic",
    level: 65,
    category: "cloud",
    icon: "devicon-newrelic-original colored",
    details: "APM • metrics • alerting",
  },

  // Testing / Quality
  {
    name: "Jest",
    level: 85,
    category: "testing",
    icon: "devicon-jest-plain colored",
    details: "unit • mocks • coverage • TDD",
  },
  {
    name: "Cypress",
    level: 80,
    category: "testing",
    icon: "devicon-cypressio-plain colored",
    details: "E2E • component tests • CI • TDD",
  },
  {
    name: "RSpec",
    level: 70,
    category: "testing",
    icon: "devicon-ruby-plain colored",
    details: "Rails models • request specs",
  },

  // Tooling / Other
  {
    name: "Git",
    level: 92,
    category: "tooling",
    icon: "devicon-git-plain colored",
    details: "branching • code review • feature flags",
  },
  {
    name: "Storybook",
    level: 80,
    category: "tooling",
    icon: "devicon-storybook-original colored",
    details: "UI docs • visual test • a11y checks",
  },
]

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud & DevOps",
  testing: "Testing & Quality",
  tooling: "Architecture",
}

const Skills = () => {
  const categories = Object.keys(categoryLabels) as Array<
    keyof typeof categoryLabels
  >

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of technologies I work with, constantly
            learning and expanding my skill set. This section only contain what
            I know about each of these technologies.
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <div key={category} className="animate-fade-in flex flex-col">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  {categoryLabels[category]}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {
                      skills.filter((skill) => skill.category === category)
                        .length
                    }
                  </Badge>
                </h3>

                <div className="relative">
                  <ScrollArea className="h-[300px] pr-1">
                    <div className="grid grid-cols-1 gap-2 pb-6">
                      {skills
                        .filter((skill) => skill.category === category)
                        .map((skill) => (
                          <Tooltip key={skill.name} delayDuration={150}>
                            <TooltipTrigger asChild>
                              <Card className="p-3 hover:bg-card-hover transition-all duration-300 hover:shadow-glow-primary group cursor-help">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center space-x-2">
                                    {getDeviconPath(skill.name) && (
                                      <img
                                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${getDeviconPath(
                                          skill.name
                                        )}`}
                                        alt={skill.name + " icon"}
                                        className="w-6 h-6"
                                        onError={(e) => {
                                          e.currentTarget.style.display = "none"
                                        }}
                                      />
                                    )}
                                    <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                                      {skill.name}
                                    </span>
                                  </div>
                                  <span className="text-xs text-muted-foreground font-medium">
                                    {skill.level}%
                                  </span>
                                </div>
                                <div className="w-full bg-border rounded-full h-1.5 overflow-hidden">
                                  <div
                                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                      width: `${skill.level}%`,
                                      boxShadow:
                                        "0 0 8px hsl(var(--primary) / 0.4)",
                                    }}
                                  />
                                </div>
                              </Card>
                            </TooltipTrigger>
                            {skill.details && (
                              <TooltipContent
                                side="top"
                                className="max-w-xs text-center"
                              >
                                <span className="text-xs leading-relaxed whitespace-pre-line">
                                  {skill.details}
                                </span>
                              </TooltipContent>
                            )}
                          </Tooltip>
                        ))}
                    </div>
                  </ScrollArea>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-background via-background/80 to-transparent"
                    style={{
                      maskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0))",
                      WebkitMaskImage:
                        "linear-gradient(to top, rgba(0,0,0,1) 40%, rgba(0,0,0,0))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  )
}

export default Skills
