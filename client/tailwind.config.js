module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        green: {
          primary: "#4c9a2a",
          secondary: "#76ba1b",
          dark: "#1e5631",
          light: "#a4de02",
        },
        blue: {
          primary: "#006abc",
          secondary: "#2080c9",
          dark: "#001d64",
          light: "#0098f1"
        },
        red: {
          primary: "#ff0000",
          secondary: "#ff5555",
          dark: "#aa0000",
          light: "#ff8080"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
