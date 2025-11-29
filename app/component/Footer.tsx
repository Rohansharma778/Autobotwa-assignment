"use client"

import { Instagram, Facebook, Youtube, MessageCircle } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
    { name: "WhatsApp", icon: MessageCircle, url: "#" },
  ]

  const features = [
    "Personal Certified Trainers",
    "Modern Machines",
    "Personal Lockers",
    "Clean & Hygienic Space",
    "Flexible Memberships",
  ]

  return (
    <footer className="bg-primary text-primary-foreground mt-16 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2 text-sm opacity-90">
              {features.map((feature) => (
                <li key={feature} className="hover:opacity-100 transition-opacity">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div>
                <p className="font-medium mb-1">Address:</p>
                <p>Mumbai, Maharashtra, India</p>
              </div>
              <div>
                <p className="font-medium mb-1">Phone:</p>
                <p>+91 984-575-8964</p>
              </div>
              <div>
                <p className="font-medium mb-1">Email:</p>
                <p>info@Reformfitness.com</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="hover:opacity-75 transition-opacity"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Brand Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Reform Fitness</h4>
            <p className="text-sm opacity-90">
              Personalised workouts, real accountability, and sustainable results—built around your lifestyle.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">© 2025 Reform Fitness. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
