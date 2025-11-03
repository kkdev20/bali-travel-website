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
        className={`w-full px-4 py-3 bg-white dark:bg-black border-2 border-black dark:border-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-colors text-black dark:text-white ${className}`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}

