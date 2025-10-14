import AuthorizedNavBar from '../../features/AuthorizedNavBar/AuthorizedNavBar.tsx';
import { useMobileMenu } from '../../shared/lib/hooks/useMobuleMenu.ts';
import Logo from '../../shared/ui/Logo.tsx';
import { useNavigate } from 'react-router-dom';
import LogoutButton from '../../features/LogoutButton/LogoutButton.tsx';

const AuthorizedLayoutMobileMenu = () => {
	const { isOpened, closeMobileMenu } = useMobileMenu();
	const navigate = useNavigate();

	return (
		<div
			onClick={() => closeMobileMenu()}
			className={`
      bg-theme-surface h-screen w-screen flex flex-col items-center justify-between gap-12 sm:hidden absolute
      transition-transform duration-300 py-12 z-2
      ${isOpened ? 'translate-x-0' : 'translate-x-full'}
    `}
		>
			<Logo onClick={() => navigate('/authorized')} />
			<AuthorizedNavBar />
			<LogoutButton />
		</div>
	);
};

export default AuthorizedLayoutMobileMenu;
