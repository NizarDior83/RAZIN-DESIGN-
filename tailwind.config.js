/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#023047",
        surface: "#1b110a",
        primary: "#fb8500",
        secondary: "#219ebc",
        mutedSky: "#8ecae6",
        gold: "#ffb703",
        mint: "#b9f2e1",
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
