
import type { PageServerLoad } from './$types';

import * as ts from 'typescript';


export const load = (async ({ fetch }) => {

    // const sourceFile = ts.createSourceFile(
    //     "file.ts",                  // filePath
    //     "function myFunction() {}", // fileText
    //     ts.ScriptTarget.Latest,     // scriptTarget
    //     true                        // setParentNodes -- sets the `parent` property
    // );

    // console.log('sourceFile:', sourceFile);

    // testAST();
    // getComments();
    testTypeAndComment();
    
	return {
        test: 'hi'
	};
}) satisfies PageServerLoad;


function testAST () {
    const sourceFile = ts.createSourceFile(
        "file.ts", // filePath
        "/** Define a variable. */ let x: number = 42;", // fileText
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
            getDirectories: () => [],
            fileExists: (fileName) => fileName === "file.ts",
            readFile: () => "",
            getCanonicalFileName: (fileName) => fileName,
            useCaseSensitiveFileNames: () => true,
            getNewLine: () => "\n",
        },
    });
    
    const typeChecker = program.getTypeChecker();
    
    // Find the variable declaration in the AST
    let variableDeclaration;
    ts.forEachChild(sourceFile, function findVariableDeclaration(node) {
        if (ts.isVariableDeclaration(node)) {
            variableDeclaration = node;
        } else {
            ts.forEachChild(node, findVariableDeclaration);
        }
    });
    
    // Get the type of the variable
    if (variableDeclaration) {
        const type = typeChecker.getTypeAtLocation(variableDeclaration);
        console.log(typeChecker.typeToString(type)); // "number"
    }
}

function getComments() {
    const sourceFile = ts.createSourceFile(
        "file.ts", // filePath
        "/** This is a number variable */\nlet x: number = 42;", // fileText
        ts.ScriptTarget.Latest, // scriptTarget
        true // setParentNodes -- sets the `parent` property
    );
    
    // Find the variable statement in the AST
    let variableStatement;
    ts.forEachChild(sourceFile, function findVariableStatement(node) {
        if (ts.isVariableStatement(node)) {
            variableStatement = node;
        } else {
            ts.forEachChild(node, findVariableStatement);
        }
    });
    
    // Get the comment for the variable
    if (variableStatement) {
        // console.log('variableStatement:', variableStatement);
        // console.log('variableStatement:', variableStatement.jsDoc[0].comment);
        const jsDocTags = ts.getJSDocTags(variableStatement);

        console.log('get jsdocs:', ts.getJSDocCommentsAndTags(variableStatement));

        console.log('jsDocTags:', jsDocTags);
        if (jsDocTags.length > 0) {
            const comment = jsDocTags[0].parent.comment;
            console.log(comment); // "This is a number variable"
        }
    }
}


function testTypeAndComment() {
    const sourceFile = ts.createSourceFile(
        "file.ts", // filePath
        `/**
     * This is a number variable
     */
    export let x: number = 42;
    /**
     * This is a number variable without explicit type.
     */
    export let life = 42;
    /**
     * Here's a better example.
     */
    export let options: Options;
    
    /**
     * This is a string variable
     */
    let y: string = "hello";
    /**
     * This is an exported variable
     */
    export let z: string = "world";`, // fileText
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
    const variableDeclarations: ts.Node[] = [];
    ts.forEachChild(sourceFile, function findVariableDeclarations(node) {
        if (ts.isVariableDeclaration(node)) {
            variableDeclarations.push(node);
        } else {
            ts.forEachChild(node, findVariableDeclarations);
        }
    });

    const typesAndComments: { name: string, type: string, comment: string, defaultValue?: string}[] = [];
    
    // Get the type and comment for each variable
    for (const variableDeclaration of variableDeclarations) {

        const variableName = variableDeclaration.name.getText();
        const isExported = !!(ts.getCombinedModifierFlags(variableDeclaration.parent.parent) & ts.ModifierFlags.Export);

        // console.log('isExported:', isExported);
        if (isExported) {
            const type = typeChecker.getTypeAtLocation(variableDeclaration);
    
            const comments = ts.getJSDocCommentsAndTags(variableDeclaration).map((node) => node.comment);

            const newVariable = { name: variableName, type: typeChecker.typeToString(type), comment: comments.join(' ') };

            let value: null | string;
            if (variableDeclaration.initializer) {
                value = variableDeclaration.initializer.getText();
                newVariable.defaultValue = value;
            }
    
            typesAndComments.push(newVariable);
        }
    }

    console.log(typesAndComments);
}