/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient-bg': 'gradientBG 15s ease infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse': 'pulse 2s infinite',
      },
      keyframes: {
        gradientBG: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%, 100%': { 
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' 
          },
          '25%': { 
            borderRadius: '30% 70% 40% 60% / 50% 60% 30% 70%' 
          },
          '50%': { 
            borderRadius: '40% 60% 70% 30% / 60% 40% 70% 50%' 
          },
          '75%': { 
            borderRadius: '70% 30% 60% 40% / 30% 70% 50% 60%' 
          },
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};