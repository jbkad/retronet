/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'jaro': ['Jaro', 'sans-serif'],
      'redhat': ['Red Hat Display', 'sans-serif'],
    },
    extend: {
      colors: {
          'bg': '#272343',
          'paragraph': '#7AC2F6',
          'highlight': '#FF89EB',
          'primary': '#FFFFFE',
          'secondary': '#272343',
        },
      },
  },
  plugins: [],
}

