import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/img.jpg')"
      },
      colors: {
        'primary': '#fec001',
        'on-primary': '',
        'container': '#fc0000',
        'on-container': '',
        'surface': '#ffffff',
        'dim-surface': '#e5e5e5',
        'high-surface': '#f1faee',
      },
    },
  },
  plugins: [],
};
export default config;
