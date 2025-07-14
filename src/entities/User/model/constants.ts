import type { User } from './userSlice';

// Настройки API
export const API_DELAY = 1000; // 1 секунда задержки для имитации
export const EMAIL_CHECK_DELAY = 500; // Меньшая задержка для проверки email

// Регулярное выражение для валидации email
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Имитация базы данных пользователей
export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Тестовый Пользователь',
    email: 'test@example.com',
  }
]; 