'use client'

import { useTheme } from '../providers/ThemeProvider'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-5 md:w-12 md:h-6 rounded-full bg-light-brand-green dark:bg-dark-brand-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-light-brand-green/50 dark:focus:ring-dark-brand-gold/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-0.5 left-0.5 md:top-1 md:left-1 w-3.5 h-3.5 md:w-4 md:h-4 bg-white rounded-full shadow-md"
        initial={false}
        animate={{
          x: theme === 'dark' ? 'calc(100% - 0.875rem - 0.25rem)' : '0.125rem',
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      />
      <span className="absolute inset-0 flex items-center justify-between px-1 md:px-1.5 text-[8px] md:text-[10px] font-bold">
        <span className={theme === 'light' ? 'text-white' : 'text-transparent'}>☀</span>
        <span className={theme === 'dark' ? 'text-dark-bg-primary' : 'text-transparent'}>🌙</span>
      </span>
    </motion.button>
  )
}

