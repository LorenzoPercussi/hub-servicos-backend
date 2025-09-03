module.exports = {
  root: true,
  env: { node: true, es2023: true },
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["@typescript-eslint", "import"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".ts"] },
    },
  },
  rules: {
    // TS
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    // Imports
    "import/order": [
      "warn",
      {
        groups: [
          ["builtin", "external", "internal"],
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always",
      },
    ],
    // Você pode ligar depois se quiser resolver caminhos TS:
    // 'import/no-unresolved': 'off'
  },
  ignorePatterns: ["dist/", "node_modules/"],
};
