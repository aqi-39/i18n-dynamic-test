import { resolve } from 'path';
import { defineConfig } from 'vite';
import { createVuePlugin as vue2 } from 'vite-plugin-vue2';

export default defineConfig({
	plugins: [vue2()],
	base: './',
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: 'dist/5000',
		assetsDir: '',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('pkg.json')) {
						return 'pkg'
					}
				}
			}
		}
	}
});
