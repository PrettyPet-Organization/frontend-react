import AuthorizedNavBar from '@/features/AuthorizedNavBar/AuthorizedNavBar.tsx';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/shared/config/routes.ts';
import { Logo } from '@/shared/ui';

const AuthorizedLayoutDesktopMenu = () => {
	const navigate = useNavigate();

	return (
		<div className='bg-theme-surface w-2xs gap-24 flex-col items-center justify-between py-6 px-12 sm:flex hidden'>
			<Logo onClick={() => navigate(ROUTES.HOME)} />
			<AuthorizedNavBar />
		</div>
	);
};

export default AuthorizedLayoutDesktopMenu;
