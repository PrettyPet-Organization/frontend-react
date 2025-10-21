import type { FC } from 'react';
import { LoginPage } from '../../pages/Login/LoginPage.tsx';
import { RegisterPage } from '../../pages/Register/RegisterPage.tsx';
import { ROUTES } from '../../shared/config/routes.ts';

export const UnAuthorizedRoutes: {
	path: string;
	element: FC;
}[] = [
	{
		path: ROUTES.LOGIN,
		element: LoginPage,
	},
	{
		path: ROUTES.REGISTER,
		element: RegisterPage,
	},
];
