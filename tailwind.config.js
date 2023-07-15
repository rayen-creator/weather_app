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
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    },
};
