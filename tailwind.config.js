/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Включаем поддержку темной темы через класс
  theme: {
    extend: {
      colors: {
        // Светлая тема
        'theme-primary': '#ef823d',
        'theme-text': '#463033',
        'theme-bg': '#ffffff',
        'theme-surface': '#f8f9fa',
        'theme-surface-variant': '#f1f3f4',
        'theme-text-primary': '#463033',
        'theme-text-secondary': '#6c757d',
        'theme-text-tertiary': '#adb5bd',
        'theme-border': '#e9ecef',
        'theme-border-variant': '#dee2e6',
        'theme-hover': '#f8f9fa',
        'theme-active': '#e9ecef',
        'theme-disabled': '#f8f9fa',
        'theme-success': '#28a745',
        'theme-warning': '#ffc107',
        'theme-error': '#dc3545',
        'theme-info': '#17a2b8',
        
        // Темная тема (будут применяться через CSS переменные)
        'dark-primary': '#ef823d',
        'dark-text': '#ffffff',
        'dark-bg': '#121212',
        'dark-surface': '#1e1e1e',
        'dark-surface-variant': '#2d2d2d',
        'dark-text-primary': '#ffffff',
        'dark-text-secondary': '#b0b0b0',
        'dark-text-tertiary': '#808080',
        'dark-border': '#404040',
        'dark-border-variant': '#525252',
        'dark-hover': '#2d2d2d',
        'dark-active': '#404040',
        'dark-disabled': '#1e1e1e',
        'dark-success': '#4caf50',
        'dark-warning': '#ff9800',
        'dark-error': '#f44336',
        'dark-info': '#2196f3',
      },
    },
  },
  plugins: [],
} 