import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: "frontend" | "backend" | "database" | "tools"
  icon: string
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
    case "Vue.js":
      return "vuejs/vuejs-plain.svg"
    case "Tailwind CSS":
      return "tailwindcss/tailwindcss-plain.svg"
    case "Node.js":
      return "nodejs/nodejs-plain.svg"
    case "Python":
      return "python/python-plain.svg"
    case "Express.js":
      return "express/express-original.svg"
    case "FastAPI":
      return "fastapi/fastapi-plain.svg"
    case "GraphQL":
      return "graphql/graphql-plain.svg"
    case "PostgreSQL":
      return "postgresql/postgresql-plain.svg"
    case "MongoDB":
      return "mongodb/mongodb-plain.svg"
    case "Redis":
      return "redis/redis-plain.svg"
    case "Supabase":
      return "supabase/supabase-plain.svg"
    case "Git":
      return "git/git-plain.svg"
    case "Docker":
      return "docker/docker-plain.svg"
    case "AWS":
      return "amazonwebservices/amazonwebservices-original.svg"
    case "Figma":
      return "figma/figma-plain.svg"
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
  },
  {
    name: "TypeScript",
    level: 90,
    category: "frontend",
    icon: "devicon-typescript-plain colored",
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    icon: "devicon-javascript-plain colored",
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    icon: "devicon-nextjs-original colored",
  },
  {
    name: "Vue.js",
    level: 80,
    category: "frontend",
    icon: "devicon-vuejs-plain colored",
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: "devicon-tailwindcss-plain colored",
  },

  // Backend
  {
    name: "Node.js",
    level: 85,
    category: "backend",
    icon: "devicon-nodejs-plain colored",
  },
  {
    name: "Python",
    level: 80,
    category: "backend",
    icon: "devicon-python-plain colored",
  },
  {
    name: "Express.js",
    level: 85,
    category: "backend",
    icon: "devicon-express-original colored",
  },
  {
    name: "FastAPI",
    level: 75,
    category: "backend",
    icon: "devicon-fastapi-plain colored",
  },
  {
    name: "GraphQL",
    level: 70,
    category: "backend",
    icon: "devicon-graphql-plain colored",
  },

  // Database
  {
    name: "PostgreSQL",
    level: 85,
    category: "database",
    icon: "devicon-postgresql-plain colored",
  },
  {
    name: "MongoDB",
    level: 80,
    category: "database",
    icon: "devicon-mongodb-plain colored",
  },
  {
    name: "Redis",
    level: 75,
    category: "database",
    icon: "devicon-redis-plain colored",
  },
  {
    name: "Supabase",
    level: 85,
    category: "database",
    icon: "devicon-supabase-plain colored",
  },

  // Tools
  {
    name: "Git",
    level: 90,
    category: "tools",
    icon: "devicon-git-plain colored",
  },
  {
    name: "Docker",
    level: 80,
    category: "tools",
    icon: "devicon-docker-plain colored",
  },
  {
    name: "AWS",
    level: 75,
    category: "tools",
    icon: "devicon-amazonwebservices-original colored",
  },
  {
    name: "Figma",
    level: 85,
    category: "tools",
    icon: "devicon-figma-plain colored",
  },
]

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & DevOps",
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
            learning and expanding my skill set.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category} className="animate-fade-in">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                {categoryLabels[category]}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {skills.filter((skill) => skill.category === category).length}
                </Badge>
              </h3>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Card
                      key={skill.name}
                      className="p-3 hover:bg-card-hover transition-all duration-300 hover:shadow-glow-primary group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
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
                            boxShadow: "0 0 8px hsl(var(--primary) / 0.4)",
                          }}
                        />
                      </div>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
