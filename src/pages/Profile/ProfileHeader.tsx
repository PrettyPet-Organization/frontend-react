import { Typography } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { AvatarUpload } from '@/features/AvatarUpload';

const { Title, Paragraph } = Typography;

interface ProfileHeaderProps {
	fullName: string;
	email: string;
	avatarUrl?: string;
	onAvatarChange: (file: File) => void;
	loading?: boolean;
}

const ProfileHeader = ({
	fullName,
	email,
	avatarUrl,
	onAvatarChange,
	loading = false,
}: ProfileHeaderProps) => {
	const [isUploading, setIsUploading] = useState(false);

	const handleAvatarChange = async (file: File) => {
		setIsUploading(true);
		try {
			// TODO: Implement actual avatar upload logic
			console.log('Avatar file selected:', file);
			onAvatarChange(file);
		} catch (error) {
			console.error('Avatar upload failed:', error);
		} finally {
			setIsUploading(false);
		}
	};

	return (
		<div className='flex flex-col items-center'>
			<div className='mb-4 relative'>
				<AvatarUpload
					avatarUrl={avatarUrl}
					onChange={handleAvatarChange}
					loading={isUploading || loading}
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
