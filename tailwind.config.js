/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite", // 👈 your slow spin animation
      },
    },
  },
  plugins: [require("daisyui")],
}
