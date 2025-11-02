'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Button from '../ui/Button'
import { MapPin } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

type Category = 'All' | 'Beaches' | 'Temples' | 'Nature' | 'Adventure'

const categoryKeys: Record<Category, string> = {
  'All': 'destinations.filter.all',
  'Beaches': 'destinations.filter.beaches',
  'Temples': 'destinations.filter.temples',
  'Nature': 'destinations.filter.nature',
  'Adventure': 'destinations.filter.adventure',
}

interface Destination {
  id: number
  name: string
  category: Category[]
  description: string
  image: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Ubud',
    category: ['Nature', 'Adventure'],
    description: 'Rice terraces, monkey forest, and cultural heart of Bali',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
  {
    id: 2,
    name: 'Uluwatu',
    category: ['Temples', 'Beaches'],
    description: 'Clifftop temple with stunning ocean views and sunsets',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
  {
    id: 3,
    name: 'Canggu',
    category: ['Beaches', 'Adventure'],
    description: 'Vibrant beaches, surf spots, and trendy cafes',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 4,
    name: 'Nusa Penida',
    category: ['Nature', 'Beaches'],
    description: 'Crystal Bay, Kelingking Beach, and pristine waters',
    image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80',
  },
  {
    id: 5,
    name: 'Seminyak',
    category: ['Beaches'],
    description: 'Luxury beach clubs, nightlife, and upscale dining',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
  {
    id: 6,
    name: 'Tegallalang',
    category: ['Nature'],
    description: 'Iconic rice terraces with breathtaking valley views',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
  {
    id: 7,
    name: 'Tanah Lot',
    category: ['Temples'],
    description: 'Ancient sea temple on a rock formation',
    image: 'https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?w=800&q=80',
  },
  {
    id: 8,
    name: 'Mount Batur',
    category: ['Nature', 'Adventure'],
    description: 'Sunrise trekking with panoramic views',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 9,
    name: 'Sanur',
    category: ['Beaches'],
    description: 'Calm beaches perfect for families and relaxation',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
  },
]

const categories: Category[] = ['All', 'Beaches', 'Temples', 'Nature', 'Adventure']

export default function Destinations() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')

  const filteredDestinations = selectedCategory === 'All'
    ? destinations
    : destinations.filter(dest => dest.category.includes(selectedCategory))

  return (
    <section id="destinations" className="section-padding bg-light-bg-primary dark:bg-dark-bg-primary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary">
            {t('destinations.title')}
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t('destinations.subtitle')}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-light-brand-green to-light-brand-blue dark:from-dark-brand-gold dark:to-dark-brand-teal text-white shadow-lg'
                  : 'bg-light-bg-secondary dark:bg-dark-bg-secondary text-light-text-secondary dark:text-dark-text-secondary hover:bg-light-brand-green/10 dark:hover:bg-dark-brand-gold/10'
              }`}
            >
              {t(categoryKeys[category])}
            </button>
          ))}
        </motion.div>

        {/* Destinations Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="gradient-overlay" />
                  <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    {destination.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 text-xs font-medium bg-white/90 dark:bg-dark-bg-primary/90 rounded-full text-light-text-primary dark:text-dark-text-primary"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4" />
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                  <p className="text-sm text-white/90 mb-4">{destination.description}</p>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      // Handle explore click
                    }}
                    className="w-full"
                  >
                    {t('destinations.cta')}
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

