/**
 * Adopted from: https://github.com/unocss/unocss/blob/6a81c62a7603606b117cdc9c02447b8ec1bac4fc/interactive/scripts/prepare.ts#L14
 */

import fs from 'fs-extra';
import fg from 'fast-glob';

const dereference = process.platform === 'win32' ? true : undefined

const { copy, remove } = fs

await copy('node_modules/shiki/', 'static/shiki/', {
  dereference,
  filter: src => src === 'node_modules/shiki/' || src.includes('dist') || src.includes('languages') || src.includes('themes')
});

// await remove('static/shiki/languages')

// && (src.includes('css.tm') || src.includes('svelte.tm') || src.includes('typescript') || src.includes('html.tm') || src.includes('javascript.tm') || src.includes('shellscript.tm'))

const language_entries = fg.sync(['./static/shiki/languages/*.json'], { dot: false });
const theme_entries = fg.sync(['./static/shiki/themes/*.json'], { dot: false })

const langs = ['/svelte', '/typescript', '/html', '/css', '/javascript', '/shell'];

const themes = ['github-dark', 'github-light'];

language_entries.forEach(async (entry) => {
  const acceptable = langs.some((l) => entry.includes(l));
  if (!acceptable) {
    await remove(entry);
  }
});

theme_entries.forEach(async (entry) => {
  const acceptable = themes.some((l) => entry.includes(l));
  if (!acceptable) {
    await remove(entry);
  }
});