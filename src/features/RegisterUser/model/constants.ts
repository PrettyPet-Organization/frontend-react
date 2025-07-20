import { AUTH_VALIDATION, AUTH_MESSAGES } from "../../Auth";

// Тексты для страниц
export const REGISTER_TEXTS = {
  TITLE: "Создать аккаунт",
  SUBTITLE: "Зарегистрируйтесь для доступа к платформе",
  SUBMIT_BUTTON: "Зарегистрироваться",
  SUBMIT_LOADING: "Создаем аккаунт...",
  ALREADY_HAVE_ACCOUNT: "Уже есть аккаунт?",
  LOGIN_LINK: "Войти",
} as const;

// Сообщения для регистрации
export const REGISTER_MESSAGES = {
  EMAIL: AUTH_MESSAGES.EMAIL,
  PASSWORD: {
    REQUIRED: AUTH_MESSAGES.PASSWORD.REQUIRED,
    MIN_LENGTH: `Пароль должен содержать минимум ${AUTH_VALIDATION.PASSWORD.MIN_LENGTH} символов`,
  },
  CONFIRM_PASSWORD: {
    REQUIRED: "Подтвердите пароль",
    MISMATCH: "Пароли не совпадают",
  },
} as const;
