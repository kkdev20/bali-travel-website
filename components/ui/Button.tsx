'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  href?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 border border-gray-300'
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 transition-all duration-300',
    secondary: 'bg-white text-black hover:bg-gray-100 transition-all duration-300',
    outline: 'bg-transparent border border-gray-300 text-black hover:bg-gray-50 hover:border-gray-400 transition-all duration-300',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    )
  }

  return buttonContent
}

