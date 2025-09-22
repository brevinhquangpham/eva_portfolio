/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        headers: "#22223B",
        big_text: "#0F0ADE",
        body_text: "#4A4E69",
        background: "#F2E9E4",
      },
      fontFamily: {
        cram: ["Cormorant Upright", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
        suse: ["SUSE", "sans-serif"],
      },
    },
  },
  plugins: [],
};
