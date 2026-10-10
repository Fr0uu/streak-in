/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#15171A',
          dark: '#15171A',
          light: '#F4F6F1',
        },
        card: {
          DEFAULT: '#23272D',
          dark: '#23272D',
          light: '#FFFFFF',
        },
        line: {
          DEFAULT: '#2E3238',
          dark: '#2E3238',
          light: '#E1E4DC',
        },
        text: {
          DEFAULT: '#EEF1F4',
          dark: '#EEF1F4',
          light: '#15171A',
        },
        'text-sub': {
          DEFAULT: '#8A929C',
          dark: '#8A929C',
          light: '#5C636B',
        },
        brand: {
          DEFAULT: '#C8F135',
          hover: '#b5dd26',
          text: '#15171A',
          dark: '#C8F135',
          lightText: '#5A7500',
        },
        accent: {
          DEFAULT: '#FF7A3D',
          hover: '#f06b2e',
          text: '#FF7A3D',
          bg: 'rgba(255, 122, 61, 0.1)',
        },
      },
      borderRadius: {
        '2xl': '16px',
        'xl': '12px',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      minHeight: {
        'touch': '48px',
      },
    },
  },
  plugins: [],
}
