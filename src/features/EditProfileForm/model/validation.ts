import { z } from 'zod';

z.config(z.locales.ru());

export const profileSchema = z.object({
	bio: z.string().min(1),
	experience: z.string().min(1),
	level: z.string().min(1),
	preferences: z.string().min(1),
});

export type FormValues = z.infer<typeof profileSchema>;
