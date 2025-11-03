'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { Package, Hotel, Car, Map } from 'lucide-react'
import { useLanguage } from '../providers/LanguageProvider'

const serviceKeys = [
  { icon: Package, titleKey: 'services.tours.title', descKey: 'services.tours.desc' },
  { icon: Hotel, titleKey: 'services.hotel.title', descKey: 'services.hotel.desc' },
  { icon: Car, titleKey: 'services.transport.title', descKey: 'services.transport.desc' },
  { icon: Map, titleKey: 'services.custom.title', descKey: 'services.custom.desc' },
]

const pricingTierKeys = ['services.pricing.basic', 'services.pricing.standard', 'services.pricing.premium']

export default function Services() {
  const { t } = useLanguage()
  return (
    <section id="services" className="section-padding bg-light-bg-secondary dark:bg-dark-bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-light-text-primary dark:text-dark-text-primary">
            {t('services.title')}
          </h2>
          <p className="text-base text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceKeys.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={service.titleKey} delay={index * 0.1} className="text-center">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500 dark:bg-amber-500 flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-light-text-primary dark:text-dark-text-primary">
                  {t(service.titleKey)}
                </h3>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  {t(service.descKey)}
                </p>
              </Card>
            )
          })}
        </div>

        {/* Pricing Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-3 text-light-text-primary dark:text-dark-text-primary">
            {t('services.pricing.title')}
          </h3>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
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
              className={`relative rounded-2xl p-8 shadow-xl transition-all duration-300 ${
                tier.popular
                  ? 'bg-emerald-500 dark:bg-amber-500 text-white scale-105'
                  : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-white dark:bg-dark-bg-primary text-light-brand-green dark:text-dark-brand-gold rounded-full text-sm font-semibold">
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
                  <span className={tier.popular ? 'text-white' : 'text-light-text-secondary dark:text-dark-text-secondary'}>Feature 1</span>
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

