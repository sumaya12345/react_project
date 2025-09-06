/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        zoomOut: {
       "0%": { transform: "scale(1.2)", opacity: "0" },
      "100%": { transform: "scale(1)", opacity: "1" },
      },
      rotateYHover: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },

        rotateYHover2: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        translateYUpDown: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" }, // kor u dhaqaaq
        },
        fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      },
      animation: {
        slideLeft: "slideLeft 2s ease-out forwards",
        slideRight: "slideRight 2s ease-out forwards",
        zoomOut: "zoomOut 4s ease-out forwards",
         rotateYHover: "rotateYHover 1s ease-in-out forwards",
         rotateYHover2: "rotateYHover 5s ease-in-out forwards",
           translateYUpDown: "translateYUpDown 2s ease-in-out infinite",

      },
      
    extend: {},
  },
  plugins: [],
}

