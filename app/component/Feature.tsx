"use client"

import React from 'react'
import Card from './helper folder/Card'
import trainer from '../assest/trainer.avif'
import machines from '../assest/machines.avif'
import locker from '../assest/locker.avif'

const Feature = () => {
  const features = [
    {
      image: trainer.src,
      heading: "Train With Certified Experts",
      description: "Our certified trainers provide personalised guidance tailored to your goals."
    },
    {
      image: machines.src,
      heading: "Cutting-Edge Equipment for Every Workout",
      description: "Experience the latest strength and cardio machines designed for maximum performance."
    },
    {
      image: locker.src,
      heading: "Secure Personal Lockers",
      description: "Our dedicated locker area offers secure, spacious, and easy-access storage for all your essentials."
    }
  ]
  
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for an exceptional fitness experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              image={feature.image}
              heading={feature.heading}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature