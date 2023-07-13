/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      // IRANSansX_Medium: 'IRANSansX-Medium',
      // IRANSansX_Regular: 'IRANSansX-Regular'
    },
    extend: {
      colors: {
        first_color : '#0A2647',
        second_color :'#144272',
        third_color :'#205295',
        fourth_color :'#2C74B3',
      }
    },
    container: {
      center: true,
      screens: {
        '2xl': '1140px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true,
  },
}

