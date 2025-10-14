import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production';

	return {
		plugins: [react(), tailwindcss()],
		base: isProduction ? '/' : '/',
		build: {
			outDir: 'dist',
		},
		server: {
			middlewareMode: false,
		},
	};
});
