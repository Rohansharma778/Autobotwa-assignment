"use client"

import React from 'react'
import { ImageSlider } from './helper folder/ImageSlider'
import pool from '../assest/pool.avif'
import sauna from '../assest/sauna.jpg'
import CARDIO from '../assest/CARDIO.webp'
import gym from '../assest/gym.avif'

const Hero_Section = () => {
  const images = [
    CARDIO.src,
    gym.src,
    pool.src,
    sauna.src,
  ]
 
  
  const handleStartJourney = () => {
    console.log("Start Your Fitness Journey clicked!")
  }
  return (
    <>
      <ImageSlider
          images={images}
          autoPlay={true}
          autoPlayInterval={5000}
          showContent={true}
          heading="Transform Your Body. Transform Your Life."
          subtext="Personalised workouts, real accountability, and sustainable results—built around your lifestyle."
          ctaText="Start Your Fitness Journey"
          onCTAClick={handleStartJourney}
        />
    </>
  )
}

export default Hero_Section