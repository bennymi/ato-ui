/**
 * Adapted from the gitpod-io repo: https://github.com/gitpod-io/website/blob/main/src/lib/utils/highlight.js
 *
 * Theme is from: https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
 *
 */

import { escapeSvelte } from 'mdsvex';
import shiki from 'shiki';

// 	// https://github.com/robb0wen/synthwave-vscode/blob/master/themes/synthwave-color-theme.json
// 	const t = await shiki.loadTheme(join(process.cwd(),'./theme-synthwave84.json'));

// 	const highlighter = await shiki.getHighlighter({
// 		theme: t
// 	});

const dark_highlighter = await shiki.getHighlighter({
	theme: 'github-dark',
	langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});

const light_highlighter = await shiki.getHighlighter({
	theme: 'github-light',
	langs: ['svelte', 'typescript', 'html', 'css', 'javascript', 'shell']
});

/**
 *
 * @param {string | undefined} code the code that gets parsed
 * @param {string | undefined} lang the language the code is written in
 */
export function get_highlighted_html(code, lang) {
	// console.log('get_html', dark_highlighter);
	return {
		dark_html: escapeSvelte(dark_highlighter.codeToHtml(code ?? '', { lang })),
		light_html: escapeSvelte(light_highlighter.codeToHtml(code ?? '', { lang }))
	};
}

/**
 *
 * @param {string} code the code that gets parsed
 * @param {string} lang the language the code is written in
 * @returns {string}
 */
export function handleExample(code, lang) {
	const tabs = code
		.split(new RegExp('<!-- (?:tab:(.*)) -->', 'g'))
		.map((v) => v.trim())
		.filter((v) => v);

	let args = '';
	let example = '';
	let example_code = '';

	if (tabs.length === 2) {
		[args, example] = tabs;

		const hasHeight = args.match(/h-(\d+)/g);

		const height = hasHeight ? `height="${hasHeight[0]}"` : '';

		const highlighted_html = get_highlighted_html(example, lang);
		const { dark_html, light_html } = highlighted_html;

		return `
		<Example ${height} darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
			light_html
		)}} rawCode={${JSON.stringify(code)}}>
			${example}
		</Example>
		`;
	}

	if (tabs.length === 4) {
		[args, example, , example_code] = tabs;

		const hasHeight = args.match(/h-(\d+)/g);

		const height = hasHeight ? `height="${hasHeight[0]}"` : '';

		const highlighted_html = get_highlighted_html(example_code, lang);
		const { dark_html, light_html } = highlighted_html;

		return `
		<Example ${height} darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
			light_html
		)}} rawCode={${JSON.stringify(code)}}>
			${example}
		</Example>
		`;

		// return `
		// <Usage ${height}>
		// 	${example}
		// </Usage>
		// <CodeBlock ${height} darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
		// 	light_html
		// )}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} />
		// `;
	}

	const highlighted_html = get_highlighted_html(code, lang);
	const { dark_html, light_html } = highlighted_html;

	return `<CodeBlock darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
		light_html
	)}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} />`;
}

/**
 *
 * @param {string | undefined} code the code that gets parsed
 * @param {string | undefined} lang the language the code is written in
 * @param {string | undefined} meta meta information for the code fence
 * @returns {Promise<string>}
 */
export async function highlightCode(code, lang, meta) {
	let title = null;
	let display = false;
	let showHeader = '';
	let showCode = false;
	let isExample = false;
	// let line_numbers = null;

	if (meta) {
		title = meta.match(/title="?(.*?)"/)?.[1];
		showHeader = meta.match(/showHeader="?(.*?)"/)?.[1];
		display = meta.includes('display');
		showCode = meta.includes('showCode');
		isExample = meta.includes('example');
		// line_numbers = meta.match(/lines="?(.*?)"/)?.[1];
	}

	if (isExample) {
		return handleExample(code, lang);
	}

	const highlighted_html = get_highlighted_html(code, lang);
	const { dark_html, light_html } = highlighted_html;

	return display
		? `<CodeDisplay>${code}</CodeDisplay>`
		: `<CodeBlock darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
				light_html
		  )}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} ${
				title ? `title={"${title}"}` : ''
		  } showHeader={${!(showHeader === 'false')}} showCode={${showCode}} />`;
}
