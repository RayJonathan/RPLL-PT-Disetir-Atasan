import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '0.3xs': '0.50rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        '675px': '675px',
        '575': '575px',
        '20px' : '20px',
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'header':'#101D34',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'gray-new': '#E3E1D9',
        'blue-new': '#101D34',
        'yellow-hov': '#FBA834',
        'gray-tren': '#D2CFCF',
        'disetircolour': '#101D34'
      }
    },
  },
  plugins: [],
};

export default config;
