/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      IRANSansWeb: 'IRANSansWeb',
      IRANSansFaNumBold: 'IRANSansFaNum-Bold'
    },
    extend: {
      colors: {
        first_color : '#ee2c57',
        second_color :'#9b0f2e',
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        '2xl': '1250px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true,
  },
}

