/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
         bgGradient: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(1,1,71,1) 35%, rgba(6,58,98,1) 66%, rgba(3,24,40,1) 99%)"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

