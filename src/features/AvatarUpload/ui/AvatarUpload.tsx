import { useRef, useState, type ChangeEvent } from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { avatarSchema } from '../model/validation';

interface AvatarUploadProps {
	avatarUrl?: string;
	onChange: (file: File) => void;
	loading?: boolean;
}

export const AvatarUpload = ({
	avatarUrl,
	onChange,
	loading = false,
}: AvatarUploadProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [previewUrl, setPreviewUrl] = useState<string | undefined>(avatarUrl);
	const [error, setError] = useState<string | null>(null);

	const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const result = avatarSchema.safeParse(file);
			if (!result.success) {
				setError(result.error.issues[0]?.message || 'Неверный файл');
				return;
			}

			setError(null);

			// Create preview URL
			const reader = new FileReader();
			reader.onloadend = () => {
				setPreviewUrl(reader.result as string);
			};
			reader.readAsDataURL(file);

			onChange(file);
		}
	};

	const handleClick = () => {
		inputRef.current?.click();
	};

	return (
		<div className='flex justify-center items-center flex-col'>
			<div className='relative'>
				<Avatar
					size={128}
					src={previewUrl}
					icon={<UserOutlined />}
					className='bg-theme-primary'
				>
					{previewUrl ? undefined : <UserOutlined />}
				</Avatar>
				<input
					type='file'
					ref={inputRef}
					accept='image/*'
					style={{ display: 'none' }}
					onChange={handleFileChange}
					disabled={loading}
				/>

				<div className='absolute bottom-0 right-0'>
					<Button
						type='default'
						icon={<EditOutlined />}
						shape='circle'
						size='middle'
						onClick={handleClick}
						disabled={loading}
						loading={loading}
					/>
				</div>
			</div>

			<div>{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}</div>
		</div>
	);
};
