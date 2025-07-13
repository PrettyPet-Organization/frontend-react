import type { User, RegisterData, LoginData } from '../model/userSlice';

// Имитация API запросов
const API_DELAY = 1000; // 1 секунда задержки для имитации

// Интерфейсы для API ответов
interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

interface ApiError {
  message: string;
  code?: string;
}

// Имитация базы данных пользователей
const mockUsers: User[] = [
  {
    id: '1',
    name: 'Тестовый Пользователь',
    email: 'test@example.com',
  }
];

// Утилита для имитации задержки
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Утилита для генерации ID
const generateId = () => Date.now().toString();

// Валидация email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// API для регистрации
export const registerUser = async (registerData: RegisterData): Promise<ApiResponse<User>> => {
  await delay(API_DELAY);
  
  // Валидация данных
  if (!registerData.name || registerData.name.length < 2) {
    throw new Error('Имя должно содержать минимум 2 символа');
  }
  
  if (!registerData.email || !isValidEmail(registerData.email)) {
    throw new Error('Введите корректный email');
  }
  
  if (!registerData.password || registerData.password.length < 6) {
    throw new Error('Пароль должен содержать минимум 6 символов');
  }
  
  if (registerData.confirmPassword && registerData.password !== registerData.confirmPassword) {
    throw new Error('Пароли не совпадают');
  }
  
  // Проверка на существование пользователя
  const existingUser = mockUsers.find(user => user.email === registerData.email);
  if (existingUser) {
    throw new Error('Пользователь с таким email уже существует');
  }
  
  // Создание нового пользователя
  const newUser: User = {
    id: generateId(),
    name: registerData.name,
    email: registerData.email,
  };
  
  // Добавление в "базу данных"
  mockUsers.push(newUser);
  
  return {
    data: newUser,
    message: 'Регистрация прошла успешно',
    success: true,
  };
};

// API для входа
export const loginUser = async (loginData: LoginData): Promise<ApiResponse<User>> => {
  await delay(API_DELAY);
  
  // Валидация данных
  if (!loginData.email || !isValidEmail(loginData.email)) {
    throw new Error('Введите корректный email');
  }
  
  if (!loginData.password) {
    throw new Error('Введите пароль');
  }
  
  // Поиск пользователя
  const user = mockUsers.find(u => u.email === loginData.email);
  if (!user) {
    throw new Error('Пользователь не найден');
  }
  
  // В реальном приложении здесь была бы проверка пароля
  // Для демонстрации принимаем любой пароль
  
  return {
    data: user,
    message: 'Вход выполнен успешно',
    success: true,
  };
};

// API для проверки доступности email
export const checkEmailAvailability = async (email: string): Promise<boolean> => {
  await delay(500); // Меньшая задержка для проверки
  
  if (!isValidEmail(email)) {
    return false;
  }
  
  const existingUser = mockUsers.find(user => user.email === email);
  return !existingUser;
};

// Экспорт типов для использования в компонентах
export type { ApiResponse, ApiError }; 