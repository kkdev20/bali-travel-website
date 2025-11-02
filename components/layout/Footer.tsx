'use client'

import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '../providers/LanguageProvider'

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:info@balitravel.com', label: 'Email' },
  { icon: Phone, href: 'tel:+6281234567890', label: 'Phone' },
]

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-light-bg-secondary dark:bg-dark-bg-secondary border-t border-light-brand-green/10 dark:border-dark-brand-gold/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-light-brand-green to-light-brand-blue dark:from-dark-brand-gold dark:to-dark-brand-teal bg-clip-text text-transparent mb-4">
              🌴 Bali Travel
            </h3>
            <p className="text-light-text-secondary dark:text-dark-text-secondary text-sm">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
              {t('footer.links.title')}
            </h4>
            <ul className="space-y-2">
              {['Destinations', 'Services', 'Gallery', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-green dark:hover:text-dark-brand-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-light-text-primary dark:text-dark-text-primary">
              {t('footer.contact.title')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                <MapPin className="w-4 h-4" />
                <span>Denpasar, Bali, Indonesia</span>
              </div>
              <div className="flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-light-bg-primary dark:bg-dark-bg-primary hover:bg-light-brand-green dark:hover:bg-dark-brand-gold transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-light-brand-green/10 dark:border-dark-brand-gold/10 text-center text-sm text-light-text-secondary dark:text-dark-text-secondary">
          <p>&copy; {new Date().getFullYear()} Bali Travel. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

