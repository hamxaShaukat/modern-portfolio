'use client'
import { Card, CardContent } from "@/components/ui/card"
import { Code, Zap, Rocket, Star } from "lucide-react"

export default function Skills() {
  const skills = {
    frontend: [
      { name: "React.js", icon: Code },
      { name: "Next.js", icon: Zap },
      { name: "TailwindCSS", icon: Rocket },
      { name: "shadcn/ui", icon: Star },
    ],
    backend: [
      { name: "Prisma", icon: Code },
      { name: "Node.js", icon: Zap },
      { name: "Express.js", icon: Rocket },
    ],
    database: [
      { name: "MySQL", icon: Code },
      { name: "MongoDB", icon: Zap },
    ],
    baas: [
      { name: "Supabase", icon: Rocket },
      { name: "Firebase", icon: Star },
    ],
  }

  return (
    <section id="skills" className="py-20 bg-white/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-white/3 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform cursor-default">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, techs], index) => (
            <Card
              key={category}
              className="bg-black/50 border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 animate-fade-in-up group backdrop-blur-sm hover:shadow-2xl hover:shadow-white/20 hover:rotate-1 relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <CardContent className="p-6 relative z-10">
                {/* Floating glow orb */}
                <div className="absolute top-2 right-2 w-3 h-3 bg-white/60 rounded-full animate-pulse group-hover:scale-150 group-hover:bg-white/80 transition-all duration-500 shadow-lg shadow-white/50"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-white/20 to-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-white/30">
                    <Code className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold capitalize text-white group-hover:scale-105 transition-transform">
                    {category === "baas" ? "BaaS" : category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {techs.map((tech, techIndex) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-3 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group-hover:scale-105 cursor-pointer animate-fade-in-up border border-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-white/10"
                      style={{ animationDelay: `${index * 150 + techIndex * 100}ms` }}
                    >
                      <div className="animate-float" style={{ animationDelay: `${techIndex * 200}ms` }}>
                        <tech.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white font-medium">{tech.name}</span>
                      <div className="ml-auto w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
