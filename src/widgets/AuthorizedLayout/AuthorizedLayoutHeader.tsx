import MobileMenuToggle from '../../features/MobileMenuToggle/MobileMenuToggle.tsx';
import { ThemeToggle } from '../../features/ThemeToggle/ui/ThemeToggle.tsx';
import LogoutButton from '../../features/LogoutButton/LogoutButton.tsx';
import Logo from '../../shared/ui/Logo.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../shared/config/routes.ts';

const AuthorizedLayoutHeader = () => {
	const navigate = useNavigate();

	return (
		<header className='flex justify-end not-sm:justify-between items-center p-6'>
			<span className='sm:hidden'>
				<div className='flex items-center space-x-2'>
					<Logo onClick={() => navigate(ROUTES.HOME)} />
				</div>
			</span>
			<div className='flex items-center space-x-4'>
				<ThemeToggle />

				<MobileMenuToggle />

				<LogoutButton />
			</div>
		</header>
	);
};

export default AuthorizedLayoutHeader;
