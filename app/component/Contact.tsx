"use client"

import React from 'react'
import {ContactForm} from './ContactForm'

const Contact = () => {
  return (
      <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Get In Touch</h2>
          <p className="text-muted-foreground mb-8">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
          <ContactForm />
        </div>
  )
}

export default Contact
