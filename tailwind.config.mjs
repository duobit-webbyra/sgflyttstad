/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        'primary-accent': 'var(--primary-accent-color)',
        secondary: 'var(--secondary-color)',
        tertiary: 'var(--tertiary-color)',
        'tertiary-accent': 'var(--tertiary-accent-color)',
        'tertiary-hover': 'var(--tertiary-hover-color)',
        'secondary-accent': 'var(--secondary-accent-color)',
        quaternary: 'var(--quaternary-color)',
        error: 'var(--error-color)',
      },
      height: {
        header: 'var(--header-height)',
        'info-header': 'var(--info-header-height)',
      },
      minHeight: {
        'info-header': 'var(--info-header-height)',
      },
      fontSize: {
        clamp: 'clamp(1.5rem, 0.373rem + 4.301vw, 4rem)',
      },
    },
  },
  plugins: [],
}
