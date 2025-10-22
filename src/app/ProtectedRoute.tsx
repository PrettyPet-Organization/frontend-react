import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/shared/lib/hooks/useAuth';
import { Preloader } from '@/shared/ui/preloader';
import { ROUTES } from '@/shared/config/routes';

const ProtectedRoute = ({
	authRequired = true,
}: {
	authRequired?: boolean;
}) => {
	const location = useLocation();
	const { user, loading } = useAuth();

	if (loading) return <Preloader />;

	if (authRequired && !user)
		return <Navigate replace to={ROUTES.LOGIN} state={{ from: location }} />;

	if (!authRequired && user)
		return (
			<Navigate
				replace
				to={location.state?.from || { pathname: ROUTES.AUTHORIZED }}
			/>
		);

	return <Outlet />;
};

export default ProtectedRoute;
