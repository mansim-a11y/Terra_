/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    beige: '#F5F5DC', // "Bio Beige" - Backgrounds
                    teal: '#2E8B57',  // "Terra Teal" - Primary Actions
                    earth: '#4B3621', // "Deep Earth" - Text/Contrast
                    accent: '#D2B48C', // Secondary details
                },
                neutral: {
                    50: '#FAF9F6',
                    100: '#F5F5DC', // Using beige locally
                },
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                lato: ['Lato', 'sans-serif'],
            },
            borderRadius: {
                'xl': '12px', // Organic feel
            }
        },
    },
    plugins: [],
}
