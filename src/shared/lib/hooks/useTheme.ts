import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { setTheme, toggleTheme, setSystemTheme } from '../../../entities/Theme/model/themeSlice';
import type { ThemeType } from '../../config/theme/palettes';

export const useTheme = () => {
  const dispatch = useDispatch();
  const { currentTheme, isSystemTheme } = useSelector((state: RootState) => state.theme);

  // Применяем тему к документу
  useEffect(() => {
    const root = document.documentElement;
    
    if (currentTheme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Применяем CSS переменные для Ant Design
    applyAntDesignTheme(currentTheme);
  }, [currentTheme]);

  // Слушаем изменения системной темы
  useEffect(() => {
    if (!isSystemTheme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      dispatch(setTheme(e.matches ? 'dark' : 'light'));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch, isSystemTheme]);

  const changeTheme = (theme: ThemeType) => {
    dispatch(setTheme(theme));
  };

  const toggleCurrentTheme = () => {
    dispatch(toggleTheme());
  };

  const useSystemTheme = () => {
    dispatch(setSystemTheme());
  };

  return {
    currentTheme,
    isSystemTheme,
    changeTheme,
    toggleCurrentTheme,
    useSystemTheme,
  };
};

// Функция для применения темы к Ant Design
const applyAntDesignTheme = (theme: ThemeType) => {
  const root = document.documentElement;
  
  if (theme === 'dark') {
    // Темная тема для Ant Design
    root.style.setProperty('--ant-primary-color', '#ef823d');
    root.style.setProperty('--ant-text-color', '#ffffff');
    root.style.setProperty('--ant-bg-color', '#121212');
    root.style.setProperty('--ant-border-color', '#404040');
    root.style.setProperty('--ant-border-radius', '6px');
  } else {
    // Светлая тема для Ant Design
    root.style.setProperty('--ant-primary-color', '#ef823d');
    root.style.setProperty('--ant-text-color', '#463033');
    root.style.setProperty('--ant-bg-color', '#ffffff');
    root.style.setProperty('--ant-border-color', '#e9ecef');
    root.style.setProperty('--ant-border-radius', '6px');
  }
}; 