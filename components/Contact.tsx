'use client'
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white/3 rounded-full blur-2xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 hover:scale-105 transition-transform cursor-default">
            Let&apos;s Work Together
          </h2>
          <p className="text-gray-400 text-lg hover:text-gray-300 transition-colors">
            Ready to bring your next project to life? Let&apos;s connect and discuss how we can collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
