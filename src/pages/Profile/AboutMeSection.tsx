import { Card, Typography, Divider, Button, Modal } from 'antd';
import {
	UserOutlined,
	CodeOutlined,
	StarOutlined,
	HeartOutlined,
	EditOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { EditProfileForm } from '@/features/EditProfileForm';

const { Title, Paragraph } = Typography;

interface AboutMeProps {
	bio: string;
	experience: string;
	level: string;
	preferences: string;
}

const AboutMeSection = ({
	bio,
	experience,
	level,
	preferences,
}: AboutMeProps) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const handleEditClick = () => {
		setIsModalVisible(true);
	};

	const handleModalClose = () => {
		setIsModalVisible(false);
	};

	const handleFormSubmit = (values: {
		bio: string;
		experience: string;
		level: string;
		preferences: string;
	}) => {
		// TODO: Implement form submission logic
		console.log('Form submitted:', values);
		setIsModalVisible(false);
	};

	return (
		<Card
			title={
				<h3 className='flex text-xl items-center'>
					<UserOutlined className='mr-2 text-theme-primary' />
					Обо мне
				</h3>
			}
			extra={
				<Button
					type='default'
					icon={<EditOutlined />}
					onClick={handleEditClick}
				/>
			}
		>
			<div className='space-y-4'>
				<div className='flex flex-col items-start'>
					<div className='flex items-start gap-2'>
						<div className='mt-0.5'>
							<CodeOutlined className='text-theme-primary' />
						</div>
						<Title level={5} className='text-theme-text-primary'>
							Биография
						</Title>
					</div>
					<Paragraph className='text-theme-text-secondary'>{bio}</Paragraph>
				</div>

				<Divider size={'small'} />

				<div className='flex flex-col items-start'>
					<div className='flex items-start gap-2'>
						<div className='mt-0.5'>
							<StarOutlined className='text-theme-primary' />
						</div>
						<Title level={5} className='text-theme-text-primary'>
							Опыт
						</Title>
					</div>
					<Paragraph className='text-theme-text-secondary'>
						{experience}
					</Paragraph>
				</div>

				<Divider size={'small'} />

				<div className='flex flex-col items-start'>
					<div className='flex items-start gap-2'>
						<div className='mt-0.5'>
							<CodeOutlined className='text-theme-primary' />
						</div>
						<Title level={5} className='text-theme-text-primary'>
							Уровень
						</Title>
					</div>
					<Paragraph className='text-theme-text-secondary'>{level}</Paragraph>
				</div>

				<Divider size={'small'} />

				<div className='flex flex-col items-start'>
					<div className='flex items-start gap-2'>
						<div className='mt-0.5'>
							<HeartOutlined className='text-theme-primary' />
						</div>
						<Title level={5} className='text-theme-text-primary'>
							Предпочтения
						</Title>
					</div>
					<Paragraph className='text-theme-text-secondary'>
						{preferences}
					</Paragraph>
				</div>
			</div>

			<Modal
				title='Редактировать профиль'
				open={isModalVisible}
				onCancel={handleModalClose}
				footer={null}
				centered
			>
				<EditProfileForm
					initialValues={{
						bio,
						experience,
						level,
						preferences,
					}}
					onSubmit={handleFormSubmit}
					onCancel={handleModalClose}
					// TODO: Implement loading
					saveLoading={false}
				/>
			</Modal>
		</Card>
	);
};

export default AboutMeSection;
