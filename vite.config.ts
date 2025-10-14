import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';

	return {
		plugins: [
			react({
				babel: {
					plugins: [['babel-plugin-react-compiler']],
				},
			}),
			tailwindcss(),
		],
		base: isProduction ? '/' : '/',
		build: {
			outDir: 'dist',
		},
		server: {
			middlewareMode: false,
		},
	};
});
