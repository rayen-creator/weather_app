/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons:"burtons",
        Poppins_Regular:"Poppins_Regular",
        Poppins_SemiBold:"Poppins_SemiBold"
      },
      backgroundImage:{
        'hero-pattern': "url('./assets/heavy_rain.jpg')",
      }
    },
  },
  plugins: [],
};
