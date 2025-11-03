'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../ui/Button'
import { ArrowDown } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section
      id="home"
      className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&q=80"
          alt="Bali Rice Terraces"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20" />
      </div>

      {/* Text Content */}
      <div className="container-custom section-padding relative z-10 pt-16 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right max-w-md ml-auto -mr-4 sm:-mr-6 lg:-mr-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3 text-white"
          >
            {t('hero.title')}{' '}
            <span className="text-white border-b-4 border-white">
              Bali
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-white/90 mb-5 md:mb-6"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-end items-end"
          >
            <Button
              href="#destinations"
              variant="primary"
              size="sm"
              className="min-w-[160px] !border-0 hover:bg-orange-500 hover:text-white"
            >
              {t('hero.cta.explore')}
            </Button>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="min-w-[160px] px-5 py-2.5 text-sm font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-black hover:border-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta.plan')}
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 flex justify-end"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/80 cursor-pointer"
              onClick={() => {
                document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="text-sm">{t('hero.scroll')}</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
