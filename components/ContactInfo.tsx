'use client'
import { Mail, Phone, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      info: "hamzashaukat714@gmail.com",
      href: "mailto:hamzashaukat714@gmail.com",
    },
    { icon: Phone, title: "Phone", info: "+92 327 4562696", href: "tel:+923274562696" },
    { icon: "📍", title: "Location", info: "Lahore, Pakistan", href: "#" },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/hamxaShaukat", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hamza-shaukat-38513024b/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hamzashaukat714@gmail.com", label: "Email" },
  ]

  return (
    <div className="space-y-8">
      <div className="grid gap-6">
        {contactDetails.map((contact, index) => (
          <div
            key={contact.title}
            className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm group animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 backdrop-blur-sm border border-white/10 group-hover:shadow-lg group-hover:shadow-white/20">
              {typeof contact.icon === "string" ? (
                <div className="text-xl">{contact.icon}</div>
              ) : (
                <contact.icon className="w-6 h-6 group-hover:animate-pulse" />
              )}
            </div>
            <div>
              <h3 className="text-lg font-semibold group-hover:scale-105 transition-transform">{contact.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{contact.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex space-x-4">
        {socialLinks.map((social, index) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-500 transform hover:scale-125 hover:rotate-12 backdrop-blur-sm border border-white/10 hover:shadow-lg hover:shadow-white/20 group animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <social.icon className="w-6 h-6 group-hover:animate-pulse" />
          </Link>
        ))}
      </div>
    </div>
  )
}
