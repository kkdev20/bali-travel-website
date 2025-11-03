'use client'

import { useLanguage } from '../providers/LanguageProvider'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en')
  }

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-brand-green dark:hover:text-dark-brand-gold transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Indonesian' : 'English'}`}
      title={language === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English'}
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs font-medium">{language.toUpperCase()}</span>
    </motion.button>
  )
}

