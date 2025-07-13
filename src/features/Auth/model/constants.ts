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

// Сообщения для регистрации
export const REGISTER_MESSAGES = {
  NAME: {
    REQUIRED: 'Введите ваше имя',
    MIN_LENGTH: `Имя должно содержать минимум ${AUTH_VALIDATION.NAME.MIN_LENGTH} символа`,
    MAX_LENGTH: `Имя не должно превышать ${AUTH_VALIDATION.NAME.MAX_LENGTH} символов`,
  },
  EMAIL: AUTH_MESSAGES.EMAIL,
  PASSWORD: {
    REQUIRED: AUTH_MESSAGES.PASSWORD.REQUIRED,
    MIN_LENGTH: `Пароль должен содержать минимум ${AUTH_VALIDATION.PASSWORD.MIN_LENGTH} символов`,
  },
  CONFIRM_PASSWORD: {
    REQUIRED: 'Подтвердите пароль',
    MISMATCH: 'Пароли не совпадают',
  },
} as const;

// Сообщения для входа
export const LOGIN_MESSAGES = {
  EMAIL: AUTH_MESSAGES.EMAIL,
  PASSWORD: AUTH_MESSAGES.PASSWORD,
} as const;

// Плейсхолдеры
export const AUTH_PLACEHOLDERS = {
  NAME: 'Введите ваше имя',
  EMAIL: 'Введите email',
  PASSWORD: 'Введите пароль',
  CONFIRM_PASSWORD: 'Подтвердите пароль',
} as const;

// Лейблы
export const AUTH_LABELS = {
  NAME: 'Имя',
  EMAIL: 'Email',
  PASSWORD: 'Пароль',
  CONFIRM_PASSWORD: 'Подтвердите пароль',
} as const;

// Тексты для страниц
export const AUTH_TEXTS = {
  REGISTER: {
    TITLE: 'Создать аккаунт',
    SUBTITLE: 'Зарегистрируйтесь для доступа к платформе',
    SUBMIT_BUTTON: 'Зарегистрироваться',
    SUBMIT_LOADING: 'Создаем аккаунт...',
    ALREADY_HAVE_ACCOUNT: 'Уже есть аккаунт?',
    LOGIN_LINK: 'Войти',
  },
  LOGIN: {
    TITLE: 'Вход в систему',
    SUBTITLE: 'Войдите в ваш аккаунт для продолжения',
    SUBMIT_BUTTON: 'Войти',
    SUBMIT_LOADING: 'Вход...',
    NO_ACCOUNT: 'Нет аккаунта?',
    REGISTER_LINK: 'Зарегистрироваться',
  },
} as const; 