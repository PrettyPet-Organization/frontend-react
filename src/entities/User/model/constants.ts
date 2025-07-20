import type { User } from "./userSlice";

// Регулярное выражение для валидации email
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Имитация базы данных пользователей
export const MOCK_USERS: User[] = [
  {
    id: "1",
    email: "test@example.com",
  },
];
