'use client'

import { useLanguage } from '../providers/LanguageProvider'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative px-3 py-1.5 rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-brand-green/20 dark:border-dark-brand-gold/20 hover:border-light-brand-green dark:hover:border-dark-brand-gold transition-colors duration-300 flex items-center gap-2 text-sm font-medium"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-xs">{language.toUpperCase()}</span>
    </motion.button>
  )
}

