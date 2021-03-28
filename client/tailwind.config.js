module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx}', './public/index.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '360px',
        'sm': '640px',
        'md': '1024px',
        'lg': '1280px',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      },
      colors: {
        green: {
          primary: "#4c9a2a",
        },
        blue: {
          primary: "#006abc",
          secondary: "#2080c9",
          light: "#0098f1"
        },
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
