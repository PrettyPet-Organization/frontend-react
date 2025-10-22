import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import { LoginForm } from '@/shared/ui/LoginForm';
import type { LoginData } from '@/entities/User';

const { Title, Text } = Typography;

export const LoginPage = () => {
	const navigate = useNavigate();
	const { loginUserAsync, loading, error, clearError } = useAuth();

	// Очистка ошибок при размонтировании
	useEffect(() => {
		return () => {
			clearError();
		};
	}, [clearError]);

	const handleSubmit = async (values: LoginData) => {
		try {
			await loginUserAsync(values);
			// Перенаправление произойдет автоматически через useEffect
		} catch (error) {
			// Ошибка уже обработана в useAuth
			console.error('Login failed:', error);
		}
	};

	const handleFieldChange = () => {
		// Очищаем ошибки при изменении полей
		if (error) {
			clearError();
		}
	};

	return (
		<div className='flex flex-col items-center justify-center h-full  px-6 py-8'>
			<div className='max-w-md w-full'>
				<div className='text-center mb-8'>
					<Title level={2} className='!text-theme-text !mb-2'>
						Вход в систему
					</Title>
					<Text type='secondary' className='text-theme-text-secondary'>
						Войдите в свой аккаунт для продолжения работы
					</Text>
				</div>

				<div className='bg-theme-surface rounded-lg p-6 border border-theme-border shadow-lg'>
					<LoginForm
						onSubmit={handleSubmit}
						onFieldsChange={handleFieldChange}
						loading={loading}
						error={error}
						onErrorClose={clearError}
					/>
				</div>

				<div className='text-center mt-6'>
					<Text type='secondary' className='text-theme-text-secondary'>
						Нет аккаунта?{' '}
						<Button
							type='link'
							onClick={() => navigate('/register')}
							className='!text-theme-primary hover:!opacity-80 !p-0'
						>
							Зарегистрироваться
						</Button>
					</Text>
				</div>
			</div>
		</div>
	);
};
