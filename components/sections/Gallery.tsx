'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Modal from '../ui/Modal'
import { X } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

type Category = 'All' | 'Beaches' | 'Culture' | 'Food' | 'Nature'

const galleryCategoryKeys: Record<Category, string> = {
  'All': 'gallery.filter.all',
  'Beaches': 'gallery.filter.beaches',
  'Culture': 'gallery.filter.culture',
  'Food': 'gallery.filter.food',
  'Nature': 'gallery.filter.nature',
}

interface GalleryImage {
  id: number
  src: string
  category: Category[]
  alt: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', category: ['Nature'], alt: 'Rice terraces in Ubud' },
  { id: 2, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', category: ['Beaches'], alt: 'Beautiful Bali beach' },
  { id: 3, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', category: ['Beaches'], alt: 'Ocean view from cliff' },
  { id: 4, src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', category: ['Nature'], alt: 'Tropical forest' },
  { id: 5, src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', category: ['Culture'], alt: 'Balinese temple' },
  { id: 6, src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80', category: ['Food'], alt: 'Balinese cuisine' },
  { id: 7, src: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80', category: ['Beaches'], alt: 'Sunset at beach' },
  { id: 8, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', category: ['Nature'], alt: 'Waterfall in jungle' },
  { id: 9, src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', category: ['Culture'], alt: 'Traditional dance' },
  { id: 10, src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80', category: ['Food'], alt: 'Local delicacies' },
  { id: 11, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', category: ['Beaches'], alt: 'Crystal clear water' },
  { id: 12, src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', category: ['Nature'], alt: 'Mountain vista' },
  { id: 13, src: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80', category: ['Nature'], alt: 'Tropical flowers' },
]

const categories: Category[] = ['All', 'Beaches', 'Culture', 'Food', 'Nature']

export default function Gallery() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category.includes(selectedCategory))

  return (
    <section id="gallery" className="section-padding bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-light-text-primary dark:text-dark-text-primary">
            {t('gallery.title')}
          </h2>
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
                  ? 'bg-emerald-500 dark:bg-amber-500 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {t(galleryCategoryKeys[category])}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal */}
        <Modal
          isOpen={selectedImage !== null}
          onClose={() => setSelectedImage(null)}
        >
          {selectedImage && (
            <div className="p-4">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <p className="text-center text-light-text-primary dark:text-dark-text-primary font-medium">
                {selectedImage.alt}
              </p>
            </div>
          )}
        </Modal>
      </div>
    </section>
  )
}

