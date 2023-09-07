// @ts-nocheck
import MagicString from 'magic-string';

/**
 * @typedef GlobalComponents
 * @type {Object}
 * @property {string} name The name of the component. Example: 'CodeBlock'.
 * @property {string} location The location from which to import the component. Example: '$lib/components/CodeBlock.svelte'.
 * @property {Array.<string>} importPaths The paths in which the component should be imported. Example: ['src/routes/docs/'].
 */


// https://github.com/threlte/threlte/blob/main/packages/preprocess/src/index.ts
// https://astexplorer.net/
// https://github.com/Rich-Harris/magic-string
// https://github.com/yuanchuan/sveltekit-autoimport/blob/main/src/index.js
// https://github.com/srmullen/svelte-reactive-css-preprocess/blob/main/src/index.js
// https://svelte.dev/docs/svelte-compiler#preprocess

/**
 * @param {Object} globalOptions
 * @param {Array.<GlobalComponents>} globalOptions.components Set the global components.
 * @returns {import('svelte/types/compiler/preprocess').PreprocessorGroup}
 */
const svelteGlobalComponents = (globalOptions) => ({
    markup(options) {
        const { content, filename } = options;
        const { components } = globalOptions;

        let code = '';

        const relevant = components.filter((item) => item.importPaths.some((p) => filename?.includes(p)));

        if (filename?.includes('.md') && relevant.length > 0) {
            let contextModule = '<script context="module">';

            const hasModuleContext = content.indexOf(contextModule);

            if (hasModuleContext === -1) {
                code = `${contextModule}\n`;

                relevant.forEach((item) => code += `\timport ${item.name} from '${item.location}';\n`);

                code += `</script>\n${content}`;
            } else {
                const s = new MagicString(content);
                const idx = content.indexOf(contextModule);

                
                const imports = relevant.reduce((previous, item) => `${previous}\n\timport ${item.name} from '${item.location}';`, '');

                s.prependRight(idx + contextModule.length, imports);

                code = s.toString();
            }
        } else {
            code = content;
        }

        return {
            code
        }
    },
});

export default svelteGlobalComponents;