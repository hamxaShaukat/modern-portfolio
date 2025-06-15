"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"

export default function About() {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownload = () => {
    setIsLoading(true)

    // Simulate delay for loading animation
    setTimeout(() => {
      const link = document.createElement("a")
      link.href = "/resume.pdf"
      link.download = "hamza_shaukat.pdf"
      link.click()
      setIsLoading(false)
    }, 1200) // adjust for effect
  }

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform cursor-default">About Me</h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed hover:text-gray-300 transition-colors">
              I&apos;m a passionate full-stack developer based in Lahore, Pakistan, with expertise in modern web
              technologies. I love creating seamless user experiences and robust backend systems that solve real-world
              problems.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed hover:text-gray-300 transition-colors">
              With a strong foundation in both frontend and backend development, I specialize in building scalable
              applications using React, Next.js, Node.js, and modern database solutions.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse group-hover:scale-150 transition-transform"></div>
                <span>Based in Lahore, Pakistan</span>
              </div>
            </div>
            <Button
              onClick={handleDownload}
              disabled={isLoading}
              className="bg-white text-black hover:bg-gray-200 transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-xl hover:shadow-white/20 group flex items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Preparing...
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  Download Resume
                </>
              )}
            </Button>
          </div>

          <div className="animate-fade-in-right">
            <div className="relative group">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-500 hover:rotate-3 group-hover:shadow-2xl group-hover:shadow-white/10">
                <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/5 hover:scale-110 transition-all duration-300">
                  <div className="text-9xl animate-float group-hover:scale-110 transition-transform">👨‍💻</div>
                </div>
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border border-white/30 rotate-45 animate-spin-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
