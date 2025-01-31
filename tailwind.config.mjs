/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F2DDA4',
        secondary: '#413C58',
        sidebar: '#A3C4BC',
        category: '#BFD7B5',
        button: '#E7EFC5',
        dark: {
          bg: '#121212',
          text: '#E0E0E0',
          sidebar: '#121212',
          category: '#333333',
          button: '#03DAC6',
          buttonHover: '#3700B3',
          accent: '#BB86FC',
          error: '#CF6679',
          success: '#03A9F4',
          warning: '#FBC02D',
        },
        code: {
          bg: '#1e1e1e',
          text: '#dcdcdc',
          keyword: '#569cd6',
          string: '#d69d85',
          comment: '#6a9955',
          function: '#dcdcaa',
          number: '#b5cea8',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};


