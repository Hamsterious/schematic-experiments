# Angular schematics

## Commands
| Description |  Command |
|-|-|
| Install schematics command line |  `npm install -g @angular-devkit/schematics-cli` |
| Create blank schematics project | `schematics blank --name my-schematics`|
| Create example project | `schematics schematic --name my-schematics`|
| Build (required to test schematic) | `npm run build`|
| Build on change | `npm run build -- -w`|
| Run schematic in collection.json called my-component (build first!). Note this is a dry run. | `schematics .:my-component --name=test`|
| Run schematic in collection.json called my-component (build first!) | `schematics .:my-component --name=test --dry-run=false`|
| Get help | `schematics --help`|
| Debug schematic| `node --inspect-brk $(which schematics) .:myComponent --name=test (debug)`| 


## Possibilites
- Transform the existing filesystem.
- Scaffold files.
- Remove files.
- Modify code.

## Concepts

***Collection***
- Resides in the `collection.json` file.
- A map of names (strings) to schematics. 
- Example: @schematics/angular. Contains the schematics for
    + Component
    + Module
    + Application

***Tree***
- A series of files (the schematic should be applied to)
- Has meta data about the changes to be applied
- Default tree is the project root
- You can: Create empty trees, scope a tree, merge trees, branch them (copy them).
- Methods creating direct change: create, delete, rename, overwrite

***Source***
- A function that takes nothing and generates its source.

***Rule***
- Rule = function receiving and returning a tree
- Rules are composable.
- Schematic === Rule.
- RuleFactory: create rules
- Example rules (used) mergeWith() -> merge tree with inpunt.
- url('./path') get files from path.
- apply(source, [<LIST OF RULES>]): EXAMPLE
    apply(url(options.path), [
        move('/d/f')
    ])
+ chain([<LIST OF RULES>])


## Notes
- Schematics runs in debug by default, and thus does not apply changes.
- Do not call other Schematics as Rules directly. Use `externalSchematic()` and `schematic()`.
- Using external schematics requires you to fullfill their requirements as well (for example having a module to register a new component when creating a component via the angular schematics).
 
## Links
NPM package to create custom schematic projects

[@angular-devkit/schematics-cli](https://www.npmjs.com/package/@angular-devkit/schematics-cli)

---
NPM package with types needed for schematics. Is installed automatically when using the schematics cli. Note the page has the closest thing to a docs for schematics

[@angular-devkit/schematics](https://www.npmjs.com/package/@angular-devkit/schematics)

---
Official Angular post introducing Schematics. Contains useful commands and explain concepts.

[Schematics - An Introduction](https://blog.angular.io/schematics-an-introduction-dc1dfbc2a2b2)