/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // OPTIFAC Brand Colors
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0A4E98',  // Main OPTIFAC blue
          600: '#083A73',  // Darker shade
          700: '#062B56',  // Darkest shade
          800: '#1e3a8a',
          900: '#1e40af',
        },
        secondary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#006EB4',  // Secondary OPTIFAC blue
          600: '#004785',  // Darker shade
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#2D2B2C',  // Dark text color
          900: '#171717',
        }
      },
      
      
      fontFamily: {
        'sans': ['Barlow', 'system-ui', 'sans-serif'],
        'heading': ['Barlow Condensed', 'Barlow', 'system-ui', 'sans-serif'],
        'body': ['Barlow', 'system-ui', 'sans-serif'],
        'display': ['Barlow Condensed', 'Barlow', 'system-ui', 'sans-serif'],
      },
      
      // RESPONSIVE FONT SIZES WITH BARLOW
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', fontFamily: 'Barlow' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem', fontFamily: 'Barlow' }],
        'base': ['1rem', { lineHeight: '1.5rem', fontFamily: 'Barlow' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem', fontFamily: 'Barlow' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem', fontFamily: 'Barlow' }],
        '2xl': ['1.5rem', { lineHeight: '2rem', fontFamily: 'Barlow' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', fontFamily: 'Barlow Condensed' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', fontFamily: 'Barlow Condensed' }],
        '5xl': ['3rem', { lineHeight: '1', fontFamily: 'Barlow Condensed' }],
        '6xl': ['3.75rem', { lineHeight: '1', fontFamily: 'Barlow Condensed' }],
        '7xl': ['4.5rem', { lineHeight: '1', fontFamily: 'Barlow Condensed' }],
        '8xl': ['6rem', { lineHeight: '1', fontFamily: 'Barlow Condensed' }],
        '9xl': ['8rem', { lineHeight: '1', fontFamily: 'Barlow Condensed' }],
      },
      
      // FONT WEIGHTS FOR BARLOW
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      
      // CUSTOM ANIMATIONS
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [
   
    function({ addUtilities }) {
      const newUtilities = {
        // Barlow font variations
        '.font-barlow': {
          fontFamily: ['Barlow', 'system-ui', 'sans-serif'],
        },
        '.font-barlow-condensed': {
          fontFamily: ['Barlow Condensed', 'Barlow', 'system-ui', 'sans-serif'],
        },
        
        // Professional text styles with Barlow
        '.text-heading': {
          fontFamily: ['Barlow Condensed', 'Barlow', 'system-ui', 'sans-serif'],
          fontWeight: '600',
          lineHeight: '1.2',
        },
        '.text-subheading': {
          fontFamily: ['Barlow', 'system-ui', 'sans-serif'],
          fontWeight: '500',
          lineHeight: '1.4',
        },
        '.text-body': {
          fontFamily: ['Barlow', 'system-ui', 'sans-serif'],
          fontWeight: '400',
          lineHeight: '1.6',
        },
        '.text-caption': {
          fontFamily: ['Barlow', 'system-ui', 'sans-serif'],
          fontWeight: '300',
          lineHeight: '1.5',
        },
        
        '.text-professional': {
          fontFamily: ['Barlow', 'system-ui', 'sans-serif'],
          fontWeight: '500',
          letterSpacing: '0.01em',
        },
        '.text-corporate': {
          fontFamily: ['Barlow Condensed', 'Barlow', 'system-ui', 'sans-serif'],
          fontWeight: '600',
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
  corePlugins: {
    preflight: false, // Disable to avoid conflicts with Ant Design
  }
}