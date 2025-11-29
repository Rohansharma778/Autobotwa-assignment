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
      className="relative w-full bg-background overflow-hidden group"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(autoPlay)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Image slider"
      tabIndex={0}
    >
      {/* RF Logo - Top Left Corner */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
        <span className="text-2xl md:text-3xl font-black text-black tracking-tight">RF</span>
      </div>

      {/* Image Container - MOBILE OPTIMIZED */}
      <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen overflow-hidden bg-muted">
        {images.map((image, index) => (
          <img
            key={index}
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {showContent && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
              {/* HEADING - Mobile First Responsive */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2">
                {heading}
              </h2>
              
              {/* SUBTEXT - Mobile First Responsive */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4">
                {subtext}
              </p>
              
              {/* CTA BUTTON - Mobile First Responsive */}
              <button
                onClick={onCTAClick}
                className="bg-white text-black px-6 py-3 sm:px-8 sm:py-3.5 md:px-10 md:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white shadow-lg active:scale-95"
              >
                {ctaText}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Arrows - Hidden on Small Screens */}
      <button
        onClick={prev}
        className="hidden md:block absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      <button
        onClick={next}
        className="hidden md:block absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
      </button>

      {/* Dot Indicators - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === current 
                ? "bg-white w-4 sm:w-6" 
                : "bg-white/50 hover:bg-white/75 w-1.5 sm:w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </div>
  )
}