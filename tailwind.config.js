/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      spotify: [
        'spotify-circular',
        'spotify-circular-cyrillic',
        'spotify-circular-arabic',
        'spotify-circular-hebrew',
        'Helvetica Neue',
        'helvetica',
        'arial',
        'Hiragino Kaku Gothic Pro',
        'Meiryo',
        'MS Gothic',
      ],
    },
  },
}
