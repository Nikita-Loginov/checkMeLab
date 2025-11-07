module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f5ff',
          100: '#e5edff',
          200: '#d1ddff',
          300: '#b8c7ff',
          400: '#9ca6ff',
          500: '#2A3B7C', // глубокий индиго - основной цвет
          600: '#243269',
          700: '#1f2956',
          800: '#1a2044',
          900: '#151731',
        },
        secondary: {
          50: '#e6fffe',
          100: '#ccfffc',
          200: '#99fff9',
          300: '#66fff6',
          400: '#33fff3',
          500: '#00C2CB', // светло-бирюзовый - акцентный цвет
          600: '#009ba2',
          700: '#007479',
          800: '#004d50',
          900: '#002627',
        },
        gray: {
          50: '#f8f9fc', // светло-серый фон
          100: '#f1f3f9',
          200: '#e9edf5',
          300: '#d1d9e8',
          400: '#a4b2c7',
          500: '#5A5A5A', // серый базовый для текста
          600: '#4a4a4a',
          700: '#3a3a3a',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
        dark: '#1A1A2E',
        light: '#F8F9FC',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      // container: {
      //   screens: {
      //     '2xl': '1536px',
      //   },
      //   maxWidth: {
      //     '2xl': '1536px',
      //   }
      // },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      screens: {
        'custom-desktop': '1370px'
      }
    },

  },
  plugins: [],
}
