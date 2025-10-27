import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, Button } from 'antd';
import { profileSchema, type FormValues } from '../model/validation';

interface EditProfileFormProps {
	initialValues: FormValues;
	onSubmit: (values: FormValues) => void;
	onCancel: () => void;
	saveLoading?: boolean;
}

export const EditProfileForm = ({
	initialValues,
	onSubmit,
	onCancel,
	saveLoading = false,
}: EditProfileFormProps) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormValues>({
		resolver: zodResolver(profileSchema),
		defaultValues: initialValues,
		mode: 'onChange',
	});

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='space-y-4'>
				<div>
					<label className='block mb-1'>Биография</label>
					<Controller
						name='bio'
						control={control}
						render={({ field }) => (
							<Input.TextArea
								{...field}
								rows={4}
								status={errors.bio ? 'error' : ''}
							/>
						)}
					/>
					{errors.bio && (
						<div className='text-red-500 text-sm'>{errors.bio.message}</div>
					)}
				</div>

				<div>
					<label className='block mb-1'>Опыт</label>
					<Controller
						name='experience'
						control={control}
						render={({ field }) => (
							<Input.TextArea
								{...field}
								rows={4}
								status={errors.experience ? 'error' : ''}
							/>
						)}
					/>
					{errors.experience && (
						<div className='text-red-500 text-sm'>
							{errors.experience.message}
						</div>
					)}
				</div>

				<div>
					<label className='block mb-1'>Уровень</label>
					<Controller
						name='level'
						control={control}
						render={({ field }) => (
							<Input {...field} status={errors.level ? 'error' : ''} />
						)}
					/>
					{errors.level && (
						<div className='text-red-500 text-sm'>{errors.level.message}</div>
					)}
				</div>

				<div>
					<label className='block mb-1'>Предпочтения</label>
					<Controller
						name='preferences'
						control={control}
						render={({ field }) => (
							<Input.TextArea
								{...field}
								rows={4}
								status={errors.preferences ? 'error' : ''}
							/>
						)}
					/>
					{errors.preferences && (
						<div className='text-red-500 text-sm'>
							{errors.preferences.message}
						</div>
					)}
				</div>

				<div className='flex justify-end space-x-2 mt-4'>
					<Button onClick={onCancel}>Отмена</Button>
					<Button
						type='primary'
						htmlType='submit'
						disabled={!isValid || saveLoading}
						loading={saveLoading}
					>
						{saveLoading ? 'Сохранение...' : 'Сохранить'}
					</Button>
				</div>
			</div>
		</form>
	);
};
