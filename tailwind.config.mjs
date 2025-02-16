/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#116cd4",
        secondary: "#fe6a00",
      },
      backgroundImage: {
        "text-gradient": "linear-gradient(40deg, #fe6a00, #116cd4)",
      },
    },
  },
  plugins: [],
};
