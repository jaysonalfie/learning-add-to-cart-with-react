//tailwind.config.js

/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
};
export const plugins = [];