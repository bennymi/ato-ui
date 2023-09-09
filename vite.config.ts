import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';

import { readdirSync } from 'fs';
import { extname, join } from 'path';


// function getAllConfigFiles(dir: string) {
// 	const files = readdirSync(dir);
// 	return files.filter((file) => extname(file) === '.ts').map((file) => join(dir, file));
// }
function getAllConfigFiles(dirs: string[]) {
	const files: string[] = [];

	dirs.forEach((dir) => {
		const dirFiles = readdirSync(dir);
		files.push(...dirFiles.filter((file) => extname(file) === '.ts').map((file) => join(dir, file)));
	});

	return files;
}

export default defineConfig({
	plugins: [
		UnoCSS({
      		configFile: './unocss.config.ts',
			configDeps: getAllConfigFiles(['./src/lib/preset', './src/lib/preset/_rules', './src/lib/preset/_theme', './src/lib/preset/utils'])
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