'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, MapPin } from 'lucide-react'

const socialLinks = [
  { icon: Phone, href: 'https://wa.me/6281234567890', label: 'WhatsApp', color: 'bg-green-500 hover:bg-green-600' },
  { icon: Mail, href: 'mailto:info@balitravel.com', label: 'Email', color: 'bg-blue-500 hover:bg-blue-600' },
  { icon: Instagram, href: 'https://instagram.com/balitravel', label: 'Instagram', color: 'bg-pink-500 hover:bg-pink-600' },
  { icon: MapPin, href: 'https://maps.google.com/?q=Denpasar,Bali', label: 'Location', color: 'bg-orange-500 hover:bg-orange-600' },
]

export default function FixedSocialIcons() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
      {socialLinks.map((link, index) => {
        const Icon = link.icon
        return (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`${link.color} w-12 h-12 flex items-center justify-center text-white border-2 border-black transition-colors`}
            aria-label={link.label}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        )
      })}
    </div>
  )
}

