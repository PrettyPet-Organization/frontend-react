// Общие сообщения для валидации
export const AUTH_MESSAGES = {
  EMAIL: {
    REQUIRED: 'Введите email',
    INVALID: 'Введите корректный email',
  },
  PASSWORD: {
    REQUIRED: 'Введите пароль',
  },
} as const;

// Лейблы
export const AUTH_LABELS = {
  NAME: "Имя",
  EMAIL: "Email",
  PASSWORD: "Пароль",
  CONFIRM_PASSWORD: "Подтвердите пароль",
} as const;

// Плейсхолдеры
export const AUTH_PLACEHOLDERS = {
  NAME: "Введите ваше имя",
  EMAIL: "Введите email",
  PASSWORD: "Введите пароль",
  CONFIRM_PASSWORD: "Подтвердите пароль",
} as const;

// Константы для валидации
export const AUTH_VALIDATION = {
  NAME: {
    MIN_LENGTH: 2,
    MAX_LENGTH: 50,
  },
  PASSWORD: {
    MIN_LENGTH: 6,
  },
} as const;