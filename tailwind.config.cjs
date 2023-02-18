/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // primary
      lightRed: "hsl(0, 100%, 67%)",
      OrangeyYellow: "hsl(39, 100%, 56%)",
      GreenTeal: "hsl(166, 100%, 37%)",
      CobaltBlue: "hsl(234, 85%, 45%)",
      // Gradients--Background
      lightSlateBlue: "hsl(252, 100%, 67%)",
      Lightroyalblue: "hsl(241, 81%, 54%)",
      // Circle
      VioletBlue: "hsla(256, 72%, 46%, 1)",
      PersianBlue: "hsla(241, 72%, 46%, 0)",
      // neutral
      White: "hsl(0, 0%, 100%)",
      Paleblue: "hsl(221, 100%, 96%)",
      Lightlavender: "hsl(241, 100%, 89%)",
      Darkgrayblue: "hsl(224, 30%, 27%)",
    },
    fontFamily: {
      Hanken: "'Hanken Grotesk', sans-serif",
    },
  },
  plugins: [],
};
