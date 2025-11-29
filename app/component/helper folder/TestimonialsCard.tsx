"use client"

import Image from "next/image"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  image: string
  name: string
  testimonial: string
  rating: number
}

export default function TestimonialCard({ image, name, testimonial, rating }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-200">
      {/* Rating Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-card-foreground text-sm leading-relaxed">{testimonial}</p>

      {/* Profile Section */}
      <div className="flex gap-3 items-center mt-2 pt-4 border-t border-border">
        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col">
          <h5 className="font-semibold text-card-foreground text-sm">{name}</h5>
        </div>
      </div>
    </div>
  )
}
