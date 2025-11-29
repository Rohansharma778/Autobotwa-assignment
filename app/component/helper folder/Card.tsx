"use client"

interface FeatureCardProps {
  image: string
  heading: string
  description?: string
  onClick?: () => void
}

export default function FeatureCard({ image, heading, description, onClick }: FeatureCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer h-80"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if ((e.key === "Enter" || e.key === " ") && onClick) {
          onClick()
        }
      }}
    >
      {/* Background Image */}
      <img
        src={image || "/placeholder.svg"}
        alt={heading}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <h5 className="text-xl md:text-2xl font-bold text-white text-center text-pretty">{heading}</h5>
        {description && (
          <p className="text-sm md:text-base text-white/80 text-center mt-3 text-pretty max-w-xs">{description}</p>
        )}
      </div>
    </div>
  )
}
