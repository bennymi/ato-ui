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
 * @typedef MetaArgs
 * @type {Object}
 * @property {string} title
 * @property {string} height
 * @property {boolean} column
 * @property {boolean} showCode
 * @property {boolean} showHeader
 * @property {boolean} isExample
 */

/**
 *
 * @param {string | undefined} meta
 * @returns {MetaArgs}
 */
function getMetaArgs(meta) {
	let title = '';
	let height = '';
	let showCode = false;
	let showHeader = false;
	let isExample = false;
	let column = false;

	if (meta) {
		title = meta.match(/title="?(.*?)"/)?.[1] ?? '';
		height = meta.match(/height="?(.*?)"/)?.[1] ?? '';
		showCode = meta.includes('showCode');
		showHeader = meta.includes('showHeader');
		isExample = meta.includes('example');
		column = meta.includes('column');
	}

	return {
		title,
		height,
		column,
		showCode,
		showHeader,
		isExample
	};
}

/**
 *
 * @param {string | undefined} code the code that gets parsed
 * @param {string | undefined} lang the language the code is written in
 * @param {MetaArgs} meta_args the extra arguments passed to the highlight block
 * @returns {string}
 */
export function handleExample(code, lang, meta_args) {
	if (!code) return '';

	const tabs = code
		.split(new RegExp('<!-- (?:tab:(.*)) -->', 'g'))
		.map((v) => v.trim())
		.filter((v) => v);

	// let args = '';
	let example = '';
	let example_code = '';

	const { title, height } = meta_args;

	const container_height = height ? `height="${height}"` : '';

	if (tabs.length === 2) {
		[, example] = tabs;

		const highlighted_html = get_highlighted_html(example, lang);
		const { dark_html, light_html } = highlighted_html;

		return `
		<Example ${container_height} darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
			light_html
		)}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} ${title ? `title={"${title}"}` : ''}>
			${example}
		</Example>
		`;
	}

	if (tabs.length === 4) {
		[, example, , example_code] = tabs;

		const highlighted_html = get_highlighted_html(example_code, lang);
		const { dark_html, light_html } = highlighted_html;

		return `
		<Example ${container_height} darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
			light_html
		)}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} ${title ? `title={"${title}"}` : ''}>
			${example}
		</Example>
		`;
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
	const meta_args = getMetaArgs(meta);

	const { title, showCode, showHeader, isExample } = meta_args;

	if (isExample) {
		return handleExample(code, lang, meta_args);
	}

	const highlighted_html = get_highlighted_html(code, lang);
	const { dark_html, light_html } = highlighted_html;

	return `<CodeBlock darkCode={${JSON.stringify(dark_html)}} lightCode={${JSON.stringify(
		light_html
	)}} rawCode={${JSON.stringify(code)}} lang={"${lang}"} ${
		title ? `title={"${title}"}` : ''
	} showHeader={${showHeader}} showCode={${showCode}} />`;
}
