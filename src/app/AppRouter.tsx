import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute.tsx';
import AuthorizedLayout from '../widgets/AuthorizedLayout/AuthorizedLayout.tsx';
import { AuthorizedRoutes } from './routes/AuthorizedRoutes.ts';
import { UnAuthorizedRoutes } from './routes/UnAuthorizedRoutes.ts';
import UnauthorizedLayout from '../widgets/UnauthorizedLayout/UnauthorizedLayout.tsx';
import { PublicRoutes } from './routes/PublicRoutes.ts';

export const AppRouter = () => {
	return (
		<Routes>
			{PublicRoutes.map(({ path, element: Component }) => (
				<Route
					key={path}
					path={path}
					element={
						<UnauthorizedLayout>
							<Component />
						</UnauthorizedLayout>
					}
				/>
			))}

			<Route element={<ProtectedRoute authRequired={false} />}>
				{UnAuthorizedRoutes.map(({ path, element: Component }) => (
					<Route
						key={path}
						path={path}
						element={
							<UnauthorizedLayout>
								<Component />
							</UnauthorizedLayout>
						}
					/>
				))}
			</Route>

			<Route element={<ProtectedRoute />}>
				{AuthorizedRoutes.map(({ path, element: Component }) => (
					<Route
						key={path}
						path={path}
						element={
							<AuthorizedLayout>
								<Component />
							</AuthorizedLayout>
						}
					/>
				))}
			</Route>

			<Route path='*' element={<div>404 - Страница не найдена</div>} />
		</Routes>
	);
};
