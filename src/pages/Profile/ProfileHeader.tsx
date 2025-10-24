import { Avatar, Typography } from 'antd';
import { UserOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

interface ProfileHeaderProps {
	fullName: string;
	email: string;
}

const ProfileHeader = ({ fullName, email }: ProfileHeaderProps) => {
	// TODO: form for avatar and validation, button(input) to open native image selection menu
	return (
		<div className='flex flex-col items-center'>
			<div className='mb-4'>
				<Avatar
					size={128}
					icon={<UserOutlined />}
					className='bg-theme-primary text-white'
				/>
			</div>

			<Title
				level={1}
				className='text-3xl font-bold text-theme-text-primary mb-2 flex items-center'
			>
				{fullName}
			</Title>

			<Paragraph
				type='secondary'
				className='text-theme-text-secondary flex items-center'
			>
				<MailOutlined className='mr-2' />
				{email}
			</Paragraph>
		</div>
	);
};

export default ProfileHeader;
