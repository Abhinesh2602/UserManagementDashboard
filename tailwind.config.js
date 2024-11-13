/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 0px 10.1px 0px rgba(0, 0, 0, 0.11)",
      },
      colors: {
        "custom-blue": "#cceef2",
        "custom-darkblue": "#0E7783",
        "custom-black": "#2C2C2C",
        "custom-red": "#F87171",
        "custom-grey": "#858585",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(128deg, #FFF 55.89%, #E0F4FC 80.6%, #D8F1FB 87.38%)",
      },
    },
  },
  plugins: [],
};
