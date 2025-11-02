import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode - Tropical Bali theme
        light: {
          bg: {
            primary: '#FEFEFE',
            secondary: '#F8F9FA',
            accent: '#F0F8F5',
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#4A5568',
            accent: '#2D5016',
          },
          brand: {
            green: '#22C55E',
            'green-dark': '#16A34A',
            blue: '#3B82F6',
            'blue-dark': '#2563EB',
            orange: '#F97316',
            'orange-light': '#FB923C',
          },
        },
        // Dark mode - Deep navy/charcoal with gold accents
        dark: {
          bg: {
            primary: '#0F172A',
            secondary: '#1E293B',
            accent: '#1E3A5F',
          },
          text: {
            primary: '#F1F5F9',
            secondary: '#CBD5E1',
            accent: '#EAB308',
          },
          brand: {
            gold: '#FBBF24',
            'gold-dark': '#F59E0B',
            teal: '#14B8A6',
            'teal-dark': '#0D9488',
            navy: '#1E3A8A',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config

