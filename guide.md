# How to create a schematic

## Step 0: Setup dev env
1. [Install VS Code](https://code.visualstudio.com/download)
2. [Install node.js](https://nodejs.org/en/download/)
3. Update npm to newest version
    - `$ npm i -g npm`
4. Install npm packages
    - `$ npm i -g @angular/cli`
    - `$ npm i -g @angular-devkit/schematics-cli`

## Step 1: Write code
Write an example of the code code you want to generate/modify in an existing project. Remember to write code for if/else cases as well.

## Step 2: Generate schematic
`$ schematics blank --name hello-world`

`$ cd hello-world`

`$ code .`

## Step 3: Setup schematic
See collection.json and the hello-world folder for how to set an example schematic.