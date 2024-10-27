import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
  ],

  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      fontFamily: {
        mont: ['Montserrat'],
      },
      colors: {
        customWhite: '#FBFBFB', 
        primary: '#2D3748',     
        secondary: '#4A5568',   
        accent: {
          DEFAULT: '#0074FF',   
          secondary: '#005FCC', 
          tertiary: '#3A91D6',  
        },
        svgColor: '#005FCC'
      },
      backgroundImage: {
        'customColor': 'linear-gradient(to bottom, #FBFBFB, #F6FBFF)', 
        quoteLeft: 'url(img/quote-left.svg)',
        quoteRight: 'url(img/quote-right.svg)',
      },
      boxShadow: { 
        custom1: '0px 2px 20px 0px rgba(0, 0, 0, 0.1)', 
        custom2: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)', 
      },
    },
  },

  plugins: [forms],
};