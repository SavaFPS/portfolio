import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      sans: ['var(--font-outfit)'],
      display: ['var(--font-syne)'],
    },
    extend: {
      dropShadow: {
        glow: '0 0 18px rgba(224, 138, 79, 0.45)',
      },
      colors: {
        primary: '#100e0c',
        secondary: '#1c1814',
        accent: {
          DEFAULT: '#e08a4f',
          hover: '#f09a62',
        },
        cream: '#f4ece3',
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
