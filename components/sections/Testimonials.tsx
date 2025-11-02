'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

interface Testimonial {
  id: number
  name: string
  location: string
  rating: number
  text: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Australia',
    rating: 5,
    text: 'Our trip to Bali exceeded all expectations! The custom itinerary perfectly matched our interests, and the local guides were incredibly knowledgeable. Highly recommend!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    rating: 5,
    text: 'Amazing experience from start to finish. The team helped us discover hidden gems we never would have found on our own. The sunset at Uluwatu was magical!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
  },
  {
    id: 3,
    name: 'Emma Thompson',
    location: 'UK',
    rating: 5,
    text: 'Professional service and attention to detail. Every recommendation was spot-on. The rice terraces tour was a highlight of our trip. Will definitely book again!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    location: 'Spain',
    rating: 5,
    text: 'The best travel experience we\'ve had! From airport pickup to daily activities, everything was seamless. The team truly knows Bali inside and out.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    location: 'Canada',
    rating: 5,
    text: 'Outstanding service and beautiful destinations. We felt taken care of throughout our entire stay. The Nusa Penida day trip was absolutely breathtaking!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80',
  },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-light-bg-primary dark:bg-dark-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-2xl p-8 md:p-12 shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-light-brand-green/20 dark:ring-dark-brand-gold/20">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6 italic max-w-2xl">
                  "{testimonials[currentIndex].text}"
                </p>

                <div>
                  <h4 className="text-xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-light-bg-primary dark:bg-dark-bg-primary shadow-lg hover:bg-light-brand-green dark:hover:bg-dark-brand-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-light-bg-primary dark:bg-dark-bg-primary shadow-lg hover:bg-light-brand-green dark:hover:bg-dark-brand-gold transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-light-brand-green dark:bg-dark-brand-gold w-8'
                    : 'bg-light-brand-green/30 dark:bg-dark-brand-gold/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

