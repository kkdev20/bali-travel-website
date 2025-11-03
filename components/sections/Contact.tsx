'use client'

import { useState, FormEvent, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Input from '../ui/Input'
import Button from '../ui/Button'
import Card from '../ui/Card'
import { Send, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
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
]

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    travelDates: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToPrevious = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentTestimonialIndex]

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        travelDates: '',
      })
    }, 3000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            {t('contact.title')}
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 !border-gray-300 !border">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500 dark:bg-amber-500 flex items-center justify-center">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-light-text-primary dark:text-dark-text-primary">
                    {t('contact.form.thanks')}
                  </h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {t('contact.form.success')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('contact.form.name')}
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t('contact.form.placeholder.name')}
                      className="!border-gray-300 !border"
                    />
                    <Input
                      label={t('contact.form.email')}
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t('contact.form.placeholder.email')}
                      className="!border-gray-300 !border"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label={t('contact.form.phone')}
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={t('contact.form.placeholder.phone')}
                      className="!border-gray-300 !border"
                    />
                    <Input
                      label={t('contact.form.dates')}
                      type="text"
                      value={formData.travelDates}
                      onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                      placeholder={t('contact.form.placeholder.dates')}
                      className="!border-gray-300 !border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t('contact.form.placeholder.message')}
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-300 transition-colors text-black resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {}}
                  >
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 h-full !border-gray-300 !border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-light-text-primary dark:text-dark-text-primary">
                  {t('testimonials.title')}
                </h3>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {t('testimonials.subtitle')}
                </p>
              </div>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-4 border-emerald-500 dark:border-amber-500">
                      <Image
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex justify-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                          }`}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="text-sm italic text-light-text-primary dark:text-dark-text-primary mb-4">
                      "{currentTestimonial.text}"
                    </p>
                    <h4 className="font-semibold text-light-text-primary dark:text-dark-text-primary">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                      {currentTestimonial.location}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <motion.button
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-md hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-light-text-primary dark:text-dark-text-primary" />
                </motion.button>
                <motion.button
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary shadow-md hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-light-text-primary dark:text-dark-text-primary" />
                </motion.button>

                {/* Navigation Dots */}
                <div className="flex justify-center mt-6 gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonialIndex
                          ? 'bg-emerald-500 dark:bg-amber-500'
                          : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

