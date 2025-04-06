// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#4e7efe', // Your main blue color
                'primary-dark': '#3a6bea', // Slightly darker for hover states
                'primary-light': '#6a93ff', // Slightly lighter variant
            },
        },
    },
    plugins: [],
}