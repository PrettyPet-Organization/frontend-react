import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../../app/store';
import {
	login,
	logout,
	setLoading,
	setError,
	registerSuccess,
	registerUser,
	loginUser as loginUserAPI,
	type LoginData,
	type RegisterData,
	type User,
} from '../../../entities/User';

export const useAuth = () => {
	const dispatch = useDispatch();
	const { user, isAuthorized, loading, error } = useSelector(
		(state: RootState) => state.user
	);

	// Регистрация пользователя
	const registerUserAsync = async (
		registerData: RegisterData
	): Promise<void> => {
		try {
			dispatch(setLoading(true));
			dispatch(setError(null));

			const response = await registerUser(registerData);
			dispatch(registerSuccess(response.data));
		} catch (error) {
			const errorMessage =
				error instanceof Error
					? error.message
					: 'Произошла ошибка при регистрации';
			dispatch(setError(errorMessage));
			throw error; // Пробрасываем ошибку для обработки в компоненте
		}
	};

	// Вход пользователя
	const loginUserAsync = async (loginData: LoginData): Promise<void> => {
		try {
			dispatch(setLoading(true));
			dispatch(setError(null));

			const response = await loginUserAPI(loginData);
			dispatch(login(response.data));
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : 'Произошла ошибка при входе';
			dispatch(setError(errorMessage));
			throw error; // Пробрасываем ошибку для обработки в компоненте
		}
	};

	// Устаревший метод для совместимости
	const loginUser = (userData: User) => {
		dispatch(login(userData));
	};

	// Выход пользователя
	const logoutUser = () => {
		dispatch(logout());
	};

	// Очистка ошибок
	const clearError = () => {
		dispatch(setError(null));
	};

	return {
		user,
		isAuthorized,
		loading,
		error,
		registerUserAsync,
		loginUserAsync,
		loginUser, // Для совместимости
		logoutUser,
		clearError,
	};
};
