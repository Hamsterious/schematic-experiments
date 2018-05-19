import { strings } from '@angular-devkit/core';
import { apply, branchAndMerge, chain, mergeWith, move, Rule, template, url, Tree, SchematicContext } from '@angular-devkit/schematics';

/**
 * Prepare values and functions to be made available inside templates.
 * Templates = files in the files folder.
 * @param options Options provided from the command line.
 */
export const createRule = (virtualTree: any): Rule => {
    // Creates a new rule that is a concatenation of other rules.
    return chain([
        // Everyone uses it, but no one explains what it does...
        branchAndMerge(
            chain([
                // Merges the project tree with the virtual tree.
                mergeWith(virtualTree)
            ])
        )
    ]);
};

/**
 * Prepare values and functions to be made available inside templates.
 * *Note*: Templates = files in the files folder.
 * @param options Options provided from the command line.
 */
export const generateTemplateVariables = (options: any) => {
    return {
        ...strings,
        ...options
    };
};

/**
 * Creates an virtual tree based on the templates in the files folder and the provided options.
 * @param options Options provided from the command line.
 * @param filesUrl url to the schematics files folder. Defaults to ./files
 */
export const generateVirtualTree = (options: any, filesUrl: string = './files') => {
    // Apply a list of rules to a source, and return the result.
    return apply(
        // Loads a list of files from a URL.
        // Returns a tree with the files.
        url(filesUrl),
        [
            // Processes the templates against the provided variables.
            // Returns a virtual tree.
            template(generateTemplateVariables(options)),
            // Moves the virtual tree to target location.
            move(options.path)
        ]
    );
};