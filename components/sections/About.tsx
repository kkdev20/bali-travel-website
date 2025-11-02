'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { MapPin, Calendar, Star, Headphones } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const featureKeys = [
  { icon: MapPin, titleKey: 'about.expertise.title', descKey: 'about.expertise.desc' },
  { icon: Calendar, titleKey: 'about.itinerary.title', descKey: 'about.itinerary.desc' },
  { icon: Star, titleKey: 'about.destinations.title', descKey: 'about.destinations.desc' },
  { icon: Headphones, titleKey: 'about.support.title', descKey: 'about.support.desc' },
]

export default function About() {
  const { t } = useLanguage()
  return (
    <section
      id="about"
      className="section-padding bg-light-bg-secondary dark:bg-dark-bg-secondary relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-light-text-primary dark:text-dark-text-primary">
            {t('about.title')}
          </h2>
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={feature.titleKey} delay={index * 0.1} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-light-brand-green to-light-brand-blue dark:from-dark-brand-gold dark:to-dark-brand-teal flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  {t(feature.descKey)}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

