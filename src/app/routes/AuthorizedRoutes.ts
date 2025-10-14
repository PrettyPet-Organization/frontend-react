import type { FC } from 'react';
import { AuthorizedPage } from '../../pages/Authorized/AuthorizedPage.tsx';
import ProjectCatalogPage from '../../pages/ProjectCatalog/ProjectCatalogPage.tsx';
import ProfilePage from '../../pages/Profile/ProfilePage.tsx';

export const AuthorizedRoutes: {
	path: string;
	element: FC;
}[] = [
	{
		path: 'authorized',
		element: AuthorizedPage,
	},
	{
		path: 'catalog',
		element: ProjectCatalogPage,
	},
	{
		path: 'profile',
		element: ProfilePage,
	},
];
