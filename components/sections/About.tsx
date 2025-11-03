'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { MapPin, Calendar, Star, Headphones, Package, Hotel, Car, Map } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const featureKeys = [
  { icon: MapPin, titleKey: 'about.expertise.title', descKey: 'about.expertise.desc' },
  { icon: Calendar, titleKey: 'about.itinerary.title', descKey: 'about.itinerary.desc' },
  { icon: Star, titleKey: 'about.destinations.title', descKey: 'about.destinations.desc' },
  { icon: Headphones, titleKey: 'about.support.title', descKey: 'about.support.desc' },
]

const serviceKeys = [
  { icon: Package, titleKey: 'services.tours.title', descKey: 'services.tours.desc' },
  { icon: Hotel, titleKey: 'services.hotel.title', descKey: 'services.hotel.desc' },
  { icon: Car, titleKey: 'services.transport.title', descKey: 'services.transport.desc' },
  { icon: Map, titleKey: 'services.custom.title', descKey: 'services.custom.desc' },
]

const pricingTierKeys = ['services.pricing.basic', 'services.pricing.standard', 'services.pricing.premium']

export default function About() {
  const { t } = useLanguage()
  return (
    <section
      id="about"
      className="section-padding bg-gray-50 relative overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            {t('about.title')}
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Orange Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-orange-500 p-8"
          >
            <div className="space-y-6">
              {featureKeys.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={feature.titleKey} className="text-white">
                    <div className="flex items-start gap-4 mb-2">
                      <div className="w-12 h-12 bg-white/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-white/90 text-sm">
                          {t(feature.descKey)}
                        </p>
                      </div>
                    </div>
                    {index < featureKeys.length - 1 && (
                      <div className="border-t border-white/20 mt-4" />
                    )}
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Services List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {serviceKeys.map((service, index) => {
                const Icon = service.icon
                return (
                  <div key={service.titleKey} className="border-b border-gray-200 pb-4 last:border-0">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-black flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-black">
                          {t(service.titleKey)}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {t(service.descKey)}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-2 text-black">
            {t('services.pricing.title')}
          </h3>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
            {t('services.pricing.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ name: pricingTierKeys[0], price: '$299', popular: false }, { name: pricingTierKeys[1], price: '$599', popular: true }, { name: pricingTierKeys[2], price: '$999', popular: false }].map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, rotate: 1 }}
              className={`relative p-8 border border-gray-300 transition-all duration-300 ${
                tier.popular
                  ? 'bg-black text-white scale-105'
                  : 'bg-white border border-gray-300'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white border border-gray-300 text-black text-sm font-semibold">
                  {t('services.pricing.popular')}
                </div>
              )}
              <h4 className="text-2xl font-bold mb-2">{t(tier.name)}</h4>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-lg opacity-80">/person</span>
              </div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span className={tier.popular ? 'text-white' : 'text-gray-600'}>Feature 1</span>
                </li>
              </ul>
              <Button
                variant={tier.popular ? 'secondary' : 'primary'}
                size="md"
                className="w-full"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t('services.pricing.contact')}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
