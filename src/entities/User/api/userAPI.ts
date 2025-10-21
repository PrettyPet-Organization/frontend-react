import type { User, RegisterData, LoginData } from '../model/userSlice';
import {
	ValidationUtils,
	MOCK_USERS,
	MIN_PASSWORD_LENGTH,
} from '../model/constants';

// Интерфейсы для API ответов
interface ApiResponse<T> {
	data: T;
	message: string;
	success: boolean;
}

export interface ApiError {
	message: string;
	code?: string;
}

// Утилита для генерации ID
const generateId = () => Date.now().toString();

// API для регистрации
export const registerUser = async (
	registerData: RegisterData
): Promise<ApiResponse<User>> => {
	// Валидация данных
	if (!ValidationUtils.isValidEmail(registerData.email)) {
		throw new Error('Введите корректный email');
	}

	if (!ValidationUtils.isValidPassword(registerData.password)) {
		throw new Error(
			`Пароль должен содержать минимум ${MIN_PASSWORD_LENGTH} символов`
		);
	}

	if (
		registerData.confirmPassword &&
		!ValidationUtils.arePasswordsMatching(
			registerData.password,
			registerData.confirmPassword
		)
	) {
		throw new Error('Пароли не совпадают');
	}

	// Проверка на существование пользователя
	const existingUser = MOCK_USERS.find(
		(user: User) => user.email === registerData.email
	);
	if (existingUser) {
		throw new Error('Пользователь с таким email уже существует');
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
		message: 'Регистрация прошла успешно',
		success: true,
	};
};

// API для входа
export const loginUser = async (
	loginData: LoginData
): Promise<ApiResponse<User>> => {
	// Валидация данных
	if (!ValidationUtils.isValidEmail(loginData.email)) {
		throw new Error('Введите корректный email');
	}

	if (!ValidationUtils.isRequired(loginData.password)) {
		throw new Error('Введите пароль');
	}

	// Поиск пользователя
	const user = MOCK_USERS.find((u: User) => u.email === loginData.email);
	if (!user) {
		throw new Error('Пользователь не найден');
	}

	return {
		data: user,
		message: 'Вход выполнен успешно',
		success: true,
	};
};

// API для проверки доступности email
export const checkEmailAvailability = async (
	email: string
): Promise<boolean> => {
	if (!ValidationUtils.isValidEmail(email)) {
		return false;
	}

	const existingUser = MOCK_USERS.find((user: User) => user.email === email);
	return !existingUser;
};

// Mock data for profile
export interface ProfileData {
	id: number;
	createdAt: string;
	updatedAt: string;
	email: string;
	fullName: string;
	bio: string;
	preferences: string;
	experience: string;
	level: {
		id: number;
		name: string;
	};
	skills: Array<{
		id: number;
		name: string;
	}>;
}
