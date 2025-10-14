import { ThemeToggle } from '../../features/ThemeToggle/ui/ThemeToggle.tsx';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../shared/ui/Logo.tsx';

interface UnauthorizedLayoutProps {
	children: React.ReactNode;
}

const UnauthorizedLayout: FC<UnauthorizedLayoutProps> = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div className='min-h-screen bg-gradient-to-br from-theme-bg to-theme-surface flex flex-col'>
			{/* Header с логотипом и переключателем темы */}
			<header className='flex justify-between items-center p-6'>
				<Logo onClick={() => navigate('/')} />
				<ThemeToggle />
			</header>

			{children}

			{/* Footer */}
			<footer className='text-center py-6 text-theme-text-tertiary'>
				<p>&copy; 2025 Pretty Pet. Все права защищены.</p>
			</footer>
		</div>
	);
};

export default UnauthorizedLayout;
