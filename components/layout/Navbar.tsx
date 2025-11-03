'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Plane } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '../providers/LanguageProvider'

const navLinkKeys = [
  { key: 'nav.home', href: '#home' },
  { key: 'nav.destinations', href: '#destinations' },
  { key: 'nav.contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-gray-300 bg-white`}
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-1.5 md:py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#home')
              }}
              className="text-lg md:text-2xl font-bold text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plane className="inline-block w-5 h-5 md:w-6 md:h-6 mr-1.5" />
              Bali Travel
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-4">
              {navLinkKeys.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                      className="text-sm font-medium text-gray-600 hover:text-black transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
              <LanguageToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <LanguageToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 border-2 border-black bg-white"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 right-0 z-40 w-64 glass shadow-xl md:hidden"
          >
            <div className="flex flex-col h-full pt-20 px-6 gap-6">
              {navLinkKeys.map((link, index) => (
                <motion.a
                  key={link.key}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-lg font-medium text-black hover:text-gray-600 transition-colors"
                >
                  {t(link.key)}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

