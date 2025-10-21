import type { FC } from 'react';
import { ROUTES } from '../../shared/config/routes.ts';
import { WelcomePage } from '../../pages/Welcome/WelcomePage.tsx';

export const PublicRoutes: {
	path: string;
	element: FC;
}[] = [
	{
		path: ROUTES.HOME,
		element: WelcomePage,
	},
];
