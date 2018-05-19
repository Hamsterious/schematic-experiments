# How to create a schematic

## Step 0: Dev env setup
1. [Install VS Code](https://code.visualstudio.com/download)
2. [Install node.js](https://nodejs.org/en/download/)
3. Update npm to newest version
    - `$ npm i -g npm`
4. Install npm packages
    - `$ npm i -g @angular/cli`
    - `$ npm i -g @angular-devkit/schematics-cli`

## Step 1: Write the code
Have the code you want to generate/modify in an existing project.

```html
<h1>Hello world!</h1>
```

## Step 2: Generate the schematic
`$ schematics blank --name hello-world`

`$ cd hello-world`

`$ code .`

## Step 3: Setup schematic
Modidfy the created project so its src folder and its content matches the below descriptions.

```
Folder and files
---
src/
    hello-world/
        files/
            hello-world
        index.ts
        schema.json
        schema.ts
    collection.json
```


```json
collection.json
---
{
    "$schema": "./node_modules/@angular-devkit/schematics/collection-schema.json",
    "schematics": {
        "hello-world": {
            "aliases": [ "nm" ],
            "factory": "./hello-world/index#helloWorld",
            "schema": "./hello-world/schema.json",
            "description": "Generates a file that says hello",
        }
    }
}
```

```json
schema.json
---
{
    "$schema": "http://json-schema.org/schema",
    "id": "SchemanticsForMenu",
    "title": "Menu Schema",
    "type": "object",
    "properties": {
        "name": {
            "description": "Name of who to say hi to. Defaults to 'world!'",
            "type": "string",
            "$default": {
                    "$source": "argv",
                    "index": 0
            }
        },
        "path": {
            "description": "Where to create the file.",
            "type": "string",
            "format": "path"
        }
    }
}
```


```ts
schema.ts
---
export interface Schema {
    name: string;
    path: string;
}
```

```ts
index.ts
---

```


```html
hello-world
---

```