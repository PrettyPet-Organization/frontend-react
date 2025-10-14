import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../shared/lib/hooks/useAuth.ts';
import { LogoutOutlined } from '@ant-design/icons';

const LogoutButton = () => {
	const navigate = useNavigate();
	const { logoutUser } = useAuth();

	const handleLogout = () => {
		logoutUser();
		navigate('/');
	};

	return (
		<Button onClick={handleLogout} type='default'>
			Выйти
			<LogoutOutlined />
		</Button>
	);
};

export default LogoutButton;
