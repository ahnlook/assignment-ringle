/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      lg: '1085px'
    },
    extend: {
      fontSize: {
        'h-2': ['24px', { lineHeight: '24px', fontWeight: '700' }],
        'h-4': ['16px', { lineHeight: '24px' }],
        'h-5': ['14px', { lineHeight: '21px', fontWeight: '500' }],
        'h-6': ['12px', { lineHeight: '18px' }]
      },
      colors: {
        primary: '#7A5DE8',
        'purple-50': '#EEEBFA',
        'purple-500': '#503CC8',
        'gray-50': '#FBFBFF',
        'gray-100': '#EFF1F9',
        'gray-200': '#E4E7F4',
        'gray-700': '#3E426A',
        'green-500': '#E6F6EB'
      },
      textColor: {
        default: '#140F33',
        'gray-300': '#C9CCDE',
        'gray-500': '#80839E',
        'green-600': '#2BAB63'
      }
    }
  },
  plugins: []
}
