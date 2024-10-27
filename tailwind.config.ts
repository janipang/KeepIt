import type { Config } from 'tailwindcss';
const { nextui } = require('@nextui-org/react');

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6B70F2',
          light: '#bec0fa',
          dark: '#6069BF',
        },
        secondary: {
          DEFAULT: '#49D6E7',
          dark: '#41b6c4',
        },
        accent: {
          DEFAULT: '#E6E6E6',
          light: '#e8e9ef',
          dark: '#888888',
        },
        success: {
          DEFAULT: '#5fb168',
          light: '#dff3e7',
          dark: '#14ae5c',
        },
        error: {
          DEFAULT: '#F47459',
          light: '#F9A4A4',
          dark: '#FF2020',
        },
        loyal: {
          DEFAULT: '#3297ff',
          light: '#ddeeff',
        },
        base: {
          DEFAULT: '#F4F4F8',
          dark: '#D9D9D9',
        },
        disable: '#9D9EB1',
        foreground: '#000000',

        // bolow this is from shadcn/ui chart
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      fontSize: {
        subheading: '1.563rem',
        heading: '1.953rem',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(35deg, rgba(127,127,213,1) 0%, rgba(144,107,242,1) 29%, rgba(145,234,228,1) 100%)',
        'gradient-sweet':
          'linear-gradient(63deg, rgba(148,187,233,1) 60%, rgba(238,174,202,1) 80%)',
        'gradient-sunshine':
          'linear-gradient(-30deg, rgba(148,187,233,1) 50%, rgba(255,250,75,0.9424083769633508) 100%)',
        'gradient-aurora':
          'linear-gradient(38deg, rgba(106,153,209,1) 60%, rgba(75,255,83,0.9790575916230366) 100%)',
      },
      opacity: {
        fade: '20%',
        ligth: '35%',
        dark: '85%',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      animation: {
        fade: 'fadeIn 1.0s ease-in-out',
        loadingDots1: 'loadingDots 1s infinite ease-in-out',
        loadingDots2: 'loadingDots 1s infinite ease-in-out 0.2s',
        loadingDots3: 'loadingDots 1s infinite ease-in-out 0.4s',
        blob: 'blobling 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        loadingDots: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.5)' },
        },
        blobling: {
          '0%': { transform: 'translate(-70%, -70%)' },
          '25%': { transform: 'translate(70%, -70%)' },
          '50%': { transform: 'translate(70%, 70%)' },
          '75%': { transform: 'translate(-70%, 70%)' },
          '100%': { transform: 'translate(-70%, -70%)' },
        },
      },
    },
    screens: {
      xs: '520px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [nextui(), require('tailwindcss-animate')],
};
export default config;
