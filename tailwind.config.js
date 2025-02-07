/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.h-calc-100-minus-20': {
          height: 'calc(100% - 20px)',
        },
        '.h-calc-100-minus-40': {
          height: 'calc(100% - 40px)',
        },
         '.h-calc-100-minus-60': {
          height: 'calc(100% - 60px)',
        },
         '.h-calc-100-minus-80': {
          height: 'calc(100% - 80px)',
        },
         '.h-calc-100-minus-100': {
          height: 'calc(100% - 100px)',
        },
        '.w-calc-50-plus-20': {
          width: 'calc(50% + 20px)',
        },
      });
    },
  ],
  
}

 
