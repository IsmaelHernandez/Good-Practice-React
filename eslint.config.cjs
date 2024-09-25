const globals = require('globals'); // Usa require para CommonJS
const eslintPluginReact = require('eslint-plugin-react'); // Usa require para CommonJS

const { node: nodeGlobals } = globals; // Destructura las propiedades necesarias

module.exports = [
  {
    languageOptions: {
      globals: {
        ...nodeGlobals, // Usa las variables globales de Node.js
      },
    },
    ignores: [
      ".gitignore",
      "*/node_modules/",
      "*/dist/",
      "*/build/",
      "*/coverage/",
      "*/vendor/",
    ],
    plugins: {
      react: eslintPluginReact, // Plugin de React
    },
    rules: {
      "no-console": "warn", 
      "no-debugger": "warn", 
      "no-multi-spaces": "error",
      indent: ["error", 2], 
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "max-len": "off",
      "react/jsx-uses-react": "off", 
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-vars": "warn", 
    },
  },
];
