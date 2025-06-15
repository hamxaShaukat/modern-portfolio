"use client"

import { useState, useEffect } from "react"
import { Code } from "lucide-react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loadingText, setLoadingText] = useState("Crafting Excellence")
  const [loadingProgress, setLoadingProgress] = useState(0)

  const loadingTexts = [
    "Crafting Excellence",
    "Unveiling Masterpiece",
    "Loading Innovation",
    "Building Dreams",
    "Creating Magic",
    "Preparing Experience",
  ]

  useEffect(() => {
    let textIndex = 0
    let progress = 0

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % loadingTexts.length
      setLoadingText(loadingTexts[textIndex])
    }, 800)

    const progressInterval = setInterval(() => {
      progress += Math.random() * 15
      if (progress >= 100) {
        progress = 100
        setLoadingProgress(100)
        setTimeout(() => {
          onLoadingComplete()
        }, 500)
        clearInterval(progressInterval)
        clearInterval(textInterval)
      } else {
        setLoadingProgress(progress)
      }
    }, 200)

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
    }
  }, [onLoadingComplete])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-white/8 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tl from-white/6 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-white/40 rotate-12 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/35 rounded-full animate-bounce-slow"></div>
        <div className="absolute top-2/3 right-1/3 w-5 h-5 border-2 border-white/25 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="text-center relative z-10">
        {/* Main loading content */}
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 animate-pulse-3d">
            <Code className="w-12 h-12 text-white animate-spin-slow" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-gradient-x">
            {loadingText}
          </h1>

          <p className="text-gray-400 text-lg mb-8 animate-fade-in-up">Preparing an extraordinary experience...</p>
        </div>

        {/* Progress bar */}
        <div className="w-80 mx-auto">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Loading</span>
            <span>{Math.round(loadingProgress)}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2 backdrop-blur-sm border border-white/20">
            <div
              className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-300 shadow-lg shadow-white/20"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
          <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
        </div>
      </div>
    </div>
  )
}
