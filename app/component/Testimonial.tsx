"use client"

import React from 'react'
import TestimonialCard  from './helper folder/TestimonialsCard'
import person1 from '../assest/person1.png'
import person2 from '../assest/person2.png'
import person3 from '../assest/person3.png'



const Testimonial = () => {
  const testimonials = [
     {
      image: person1.src,
      name: "Amy watson",
      testimonial: "I love how clean the gym is and how supportive the trainers are. They genuinely care about your progress. Reform Fitness Fitness feels like a second home now.",
      rating: 5
    },
    {
      image: person2.src,
      name: "David camron",
      testimonial: "I started as a complete beginner, but the trainers made everything easy to understand. I feel stronger, more confident, and look forward to training every day now.",
      rating: 5
    },
    {
      image: person3.src,
      name: "Taylor anderson",
      testimonial: "The modern equipment and personalised workout plans helped me gain visible muscle within weeks. Easily the best gym experience I've had.",
      rating: 5
    }
  ]

  return (
     <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              testimonial={testimonial.testimonial}
              rating={testimonial.rating}
            />
          ))}
          </div>
        </div>
  )
}

export default Testimonial

//  