'use client'

import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium mb-2 text-light-text-primary dark:text-dark-text-primary">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`w-full px-4 py-3 rounded-xl bg-light-bg-secondary dark:bg-dark-bg-secondary border border-light-brand-green/20 dark:border-dark-brand-gold/20 focus:border-light-brand-green dark:focus:border-dark-brand-gold focus:outline-none focus:ring-2 focus:ring-light-brand-green/20 dark:focus:ring-dark-brand-gold/20 transition-colors text-light-text-primary dark:text-dark-text-primary ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

