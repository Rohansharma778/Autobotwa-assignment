"use client"

import type React from "react"

import { useState } from "react"

interface ContactFormProps {
  onSubmit?: (data: {
    name: string
    email: string
    phone: string
    message: string
  }) => void
}

export function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      if (onSubmit) {
        onSubmit(formData)
      }
      setIsSubmitted(true)
      setIsLoading(false)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    }, 800)
  }

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="mb-4 text-4xl">✓</div>
        <h3 className="text-2xl font-semibold text-card-foreground mb-2">Thank you!</h3>
        <p className="text-muted-foreground">We've received your message and will get back to you soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full px-4 py-2 bg-input border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full px-4 py-2 bg-input border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className="w-full px-4 py-2 bg-input border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us more about your fitness goals..."
          rows={5}
          required
          className="w-full px-4 py-2 bg-input border border-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary text-primary-foreground font-semibold py-3 rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
