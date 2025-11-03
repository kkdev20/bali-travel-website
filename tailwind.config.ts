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
        // Light mode - White dominant with black accents
        light: {
          bg: {
            primary: '#FFFFFF',
            secondary: '#F5F5F5',
            accent: '#F0F0F0',
          },
          text: {
            primary: '#000000',
            secondary: '#333333',
            accent: '#666666',
          },
          brand: {
            green: '#000000',
            'green-dark': '#000000',
            blue: '#000000',
            'blue-dark': '#000000',
            orange: '#000000',
            'orange-light': '#000000',
          },
        },
        // Dark mode - Black dominant with white accents
        dark: {
          bg: {
            primary: '#000000',
            secondary: '#0A0A0A',
            accent: '#1A1A1A',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#CCCCCC',
            accent: '#999999',
          },
          brand: {
            gold: '#FFFFFF',
            'gold-dark': '#FFFFFF',
            teal: '#FFFFFF',
            'teal-dark': '#FFFFFF',
            navy: '#FFFFFF',
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

