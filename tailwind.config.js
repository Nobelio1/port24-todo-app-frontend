/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card': 'linear-gradient(180deg, rgba(255,154,0,0.38139005602240894) 6%, rgba(255,194,102,0.3169642857142857) 100%)',
      },
    },
  },
  plugins: [],
}

