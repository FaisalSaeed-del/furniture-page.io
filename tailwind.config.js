/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        btnclr: "#F66B0E;",
        undrclr: "#F66B0E;",
        bxshadow: "0px 0px 10px rgba(0, 0, 0, 0.12);",
        headclr: "#112B3C;",
        paraclr: "#828282;",
        footerclr: "#FFF8F0;",
      },
      fontSize: {
        lg: "6rem;",
      },
      maxWidth: {
        "1/2": "60.625rem;",
      },
      width: {
        96: "43.75rem;",
      },
      height: {
        24: "6.25rem,",
      },
    },
  },
  plugins: [],
};
