import { useAuth } from '@/shared/lib/hooks/useAuth.ts';

export const AuthorizedPage = () => {
	const { user } = useAuth();

	return (
		<div className='flex flex-col items-center justify-center h-full'>
			{/* Основной контент */}
			<div className='flex flex-col items-center justify-center px-6 text-center'>
				<h1 className='text-4xl font-bold text-theme-text mb-4'>
					Авторизованная страница
				</h1>

				<p className='text-xl text-theme-text-secondary mb-8 max-w-2xl'>
					Вы успешно вошли в систему! Эта страница доступна только
					авторизованным пользователям.
				</p>

				<div className='bg-theme-surface rounded-lg p-6 border border-theme-border'>
					<h2 className='text-2xl font-semibold text-theme-text mb-4'>
						Информация о пользователе
					</h2>
					<p className='text-theme-text-secondary'>Email: {user?.email}</p>
				</div>
			</div>
		</div>
	);
};
