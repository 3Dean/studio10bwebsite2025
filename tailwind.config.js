/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      // Your custom theme extensions
      colors: {
        'primary': '#ff3b30',
        'dark': '#111111',
        'symbols': 'Tomato',
      },
      fontFamily: {
        sans: ['Fira Sans', 'sans-serif'],
        heading: ['Fira Sans', 'sans-serif'],
      },
      extend: {
        fontWeight: {
          light: 300,
          normal: 400,
          extrabold: 800,
        }
      }
    },
  },
  plugins: [],
}