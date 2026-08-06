import type { Config } from 'tailwindcss';

const withOpacity = (variable: string) => `rgb(var(${variable}) / <alpha-value>)`;

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Instrument Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1480px',
    },
    extend: {
      colors: {
        bg: withOpacity('--color-bg'),
        surface: withOpacity('--color-surface'),
        'surface-2': withOpacity('--color-surface-2'),
        ink: withOpacity('--color-ink'),
        'ink-soft': withOpacity('--color-ink-soft'),
        'ink-faint': withOpacity('--color-ink-faint'),
        line: withOpacity('--color-line'),
        accent: withOpacity('--color-accent'),
        'accent-ink': withOpacity('--color-accent-ink'),
        'accent-soft': withOpacity('--color-accent-soft'),
      },
    },
  },
  plugins: [],
} satisfies Config;
