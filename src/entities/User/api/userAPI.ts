import type { User, RegisterData, LoginData } from "../model/userSlice";
import { EMAIL_REGEX, MOCK_USERS } from "../model/constants";

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

// Утилита для генерации ID
const generateId = () => Date.now().toString();

// Валидация email
const isValidEmail = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

// API для регистрации
export const registerUser = async (registerData: RegisterData): Promise<ApiResponse<User>> => {
  // Валидация данных
  if (!registerData.email || !isValidEmail(registerData.email)) {
    throw new Error("Введите корректный email");
  }

  if (!registerData.password || registerData.password.length < 6) {
    throw new Error("Пароль должен содержать минимум 6 символов");
  }

  if (registerData.confirmPassword && registerData.password !== registerData.confirmPassword) {
    throw new Error("Пароли не совпадают");
  }

  // Проверка на существование пользователя
  const existingUser = MOCK_USERS.find((user: User) => user.email === registerData.email);
  if (existingUser) {
    throw new Error("Пользователь с таким email уже существует");
  }

  // Создание нового пользователя
  const newUser: User = {
    id: generateId(),
    email: registerData.email,
  };

  // Добавление в "базу данных"
  MOCK_USERS.push(newUser);

  return {
    data: newUser,
    message: "Регистрация прошла успешно",
    success: true,
  };
};

// API для входа
export const loginUser = async (loginData: LoginData): Promise<ApiResponse<User>> => {
  // Валидация данных
  if (!loginData.email || !isValidEmail(loginData.email)) {
    throw new Error("Введите корректный email");
  }

  if (!loginData.password) {
    throw new Error("Введите пароль");
  }

  // Поиск пользователя
  const user = MOCK_USERS.find((u: User) => u.email === loginData.email);
  if (!user) {
    throw new Error("Пользователь не найден");
  }

  return {
    data: user,
    message: "Вход выполнен успешно",
    success: true,
  };
};

// API для проверки доступности email
export const checkEmailAvailability = async (email: string): Promise<boolean> => {

  if (!isValidEmail(email)) {
    return false;
  }

  const existingUser = MOCK_USERS.find((user: User) => user.email === email);
  return !existingUser;
};

// Экспорт типов для использования в компонентах
export type { ApiResponse, ApiError };
