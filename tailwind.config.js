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
        'bg-primary': '#fafafa',
        'bg-secondary': '#ffffff',
        'bg-elevated': '#f4f4f4',
        'text-primary': '#0a0a0a',
        'text-secondary': '#525252',
        'border-primary': '#e5e5e5',
        'border-secondary': 'rgba(0,0,0,0.08)',
        'jetbrains-accent': '#046055',
        'jetbrains-blue': '#3592c4',
        'jetbrains-green': '#499c54',
        'jetbrains-purple': '#9876aa',
      },
    },
  },
  plugins: [],
}
