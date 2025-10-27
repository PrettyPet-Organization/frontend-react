import { z } from 'zod';

z.config(z.locales.ru());

export const avatarSchema = z
	.file()
	.min(1)
	.max(2 * 1024 * 1024);
