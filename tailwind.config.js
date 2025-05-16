/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'warm-lightest': 'var(--warm-lightest)',
        'warm-light': 'var(--warm-light)',
        'warm-medium': 'var(--warm-medium)',
        'warm-dark': 'var(--warm-dark)',
        'warm-darkest': 'var(--warm-darkest)',
        
        'dark-bg': 'var(--dark-bg)',
        'dark-card': 'var(--dark-card)',
        'dark-border': 'var(--dark-border)',
        'dark-text': 'var(--dark-text)',
        'dark-accent': 'var(--dark-accent)',
        
        'primary': {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
        },
        'secondary': {
          DEFAULT: 'var(--secondary)',
          dark: 'var(--secondary-dark)',
        },
        'dark-muted': '#A8A8A8',
        'dark-shadow': 'rgba(0, 0, 0, 0.3)',
        'dark-lighter': '#1e1e1e',
        'dark-hover': '#2d2d2d',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '112': '28rem',
        '128': '32rem',
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 20px rgba(0, 0, 0, 0.07)',
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'none': 'none',
        'dark': '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.4)',
        'primary': '0 4px 10px rgba(79, 70, 229, 0.2)',
        'primary-lg': '0 8px 20px rgba(79, 70, 229, 0.3)',
        'dark-card': '0 4px 8px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 10px rgba(99, 102, 241, 0.7)',
        'dark-glow': '0 0 10px rgba(99, 102, 241, 0.4)'
      },
      dropShadow: {
        'DEFAULT': '0 1px 2px rgba(0, 0, 0, 0.1)',
        'sm': '0 1px 1px rgba(0, 0, 0, 0.05)',
        'md': '0 4px 3px rgba(0, 0, 0, 0.07)',
        'lg': '0 10px 8px rgba(0, 0, 0, 0.04)',
        'xl': '0 20px 13px rgba(0, 0, 0, 0.08)',
        '2xl': '0 25px 25px rgba(0, 0, 0, 0.15)',
        'dark': '0 4px 6px rgba(0, 0, 0, 0.5)'
      },
      backgroundImage: {
        'penguin-pattern': "url('/src/assets/penguin-pattern.svg')",
        'dark-texture': "url('/src/assets/dots-pattern.svg')",
        'grid-pattern': "url('/src/assets/grid-pattern.svg')",
      },
      animation: {
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-out-left': 'slideOutLeft 0.3s ease-in',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-out': 'fadeOut 0.3s ease-in',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'shine': 'shine 3s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        shine: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '0% center' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.5)' },
          '50%': { boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)' },
        },
        pulseSoft: {
          '0%, 100%': { transform: 'scale(1)', opacity: 1 },
          '50%': { transform: 'scale(1.03)', opacity: 0.95 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.warm-darkest'),
            a: {
              color: theme('colors.primary.DEFAULT'),
              '&:hover': {
                color: theme('colors.primary.dark'),
              },
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.dark-text'),
            a: {
              color: theme('colors.primary.light'),
              '&:hover': {
                color: theme('colors.primary.DEFAULT'),
              },
            },
            h1: {
              color: theme('colors.dark-text'),
            },
            h2: {
              color: theme('colors.dark-text'),
            },
            h3: {
              color: theme('colors.dark-text'),
            },
            strong: {
              color: theme('colors.dark-text'),
            },
            blockquote: {
              color: theme('colors.dark-text'),
            },
          },
        },
      }),
      backgroundColor: {
        'penguin-pattern': 'url(/penguin-pattern.svg)',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      borderColor: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    
    // Custom variants for accessibility
    plugin(function({ addVariant, e }) {
      // Add variant for reduce motion preference
      addVariant('reduce-motion', '.reduce-motion &');
      
      // Add variant for high contrast mode
      addVariant('high-contrast', '.high-contrast &');
      
      // Add variant for large text mode
      addVariant('large-text', '.large-text &');
      
      // Add variant for screen reader optimizations
      addVariant('sr-optimized', '.sr-optimized &');
      
      // Add hover variant only on devices that support hover
      addVariant('hover-supported', '@media (hover: hover) { &:hover }');
    }),
    
    // Add custom utilities for accessibility
    plugin(function({ addUtilities }) {
      const accessibilityUtilities = {
        '.large-text-base': {
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
        },
        '.large-text-lg': {
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
        },
        '.large-text-xl': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
        },
        '.high-contrast-border': {
          border: '2px solid currentColor',
        },
        '.focus-visible-ring': {
          outline: 'none',
          boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        },
      };
      
      addUtilities(accessibilityUtilities, ['responsive', 'hover']);
    }),
  ],
};