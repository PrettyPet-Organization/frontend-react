// Палитры цветов для светлой и темной темы
export const lightPalette = {
  // Основные цвета
  primary: '#ef823d', // Акцентный цвет
  text: '#463033', // Основной цвет шрифта
  
  // Фоновые цвета
  background: '#ffffff',
  surface: '#f8f9fa',
  surfaceVariant: '#f1f3f4',
  
  // Текстовые цвета
  textPrimary: '#463033',
  textSecondary: '#6c757d',
  textTertiary: '#adb5bd',
  textInverse: '#ffffff',
  
  // Границы и разделители
  border: '#e9ecef',
  borderVariant: '#dee2e6',
  
  // Состояния
  hover: '#f8f9fa',
  active: '#e9ecef',
  disabled: '#f8f9fa',
  
  // Семантические цвета
  success: '#28a745',
  warning: '#ffc107',
  error: '#dc3545',
  info: '#17a2b8',
  
  // Тени
  shadow: 'rgba(0, 0, 0, 0.1)',
  shadowVariant: 'rgba(0, 0, 0, 0.05)',
};

export const darkPalette = {
  // Основные цвета
  primary: '#ef823d', // Акцентный цвет остается тем же
  text: '#ffffff', // Основной цвет шрифта для темной темы
  
  // Фоновые цвета
  background: '#121212',
  surface: '#1e1e1e',
  surfaceVariant: '#2d2d2d',
  
  // Текстовые цвета
  textPrimary: '#ffffff',
  textSecondary: '#b0b0b0',
  textTertiary: '#808080',
  textInverse: '#463033',
  
  // Границы и разделители
  border: '#404040',
  borderVariant: '#525252',
  
  // Состояния
  hover: '#2d2d2d',
  active: '#404040',
  disabled: '#1e1e1e',
  
  // Семантические цвета
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3',
  
  // Тени
  shadow: 'rgba(0, 0, 0, 0.3)',
  shadowVariant: 'rgba(0, 0, 0, 0.2)',
};

export type ThemePalette = typeof lightPalette;
export type ThemeType = 'light' | 'dark'; 