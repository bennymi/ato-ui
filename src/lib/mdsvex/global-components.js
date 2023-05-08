/**
 *  Credit goes to @Xananax: https://gist.github.com/Xananax/5dca3a1dd7070e4fdebe2927e4aeb55b
 */

import { join, basename, extname } from "path";

export const defaults = {
  extensions: [".svelte.md", ".md", ".svx"],
  dir: `$lib`,
  list: [],
};

/**
 * Injects global imports in all your mdsvex files
 * Specify:
 * - the root dir (defaults to `src/lib`)
 * - the array list of components (with extension), like `['Component.svelte']`
 * - the valid extensions list as an array (defaults to `['.svelte.md', '.md', '.svx']`)
 *
 * If you want the component name to be different from the file name, you can specify an array
 * of arrays: `['Component.svelte', ['Another', 'AnotherComp.svelte'], 'ThirdComp.svelte']`
 *
 * @param {Object} options options described above
 * @returns a preprocessor suitable to plug into the `preprocess` key of the svelte config
 */
export const mdsvexGlobalComponents = (options = {}) => {
  const { extensions, dir, list } = { ...defaults, ...options };
  const extensionsRegex = new RegExp(
    `(${  extensions.join("|").replace(/\./g, "\\.")  })$`,
    "i"
  );

  if (!list || !list.length || !Array.isArray(list)) {
    throw new Error(
      `"list" option must be an array and contain at least one element`
    );
  }

  const imports = list
    // .map((entry: string[]) => {
    .map((entry) => {
      let name = '';
      let new_entry = '';
      if (Array.isArray(entry)) {
        [name, new_entry] = entry;
      }

      const ext = extname(new_entry);
      const path = join(dir, new_entry).replace(/\\/g, '/');
      name = name || basename(new_entry, ext);

      return `\nimport ${name} from "${path}"`;
    })
    .join("\n");

  const preprocessor = {
    // script(thing: any) {
    script(thing) {
      const { content, filename, attributes, markup } = thing;
      if (!filename.match(extensionsRegex)) {
        return { code: content };
      }
      const hasModuleContext = /^<script context="module">/.test(markup);

      const isModulePass = attributes?.context === "module";
      if (!isModulePass || !hasModuleContext) {
        return { code: content };
      }
      const isValidPass =
        (hasModuleContext && isModulePass) || !hasModuleContext;
      if (!isValidPass) {
        return { code: content };
      }

      return { code: `${imports}\n${content}` };
    },
  };

  return preprocessor;
};
