"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Code, Rocket, Zap, ChevronDown } from "lucide-react"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative" ref={heroRef}>
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 border border-white/20 rotate-45 animate-float-3d hover-tilt"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-white/5 backdrop-blur-sm rotate-12 animate-float-3d-delayed hover-tilt"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border-2 border-white/30 rounded-full animate-pulse-3d hover-tilt"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <div className="animate-hero-entrance">
          <div className="mb-8 animate-float">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-white/20 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 hover:scale-110 transition-all duration-500 hover:rotate-12">
              <Code className="w-16 h-16 text-white animate-pulse" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-gradient-x">
              Hamza Shaukat
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up-delayed">
            A full-stack developer crafting powerful web applications with modern technologies and clean code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-white text-black hover:bg-gray-200 transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-white/20 group"
            >
              <Rocket className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-white/20 text-white hover:bg-white/10 transition-all duration-500 hover:scale-110 hover:-rotate-1 backdrop-blur-sm group"
            >
              <Zap className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
