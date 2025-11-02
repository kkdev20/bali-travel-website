'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Language = 'en' | 'id'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Default context value
const defaultContextValue: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.destinations': 'Destinations',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Discover the Magic of',
    'hero.subtitle': 'Your Gateway to Paradise - Expert Travel Guide & Services',
    'hero.cta.explore': 'Explore Destinations',
    'hero.cta.plan': 'Plan Your Trip',
    'hero.scroll': 'Scroll to explore',
    
    // About
    'about.title': 'Why Choose Us',
    'about.subtitle': 'Experience Bali like never before with our expert guidance and personalized service',
    'about.expertise.title': 'Local Expertise',
    'about.expertise.desc': 'Born and raised in Bali, we know every hidden gem and secret spot that only locals know.',
    'about.itinerary.title': 'Custom Itineraries',
    'about.itinerary.desc': 'Tailored travel plans designed specifically for your interests, budget, and schedule.',
    'about.destinations.title': 'Best Destinations',
    'about.destinations.desc': 'Hand-picked locations ranging from pristine beaches to ancient temples and lush rice terraces.',
    'about.support.title': '24/7 Support',
    'about.support.desc': 'Round-the-clock assistance to ensure your Bali experience is smooth and memorable.',
    
    // Destinations
    'destinations.title': 'Popular Destinations',
    'destinations.subtitle': 'Discover the most breathtaking places Bali has to offer',
    'destinations.filter.all': 'All',
    'destinations.filter.beaches': 'Beaches',
    'destinations.filter.temples': 'Temples',
    'destinations.filter.nature': 'Nature',
    'destinations.filter.adventure': 'Adventure',
    'destinations.cta': 'Explore',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Everything you need for the perfect Bali experience',
    'services.tours.title': 'Tour Packages',
    'services.tours.desc': 'Curated tours covering the best of Bali',
    'services.hotel.title': 'Hotel Bookings',
    'services.hotel.desc': 'Best deals on accommodations',
    'services.transport.title': 'Transportation',
    'services.transport.desc': 'Safe and reliable travel around Bali',
    'services.custom.title': 'Custom Itineraries',
    'services.custom.desc': 'Personalized travel plans just for you',
    'services.pricing.title': 'Tour Packages',
    'services.pricing.subtitle': 'Choose the perfect package for your Bali adventure',
    'services.pricing.basic': 'Basic',
    'services.pricing.standard': 'Standard',
    'services.pricing.premium': 'Premium',
    'services.pricing.popular': 'Most Popular',
    'services.pricing.contact': 'Contact for Details',
    
    // Testimonials
    'testimonials.title': 'What Our Guests Say',
    'testimonials.subtitle': 'Real experiences from travelers who explored Bali with us',
    
    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Capture the beauty and essence of Bali through our lens',
    'gallery.filter.all': 'All',
    'gallery.filter.beaches': 'Beaches',
    'gallery.filter.culture': 'Culture',
    'gallery.filter.food': 'Food',
    'gallery.filter.nature': 'Nature',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to plan your Bali adventure? Contact us and let\'s create unforgettable memories together',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.dates': 'Travel Dates',
    'contact.form.message': 'Message',
    'contact.form.placeholder.name': 'Your name',
    'contact.form.placeholder.email': 'your.email@example.com',
    'contact.form.placeholder.phone': '+62 812 3456 7890',
    'contact.form.placeholder.dates': 'e.g., March 15-22, 2024',
    'contact.form.placeholder.message': 'Tell us about your dream Bali trip...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.thanks': 'Thank You!',
    'contact.form.success': 'We\'ll get back to you within 24 hours.',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.email': 'Email',
    'contact.info.instagram': 'Instagram',
    'contact.info.location': 'Location',
    
    // Footer
    'footer.description': 'Your gateway to paradise. Expert travel guide and services for exploring the magical island of Bali.',
    'footer.links.title': 'Quick Links',
    'footer.contact.title': 'Contact Us',
    'footer.copyright': 'All rights reserved.',
  },
  id: {
    // Navigation
    'nav.home': 'Beranda',
    'nav.destinations': 'Destinasi',
    'nav.services': 'Layanan',
    'nav.gallery': 'Galeri',
    'nav.contact': 'Kontak',
    
    // Hero
    'hero.title': 'Temukan Keajaiban',
    'hero.subtitle': 'Gerbang Menuju Surga - Panduan Perjalanan & Layanan Profesional',
    'hero.cta.explore': 'Jelajahi Destinasi',
    'hero.cta.plan': 'Rencanakan Perjalanan',
    'hero.scroll': 'Gulir untuk menjelajahi',
    
    // About
    'about.title': 'Mengapa Pilih Kami',
    'about.subtitle': 'Nikmati Bali seperti belum pernah sebelumnya dengan bimbingan ahli dan layanan personal kami',
    'about.expertise.title': 'Ahli Lokal',
    'about.expertise.desc': 'Lahir dan besar di Bali, kami tahu setiap tempat tersembunyi dan spot rahasia yang hanya diketahui penduduk lokal.',
    'about.itinerary.title': 'Itinerari Kustom',
    'about.itinerary.desc': 'Rencana perjalanan yang disesuaikan khusus untuk minat, budget, dan jadwal Anda.',
    'about.destinations.title': 'Destinasi Terbaik',
    'about.destinations.desc': 'Lokasi pilihan mulai dari pantai bersih hingga kuil kuno dan sawah hijau yang subur.',
    'about.support.title': 'Dukungan 24/7',
    'about.support.desc': 'Bantuan sepanjang waktu untuk memastikan pengalaman Bali Anda berjalan lancar dan berkesan.',
    
    // Destinations
    'destinations.title': 'Destinasi Populer',
    'destinations.subtitle': 'Temukan tempat-tempat menakjubkan yang ditawarkan Bali',
    'destinations.filter.all': 'Semua',
    'destinations.filter.beaches': 'Pantai',
    'destinations.filter.temples': 'Kuil',
    'destinations.filter.nature': 'Alam',
    'destinations.filter.adventure': 'Petualangan',
    'destinations.cta': 'Jelajahi',
    
    // Services
    'services.title': 'Layanan Kami',
    'services.subtitle': 'Semua yang Anda butuhkan untuk pengalaman Bali yang sempurna',
    'services.tours.title': 'Paket Wisata',
    'services.tours.desc': 'Tur pilihan yang mencakup yang terbaik dari Bali',
    'services.hotel.title': 'Pemesanan Hotel',
    'services.hotel.desc': 'Penawaran terbaik untuk akomodasi',
    'services.transport.title': 'Transportasi',
    'services.transport.desc': 'Perjalanan yang aman dan terpercaya di sekitar Bali',
    'services.custom.title': 'Itinerari Kustom',
    'services.custom.desc': 'Rencana perjalanan personal khusus untuk Anda',
    'services.pricing.title': 'Paket Wisata',
    'services.pricing.subtitle': 'Pilih paket yang sempurna untuk petualangan Bali Anda',
    'services.pricing.basic': 'Dasar',
    'services.pricing.standard': 'Standar',
    'services.pricing.premium': 'Premium',
    'services.pricing.popular': 'Paling Populer',
    'services.pricing.contact': 'Hubungi untuk Detail',
    
    // Testimonials
    'testimonials.title': 'Apa Kata Tamu Kami',
    'testimonials.subtitle': 'Pengalaman nyata dari para traveler yang menjelajahi Bali bersama kami',
    
    // Gallery
    'gallery.title': 'Galeri',
    'gallery.subtitle': 'Abadikan keindahan dan esensi Bali melalui lensa kami',
    'gallery.filter.all': 'Semua',
    'gallery.filter.beaches': 'Pantai',
    'gallery.filter.culture': 'Budaya',
    'gallery.filter.food': 'Makanan',
    'gallery.filter.nature': 'Alam',
    
    // Contact
    'contact.title': 'Hubungi Kami',
    'contact.subtitle': 'Siap merencanakan petualangan Bali Anda? Hubungi kami dan mari ciptakan kenangan tak terlupakan bersama',
    'contact.form.name': 'Nama',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telepon',
    'contact.form.dates': 'Tanggal Perjalanan',
    'contact.form.message': 'Pesan',
    'contact.form.placeholder.name': 'Nama Anda',
    'contact.form.placeholder.email': 'email.anda@contoh.com',
    'contact.form.placeholder.phone': '+62 812 3456 7890',
    'contact.form.placeholder.dates': 'contoh: 15-22 Maret 2024',
    'contact.form.placeholder.message': 'Ceritakan tentang impian perjalanan Bali Anda...',
    'contact.form.send': 'Kirim Pesan',
    'contact.form.sending': 'Mengirim...',
    'contact.form.thanks': 'Terima Kasih!',
    'contact.form.success': 'Kami akan menghubungi Anda dalam 24 jam.',
    'contact.info.whatsapp': 'WhatsApp',
    'contact.info.email': 'Email',
    'contact.info.instagram': 'Instagram',
    'contact.info.location': 'Lokasi',
    
    // Footer
    'footer.description': 'Gerbang menuju surga. Panduan perjalanan ahli dan layanan untuk menjelajahi pulau magis Bali.',
    'footer.links.title': 'Tautan Cepat',
    'footer.contact.title': 'Hubungi Kami',
    'footer.copyright': 'Hak cipta dilindungi.',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language | null
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    } else {
      // Detect browser language
      const browserLang = navigator.language.split('-')[0]
      const initialLanguage = browserLang === 'id' ? 'id' : 'en'
      setLanguageState(initialLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language]?.[key] || translations.en[key] || key
  }

  const contextValue = mounted
    ? { language, setLanguage, t }
    : defaultContextValue

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

