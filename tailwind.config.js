module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dracula", "winter"],
    darkTheme: "dracula",
  },
};
