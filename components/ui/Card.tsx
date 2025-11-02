'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export default function Card({ children, className = '', hover = true, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`bg-light-bg-primary dark:bg-dark-bg-secondary rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-light-brand-green/10 dark:border-dark-brand-gold/10 ${className}`}
    >
      {children}
    </motion.div>
  )
}

