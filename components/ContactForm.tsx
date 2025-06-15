"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, User, Mail, MessageSquare, Loader2, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("https://formspree.io/f/xnnvdojg", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", subject: "", message: "" })
      } else {
        console.error("Form submission error:", await res.text())
      }
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setIsSubmitted(false), 4000)
    }
  }

  return (
    <Card className="bg-black/30 border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />

      <CardContent className="p-8 relative z-10">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white flex items-center gap-2">
                <User className="w-4 h-4" />
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-white">Subject</Label>
            <Input
              id="subject"
              name="subject"
              value={formState.subject}
              onChange={handleChange}
              placeholder="What's this about?"
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              rows={5}
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || isSubmitted}
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-white/20 group/btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : isSubmitted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
