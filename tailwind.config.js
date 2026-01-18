/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semânticas
        primary: {
          DEFAULT: '#D7FF00', // primary-500
          500: '#D7FF00',
        },
        secondary: {
          50: '#E7E8EA',
          900: '#060A11',
        },
        surface: {
          500: '#FFFFFF',
        },
        background: {
          400: '#F5F6F8',
        },
        brand: {
          700: '#c4e703',
        },
        // Primitivas - Neutras
        neutral: {
          0: '#ffffff',
          300: '#e5e7eb',
          400: '#d1d5db',
          500: '#9ca3af',
          1100: '#080b12',
        },
        // Primitivas - Contextuais
        blue: {
          600: '#2a89ef',
        },
        green: {
          600: '#15be78',
        },
        red: {
          600: '#e61e32',
        },
      },
      spacing: {
        // Espaçamentos do design system
        0: '0',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        56: '56px',
        72: '72px',
      },
      borderRadius: {
        // Shape tokens
        sm: '2px',
        md: '20px',
        full: '100px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Headings
        'heading-xs': ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'heading-sm': ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'heading-md': ['28px', { lineHeight: '36px', fontWeight: '700' }],
        // Labels
        'label-xs': ['12px', { lineHeight: '16px', fontWeight: '600' }],
        'label-sm': ['14px', { lineHeight: '16px', fontWeight: '600' }],
        'label-md': ['16px', { lineHeight: '20px', fontWeight: '600' }],
        'label-lg': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        // Paragraphs
        'paragraph-xs': ['12px', { lineHeight: '20px', fontWeight: '400' }],
        'paragraph-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'paragraph-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
      },
      screens: {
        'md': '768px',   // Tablet
        'lg': '1280px',  // Desktop
        'xl': '1920px',  // Wide / 4K
      },
    },
  },
  plugins: [],
}
