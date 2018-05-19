import { strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';

import { Schema } from './schema';

export const helloWorld = (options: Schema): Rule => {
  // host, source, and tree are kinda synonymous.
  return (tree: Tree, context: SchematicContext) => {

    // Prepare values and functions to be made available inside templates.
    // Templates = files in the files folder.
    const templateVariables: any = {
      ...strings,
      ...options
    };

    const virtualTree =
      // Apply a list of rules to a source, and return the result.
      apply(
        // Loads a list of files from a URL.
        // Returns a tree with the files.
        url('./files'),
        [
          // Processes the templates against the provided variables.
          // Returns a virtual tree.
          template(templateVariables),
          // Moves the virtual tree to target location.
          move(options.path || '')
        ]
      );

    const rule = 
    // Creates a new rule that is a concatenation of other rules.
    chain([
      // Everyone uses it, but no one explains what it does...
      branchAndMerge(
        chain([
        // Merges the project tree with the virtual tree.
        mergeWith(virtualTree)
      ]))
    ]);

    return rule(tree, context);
  };
}
