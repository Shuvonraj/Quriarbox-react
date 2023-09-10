/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      container:'1320px',
    },
    fontFamily:{
      Oxanium:['Oxanium'],
      Raleway:['Raleway'],
    },
    colors:{
      primary:'#F95C19',
      white:'#ffff'
    },
    backgroundImage:{
      video:"url('./Images/Video.png')",
    }
  },
  plugins: [],
}