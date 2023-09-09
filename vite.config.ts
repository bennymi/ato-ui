import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

import { readdirSync } from 'fs';
import { extname, join } from 'path';


function getAllConfigFiles(dir: string) {
	const files = readdirSync(dir);
	return files.filter((file) => extname(file) === '.ts').map((file) => join(dir, file));
}

export default defineConfig({
	plugins: [
		UnoCSS({
      		configFile: './unocss.config.ts',
			configDeps: getAllConfigFiles('./src/lib/preset/_rules')
		}),
		sveltekit()
	],
	// https://github.com/mswjs/msw/discussions/1440#discussioncomment-6124922
	// build: {
	// 	rollupOptions: {
	// 		plugins:
	// 	}
	// }
});