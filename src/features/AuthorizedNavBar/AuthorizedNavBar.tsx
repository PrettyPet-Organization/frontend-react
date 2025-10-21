import { Link } from 'react-router-dom';
import { ROUTES } from '../../shared/config/routes.ts';

const authorizedRoutList: { name: string; link: string }[] = [
	{
		name: 'Главная',
		link: ROUTES.AUTHORIZED,
	},
	{
		name: 'Все проекты',
		link: ROUTES.CATALOG,
	},
	{
		name: 'Профиль',
		link: ROUTES.PROFILE,
	},
];

const AuthorizedNavBar = () => {
	return (
		<div className='flex flex-1 flex-col gap-12 sm:gap-6 align-baseline w-full justify-center sm:justify-start'>
			{authorizedRoutList.map((item, i) => (
				<Link
					className='text-center sm:text-left text-xl sm:text-base border-b-2 border-transparent hover:border-[var(--color-primary)] transition'
					key={i}
					to={item.link}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default AuthorizedNavBar;
