"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageSliderProps {
  images: string[]
  autoPlay?: boolean
  autoPlayInterval?: number
  showContent?: boolean
  heading?: string
  subtext?: string
  ctaText?: string
  onCTAClick?: () => void
}

export function ImageSlider({
  images,
  autoPlay = true,
  autoPlayInterval = 2800,
  showContent = false,
  heading = "",
  subtext = "",
  ctaText = "",
  onCTAClick = () => {},
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay)

  useEffect(() => {
    if (!isAutoPlay || images.length === 0) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [isAutoPlay, images.length, autoPlayInterval])

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev()
    if (e.key === "ArrowRight") next()
  }

  if (images.length === 0) {
    return (
      <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg">
        <p className="text-muted-foreground">No images available</p>
      </div>
    )
  }

  return (
    <div
      className="relative w-full bg-background rounded-lg overflow-hidden group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(autoPlay)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Image slider"
      tabIndex={0}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted">
        {images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {showContent && (
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-pretty">{heading}</h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty">{subtext}</p>
              <button
                onClick={onCTAClick}
                className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                {ctaText}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </div>
  )
}
