'use client'
export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400 hover:text-gray-300 transition-colors">
          © {new Date().getFullYear()} Hamza Shaukat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
