import { Rule, Tree } from '@angular-devkit/schematics';

export default function (options: any): Rule {
    return (tree: Tree) => {
        tree.create(options.path, options.text);
        return tree;
    };
}