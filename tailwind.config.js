/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        accent: '#c40000',
        'accent-hover': '#a30000',
        primary: {
          DEFAULT: 'hsl(0 84% 45%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(0 0% 8%)',
          foreground: 'hsl(0 0% 100%)',
        },
        background: 'hsl(0 0% 100%)',
        foreground: 'hsl(0 0% 8%)',
        card: 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(0 0% 8%)',
        popover: 'hsl(0 0% 100%)',
        'popover-foreground': 'hsl(0 0% 8%)',
        muted: 'hsl(0 0% 96%)',
        'muted-foreground': 'hsl(0 0% 45%)',
        destructive: 'hsl(0 84% 60%)',
        'destructive-foreground': 'hsl(0 0% 100%)',
        border: 'hsl(0 0% 90%)',
        input: 'hsl(0 0% 90%)',
        ring: 'hsl(0 84% 45%)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
    },
  },
  plugins: [],
}

