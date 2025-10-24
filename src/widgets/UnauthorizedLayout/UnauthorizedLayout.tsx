import { ThemeToggle } from '@/features/ThemeToggle/ui/ThemeToggle.tsx';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/shared/config/routes.ts';
import { Logo } from '@/shared/ui';

interface UnauthorizedLayoutProps {
	children: React.ReactNode;
}

const UnauthorizedLayout: FC<UnauthorizedLayoutProps> = ({ children }) => {
	const navigate = useNavigate();

	return (
		<div
			className='min-h-screen bg-gradient-to-br from-theme-bg to-theme-surface grid'
			style={{ gridTemplateRows: 'auto 1fr auto' }}
		>
			{/* Header с логотипом и переключателем темы */}
			<header className='flex justify-between items-center p-6'>
				<Logo onClick={() => navigate(ROUTES.HOME)} />
				<ThemeToggle />
			</header>

			<main>{children}</main>

			{/* Footer */}
			<footer className='text-center py-6 text-theme-text-tertiary'>
				<p>&copy; 2025 Pretty Pet. Все права защищены.</p>
			</footer>
		</div>
	);
};

export default UnauthorizedLayout;
