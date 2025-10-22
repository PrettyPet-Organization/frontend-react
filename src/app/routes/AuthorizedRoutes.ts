import type { FC } from 'react';
import { AuthorizedPage } from '@/pages/Authorized/AuthorizedPage.tsx';
import ProjectCatalogPage from '@/pages/ProjectCatalog/ProjectCatalogPage.tsx';
import ProfilePage from '@/pages/Profile/ProfilePage.tsx';
import { ROUTES } from '@/shared/config/routes.ts';

export const AuthorizedRoutes: {
	path: string;
	element: FC;
}[] = [
	{
		path: ROUTES.AUTHORIZED,
		element: AuthorizedPage,
	},
	{
		path: ROUTES.CATALOG,
		element: ProjectCatalogPage,
	},
	{
		path: ROUTES.PROFILE,
		element: ProfilePage,
	},
];
