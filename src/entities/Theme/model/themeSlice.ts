import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ThemeType } from '../../../shared/config/theme/palettes';

interface ThemeState {
  currentTheme: ThemeType;
  isSystemTheme: boolean;
}

const getInitialTheme = (): ThemeType => {
  // Проверяем сохраненную тему в localStorage
  const savedTheme = localStorage.getItem('theme') as ThemeType;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    return savedTheme;
  }
  
  // Проверяем системную тему
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  return 'light';
};

const initialState: ThemeState = {
  currentTheme: getInitialTheme(),
  isSystemTheme: !localStorage.getItem('theme'),
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
      state.isSystemTheme = false;
      localStorage.setItem('theme', action.payload);
    },
    toggleTheme: (state) => {
      const newTheme = state.currentTheme === 'light' ? 'dark' : 'light';
      state.currentTheme = newTheme;
      state.isSystemTheme = false;
      localStorage.setItem('theme', newTheme);
    },
    setSystemTheme: (state) => {
      state.isSystemTheme = true;
      localStorage.removeItem('theme');
      // Определяем системную тему
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        state.currentTheme = 'dark';
      } else {
        state.currentTheme = 'light';
      }
    },
  },
});

export const { setTheme, toggleTheme, setSystemTheme } = themeSlice.actions;
export default themeSlice.reducer; 