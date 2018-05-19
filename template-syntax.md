# Scheatic template syntax

## If else
```html
<% if (name) { %>
  <h1>Hello <%= name %>, I'm a schematic.</h1>
<% } else { %>
 <p> Why don't you give me your name with --name?</p>
<% } %>
```

## class/interface
```ts
export interface <%= classify(name) %> {
    name: string;
}

export class <%= classify(name) %> {
    name: string;
}
```