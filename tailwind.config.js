/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['"JetBrains Mono"', 'monospace'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        'jetbrains-dark': '#1e1e1e',
        'jetbrains-darker': '#121212',
        'jetbrains-accent': '#ff6b00',
        'jetbrains-blue': '#3592c4',
        'jetbrains-green': '#499c54',
        'jetbrains-purple': '#9876aa',
      },
    },
  },
  plugins: [],
}

