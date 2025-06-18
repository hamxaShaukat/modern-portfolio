import ProjectCard from "@/components/ProjectCard"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Tools Directory",
      description:
        "A Next.js-powered directory where users list AI tools for sale, with role-based access control (Admin/User).",
      tech: ["Next.js", "Prisma", "MongoDB", "TailwindCSS", "Stripe"],
      videoUrl: "https://vimeo.com/1093603999/0e7c66ce28",
      githubUrl: "https://github.com/hamxaShaukat/ai-tools-directory-v1.git",
      thumbnail: "https://img.youtube.com/vi/rCHsX_Z9nGk/maxresdefault.jpg",
    },
    {
      id: 2,
      title: "Twitter Clone",
      description:
        "A lightweight Next.js Twitter clone with text-only tweets, follows, and profile customization.",
      tech: ["Next.js", "MongoDB", "Prisma", "NextAuth.js", "TailwindCSS"],
      videoUrl: "https://vimeo.com/1093604251/3af36361c6",
      githubUrl: "https://github.com/hamxaShaukat/twitter-clone.git",
      thumbnail: "https://img.youtube.com/vi/y5n5v_43y4I/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "AirBnb Clone",
      description:
        "A full-stack Next.js application mimicking AirBnB's core functionality with 3-tier role access (Guest/Host/Admin).",
      tech: ["Next.js", "MongoDB", "Prisma", "NextAuth.js", "TailwindCSS"],
       videoUrl: "https://vimeo.com/1093604528/b673efe079",
      githubUrl: "https://github.com/hamxaShaukat/airbnb-clone.git",
      thumbnail: "https://img.youtube.com/vi/XWJ-2g1s3Sk/maxresdefault.jpg",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-white/3 rounded-full blur-3xl animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform cursor-default">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors max-w-2xl mx-auto">
            Showcasing my latest work with modern technologies and innovative solutions
          </p>
        </div>

        {/* Simple 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
