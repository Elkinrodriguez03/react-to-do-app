module.exports = {
    env: {
      browser: true,
      jest: true,
      node: true,
    },
    extends: [
      "react-app",
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:react/recommended",
      "prettier",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2020,
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react"],

};