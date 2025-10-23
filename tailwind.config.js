// tailwind.config.js
/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
      content: [
    './src/**/*.{js,ts,jsx,tsx}', // your React components
    './pages/**/*.{js,ts,jsx,tsx}', // Next.js pages
  ],

    theme: {
        extend: {
            colors: {
                primary: {
                    lightest: '#faf4ef',
                    lighter: '#f3e3d2',
                    light: '#d6bfa8',
                    DEFAULT: '#996633',
                    dark: '#704a23',
                    darker: '#4c3119',
                    darkest: '#2b1b0f',
                },
                secondary: {
                    light: '#a4c7c7',
                    DEFAULT: '#3b7d7d',
                    dark: '#275353',
                },
                accent: {
                    light: '#f5dca3',
                    DEFAULT: '#d4a017',
                    dark: '#8c6b10',
                },
                success: '#22c55e',
                warning: '#eab308',
                error: '#ef4444',
                info: '#3b82f6',
                neutral: {
                    white: '#ffffff',
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#262626',
                    900: '#171717',
                    black: '#000000',
                },
            },
            boxShadow: {
                sm: '0 1px 2px rgba(0,0,0,0.1)',
                md: '0 2px 4px rgba(0,0,0,0.1)',
                lg: '0 4px 8px rgba(0,0,0,0.1)',
            },
            opacity: {
                disabled: '0.6',
                overlay: '0.4',
            },
        },
    },
}

