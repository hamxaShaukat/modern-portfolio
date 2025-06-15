'use client'
interface BackgroundElementsProps {
  scrollY: number
}

export default function BackgroundElements({ scrollY }: BackgroundElementsProps) {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-gradient-to-tr from-white/8 to-transparent rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-gradient-to-tl from-white/6 to-transparent rounded-full blur-3xl animate-float-slow"></div>

      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-1/4 w-4 h-4 bg-white/20 rotate-45 animate-spin-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 border border-white/30 rotate-12 animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/25 rounded-full animate-bounce-slow"></div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Parallax Elements */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/40 rounded-full"></div>
        <div className="absolute top-1/2 right-20 w-1 h-1 bg-white/60 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-white/50 rounded-full"></div>
      </div>
    </div>
  )
}
