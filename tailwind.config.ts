import type { Config } from 'tailwindcss';

const config: Config = {
  important: true,
  content: [
    './app/**/*.{ts,tsx}',
    './containers/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './assets/**/*.{ts,tsx}',
    './constants/**/*.{ts,tsx}',
  ],
  theme: {},
  plugins: [],
};
export default config;
