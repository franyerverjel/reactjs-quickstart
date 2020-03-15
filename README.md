# React JS - Professional base configuration

This is an example of a basic configuration for a professional project in React JS.

## Requirements

- Visual Studio Code
- Git
- Node JS

## Installation

- Install packages `npm install`.
- To start the development server, run `npm start` and open the url in the browser `http://localhost:8080/` to view the app.
- To generate production files, run `npm run build`.

### Visual Studio Code

Install the extension `Prettier - Code formatter`.

Add the following configuration to `.vscode/settings.json` file at the root of your project.

```json
{
  "git.ignoreLimitWarning": true,
  "editor.tabSize": 2,
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "prettier.arrowParens": "always"
}
```

## Credits

- Configuration taken from the Platzi course: [Curso Práctico de React JS](https://platzi.com/cursos/react-ejs/).
- Teacher **Oscar Barajas Tavares**.
