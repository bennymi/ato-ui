import { ComponentParser } from 'sveld';
import sveltePreprocess from 'svelte-preprocess';
import { preprocess } from 'svelte/compiler';
import qs from 'query-string';

/**
 *  Instead of import sveld from 'vite-plugin-sveld';
 *  we are just copy/pasting the file here since the library isn't up to date.
 *  */ 
export function sveld() {
	return {
		name: 'vite-plugin-sveld',
		async transform(src, id) {
			const query = qs.parse(id.split('?')[1])

			if ('raw' in query && 'sveld' in query) {
				const raw = JSON.parse(src.split('export default ')[1])
				// console.log('raw:', raw);

				let { code } = await preprocess(raw, sveltePreprocess(), {
					filename: id
				})
				const data = new ComponentParser({
					verbose: false
				}).parseSvelteComponent(code, {
					filePath: id,
					moduleName: id
				})
				
				return {
					code: `export default ${JSON.stringify(data)}`,
					map: null
				}
			}
		}
	}
}
