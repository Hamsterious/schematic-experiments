import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

import { createRule, generateVirtualTree } from '../helpers';
import { HelloWorldSchema } from './hello-world-schema';

/**
 * Creates a file saying "Hello <name>!" at specified path.
 * @param options Options provided from the command line.
 */
export const helloWorld = (options: HelloWorldSchema): Rule => {
  return (tree: Tree, context: SchematicContext) => {
    checkOptions(options);
    const virtualTree = generateVirtualTree(options);
    const helloWorldRule = createRule(virtualTree);
    return helloWorldRule(tree, context);
  };
}

/**
 * Checks options. 
 * - Throw errors on undefined required options.
 * - Sets defaults on optional options.
 * @param options Options provided from the command line.
 */
const checkOptions = (options: HelloWorldSchema) => {
  // Required
  if (!options.name) {
    throw new Error('Please provide flag: --name=<any-name>')
  }

  // Optional
  if (!options.path) {
    options.path = 'names'
  }
};