import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        '3/4': '70vh',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
