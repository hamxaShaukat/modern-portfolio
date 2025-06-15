import { Button } from "@/components/ui/button"
import { Play, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  videoUrl: string
  githubUrl: string
  thumbnail: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className="group bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* YouTube Thumbnail */}
      <div className="relative overflow-hidden bg-white/5">
        <div className="aspect-video relative group-hover:scale-105 transition-transform duration-700">
          <Image
            src={project.thumbnail || "/placeholder.svg"}
            alt={`${project.title} thumbnail`}
            fill
            className="object-cover"
          />

          {/* Play overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs bg-white/10 text-white rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            className="flex-1 bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-white/20 group/btn"
            asChild
          >
            <Link href={project.videoUrl} target="_blank">
              <Play className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
              Watch Demo
            </Link>
          </Button>

          <Button
            variant="outline"
            className="flex-1 border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm group/btn"
            asChild
          >
            <Link href={project.githubUrl} target="_blank">
              <Github className="w-4 h-4 mr-2 group-hover/btn:animate-pulse" />
              View Code
            </Link>
          </Button>
        </div>
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  )
}
