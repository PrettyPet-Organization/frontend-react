import { AUTH_MESSAGES } from "../../Auth";

// Тексты для страниц
export const LOGIN_TEXTS = {
  TITLE: "Вход в систему",
  SUBTITLE: "Войдите в ваш аккаунт для продолжения",
  SUBMIT_BUTTON: "Войти",
  SUBMIT_LOADING: "Вход...",
  NO_ACCOUNT: "Нет аккаунта?",
  REGISTER_LINK: "Зарегистрироваться",
} as const;

// Сообщения для входа
export const LOGIN_MESSAGES = {
  EMAIL: AUTH_MESSAGES.EMAIL,
  PASSWORD: AUTH_MESSAGES.PASSWORD,
} as const;
