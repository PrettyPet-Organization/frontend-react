import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
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
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
			},
		},
		base: isProduction ? '/' : '/',
		build: {
			outDir: 'dist',
		},
		server: {
			middlewareMode: false,
		},
	};
});
