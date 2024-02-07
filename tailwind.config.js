/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'h-2': ['24px', { lineHeight: '24px', fontWeight: '700' }],
        'h-4': ['16px', { lineHeight: '24px' }]
      },
      colors: {
        primary: '#7A5DE8',
        'gray-100': '#EFF1F9',
        'green-500': '#E6F6EB'
      },
      textColor: {
        default: '#140F33',
        'purple-500': '#503CC8',
        'gray-500': '#80839E',
        'green-600': '#2BAB63'
      }
    }
  },
  plugins: []
}
