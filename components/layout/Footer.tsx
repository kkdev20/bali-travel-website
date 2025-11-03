'use client'

import { Instagram, Mail, Phone, MapPin, Plane } from 'lucide-react'
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
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
              <Plane className="w-6 h-6" />
              Bali Travel
            </h3>
            <p className="text-gray-600 text-sm">
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
            <h4 className="font-semibold mb-4 text-black">
              {t('footer.links.title')}
            </h4>
            <ul className="space-y-2">
              {['Destinations', 'Services', 'About'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-gray-600 hover:text-black transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-1"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.223083668635!2d115.216977!3d-8.670458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e0e3a45%3A0x501e8f1fc2911c0!2sDenpasar%2C%20Bali%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border border-gray-300"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4 text-black">
              {t('footer.contact.title')}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
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
                    className="p-2 border border-gray-300 bg-white hover:bg-gray-100 transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 text-black" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Bali Travel. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

