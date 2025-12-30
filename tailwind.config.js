/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // هذا السطر مهم جداً: يخبره أن يقرأ ملفات HTML
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#405B82",
        "primary-dark": "#2f4464",
        "background-light": "#405B82",
        "background-dark": "#2b3e58",
        "surface-light": "#ffffff",
        "surface-dark": "#24364f",
        "text-main-light": "#ffffff",
        "text-main-dark": "#ffffff",
        "text-secondary-light": "#EBA511",
        "text-secondary-dark": "#EBA511",
      },
      fontFamily: {
        "display": ["Cairo", "sans-serif"],
        "arabic": ["Amiri", "serif"],
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "0.75rem",
        "xl": "1rem",
        "2xl": "1.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}