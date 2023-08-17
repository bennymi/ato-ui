import fs from 'fs-extra';
import fg from 'fast-glob';
import { default as ts } from 'typescript';

import type { ComponentFile } from './types';
import type { APIProp, Prop } from '../src/docs/data/types';
import { isComponent } from '../src/docs/data/components/index';


export function getComponentFileData() {
    const componentFiles = getComponentFiles();

    const allAPIs = getAllComponentAPIs(componentFiles);

    const dir = 'static/api/';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.writeJsonSync('static/api/component-apis.json', allAPIs, { spaces: 4 })
}

function hasIndexFile(files: string[], component: string) {
    return files.includes(`./src/lib/components/${component}/index.ts`);
}

function getComponentFiles(): ComponentFile[] {
    const globFiles = fg.globSync('./src/lib/components/**/*');

    const components: string[] = [];

    globFiles.forEach((file) => {
        const parts = file.split('/');

        if (parts.length !== 6) return;

        const component = parts[4];

        if (components.includes(component) || !(isComponent(component) && hasIndexFile(globFiles, component) )) return;

        components.push(component);
    });

    const componentFiles = components.map((item) => {
        const glob = fg.globSync(`./src/lib/components/${item}/*`);

        return {
            component: item,
            files: glob
        }
    });

    return componentFiles;
}

function getAllComponentAPIs(componentFiles: ComponentFile[]) {
    // getComponentAPIs(componentFiles[1].files);
    const allAPIs: Record<string, APIProp[] | null> = {};

    componentFiles.forEach((component) => {
        const apiProps = getComponentAPIs(component.files);

        allAPIs[component.component] = apiProps;
    });

    // console.log(JSON.stringify(allAPIs, null, 4));
    return allAPIs;
}

function getComponentAPIs(filePaths: ComponentFile['files']): APIProp[] | null {
    const indexFilePath = filePaths.find((file) => file.split('/').at(-1) === 'index.ts');

    if (!indexFilePath) return null;

    const indexFile = fs.readFileSync(indexFilePath, 'utf-8');

    const svelteFiles = filePaths.map((file) => ({
        path: file,
        type: file.split('/').at(-1)?.split('.').at(-1),
        file: file.split('/').at(-1)
    })).filter((file) => file.type === 'svelte');

    const apis: APIProp[] = [];

    svelteFiles.forEach((svelteFile) => {
        const re = new RegExp(`export { default as (.*) } from ["'].\/${svelteFile.file}["']`);

        const matches = indexFile.match(re);

        if (!matches) return;

        const alias = matches[1];

        const scriptContent = getFileScriptTagAsString(svelteFile.path);

        if (!scriptContent) return;

        const filePropDescriptions = getFilePropDescriptions(scriptContent);

        const api: APIProp = {
            component: alias,
            props: filePropDescriptions
        };

        apis.push(api);
    });

    return apis;
}

/**
 * Returns the content inside <script lang="ts">...</script> inside a Svelte file.
 * 
 * @param filePath Path to the svelte file.
 * @returns Script content.
 */
function getFileScriptTagAsString(filePath: string) {
    const file = fs.readFileSync(filePath, 'utf-8');

    const re = /<script[^>]*>([\s\S]*?)<\/script>/g;

    const scriptContent = [];
    let match;
    while ((match = re.exec(file)) !== null) {
        if (match[0].includes(`lang="ts"`)) {
            scriptContent.push(match[1]);
        }
    }

    return scriptContent.length === 1 ? scriptContent[0].trim() : '';
}

function getFilePropDescriptions(svelteScriptString: string) {
    // console.log(ts);
    const sourceFile = ts.createSourceFile(
        "file.ts", // filePath
        svelteScriptString, // fileText
        ts.ScriptTarget.Latest, // scriptTarget
        true // setParentNodes -- sets the `parent` property
    );
    
    const program = ts.createProgram({
        rootNames: ["file.ts"],
        options: {},
        host: {
            getSourceFile: (fileName) => fileName === "file.ts" ? sourceFile : undefined,
            getDefaultLibFileName: () => "lib.d.ts",
            writeFile: () => {},
            getCurrentDirectory: () => "",
            // getDirectories: () => [],
            fileExists: (fileName) => fileName === "file.ts",
            readFile: () => "",
            getCanonicalFileName: (fileName) => fileName,
            useCaseSensitiveFileNames: () => true,
            getNewLine: () => "\n",
        },
    });
    
    const typeChecker = program.getTypeChecker();
    
    // Find the variable declarations in the AST
    const variableDeclarations: ts.VariableDeclaration[] = [];
    ts.forEachChild(sourceFile, function findVariableDeclarations(node) {
        if (ts.isVariableDeclaration(node)) {
            variableDeclarations.push(node);
        } else {
            ts.forEachChild(node, findVariableDeclarations);
        }
    });

    const componentProps: Prop[] = [];
    
    // Get the type and comment for each variable
    for (const variableDeclaration of variableDeclarations) {

        const variableName = variableDeclaration.name.getText();
        const isExported = !!(ts.getCombinedModifierFlags(variableDeclaration.parent.parent) & ts.ModifierFlags.Export);

        // console.log('isExported:', isExported);
        if (isExported) {
            const typeNode = typeChecker.getTypeAtLocation(variableDeclaration);
            let typeText = variableDeclaration.type?.getText().trim() ?? '';

            const type = typeText === '' ? typeChecker.typeToString(typeNode) : typeText;
            
            const comments = ts.getJSDocCommentsAndTags(variableDeclaration).map((node) => node.comment);

            // const newVariable = { name: variableName, type: typeChecker.typeToString(type), description: comments.join(' ') };
            const newVariable: Prop = { name: variableName, type, description: comments.join(' ') };

            let value: null | string;
            if (variableDeclaration.initializer) {
                value = variableDeclaration.initializer.getText();
                newVariable.defaultValue = value;
            }
    
            componentProps.push(newVariable);
        }

    }

    return componentProps;

    // console.log(typesAndComments);
}