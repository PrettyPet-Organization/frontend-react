import type { User } from './userSlice';

// Регулярное выражение для валидации email
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Минимальная длина пароля
export const MIN_PASSWORD_LENGTH = 6;

// Валидационные утилиты
export const ValidationUtils = {
	// Валидация email
	isValidEmail: (email: string): boolean => {
		return Boolean(email && EMAIL_REGEX.test(email.trim()));
	},

	// Валидация пароля
	isValidPassword: (password: string): boolean => {
		return Boolean(password && password.length >= MIN_PASSWORD_LENGTH);
	},

	// Проверка совпадения паролей
	arePasswordsMatching: (
		password: string,
		confirmPassword: string
	): boolean => {
		return Boolean(password && confirmPassword && password === confirmPassword);
	},

	// Проверка заполненности обязательного поля
	isRequired: (value: string): boolean => {
		return Boolean(value && value.trim());
	},
};

// Имитация базы данных пользователей
export const MOCK_USERS: User[] = [
	{
		id: '1',
		email: 'test@example.com',
	},
];
