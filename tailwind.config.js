/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#FF6500',
        'custom-text': '#1E3E62'
      },

    },
  },
  plugins: [],
}
