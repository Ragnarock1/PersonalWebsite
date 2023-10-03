import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'arimo' : ['Arimo', 'sans-serif'],
        'abril' : ['Abril Fatface', 'cursive']
      },
      keyframes: {
        slideIn: {
          'from': { 'margin-right': '100%' },
          'to': { 'margin-right': '0%' }
        },
        slideUp: {
          'from' : { 'transform': 'translateY(200px)'},
          'to' : { 'transform': 'translateY(0)'}
        },
        slideDown: {
          'from' : { 'transform': 'translateY(-200px)'},
          'to' : { 'transform': 'translateY(0)'}
        }
      },
      animation: {
        slideIn: 'slideIn 2s cubic-bezier(0.65, 0, 0.35, 1)', 
        slideUpSlow: 'slideUp 1.25s cubic-bezier(0.65, 0, 0.35, 1) both',
        slideUpFast: 'slideUp 1s cubic-bezier(0.65, 0, 0.35, 1) both',
        slideDownSlow: 'slideDown 1.25s cubic-bezier(0.65, 0, 0.35, 1) both',
        slideDownFast: 'slideDown 1s cubic-bezier(0.65, 0, 0.35, 1) both'
        
      }
      
    },
  },
  plugins: [],
}
export default config
