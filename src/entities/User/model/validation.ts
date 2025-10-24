import { z } from 'zod';

z.config(z.locales.ru());

// // Common validation messages
// const validationMessages = {
// 	required: 'Обязательное поле',
// 	invalidFormat: 'Неверный формат',
// 	fileTooLarge: 'Файл слишком большой (макс. 2MB)',
// 	mustBeImage: 'Пожалуйста, выберите изображение',
// };

export const profileSchema = z.object({
	bio: z.string().min(1),
	experience: z.string().min(1),
	level: z.string().min(1),
	preferences: z.string().min(1),
});

export type FormValues = z.infer<typeof profileSchema>;

export const avatarSchema = z
	.file()
	.min(1)
	.max(2 * 1024 * 1024);
