import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
            },
            colors: {
                'primary': '#646cff',
                'primary-hover': '#535bf2',
                'background-dark': '#242424',
                'text-dark': 'rgba(255, 255, 255, 0.87)',
                'button-bg-dark': '#1a1a1a',
                'button-bg-light': '#f9f9f9',
            },
            lineHeight: {
                normal: '1.5',
            }
        },
    },
    plugins: [],
};

export default config;
